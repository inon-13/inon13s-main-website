function reset(cmd) {
	if (cmd == 'all') {
		Runner.instance_.distanceMeter.config.ACHIEVEMENT_DISTANCE=100
		Runner.instance_.setSpeed(6)
		Runner.instance_.updateConfigSetting('GRAVITY','1');Runner.instance_.updateConfigSetting('INITIAL_JUMP_VELOCITY','10');Runner.instance_.tRex.config.GRAVITY = 0.5
		Runner.keycodes = {
			JUMP: {'38': 1, '32': 1},
			DUCK: {'40': 1},
			RESTART: {'13': 1},
		};
		        Runner.prototype.gameOver = function () {
this.playSound(this.soundFx.HIT);
vibrate(200);

this.stop();
this.crashed = true;
this.distanceMeter.achievement = false;

this.tRex.update(100, Trex.status.CRASHED);

// Game over panel.
if (!this.gameOverPanel) {
const origSpriteDef = IS_HIDPI ?
Runner.spriteDefinitionByType.original.HDPI :
Runner.spriteDefinitionByType.original.LDPI;

if (this.canvas) {
if (Runner.isAltGameModeEnabled) {
this.gameOverPanel = new GameOverPanel(
this.canvas, origSpriteDef.TEXT_SPRITE, origSpriteDef.RESTART,
this.dimensions, origSpriteDef.ALT_GAME_END,
this.altGameModeActive);
} else {
this.gameOverPanel = new GameOverPanel(
this.canvas, origSpriteDef.TEXT_SPRITE, origSpriteDef.RESTART,
this.dimensions);
}
}
}

this.gameOverPanel.draw(this.altGameModeActive, this.tRex);

// Update the high score.
if (this.distanceRan > this.highestScore) {
this.saveHighScore(this.distanceRan);
}

// Reset the time clock.
this.time = getTimeStamp();

if (Runner.audioCues) {
this.generatedSoundFx.stopAll();
announcePhrase(
getA11yString(A11Y_STRINGS.gameOver)
.replace(
'$1',
this.distanceMeter.getActualDistance(this.distanceRan)
.toString()) +
' ' +
getA11yString(A11Y_STRINGS.highScore)
.replace(
'$1',

this.distanceMeter.getActualDistance(this.highestScore)
.toString()));
this.containerEl.setAttribute(
'title', getA11yString(A11Y_STRINGS.ariaLabel));
}
this.showSpeedToggle();
this.disableSpeedToggle(false);
}
	}
    else if (cmd == 'achivment') {
Runner.instance_.distanceMeter.config.ACHIEVEMENT_DISTANCE=100
    }
    else if (cmd == 'death') {
        Runner.prototype.gameOver = function () {
this.playSound(this.soundFx.HIT);
vibrate(200);

this.stop();
this.crashed = true;
this.distanceMeter.achievement = false;

this.tRex.update(100, Trex.status.CRASHED);

// Game over panel.
if (!this.gameOverPanel) {
const origSpriteDef = IS_HIDPI ?
Runner.spriteDefinitionByType.original.HDPI :
Runner.spriteDefinitionByType.original.LDPI;

if (this.canvas) {
if (Runner.isAltGameModeEnabled) {
this.gameOverPanel = new GameOverPanel(
this.canvas, origSpriteDef.TEXT_SPRITE, origSpriteDef.RESTART,
this.dimensions, origSpriteDef.ALT_GAME_END,
this.altGameModeActive);
} else {
this.gameOverPanel = new GameOverPanel(
this.canvas, origSpriteDef.TEXT_SPRITE, origSpriteDef.RESTART,
this.dimensions);
}
}
}

this.gameOverPanel.draw(this.altGameModeActive, this.tRex);

// Update the high score.
if (this.distanceRan > this.highestScore) {
this.saveHighScore(this.distanceRan);
}

// Reset the time clock.
this.time = getTimeStamp();

if (Runner.audioCues) {
this.generatedSoundFx.stopAll();
announcePhrase(
getA11yString(A11Y_STRINGS.gameOver)
.replace(
'$1',
this.distanceMeter.getActualDistance(this.distanceRan)
.toString()) +
' ' +
getA11yString(A11Y_STRINGS.highScore)
.replace(
'$1',

this.distanceMeter.getActualDistance(this.highestScore)
.toString()));
this.containerEl.setAttribute(
'title', getA11yString(A11Y_STRINGS.ariaLabel));
}
this.showSpeedToggle();
this.disableSpeedToggle(false);
}
    }
    else if (cmd == 'speed') {
Runner.instance_.setSpeed(6)
    }
    else if (cmd == 'gravity') {
        Runner.instance_.updateConfigSetting('GRAVITY','1');Runner.instance_.updateConfigSetting('INITIAL_JUMP_VELOCITY','10');Runner.instance_.tRex.config.GRAVITY = 0.5
                          }
    else if (cmd == 'key') {
        Runner.keycodes = {
		JUMP: {'38': 1, '32': 1},
		DUCK: {'40': 1},
		RESTART: {'13': 1},
	};
    }
    else {console.log (cmd+'is not a commend, try something else')}
};

function sub() {
     return window.open('https://www.youtube.com/@glitchergg9680', Math.random(), 'parent')
};
var original = Runner.prototype.gameOver;

function instantpoints(Points) {
    Runner.instance_.distanceRan = Points / Runner.instance_.distanceMeter.config.COEFFICIENT
};

function speed(speed) {
    Runner.instance_.setSpeed(speed)
};

function dietogoback() {
Runner.isBumped=0;Runner.prototype.gameOver=function(){if(Runner.isBumped==0){Runner.isBumped=1;window.setTimeout(function(){this.setSpeed(-this.currentSpeed);Runner.isBumped=0;},250);this.setSpeed(-this.currentSpeed);}};
};

function discacbirpsp() {
Runner.instance_.setSpeed(5000);Runner.prototype.gameOver=function(){}
};

function sucide(sucide){
    if (sucide == 'loop') {
        setInterval(function(){Runner.instance_.gameOver();Runner.instance_.onKeyDown({keyCode:32,which:32,charCode:32,preventDefault:function(){}})
    }
    )
            }
    else {
    Runner.instance_.gameOver()
    }
};

function troll() {
    setInterval(function(){Runner.instance_.distanceRan = 0 / Runner.instance_.distanceMeter.config.COEFFICIENT});Runner.keycodes = {
  JUMP: {'40': 1},
  DUCK:  {'38': 1, '32': 1},
  RESTART: {'16': 1}
};
alert('you are really stupid...');alert('you got hacked')
};

function invinsible(){
Runner.prototype.gameOver=function(){}
};

function invinsibleQmark(){
Runner.prototype.gameOver=function(){alert('oh no, i forgot to jump!');alert('god: ok ill help you!');alert('yayyyyy!!!!');Runner.prototype.gameOver=function(){}}
};

function achivment(type) {
    if (type == 'always') {
Runner.instance_.distanceMeter.config.ACHIEVEMENT_DISTANCE=1
    }
    else if (type == 'never') {
Runner.instance_.distanceMeter.config.ACHIEVEMENT_DISTANCE=0
    }
    else {
Runner.instance_.distanceMeter.config.ACHIEVEMENT_DISTANCE=type
    }
};

function diewithoutres() {
  Runner.prototype.gameOver=function(){this.playingIntro=Math.floor(Math.random());this.playSound(this.soundFx.HIT);Runner.instance_.distanceRan = 0 / Runner.instance_.distanceMeter.config.COEFFICIENT}  
};

function disablekey(keyD) {
    if (keyD == 'jump') {
        Runner.keycodes = {
			JUMP: {},
			DUCK: {'40': 1},
			RESTART: {'13': 1},
		}
    }
    else if (keyD == 'duck') {
        Runner.keycodes = {
			JUMP: {'38': 1, '32': 1},
			DUCK: {},
			RESTART: {'13': 1},
		}
	}
	else if (keyD == 'JD') {
		Runner.keycodes = {
			JUMP: {},
			DUCK: {},
			RESTART: {'13': 1},
		}
	}
	else {
        console.log('this key does not exist\available')
    }
};

function timemode(mode) {
    if (mode == 'night') {
        Runner.instance_.updateConfigSetting('INVERT_DISTANCE','-1')
    }
    else if (mode == 'day') {
        Runner.instance_.updateConfigSetting('INVERT_DISTANCE','999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999')
    }
    else {
        console.log ('sorry, this time is not available. try night or day')
    }
}

function minihack() {
    Runner.instance_.distanceMeter.config.ACHIEVEMENT_DISTANCE=1;setInterval(function(){Runner.instance_.gameOver();Runner.instance_.onKeyDown({keyCode:32,which:32,charCode:32,preventDefault:function(){}});Runner.instance_.distanceMeter.digits=(Math.random()*999999).toString().split('');},5);Runner.instance_.updateConfigSetting('INVERT_DISTANCE','-1'); Runner.instance_.updateConfigSetting('GRAVITY','1000');Runner.instance_.updateConfigSetting('INITIAL_JUMP_VELOCITY','0.1');alert ('dont forget to tap to see the mini hack!');Runner.prototype.gameOver=function(){}
};

function gravity(gravity) {
    Runner.instance_.tRex.config.GRAVITY = gravity
};

function bot() {
    let ask = confirm ('are you ready to see the bot? [credit for: JIS Tech Logs]')
if (ask == false) {
	alert ('ok')
}
else {
	const loop = function() {
		const jumpSpeed = 50;
		const distBeforeJump = 120;
		const instance = window.Runner.instance_;
		const tRex = instance.tRex;
		if( tRex.jumping ) {
			requestAnimationFrame(loop);
			return;
		}
		const tRexPos = tRex.xPos;
		const obstacles = instance.horizon.obstacles;
		const nextObstacle = obstacles.find(o => o.xPos - tRexPos );
		if ( nextObstacle && ( nextObstacle.xPos - tRexPos ) <= distBeforeJump){
			tRex.startJump(jumpSpeed);
		}
		requestAnimationFrame(loop);
		}
	
	requestAnimationFrame(loop);
}
};

function dietocrashgame() {
Runner.prototype.gameOver=function(){a}
};

function superjump() {
Runner.instance_.updateConfigSetting('GRAVITY','1000');Runner.instance_.updateConfigSetting('INITIAL_JUMP_VELOCITY','12');Runner.instance_.tRex.config.GRAVITY = 0.1
};

function jumptodeldino() {
Runner.instance_.updateConfigSetting('GRAVITY','1000');Runner.instance_.updateConfigSetting('INITIAL_JUMP_VELOCITY','9999');Runner.instance_.tRex.config.GRAVITY = 0.1
};

function swapbuttons() {
    Runner.keycodes = {
  JUMP: {'40': 1},
  DUCK:  {'38': 1, '32': 1},
  RESTART: {'16': 1}
};
};

function superhackloadnoises() {
Runner.instance_.updateConfigSetting('ACCELERATION','0');Runner.instance_.updateConfigSetting('BG_CLOUD_SPEED','1');Runner.instance_.updateConfigSetting('CLOUD_FREQUENCY','100');Runner.instance_.updateConfigSetting('GRAVITY','1000');Runner.instance_.updateConfigSetting('INITIAL_JUMP_VELOCITY','0.1');Runner.instance_.updateConfigSetting('INVERT_DISTANCE','-1');Runner.instance_.updateConfigSetting('INVERT_FADE_DURATION',window.Infinity);Runner.instance_.updateConfigSetting('MAX_BLINK_COUNT','0');Runner.instance_.updateConfigSetting('MAX_CLOUDS','0');Runner.instance_.updateConfigSetting('MAX_OBSTACLE_DUPLICATION','5');Runner.instance_.updateConfigSetting('MAX_OBSTACLE_LENGTH','5');Runner.instance_.updateConfigSetting('MAX_SPEED','500');Runner.instance_.updateConfigSetting('MIN_JUMP_HEIGHT','0');Runner.instance_.updateConfigSetting('SPEED','500');Runner.instance_.updateConfigSetting('SPEED_DROP_COEFFICIENT','0.3');Runner.prototype.gameOver=function(){this.playingIntro=Math.floor(Math.random());this.playSound(this.soundFx.BUTTON_PRESS);this.playSound(this.soundFx.HIT);this.playSound(this.soundFx.SCORE);};Runner.instance_.distanceMeter.config.FLASH_DURATION=1;Runner.instance_.distanceMeter.config.FLASH_ITERATIONS=50;Runner.instance_.distanceMeter.config.ACHIEVEMENT_DISTANCE=1;setInterval(function(){Runner.instance_.gameOver();Runner.instance_.onKeyDown({keyCode:32,which:32,charCode:32,preventDefault:function(){}});Runner.instance_.distanceMeter.digits=(Math.random()*999999).toString().split('');},50);setInterval (function (){Runner.instance_.onKeyDown({keyCode:40,which:40,charCode:40,preventDefault:function(){}})});setInterval (function (){Runner.instance_.onKeyDown({keyCode:32,which:32,charCode:32,preventDefault:function(){}})});const loop = function() {
		const jumpSpeed = 50;
		const distBeforeJump = 120;
		const instance = window.Runner.instance_;
		const tRex = instance.tRex;
		if( tRex.jumping ) {
			requestAnimationFrame(loop);
			return;
		}
		const tRexPos = tRex.xPos;
		const obstacles = instance.horizon.obstacles;
		const nextObstacle = obstacles.find(o => o.xPos - tRexPos );
		if ( nextObstacle && ( nextObstacle.xPos - tRexPos ) <= distBeforeJump){
			tRex.startJump(jumpSpeed);
		}
		requestAnimationFrame(loop);
		}
	
	requestAnimationFrame(loop);
};

function deathsound(sound) {
    if (sound == 'jump') {
Runner.prototype.gameOver=function(){this.playSound(this.soundFx.BUTTON_PRESS)}
    }
    else if (sound == 'score') {
Runner.prototype.gameOver=function(){this.playSound(this.soundFx.SCORE)}
    }
    else if (sound == 'death') {
Runner.prototype.gameOver=function(){this.playSound(this.soundFx.SCORE)}
    }
    else {
        console.log ('this sound is not working for now, sorry.')
    }
};

function jumphigh(high) {
	Runner.instance_.updateConfigSetting('INITIAL_JUMP_VELOCITY',high);
};

var hackedtext = document.createElement('h2');
hackedtext.innerHTML = 'This dino is hacked by Inon13';

function hidehacked(HS) {
	if (HS == 'hide') {
		hackedtext.innerHTML = '';
	}
	else if (HS == 'show') {
		hackedtext.innerHTML = 'This dino is hacked by Inon13';
	}
	else {
		console.log (HS+'is not an option. the options are only show or hide!');
	}
}

function jump(loopYN) {
	if (loopYN == 'loop') {
		setInterval (function (){Runner.instance_.onKeyDown({keyCode:32,which:32,charCode:32,preventDefault:function(){}})})
	}
	else {
		Runner.instance_.onKeyDown({keyCode:32,which:32,charCode:32,preventDefault:function(){}})
	}
}
function duck(loopyn) {
	if (loopyn == 'loop') {
		setInterval (function (){Runner.instance_.onKeyDown({keyCode:40,which:40,charCode:40,preventDefault:function(){}})})
	}
	else {
		Runner.instance_.onKeyDown({keyCode:40,which:40,charCode:40,preventDefault:function(){}})
	}
}

function help(help) {
	if (help == 'all'){
		console.log('reset');
		console.log('sub');
		console.log('hidehacked');
		console.log('instantpoints');
		console.log('jump');
		console.log('duck');
		console.log('speed');
		console.log('discacbirpsp');
		console.log('dietogoback');
		console.log('sucide');
		console.log('troll');
		console.log('invinsible');
		console.log('invinsibleQmark');
		console.log('achivment');
		console.log('diewithoutres');
		console.log('disablekey');
		console.log('timemode');
		console.log('minihack');
		console.log('gravity');
		console.log('bot');
		console.log('jumphigh');
		console.log('dietocrashgame');
		console.log('superjump');
		console.log('jumptodeldino');
		console.log('swapbutton');
		console.log('superhackloadnoises');
		console.log('deathsound');
	}
	else if (help == 'reset') {
		console.log('reset some functions: \n achivment \n death \n speed \n gravity \n key')
	}
	else if (help == 'sub') {console.log('open my youtube channel')}
	else if (help == 'instantpoints') {
		console.log("giving you free amount of points wile playing \n example: instentpoints(100);")
	}
	else if (help == 'speed') {
				console.log("giving you amount of speed wile playing \n example: speed(100);")
	}
	else if (help == 'discacbirpsp') {
				console.log("disable cactuses, birds and giving you speed \n dis=disable cac=cactuses bir=birds p=plus sp=speed")
	}
	else if (help == 'dietogoback') {
		console.log("make that when you die, you not die, \n you just get negitive speed \ make you walk back")
	}
	else if (help == 'sucide') {
		console.log("kills you \n you can type loop on the type\n place to make you die in loop \n here's an example: sucide('loop');")
	}
	else if (help == 'troll') {
		console.log("make a troll: swap your button, make you always be in 0 points\n and says that you got hacked")
	}
	else if (help == 'invinsible') {
		console.log("make you not die even if you hit cactuses and birs")
	}
	else if (help == 'invinsibleQmark') {
		console.log("that's mean invinsible Question mark \n or invinsible? \n this is does that when you get hit, it will say \n thing like he talking to god \n and after that make you invinsible")
	}
	else if (help == 'achivment') {
		console.log("when you get to 100 or 200.... on score, \n it will do a sound. \n in this commend, you choose when it will do the sound \n every time it getting up by 10, 17 and more.")
		console.log("you can type always or never if you want \n that it will never do the sound or always do the sound \n here's an example: achivment('always');")
	}
	else if (help == 'diewithoutres') {
		console.log("this is make that when you die, it will restart your points and do the sound but you still keep going on the game")
	}
	else if (help == 'disablekey') {
		console.log("this will disable the key you choose. jump or duck or both [duck is the arrow-down key] \n here's an example: disablekey('jump'); \n to make both you need to type JD")
	}
	else if (help == 'timemode') {
		console.log("change the time to day or night. \n the time you choosed will be forever and cannot be changed \n here's an example: timemod('day');")
	}
	else if (help == 'minihack') {
		console.log("giving you cool mini hack to look like a hacker")
	}
	else if (help == 'gravity') {
		console.log("allow you to select the amount of the gravity of dino \n here's an example: gravity(100);")
	}
	else if (help == 'bot') {
		console.log("active a bot that jump for you! [credit for: JIS Tech Logs]")
	}
	else if (help == 'jumphigh') {
				console.log("allow you to select how high dino will jump \n here's an example: jumphigh(100);")
	}
	else if (help == 'dietocrashgame') {
		console.log("it make's that when you die, it will crash the game")
	}
	else if (help == 'superjump') {
		console.log("make dino's jump neing higher and longer. it's like a mini jump hack")
	}
	else if (help == 'jumptodeldino') {
		console.log("this make's that you jump so high and fall so slow, \n that when you jump you delete dino instantly forever")
	}
	else if (help == 'swapbutton') {
		console.log("swap jump button with duck button and enter with shift")
	}
	else if (help == 'superhackloadnoises') {
		console.log("make a super hack of a lot of hacks at the same time")
	}
	else if (help == 'deathsound') {
		console.log("allow to you to change the death sound. the sound of score/achivment (the sound still called score), \n the sound of death and the sound of jump \n here's an example: deathsound('score');")
	}
	else if (help == 'help') {
		console.log("help you about commends. \n here's an example: help('speed'); \n and if you type: help('all'); it will show all the commends!");
	}
	else if (help == 'hidehacked') {
		console.log ("hide or show the 'hacked' text")
	}
	else if (help == 'jump') {
		console.log ("make dino jump. the down side is that it will just press for you on the keyboard\n so you will have to active that somehow wile the game playing.\n if you type: jump('loop');, it will make dino always jump")
	}
	else if (help == 'duck') {
		console.log ("make dino duck. the down side is that it will just press for you on the keyboard\n so you will have to active that somehow wile the game playing.\n if you type: duck('loop');, it will make dino always duck")
	}
	else {
		console.log ("sorry, '"+help+"' is not exist or available commend. try: help('all');")
	}
};

console.log("ㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\n")

console.log ("hi! thank you for seeing my hacks. please subscribe to my channel by typing: sub(); \n and if you want to disable the hacked text, type: hidehacked('hide');");

console.log ("when you type a type for a function you need to add '' on the start and in the end.\n and you have to add (); on the end \n here's an example of (); : dietocrashgame(); \n and here's an example of adding '': achivment('always'); \n [this is only for anything else then numbers]")

console.log ("type: help('*commend*'); to see the help of a *commend*. if you type: help('all'); it will show all the commends!");
