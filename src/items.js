const items = [
    {category:'anatomy', word:'ankle'},
{category:'anatomy', word:'arm'},
{category:'anatomy', word:'armpit'},
{category:'anatomy', word:'back'},
{category:'anatomy', word:'beard'},
{category:'anatomy', word:'blood'},
{category:'anatomy', word:'body'},
{category:'anatomy', word:'bone'},
{category:'anatomy', word:'brain'},
{category:'anatomy', word:'buttock'},
{category:'anatomy', word:'cheek'},
{category:'anatomy', word:'chest'},
{category:'anatomy', word:'chin'},
{category:'anatomy', word:'crotch'},
{category:'anatomy', word:'dimples'},
{category:'anatomy', word:'ear'},
{category:'anatomy', word:'elbow'},
{category:'anatomy', word:'eye'},
{category:'anatomy', word:'eyebrow'},
{category:'anatomy', word:'feet'},
{category:'anatomy', word:'finger'},
{category:'anatomy', word:'flesh'},
{category:'anatomy', word:'foot'},
{category:'anatomy', word:'forehead'},
{category:'anatomy', word:'hair'},
{category:'anatomy', word:'hand'},
{category:'anatomy', word:'head'},
{category:'anatomy', word:'heart'},
{category:'anatomy', word:'hip'},
{category:'anatomy', word:'kidney'},
{category:'anatomy', word:'knee'},
{category:'anatomy', word:'knuckle'},
{category:'anatomy', word:'leg'},
{category:'anatomy', word:'lip'},
{category:'anatomy', word:'moustache'},
{category:'anatomy', word:'mouth'},
{category:'anatomy', word:'muscle'},
{category:'anatomy', word:'mustache'},
{category:'anatomy', word:'nail'},
{category:'anatomy', word:'neck'},
{category:'anatomy', word:'nipple'},
{category:'anatomy', word:'nose'},
{category:'anatomy', word:'nostril'},
{category:'anatomy', word:'shoulder'},
{category:'anatomy', word:'shoulder'},
{category:'anatomy', word:'sideburn'},
{category:'anatomy', word:'skeleton'},
{category:'anatomy', word:'skin'},
{category:'anatomy', word:'spine'},
{category:'anatomy', word:'stomach'},
{category:'anatomy', word:'teeth'},
{category:'anatomy', word:'thigh'},
{category:'anatomy', word:'throat'},
{category:'anatomy', word:'thumb'},
{category:'anatomy', word:'toe'},
{category:'anatomy', word:'toenail'},
{category:'anatomy', word:'tongue'},
{category:'anatomy', word:'tooth'},
{category:'anatomy', word:'waist'},
{category:'anatomy', word:'wrist'},
{category:'animal', word:'aardvark'},
{category:'animal', word:'ant'},
{category:'animal', word:'anteater'},
{category:'animal', word:'armadillo'},
{category:'animal', word:'baboon'},
{category:'animal', word:'badger'},
{category:'animal', word:'bear'},
{category:'animal', word:'beaver'},
{category:'animal', word:'bee'},
{category:'animal', word:'bird'},
{category:'animal', word:'bull'},
{category:'animal', word:'calf'},
{category:'animal', word:'camel'},
{category:'animal', word:'cat'},
{category:'animal', word:'cheetah'},
{category:'animal', word:'chicken'},
{category:'animal', word:'chimpanzee'},
{category:'animal', word:'cow'},
{category:'animal', word:'crocodile'},
{category:'animal', word:'deer'},
{category:'animal', word:'dinosaur'},
{category:'animal', word:'dog'},
{category:'animal', word:'dolphin'},
{category:'animal', word:'donkey'},
{category:'animal', word:'duck'},
{category:'animal', word:'eagle'},
{category:'animal', word:'elephant'},
{category:'animal', word:'fish'},
{category:'animal', word:'flamingo'},
{category:'animal', word:'fly'},
{category:'animal', word:'fox'},
{category:'animal', word:'frog'},
{category:'animal', word:'giraffe'},
{category:'animal', word:'goat'},
{category:'animal', word:'goldfish'},
{category:'animal', word:'gorilla'},
{category:'animal', word:'hamster'},
{category:'animal', word:'hippopotamus'},
{category:'animal', word:'horse'},
{category:'animal', word:'hyena'},
{category:'animal', word:'jaguar'},
{category:'animal', word:'kangaroo'},
{category:'animal', word:'kitten'},
{category:'animal', word:'ladybug'},
{category:'animal', word:'leopard'},
{category:'animal', word:'lion'},
{category:'animal', word:'lizard'},
{category:'animal', word:'llama'},
{category:'animal', word:'lobster'},
{category:'animal', word:'mammoth'},
{category:'animal', word:'monkey'},
{category:'animal', word:'mosquito'},
{category:'animal', word:'narwhal'},
{category:'animal', word:'octopus'},
{category:'animal', word:'ostrich'},
{category:'animal', word:'otter'},
{category:'animal', word:'owl'},
{category:'animal', word:'oyster'},
{category:'animal', word:'panda'},
{category:'animal', word:'panther'},
{category:'animal', word:'parrot'},
{category:'animal', word:'peacock'},
{category:'animal', word:'pelican'},
{category:'animal', word:'penguin'},
{category:'animal', word:'pig'},
{category:'animal', word:'pigeon'},
{category:'animal', word:'pitbull'},
{category:'animal', word:'porcupine'},
{category:'animal', word:'puppy'},
{category:'animal', word:'rabbit'},
{category:'animal', word:'raccoon'},
{category:'animal', word:'rat'},
{category:'animal', word:'reindeer'},
{category:'animal', word:'rhinoceros'},
{category:'animal', word:'rooster'},
{category:'animal', word:'scorpion'},
{category:'animal', word:'seagull'},
{category:'animal', word:'seahorse'},
{category:'animal', word:'seal'},
{category:'animal', word:'shark'},
{category:'animal', word:'sheep'},
{category:'animal', word:'shrimp'},
{category:'animal', word:'snail'},
{category:'animal', word:'snake'},
{category:'animal', word:'spider'},
{category:'animal', word:'squid'},
{category:'animal', word:'squirrel'},
{category:'animal', word:'starfish'},
{category:'animal', word:'swan'},
{category:'animal', word:'tadpole'},
{category:'animal', word:'tiger'},
{category:'animal', word:'toad'},
{category:'animal', word:'tropical fish'},
{category:'animal', word:'turkey'},
{category:'animal', word:'turtle'},
{category:'animal', word:'vulture'},
{category:'animal', word:'walrus'},
{category:'animal', word:'whale'},
{category:'animal', word:'wolf'},
{category:'animal', word:'zebra'},
{category:'building', word:'airport'},
{category:'building', word:'apartment building'},
{category:'building', word:'bank'},
{category:'building', word:'barber shop'},
{category:'building', word:'book store'},
{category:'building', word:'bowling alley'},
{category:'building', word:'bus stop'},
{category:'building', word:'casino'},
{category:'building', word:'castle'},
{category:'building', word:'church'},
{category:'building', word:'church'},
{category:'building', word:'circus'},
{category:'building', word:'convenience store'},
{category:'building', word:'department store'},
{category:'building', word:'fire department'},
{category:'building', word:'gas station'},
{category:'building', word:'hospital'},
{category:'building', word:'house'},
{category:'building', word:'library'},
{category:'building', word:'library'},
{category:'building', word:'mall'},
{category:'building', word:'mansion'},
{category:'building', word:'movie theater'},
{category:'building', word:'museum'},
{category:'building', word:'office building'},
{category:'building', word:'petshop'},
{category:'building', word:'post office'},
{category:'building', word:'restaurant'},
{category:'building', word:'school'},
{category:'building', word:'supermarket'},
{category:'building', word:'theater'},
{category:'building', word:'train station'},
{category:'clothing', word:'bandana'},
{category:'clothing', word:'belt'},
{category:'clothing', word:'bikini'},
{category:'clothing', word:'boots'},
{category:'clothing', word:'bowtie'},
{category:'clothing', word:'cap'},
{category:'clothing', word:'coat'},
{category:'clothing', word:'dress'},
{category:'clothing', word:'earmuffs'},
{category:'clothing', word:'eyepatch'},
{category:'clothing', word:'glasses'},
{category:'clothing', word:'gloves'},
{category:'clothing', word:'hairtie'},
{category:'clothing', word:'hat'},
{category:'clothing', word:'headband'},
{category:'clothing', word:'jacket'},
{category:'clothing', word:'jeans'},
{category:'clothing', word:'kneepads'},
{category:'clothing', word:'mittens'},
{category:'clothing', word:'necklace'},
{category:'clothing', word:'overalls'},
{category:'clothing', word:'pajamas'},
{category:'clothing', word:'partyhat'},
{category:'clothing', word:'raincoat'},
{category:'clothing', word:'sandals'},
{category:'clothing', word:'scarf'},
{category:'clothing', word:'shirt'},
{category:'clothing', word:'shoes'},
{category:'clothing', word:'skirt'},
{category:'clothing', word:'slippers'},
{category:'clothing', word:'sneakers'},
{category:'clothing', word:'socks'},
{category:'clothing', word:'sombrero'},
{category:'clothing', word:'stockings'},
{category:'clothing', word:'suit'},
{category:'clothing', word:'sweater'},
{category:'clothing', word:'sweatshirt'},
{category:'clothing', word:'swimsuit'},
{category:'clothing', word:'t-shirt'},
{category:'clothing', word:'tie'},
{category:'clothing', word:'trousers'},
{category:'clothing', word:'trousers'},
{category:'clothing', word:'underpants'},
{category:'country', word:'africa'},
{category:'country', word:'america'},
{category:'country', word:'bahamas'},
{category:'country', word:'brazil'},
{category:'country', word:'canada'},
{category:'country', word:'china'},
{category:'country', word:'Egypt'},
{category:'country', word:'england'},
{category:'country', word:'finland'},
{category:'country', word:'france'},
{category:'country', word:'germany'},
{category:'country', word:'Greece'},
{category:'country', word:'hawaii'},
{category:'country', word:'holland'},
{category:'country', word:'India'},
{category:'country', word:'Iran'},
{category:'country', word:'ireland'},
{category:'country', word:'Israel'},
{category:'country', word:'Italy'},
{category:'country', word:'jamaica'},
{category:'country', word:'Japan'},
{category:'country', word:'Mexico'},
{category:'country', word:'Morocco'},
{category:'country', word:'North Korea'},
{category:'country', word:'Pakistan'},
{category:'country', word:'Russia'},
{category:'country', word:'Saudi Arabia'},
{category:'country', word:'scotland'},
{category:'country', word:'South Korea'},
{category:'country', word:'Spain'},
{category:'country', word:'Syria'},
{category:'country', word:'Taiwan'},
{category:'country', word:'Thailand'},
{category:'country', word:'Turkey'},
{category:'country', word:'Vietnam'},
{category:'family', word:'aunt'},
{category:'family', word:'brother'},
{category:'family', word:'children'},
{category:'family', word:'cousin'},
{category:'family', word:'daughter'},
{category:'family', word:'father'},
{category:'family', word:'granddaughter'},
{category:'family', word:'grandma'},
{category:'family', word:'grandmother'},
{category:'family', word:'grandpa'},
{category:'family', word:'grandson'},
{category:'family', word:'husband'},
{category:'family', word:'mother'},
{category:'family', word:'nephew'},
{category:'family', word:'niece'},
{category:'family', word:'parents'},
{category:'family', word:'sister'},
{category:'family', word:'son'},
{category:'family', word:'stepdaughter'},
{category:'family', word:'stepmother'},
{category:'family', word:'stepson'},
{category:'family', word:'uncle'},
{category:'food', word:'apple'},
{category:'food', word:'asparagus'},
{category:'food', word:'avocado'},
{category:'food', word:'baguette'},
{category:'food', word:'banana'},
{category:'food', word:'barbeque'},
{category:'food', word:'beans'},
{category:'food', word:'broccoli'},
{category:'food', word:'brownie'},
{category:'food', word:'burger'},
{category:'food', word:'burrito'},
{category:'food', word:'cabbage'},
{category:'food', word:'carrot'},
{category:'food', word:'celery'},
{category:'food', word:'cereal'},
{category:'food', word:'cheese'},
{category:'food', word:'cherry'},
{category:'food', word:'coconut'},
{category:'food', word:'coffee'},
{category:'food', word:'cookie'},
{category:'food', word:'corn'},
{category:'food', word:'cucumber'},
{category:'food', word:'cupcake'},
{category:'food', word:'dinner'},
{category:'food', word:'doritos'},
{category:'food', word:'eggplant'},
{category:'food', word:'espresso'},
{category:'food', word:'fastfood'},
{category:'food', word:'frosting'},
{category:'food', word:'grapefruit'},
{category:'food', word:'grapes'},
{category:'food', word:'hotdog'},
{category:'food', word:'hotsauce'},
{category:'food', word:'icepop'},
{category:'food', word:'ketchup'},
{category:'food', word:'lemon'},
{category:'food', word:'lettuce'},
{category:'food', word:'lollipop'},
{category:'food', word:'macaroni'},
{category:'food', word:'meatball'},
{category:'food', word:'melon'},
{category:'food', word:'muffin'},
{category:'food', word:'mushroom'},
{category:'food', word:'mustard'},
{category:'food', word:'noodles'},
{category:'food', word:'omelet'},
{category:'food', word:'onion'},
{category:'food', word:'orange'},
{category:'food', word:'pancakes'},
{category:'food', word:'peach'},
{category:'food', word:'peanu'},
{category:'food', word:'pear'},
{category:'food', word:'peas'},
{category:'food', word:'pepper'},
{category:'food', word:'pickle'},
{category:'food', word:'pineapple'},
{category:'food', word:'plum'},
{category:'food', word:'popcorn'},
{category:'food', word:'popsicle'},
{category:'food', word:'potato'},
{category:'food', word:'pretzel'},
{category:'food', word:'pumpkin'},
{category:'food', word:'radish'},
{category:'food', word:'sandwich'},
{category:'food', word:'sausage'},
{category:'food', word:'seafood'},
{category:'food', word:'skittles'},
{category:'food', word:'snowcone'},
{category:'food', word:'soysauce'},
{category:'food', word:'spinach'},
{category:'food', word:'strawberry'},
{category:'food', word:'tomato'},
{category:'food', word:'turnip'},
{category:'food', word:'watermelon'},
{category:'instrument', word:'accordion'},
{category:'instrument', word:'agogo bells'},
{category:'instrument', word:'bagpipes'},
{category:'instrument', word:'banjo'},
{category:'instrument', word:'baritone'},
{category:'instrument', word:'bass drum'},
{category:'instrument', word:'bassoon'},
{category:'instrument', word:'bell lyre'},
{category:'instrument', word:'bongos'},
{category:'instrument', word:'bugle'},
{category:'instrument', word:'castanets'},
{category:'instrument', word:'celeste'},
{category:'instrument', word:'cello'},
{category:'instrument', word:'chimes'},
{category:'instrument', word:'clarinet'},
{category:'instrument', word:'claves'},
{category:'instrument', word:'conga'},
{category:'instrument', word:',cornet'},
{category:'instrument', word:'cowbell'},
{category:'instrument', word:'crash cymbal'},
{category:'instrument', word:'cymbal'},
{category:'instrument', word:'drum'},
{category:'instrument', word:'drum set'},
{category:'instrument', word:'electric guitar'},
{category:'instrument', word:'euphonium'},
{category:'instrument', word:'flugelhorn'},
{category:'instrument', word:'flute'},
{category:'instrument', word:'French horn'},
{category:'instrument', word:'glockenspiel'},
{category:'instrument', word:'gong'},
{category:'instrument', word:'grand piano'},
{category:'instrument', word:'guitar'},
{category:'instrument', word:'harmonica'},
{category:'instrument', word:'harp'},
{category:'instrument', word:'kettledrum'},
{category:'instrument', word:'lute'},
{category:'instrument', word:'mandolin'},
{category:'instrument', word:'maracas'},
{category:'instrument', word:'marimba'},
{category:'instrument', word:'oboe'},
{category:'instrument', word:'orchestra bells'},
{category:'instrument', word:'piano'},
{category:'instrument', word:'piccolo'},
{category:'instrument', word:'recorder'},
{category:'instrument', word:'ride cymbal'},
{category:'instrument', word:'saxophone'},
{category:'instrument', word:'scraper'},
{category:'instrument', word:'sizzle cymbal'},
{category:'instrument', word:'snare drum'},
{category:'instrument', word:'sousaphone'},
{category:'instrument', word:'splash cymbal'},
{category:'instrument', word:'steel drums'},
{category:'instrument', word:'tenor drum'},
{category:'instrument', word:'timbales'},
{category:'instrument', word:'timpani'},
{category:'instrument', word:'tom-tom'},
{category:'instrument', word:'triangle'},
{category:'instrument', word:'trombone'},
{category:'instrument', word:'trumpet'},
{category:'instrument', word:'tuba'},
{category:'instrument', word:'ukulele'},
{category:'instrument', word:'vibraphone'},
{category:'instrument', word:'violin'},
{category:'instrument', word:'xylophone'},
{category:'mythology', word:'atlantis'},
{category:'mythology', word:'bigfoot'},
{category:'mythology', word:'centaur'},
{category:'mythology', word:'cyclops'},
{category:'mythology', word:'dragon'},
{category:'mythology', word:'goddess'},
{category:'Category', word:'Topic'},
{category:'mythology', word:'hercules'},
{category:'mythology', word:'jupiter'},
{category:'mythology', word:'mermaid'},
{category:'mythology', word:'minotaur'},
{category:'mythology', word:'monster'},
{category:'mythology', word:'neptune'},
{category:'mythology', word:'pegasus'},
{category:'mythology', word:'phoenix'},
{category:'mythology', word:'poseidon'},
{category:'mythology', word:'unicorn'},
{category:'mythology', word:'vampire'},
{category:'mythology', word:'werewolf'},
{category:'pop culture', word:'aladdin'},
{category:'pop culture', word:'aquaman'},
{category:'pop culture', word:'asterix'},
{category:'pop culture', word:'autobots'},
{category:'pop culture', word:'avatar'},
{category:'pop culture', word:'avengers'},
{category:'pop culture', word:'barbie'},
{category:'pop culture', word:'batman'},
{category:'pop culture', word:'beavis'},
{category:'pop culture', word:'bowser'},
{category:'pop culture', word:'catwoman'},
{category:'pop culture', word:'garfield'},
{category:'pop culture', word:'haymitch'},
{category:'pop culture', word:'ironchef'},
{category:'pop culture', word:'ironman'},
{category:'pop culture', word:'katniss'},
{category:'pop culture', word:'lionking'},
{category:'pop culture', word:'madonna'},
{category:'pop culture', word:'metroid'},
{category:'pop culture', word:'pikachu'},
{category:'pop culture', word:'riddler'},
{category:'pop culture', word:'rugrats'},
{category:'pop culture', word:'splinter'},
{category:'pop culture', word:'startrek'},
{category:'pop culture', word:'starwars'},
{category:'pop culture', word:'thelorax'},
{category:'pop culture', word:'twilight'},
{category:'pop culture', word:'twoface'},
{category:'pop culture', word:'warcraft'},
{category:'profession', word:'accountant'},
{category:'profession', word:'actor'},
{category:'profession', word:'artist'},
{category:'profession', word:'athlete'},
{category:'profession', word:'author'},
{category:'profession', word:'baker'},
{category:'profession', word:'banker'},
{category:'profession', word:'barber'},
{category:'profession', word:'beautician'},
{category:'profession', word:'butcher'},
{category:'profession', word:'captain'},
{category:'profession', word:'carpenter'},
{category:'profession', word:'cashier'},
{category:'profession', word:'chauffeur'},
{category:'profession', word:'chef'},
{category:'profession', word:'coach'},
{category:'profession', word:'cowboy'},
{category:'profession', word:'criminal'},
{category:'profession', word:'dentist'},
{category:'profession', word:'director'},
{category:'profession', word:'doctor'},
{category:'profession', word:'drummer'},
{category:'profession', word:'engineer'},
{category:'profession', word:'farmer'},
{category:'profession', word:'fire fighter'},
{category:'profession', word:'fisherman'},
{category:'profession', word:'gangster'},
{category:'profession', word:'gardener'},
{category:'profession', word:'gymnast'},
{category:'profession', word:'judge'},
{category:'profession', word:'lawyer'},
{category:'profession', word:'magician'},
{category:'profession', word:'mailman'},
{category:'profession', word:'mechanic'},
{category:'profession', word:'milkman'},
{category:'profession', word:'musician'},
{category:'profession', word:'nurse'},
{category:'profession', word:'painter'},
{category:'profession', word:'pilot'},
{category:'profession', word:'plumber'},
{category:'profession', word:'poet'},
{category:'profession', word:'policeman'},
{category:'profession', word:'politician'},
{category:'profession', word:'priest'},
{category:'profession', word:'princess'},
{category:'profession', word:'printer'},
{category:'profession', word:'professor'},
{category:'profession', word:'rockstar'},
{category:'profession', word:'sailor'},
{category:'profession', word:'salesman'},
{category:'profession', word:'sheriff'},
{category:'profession', word:'shoemaker'},
{category:'profession', word:'soldier'},
{category:'profession', word:'surgeon'},
{category:'profession', word:'tailor'},
{category:'profession', word:'teacher'},
{category:'profession', word:'veterinarian'},
{category:'profession', word:'waiter'},
{category:'profession', word:'waitress'},
{category:'profession', word:'warrior'},
{category:'profession', word:'watchmaker'},
{category:'profession', word:'wrestler'},
{category:'sports', word:'archery'},
{category:'sports', word:'athletics'},
{category:'sports', word:'badminton'},
{category:'sports', word:'baseball'},
{category:'sports', word:'basketball'},
{category:'sports', word:'bowling'},
{category:'sports', word:'boxing'},
{category:'sports', word:'canoeing'},
{category:'sports', word:'car racing'},
{category:'sports', word:'cycling'},
{category:'sports', word:'fencing'},
{category:'sports', word:'fishing'},
{category:'sports', word:'football'},
{category:'sports', word:'frisbee'},
{category:'sports', word:'golf'},
{category:'sports', word:'gymnastics'},
{category:'sports', word:'hang gliding'},
{category:'sports', word:'hockey'},
{category:'sports', word:'horse racing'},
{category:'sports', word:'javelin'},
{category:'sports', word:'jogging'},
{category:'sports', word:'judo'},
{category:'sports', word:'jumprope'},
{category:'sports', word:'karate'},
{category:'sports', word:'longjump'},
{category:'sports', word:'minigolf'},
{category:'sports', word:'motorcycle racing'},
{category:'sports', word:'pingpong'},
{category:'sports', word:'polo'},
{category:'sports', word:'rowing'},
{category:'sports', word:'rugby'},
{category:'sports', word:'sailing'},
{category:'sports', word:'scuba diving'},
{category:'sports', word:'shooting'},
{category:'sports', word:'skiing'},
{category:'sports', word:'sledding'},
{category:'sports', word:'snow-boarding'},
{category:'sports', word:'squash'},
{category:'sports', word:'swimming'},
{category:'sports', word:'table tennis'},
{category:'sports', word:'tennis'},
{category:'sports', word:'triathlon'},
{category:'sports', word:'volleyball'},
{category:'sports', word:'weightlifting'},
{category:'vehicle', word:'airplane'},
{category:'vehicle', word:'bicycle'},
{category:'vehicle', word:'boat'},
{category:'vehicle', word:'bus'},
{category:'vehicle', word:'car'},
{category:'vehicle', word:'dogsled'},
{category:'vehicle', word:'forklift'},
{category:'vehicle', word:'golfcart'},
{category:'vehicle', word:'helicopter'},
{category:'vehicle', word:'horse'},
{category:'vehicle', word:'jet'},
{category:'vehicle', word:'minivan'},
{category:'vehicle', word:'motorcycle'},
{category:'vehicle', word:'porsche'},
{category:'vehicle', word:'racecar'},
{category:'vehicle', word:'rowboat'},
{category:'vehicle', word:'sailboat'},
{category:'vehicle', word:'scooter'},
{category:'vehicle', word:'ship'},
{category:'vehicle', word:'shuttle'},
{category:'vehicle', word:'subway'},
{category:'vehicle', word:'taxi'},
{category:'vehicle', word:'towtruck'},
{category:'vehicle', word:'tractor'},
{category:'vehicle', word:'train'},
{category:'vehicle', word:'tricycle'},
{category:'vehicle', word:'truck'},
{category:'vehicle', word:'tugboat'},
{category:'vehicle', word:'unicycle'},
{category:'vehicle', word:'zeppelin'},
{category:'weapon', word:'atomic bomb'},
{category:'weapon', word:'barbwire'},
{category:'weapon', word:'bayonet'},
{category:'weapon', word:'bazooka'},
{category:'weapon', word:'blowgun'},
{category:'weapon', word:'bomb'},
{category:'weapon', word:'bow and arrow'},
{category:'weapon', word:'cannon'},
{category:'weapon', word:'catapult'},
{category:'weapon', word:'chainsaw'},
{category:'weapon', word:'club'},
{category:'weapon', word:'crossbow'},
{category:'weapon', word:'crowbar'},
{category:'weapon', word:'drill'},
{category:'weapon', word:'dynamite'},
{category:'weapon', word:'grenade'},
{category:'weapon', word:'gun'},
{category:'weapon', word:'hammer'},
{category:'weapon', word:'hand grenade'},
{category:'weapon', word:'handgun'},
{category:'weapon', word:'knife'},
{category:'weapon', word:'land mine'},
{category:'weapon', word:'missile'},
{category:'weapon', word:'revolver'},
{category:'weapon', word:'rifle'},
{category:'weapon', word:'saw'},
{category:'weapon', word:'scissors'},
{category:'weapon', word:'screwdriver'},
{category:'weapon', word:'shotgun'},
{category:'weapon', word:'spear'},
{category:'weapon', word:'sword'},
{category:'weapon', word:'tank'},
{category:'weapon', word:'torpedo'}
]

export default items;