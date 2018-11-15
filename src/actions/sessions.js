import database from '../firebase/firebase';
import { rejects } from 'assert';

const generateAccessCode = () => {
    var code = "";
    var possible = "afghijkloqrsuwxy23456789";
  
    for(var i=0; i < 6; i++){
        code += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return code;
}

export const addPlayer = (userId) => {
    return {
        type: 'NEW_PLAYER',
        userId
    }
};

export const startAddPlayer = (databaseCode,name) => {
    return (dispatch) => {
        return database.ref(`sessions/${databaseCode}/users`).push(name).then((ref) => {
            dispatch(addPlayer(ref.key))
        })
    }
}

export const createSession = (accessCode,databaseCode) => {
    return {
        type: 'CREATE_SESSION',
        accessCode,
        databaseCode
    }
};

export const startCreateSession = (name,rounds) => {
    return (dispatch) => {
        const accessCode = generateAccessCode();
        return database.ref('sessions').push({accessCode, rounds}).then((ref) => {
            dispatch(createSession(accessCode,ref.key));
            dispatch(startAddPlayer(ref.key,name))
        })
    }
};

export const joinSession = (accessCode,databaseCode) => {
    return {
        type: 'JOIN_SESSION',
        accessCode,
        databaseCode
    }
};

export const startJoinSession = (name,accessCode) => {
    return (dispatch) => {
        return database.ref('sessions').once('value').then((snapshot) => {
            let databaseCode = '';
            snapshot.forEach((childSnapshot) => {
                console.log(childSnapshot)
                const currCode = childSnapshot.val().accessCode;
                if (currCode === accessCode) {
                    databaseCode = childSnapshot.key;
                    return;
                }
            })
            return databaseCode;
        }).then((databaseCode) => {
            if (databaseCode) {
                dispatch(joinSession(accessCode,databaseCode));
                dispatch(startAddPlayer(databaseCode,name))
            } else {
                throw new PermissionDenied();
            }
        })
    }
};

export const leaveSession = () => {
    return {
        type: 'LEAVE_SESSION'
    }
};

export const startLeaveSession = (databaseCode,userId) => {
    return (dispatch) => {
        return database.ref(`sessions/${databaseCode}/users/${userId}`).remove().then(() => {
            database.ref(`sessions/${databaseCode}/users`).off()
            dispatch(leaveSession());
        })
    }
};