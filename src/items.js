const items = [
    {category:'anatomy', name:'ankle'},
{category:'anatomy', name:'arm'},
{category:'anatomy', name:'armpit'},
{category:'anatomy', name:'back'},
{category:'anatomy', name:'beard'},
{category:'anatomy', name:'blood'},
{category:'anatomy', name:'body'},
{category:'anatomy', name:'bone'},
{category:'anatomy', name:'brain'},
{category:'anatomy', name:'buttock'},
{category:'anatomy', name:'cheek'},
{category:'anatomy', name:'chest'},
{category:'anatomy', name:'chin'},
{category:'anatomy', name:'crotch'},
{category:'anatomy', name:'dimples'},
{category:'anatomy', name:'ear'},
{category:'anatomy', name:'elbow'},
{category:'anatomy', name:'eye'},
{category:'anatomy', name:'eyebrow'},
{category:'anatomy', name:'feet'},
{category:'anatomy', name:'finger'},
{category:'anatomy', name:'flesh'},
{category:'anatomy', name:'foot'},
{category:'anatomy', name:'forehead'},
{category:'anatomy', name:'hair'},
{category:'anatomy', name:'hand'},
{category:'anatomy', name:'head'},
{category:'anatomy', name:'heart'},
{category:'anatomy', name:'hip'},
{category:'anatomy', name:'kidney'},
{category:'anatomy', name:'knee'},
{category:'anatomy', name:'knuckle'},
{category:'anatomy', name:'leg'},
{category:'anatomy', name:'lip'},
{category:'anatomy', name:'moustache'},
{category:'anatomy', name:'mouth'},
{category:'anatomy', name:'muscle'},
{category:'anatomy', name:'mustache'},
{category:'anatomy', name:'nail'},
{category:'anatomy', name:'neck'},
{category:'anatomy', name:'nipple'},
{category:'anatomy', name:'nose'},
{category:'anatomy', name:'nostril'},
{category:'anatomy', name:'shoulder'},
{category:'anatomy', name:'shoulder'},
{category:'anatomy', name:'sideburn'},
{category:'anatomy', name:'skeleton'},
{category:'anatomy', name:'skin'},
{category:'anatomy', name:'spine'},
{category:'anatomy', name:'stomach'},
{category:'anatomy', name:'teeth'},
{category:'anatomy', name:'thigh'},
{category:'anatomy', name:'throat'},
{category:'anatomy', name:'thumb'},
{category:'anatomy', name:'toe'},
{category:'anatomy', name:'toenail'},
{category:'anatomy', name:'tongue'},
{category:'anatomy', name:'tooth'},
{category:'anatomy', name:'waist'},
{category:'anatomy', name:'wrist'},
{category:'animal', name:'aardvark'},
{category:'animal', name:'ant'},
{category:'animal', name:'anteater'},
{category:'animal', name:'armadillo'},
{category:'animal', name:'baboon'},
{category:'animal', name:'badger'},
{category:'animal', name:'bear'},
{category:'animal', name:'beaver'},
{category:'animal', name:'bee'},
{category:'animal', name:'bird'},
{category:'animal', name:'bull'},
{category:'animal', name:'calf'},
{category:'animal', name:'camel'},
{category:'animal', name:'cat'},
{category:'animal', name:'cheetah'},
{category:'animal', name:'chicken'},
{category:'animal', name:'chimpanzee'},
{category:'animal', name:'cow'},
{category:'animal', name:'crocodile'},
{category:'animal', name:'deer'},
{category:'animal', name:'dinosaur'},
{category:'animal', name:'dog'},
{category:'animal', name:'dolphin'},
{category:'animal', name:'donkey'},
{category:'animal', name:'duck'},
{category:'animal', name:'eagle'},
{category:'animal', name:'elephant'},
{category:'animal', name:'fish'},
{category:'animal', name:'flamingo'},
{category:'animal', name:'fly'},
{category:'animal', name:'fox'},
{category:'animal', name:'frog'},
{category:'animal', name:'giraffe'},
{category:'animal', name:'goat'},
{category:'animal', name:'goldfish'},
{category:'animal', name:'gorilla'},
{category:'animal', name:'hamster'},
{category:'animal', name:'hippopotamus'},
{category:'animal', name:'horse'},
{category:'animal', name:'hyena'},
{category:'animal', name:'jaguar'},
{category:'animal', name:'kangaroo'},
{category:'animal', name:'kitten'},
{category:'animal', name:'ladybug'},
{category:'animal', name:'leopard'},
{category:'animal', name:'lion'},
{category:'animal', name:'lizard'},
{category:'animal', name:'llama'},
{category:'animal', name:'lobster'},
{category:'animal', name:'mammoth'},
{category:'animal', name:'monkey'},
{category:'animal', name:'mosquito'},
{category:'animal', name:'narwhal'},
{category:'animal', name:'octopus'},
{category:'animal', name:'ostrich'},
{category:'animal', name:'otter'},
{category:'animal', name:'owl'},
{category:'animal', name:'oyster'},
{category:'animal', name:'panda'},
{category:'animal', name:'panther'},
{category:'animal', name:'parrot'},
{category:'animal', name:'peacock'},
{category:'animal', name:'pelican'},
{category:'animal', name:'penguin'},
{category:'animal', name:'pig'},
{category:'animal', name:'pigeon'},
{category:'animal', name:'pitbull'},
{category:'animal', name:'porcupine'},
{category:'animal', name:'puppy'},
{category:'animal', name:'rabbit'},
{category:'animal', name:'raccoon'},
{category:'animal', name:'rat'},
{category:'animal', name:'reindeer'},
{category:'animal', name:'rhinoceros'},
{category:'animal', name:'rooster'},
{category:'animal', name:'scorpion'},
{category:'animal', name:'seagull'},
{category:'animal', name:'seahorse'},
{category:'animal', name:'seal'},
{category:'animal', name:'shark'},
{category:'animal', name:'sheep'},
{category:'animal', name:'shrimp'},
{category:'animal', name:'snail'},
{category:'animal', name:'snake'},
{category:'animal', name:'spider'},
{category:'animal', name:'squid'},
{category:'animal', name:'squirrel'},
{category:'animal', name:'starfish'},
{category:'animal', name:'swan'},
{category:'animal', name:'tadpole'},
{category:'animal', name:'tiger'},
{category:'animal', name:'toad'},
{category:'animal', name:'tropical fish'},
{category:'animal', name:'turkey'},
{category:'animal', name:'turtle'},
{category:'animal', name:'vulture'},
{category:'animal', name:'walrus'},
{category:'animal', name:'whale'},
{category:'animal', name:'wolf'},
{category:'animal', name:'zebra'},
{category:'building', name:'airport'},
{category:'building', name:'apartment building'},
{category:'building', name:'bank'},
{category:'building', name:'barber shop'},
{category:'building', name:'book store'},
{category:'building', name:'bowling alley'},
{category:'building', name:'bus stop'},
{category:'building', name:'casino'},
{category:'building', name:'castle'},
{category:'building', name:'church'},
{category:'building', name:'church'},
{category:'building', name:'circus'},
{category:'building', name:'convenience store'},
{category:'building', name:'department store'},
{category:'building', name:'fire department'},
{category:'building', name:'gas station'},
{category:'building', name:'hospital'},
{category:'building', name:'house'},
{category:'building', name:'library'},
{category:'building', name:'library'},
{category:'building', name:'mall'},
{category:'building', name:'mansion'},
{category:'building', name:'movie theater'},
{category:'building', name:'museum'},
{category:'building', name:'office building'},
{category:'building', name:'petshop'},
{category:'building', name:'post office'},
{category:'building', name:'restaurant'},
{category:'building', name:'school'},
{category:'building', name:'supermarket'},
{category:'building', name:'theater'},
{category:'building', name:'train station'},
{category:'clothing', name:'bandana'},
{category:'clothing', name:'belt'},
{category:'clothing', name:'bikini'},
{category:'clothing', name:'boots'},
{category:'clothing', name:'bowtie'},
{category:'clothing', name:'cap'},
{category:'clothing', name:'coat'},
{category:'clothing', name:'dress'},
{category:'clothing', name:'earmuffs'},
{category:'clothing', name:'eyepatch'},
{category:'clothing', name:'glasses'},
{category:'clothing', name:'gloves'},
{category:'clothing', name:'hairtie'},
{category:'clothing', name:'hat'},
{category:'clothing', name:'headband'},
{category:'clothing', name:'jacket'},
{category:'clothing', name:'jeans'},
{category:'clothing', name:'kneepads'},
{category:'clothing', name:'mittens'},
{category:'clothing', name:'necklace'},
{category:'clothing', name:'overalls'},
{category:'clothing', name:'pajamas'},
{category:'clothing', name:'partyhat'},
{category:'clothing', name:'raincoat'},
{category:'clothing', name:'sandals'},
{category:'clothing', name:'scarf'},
{category:'clothing', name:'shirt'},
{category:'clothing', name:'shoes'},
{category:'clothing', name:'skirt'},
{category:'clothing', name:'slippers'},
{category:'clothing', name:'sneakers'},
{category:'clothing', name:'socks'},
{category:'clothing', name:'sombrero'},
{category:'clothing', name:'stockings'},
{category:'clothing', name:'suit'},
{category:'clothing', name:'sweater'},
{category:'clothing', name:'sweatshirt'},
{category:'clothing', name:'swimsuit'},
{category:'clothing', name:'t-shirt'},
{category:'clothing', name:'tie'},
{category:'clothing', name:'trousers'},
{category:'clothing', name:'trousers'},
{category:'clothing', name:'underpants'},
{category:'country', name:'africa'},
{category:'country', name:'america'},
{category:'country', name:'bahamas'},
{category:'country', name:'brazil'},
{category:'country', name:'canada'},
{category:'country', name:'china'},
{category:'country', name:'Egypt'},
{category:'country', name:'england'},
{category:'country', name:'finland'},
{category:'country', name:'france'},
{category:'country', name:'germany'},
{category:'country', name:'Greece'},
{category:'country', name:'hawaii'},
{category:'country', name:'holland'},
{category:'country', name:'India'},
{category:'country', name:'Iran'},
{category:'country', name:'ireland'},
{category:'country', name:'Israel'},
{category:'country', name:'Italy'},
{category:'country', name:'jamaica'},
{category:'country', name:'Japan'},
{category:'country', name:'Mexico'},
{category:'country', name:'Morocco'},
{category:'country', name:'North Korea'},
{category:'country', name:'Pakistan'},
{category:'country', name:'Russia'},
{category:'country', name:'Saudi Arabia'},
{category:'country', name:'scotland'},
{category:'country', name:'South Korea'},
{category:'country', name:'Spain'},
{category:'country', name:'Syria'},
{category:'country', name:'Taiwan'},
{category:'country', name:'Thailand'},
{category:'country', name:'Turkey'},
{category:'country', name:'Vietnam'},
{category:'family', name:'aunt'},
{category:'family', name:'brother'},
{category:'family', name:'children'},
{category:'family', name:'cousin'},
{category:'family', name:'daughter'},
{category:'family', name:'father'},
{category:'family', name:'granddaughter'},
{category:'family', name:'grandma'},
{category:'family', name:'grandmother'},
{category:'family', name:'grandpa'},
{category:'family', name:'grandson'},
{category:'family', name:'husband'},
{category:'family', name:'mother'},
{category:'family', name:'nephew'},
{category:'family', name:'niece'},
{category:'family', name:'parents'},
{category:'family', name:'sister'},
{category:'family', name:'son'},
{category:'family', name:'stepdaughter'},
{category:'family', name:'stepmother'},
{category:'family', name:'stepson'},
{category:'family', name:'uncle'},
{category:'food', name:'apple'},
{category:'food', name:'asparagus'},
{category:'food', name:'avocado'},
{category:'food', name:'baguette'},
{category:'food', name:'banana'},
{category:'food', name:'barbeque'},
{category:'food', name:'beans'},
{category:'food', name:'broccoli'},
{category:'food', name:'brownie'},
{category:'food', name:'burger'},
{category:'food', name:'burrito'},
{category:'food', name:'cabbage'},
{category:'food', name:'carrot'},
{category:'food', name:'celery'},
{category:'food', name:'cereal'},
{category:'food', name:'cheese'},
{category:'food', name:'cherry'},
{category:'food', name:'coconut'},
{category:'food', name:'coffee'},
{category:'food', name:'cookie'},
{category:'food', name:'corn'},
{category:'food', name:'cucumber'},
{category:'food', name:'cupcake'},
{category:'food', name:'dinner'},
{category:'food', name:'doritos'},
{category:'food', name:'eggplant'},
{category:'food', name:'espresso'},
{category:'food', name:'fastfood'},
{category:'food', name:'frosting'},
{category:'food', name:'grapefruit'},
{category:'food', name:'grapes'},
{category:'food', name:'hotdog'},
{category:'food', name:'hotsauce'},
{category:'food', name:'icepop'},
{category:'food', name:'ketchup'},
{category:'food', name:'lemon'},
{category:'food', name:'lettuce'},
{category:'food', name:'lollipop'},
{category:'food', name:'macaroni'},
{category:'food', name:'meatball'},
{category:'food', name:'melon'},
{category:'food', name:'muffin'},
{category:'food', name:'mushroom'},
{category:'food', name:'mustard'},
{category:'food', name:'noodles'},
{category:'food', name:'omelet'},
{category:'food', name:'onion'},
{category:'food', name:'orange'},
{category:'food', name:'pancakes'},
{category:'food', name:'peach'},
{category:'food', name:'peanu'},
{category:'food', name:'pear'},
{category:'food', name:'peas'},
{category:'food', name:'pepper'},
{category:'food', name:'pickle'},
{category:'food', name:'pineapple'},
{category:'food', name:'plum'},
{category:'food', name:'popcorn'},
{category:'food', name:'popsicle'},
{category:'food', name:'potato'},
{category:'food', name:'pretzel'},
{category:'food', name:'pumpkin'},
{category:'food', name:'radish'},
{category:'food', name:'sandwich'},
{category:'food', name:'sausage'},
{category:'food', name:'seafood'},
{category:'food', name:'skittles'},
{category:'food', name:'snowcone'},
{category:'food', name:'soysauce'},
{category:'food', name:'spinach'},
{category:'food', name:'strawberry'},
{category:'food', name:'tomato'},
{category:'food', name:'turnip'},
{category:'food', name:'watermelon'},
{category:'instrument', name:'accordion'},
{category:'instrument', name:'agogo bells'},
{category:'instrument', name:'bagpipes'},
{category:'instrument', name:'banjo'},
{category:'instrument', name:'baritone'},
{category:'instrument', name:'bass drum'},
{category:'instrument', name:'bassoon'},
{category:'instrument', name:'bell lyre'},
{category:'instrument', name:'bongos'},
{category:'instrument', name:'bugle'},
{category:'instrument', name:'castanets'},
{category:'instrument', name:'celeste'},
{category:'instrument', name:'cello'},
{category:'instrument', name:'chimes'},
{category:'instrument', name:'clarinet'},
{category:'instrument', name:'claves'},
{category:'instrument', name:'conga'},
{category:'instrument', name:',cornet'},
{category:'instrument', name:'cowbell'},
{category:'instrument', name:'crash cymbal'},
{category:'instrument', name:'cymbal'},
{category:'instrument', name:'drum'},
{category:'instrument', name:'drum set'},
{category:'instrument', name:'electric guitar'},
{category:'instrument', name:'euphonium'},
{category:'instrument', name:'flugelhorn'},
{category:'instrument', name:'flute'},
{category:'instrument', name:'French horn'},
{category:'instrument', name:'glockenspiel'},
{category:'instrument', name:'gong'},
{category:'instrument', name:'grand piano'},
{category:'instrument', name:'guitar'},
{category:'instrument', name:'harmonica'},
{category:'instrument', name:'harp'},
{category:'instrument', name:'kettledrum'},
{category:'instrument', name:'lute'},
{category:'instrument', name:'mandolin'},
{category:'instrument', name:'maracas'},
{category:'instrument', name:'marimba'},
{category:'instrument', name:'oboe'},
{category:'instrument', name:'orchestra bells'},
{category:'instrument', name:'piano'},
{category:'instrument', name:'piccolo'},
{category:'instrument', name:'recorder'},
{category:'instrument', name:'ride cymbal'},
{category:'instrument', name:'saxophone'},
{category:'instrument', name:'scraper'},
{category:'instrument', name:'sizzle cymbal'},
{category:'instrument', name:'snare drum'},
{category:'instrument', name:'sousaphone'},
{category:'instrument', name:'splash cymbal'},
{category:'instrument', name:'steel drums'},
{category:'instrument', name:'tenor drum'},
{category:'instrument', name:'timbales'},
{category:'instrument', name:'timpani'},
{category:'instrument', name:'tom-tom'},
{category:'instrument', name:'triangle'},
{category:'instrument', name:'trombone'},
{category:'instrument', name:'trumpet'},
{category:'instrument', name:'tuba'},
{category:'instrument', name:'ukulele'},
{category:'instrument', name:'vibraphone'},
{category:'instrument', name:'violin'},
{category:'instrument', name:'xylophone'},
{category:'mythology', name:'atlantis'},
{category:'mythology', name:'bigfoot'},
{category:'mythology', name:'centaur'},
{category:'mythology', name:'cyclops'},
{category:'mythology', name:'dragon'},
{category:'mythology', name:'goddess'},
{category:'Category', name:'Topic'},
{category:'mythology', name:'hercules'},
{category:'mythology', name:'jupiter'},
{category:'mythology', name:'mermaid'},
{category:'mythology', name:'minotaur'},
{category:'mythology', name:'monster'},
{category:'mythology', name:'neptune'},
{category:'mythology', name:'pegasus'},
{category:'mythology', name:'phoenix'},
{category:'mythology', name:'poseidon'},
{category:'mythology', name:'unicorn'},
{category:'mythology', name:'vampire'},
{category:'mythology', name:'werewolf'},
{category:'pop culture', name:'aladdin'},
{category:'pop culture', name:'aquaman'},
{category:'pop culture', name:'asterix'},
{category:'pop culture', name:'autobots'},
{category:'pop culture', name:'avatar'},
{category:'pop culture', name:'avengers'},
{category:'pop culture', name:'barbie'},
{category:'pop culture', name:'batman'},
{category:'pop culture', name:'beavis'},
{category:'pop culture', name:'bowser'},
{category:'pop culture', name:'catwoman'},
{category:'pop culture', name:'garfield'},
{category:'pop culture', name:'haymitch'},
{category:'pop culture', name:'ironchef'},
{category:'pop culture', name:'ironman'},
{category:'pop culture', name:'katniss'},
{category:'pop culture', name:'lionking'},
{category:'pop culture', name:'madonna'},
{category:'pop culture', name:'metroid'},
{category:'pop culture', name:'pikachu'},
{category:'pop culture', name:'riddler'},
{category:'pop culture', name:'rugrats'},
{category:'pop culture', name:'splinter'},
{category:'pop culture', name:'startrek'},
{category:'pop culture', name:'starwars'},
{category:'pop culture', name:'thelorax'},
{category:'pop culture', name:'twilight'},
{category:'pop culture', name:'twoface'},
{category:'pop culture', name:'warcraft'},
{category:'profession', name:'accountant'},
{category:'profession', name:'actor'},
{category:'profession', name:'artist'},
{category:'profession', name:'athlete'},
{category:'profession', name:'author'},
{category:'profession', name:'baker'},
{category:'profession', name:'banker'},
{category:'profession', name:'barber'},
{category:'profession', name:'beautician'},
{category:'profession', name:'butcher'},
{category:'profession', name:'captain'},
{category:'profession', name:'carpenter'},
{category:'profession', name:'cashier'},
{category:'profession', name:'chauffeur'},
{category:'profession', name:'chef'},
{category:'profession', name:'coach'},
{category:'profession', name:'cowboy'},
{category:'profession', name:'criminal'},
{category:'profession', name:'dentist'},
{category:'profession', name:'director'},
{category:'profession', name:'doctor'},
{category:'profession', name:'drummer'},
{category:'profession', name:'engineer'},
{category:'profession', name:'farmer'},
{category:'profession', name:'fire fighter'},
{category:'profession', name:'fisherman'},
{category:'profession', name:'gangster'},
{category:'profession', name:'gardener'},
{category:'profession', name:'gymnast'},
{category:'profession', name:'judge'},
{category:'profession', name:'lawyer'},
{category:'profession', name:'magician'},
{category:'profession', name:'mailman'},
{category:'profession', name:'mechanic'},
{category:'profession', name:'milkman'},
{category:'profession', name:'musician'},
{category:'profession', name:'nurse'},
{category:'profession', name:'painter'},
{category:'profession', name:'pilot'},
{category:'profession', name:'plumber'},
{category:'profession', name:'poet'},
{category:'profession', name:'policeman'},
{category:'profession', name:'politician'},
{category:'profession', name:'priest'},
{category:'profession', name:'princess'},
{category:'profession', name:'printer'},
{category:'profession', name:'professor'},
{category:'profession', name:'rockstar'},
{category:'profession', name:'sailor'},
{category:'profession', name:'salesman'},
{category:'profession', name:'sheriff'},
{category:'profession', name:'shoemaker'},
{category:'profession', name:'soldier'},
{category:'profession', name:'surgeon'},
{category:'profession', name:'tailor'},
{category:'profession', name:'teacher'},
{category:'profession', name:'veterinarian'},
{category:'profession', name:'waiter'},
{category:'profession', name:'waitress'},
{category:'profession', name:'warrior'},
{category:'profession', name:'watchmaker'},
{category:'profession', name:'wrestler'},
{category:'sports', name:'archery'},
{category:'sports', name:'athletics'},
{category:'sports', name:'badminton'},
{category:'sports', name:'baseball'},
{category:'sports', name:'basketball'},
{category:'sports', name:'bowling'},
{category:'sports', name:'boxing'},
{category:'sports', name:'canoeing'},
{category:'sports', name:'car racing'},
{category:'sports', name:'cycling'},
{category:'sports', name:'fencing'},
{category:'sports', name:'fishing'},
{category:'sports', name:'football'},
{category:'sports', name:'frisbee'},
{category:'sports', name:'golf'},
{category:'sports', name:'gymnastics'},
{category:'sports', name:'hang gliding'},
{category:'sports', name:'hockey'},
{category:'sports', name:'horse racing'},
{category:'sports', name:'javelin'},
{category:'sports', name:'jogging'},
{category:'sports', name:'judo'},
{category:'sports', name:'jumprope'},
{category:'sports', name:'karate'},
{category:'sports', name:'longjump'},
{category:'sports', name:'minigolf'},
{category:'sports', name:'motorcycle racing'},
{category:'sports', name:'pingpong'},
{category:'sports', name:'polo'},
{category:'sports', name:'rowing'},
{category:'sports', name:'rugby'},
{category:'sports', name:'sailing'},
{category:'sports', name:'scuba diving'},
{category:'sports', name:'shooting'},
{category:'sports', name:'skiing'},
{category:'sports', name:'sledding'},
{category:'sports', name:'snow-boarding'},
{category:'sports', name:'squash'},
{category:'sports', name:'swimming'},
{category:'sports', name:'table tennis'},
{category:'sports', name:'tennis'},
{category:'sports', name:'triathlon'},
{category:'sports', name:'volleyball'},
{category:'sports', name:'weightlifting'},
{category:'vehicle', name:'airplane'},
{category:'vehicle', name:'bicycle'},
{category:'vehicle', name:'boat'},
{category:'vehicle', name:'bus'},
{category:'vehicle', name:'car'},
{category:'vehicle', name:'dogsled'},
{category:'vehicle', name:'forklift'},
{category:'vehicle', name:'golfcart'},
{category:'vehicle', name:'helicopter'},
{category:'vehicle', name:'horse'},
{category:'vehicle', name:'jet'},
{category:'vehicle', name:'minivan'},
{category:'vehicle', name:'motorcycle'},
{category:'vehicle', name:'porsche'},
{category:'vehicle', name:'racecar'},
{category:'vehicle', name:'rowboat'},
{category:'vehicle', name:'sailboat'},
{category:'vehicle', name:'scooter'},
{category:'vehicle', name:'ship'},
{category:'vehicle', name:'shuttle'},
{category:'vehicle', name:'subway'},
{category:'vehicle', name:'taxi'},
{category:'vehicle', name:'towtruck'},
{category:'vehicle', name:'tractor'},
{category:'vehicle', name:'train'},
{category:'vehicle', name:'tricycle'},
{category:'vehicle', name:'truck'},
{category:'vehicle', name:'tugboat'},
{category:'vehicle', name:'unicycle'},
{category:'vehicle', name:'zeppelin'},
{category:'weapon', name:'atomic bomb'},
{category:'weapon', name:'barbwire'},
{category:'weapon', name:'bayonet'},
{category:'weapon', name:'bazooka'},
{category:'weapon', name:'blowgun'},
{category:'weapon', name:'bomb'},
{category:'weapon', name:'bow and arrow'},
{category:'weapon', name:'cannon'},
{category:'weapon', name:'catapult'},
{category:'weapon', name:'chainsaw'},
{category:'weapon', name:'club'},
{category:'weapon', name:'crossbow'},
{category:'weapon', name:'crowbar'},
{category:'weapon', name:'drill'},
{category:'weapon', name:'dynamite'},
{category:'weapon', name:'grenade'},
{category:'weapon', name:'gun'},
{category:'weapon', name:'hammer'},
{category:'weapon', name:'hand grenade'},
{category:'weapon', name:'handgun'},
{category:'weapon', name:'knife'},
{category:'weapon', name:'land mine'},
{category:'weapon', name:'missile'},
{category:'weapon', name:'revolver'},
{category:'weapon', name:'rifle'},
{category:'weapon', name:'saw'},
{category:'weapon', name:'scissors'},
{category:'weapon', name:'screwdriver'},
{category:'weapon', name:'shotgun'},
{category:'weapon', name:'spear'},
{category:'weapon', name:'sword'},
{category:'weapon', name:'tank'},
{category:'weapon', name:'torpedo'}
]

export default items;