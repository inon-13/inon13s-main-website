const volumeInputtwo = document.getElementById("volume");
const volumeNumbertwo = document.getElementById("volumenumber");
const volumeResettwo = document.getElementById("volumereset");


volumeInputtwo.addEventListener("input", function() {
  volumeNumbertwo.value = volumeInputtwo.value;
});

volumeNumbertwo.addEventListener("input", function() {
  volumeInputtwo.value = volumeNumbertwo.value;
});

volumeResettwo.addEventListener("click", function() {
    volumeInputtwo.value = 0.5;
    volumeNumbertwo.value = 0.5;
});

const rateInputtwo = document.getElementById("rate");
const rateNumbertwo = document.getElementById("ratenumber");
const rateResettwo = document.getElementById("ratereset");

rateInputtwo.addEventListener("input", function() {
  rateNumbertwo.value = rateInputtwo.value;
});

rateNumbertwo.addEventListener("input", function() {
  rateInputtwo.value = rateNumbertwo.value;
});

rateResettwo.addEventListener("click", function() {
    rateInputtwo.value = 1;
    rateNumbertwo.value = 1;
});

const pitchInputtwo = document.getElementById("pitch");
const pitchNumbertwo = document.getElementById("pitchnumber");
const pitchResettwo = document.getElementById("pitchreset");

pitchInputtwo.addEventListener("input", function() {
  pitchNumbertwo.value = pitchInputtwo.value;
});

pitchNumbertwo.addEventListener("input", function() {
  pitchInputtwo.value = pitchNumbertwo.value;
});

pitchResettwo.addEventListener("click", function() {
    pitchInputtwo.value = 1;
    pitchNumbertwo.value = 1;
});

var line = document.getElementsByClassName("line");

for (let i = 0; i < line.length; i++) {
  line[i].textContent = "------------------------------------------------------------------------------------------------------------------------------------------------------------";
}

var supportMsg = document.getElementById('msg');

if ('speechSynthesis' in window) {
	supportMsg.innerHTML = ' it will <strong>NOT</strong> say it, and Your computer <strong>support</strong> speech synthesis soo, have fun! :D';
} else {
	supportMsg.innerHTML = ' it will <strong>NOT</strong> say it, and your computer <strong>does not support</strong> speech synthesis, sorry :(';
	supportMsg.classList.add('not-supported');
}


// Get the 'speak' button
var button = document.getElementById('speak');
var buttonloop = document.getElementById('speakloop');

// Get the text input element.
var speechMsgInput = document.getElementById('speech-msg');

// Get the voice select element.
var voiceSelect = document.getElementById('voice');

// Get the attribute controls.
var volumeInput = document.getElementById('volume');
var rateInput = document.getElementById('rate');
var pitchInput = document.getElementById('pitch');


// Fetch the list of voices and populate the voice options.
function loadVoices() {
  // Fetch the available voices.
	var voices = speechSynthesis.getVoices();
  
  // Loop through each of the voices.
	voices.forEach(function(voice, i) {
    // Create a new option element.
		var option = document.createElement('option');
    
    // Set the options value and text.
		option.value = voice.name;
		option.innerHTML = voice.name;
		  
    // Add the option to the voice selector.
		voiceSelect.appendChild(option);
	});
}

// Execute loadVoices.
loadVoices();

// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function(e) {
  loadVoices();
};


// Create a new utterance for the specified text and add it to
// the queue.
function speak(text) {
  // Create a new instance of SpeechSynthesisUtterance.
	var msg = new SpeechSynthesisUtterance();
  
  // Set the text.
	msg.text = text;
  
  // Set the attributes.
	msg.volume = parseFloat(volumeInput.value);
	msg.rate = parseFloat(rateInput.value);
	msg.pitch = parseFloat(pitchInput.value);
  
  // If a voice has been selected, find the voice and set the
  // utterance instance's voice attribute.
	if (voiceSelect.value) {
		msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voiceSelect.value; })[0];
	}
  
  // Queue this utterance.
	window.speechSynthesis.speak(msg);
}
// Set up an event listener for when the 'speak' and 'speakloop' button is clicked.
var pButton = document.getElementById("pause");
var rButton = document.getElementById("resume");
var speechSynthesis = window.speechSynthesis;


button.addEventListener('click', function(e) {
		if (speechMsgInput.value.length > 0) {
		speak(speechMsgInput.value);
	};
	button.innerHTML= '<ion-icon name="mic"></ion-icon>Speak';
	rButton.innerHTML = '<ion-icon name="play-outline"></ion-icon>Resume';
	rButton.disabled = true;
	pButton.innerHTML = '<ion-icon name="pause-outline"></ion-icon>Pause';
	pButton.disabled = false;
	pButton.style.backgroundColor = 'blue';
	rButton.style.backgroundColor = 'dodgerblue';
	pButton.addEventListener("click", function() {
    	if (speechSynthesis.speaking) {
    		speechSynthesis.pause();
			pButton.style.backgroundColor = 'dodgerblue';
			pButton.disabled = true;
			rButton.style.backgroundColor = 'blue';
			rButton.disabled = false;
    	}
    });

    rButton.addEventListener("click", function() {
    	if (speechSynthesis.paused) {
    		speechSynthesis.resume();
			rButton.style.backgroundColor = 'dodgerblue';
			rButton.disabled = true;
			pButton.style.backgroundColor = 'blue';
			pButton.disabled = false;
    	}
    });
});

buttonloop.addEventListener('click', function(e) {
	if (speechMsgInput.value.length > 0) {
		setInterval (function(){speak(speechMsgInput.value)})
	}
	buttonloop.innerHTML = '<ion-icon name="mic"></ion-icon><ion-icon name="infinite"></ion-icon>Speak, but in loop';
	rButton.innerHTML = '<ion-icon name="pause-outline"></ion-icon>Resume';
	rButton.disabled = true;
	pButton.innerHTML = '<ion-icon name="pause-outline"></ion-icon>Pause';
	pButton.disabled = false;
	pButton.style.backgroundColor = 'blue';
	rButton.style.backgroundColor = 'dodgerblue';
	pButton.addEventListener("click", function() {
    	if (speechSynthesis.speaking) {
    		speechSynthesis.pause();
			pButton.style.backgroundColor = 'dodgerblue';
			pButton.disabled = true;
			rButton.style.backgroundColor = 'blue';
			rButton.disabled = false;
    	}
    });

    rButton.addEventListener("click", function() {
    	if (speechSynthesis.paused) {
    		speechSynthesis.resume();
			rButton.style.backgroundColor = 'dodgerblue';
			rButton.disabled = true;
			pButton.style.backgroundColor = 'blue';
			pButton.disabled = false;
    	}
    });
});

// Adding loop for disable 'prbs' when it's stop speaking
setInterval (function() {if (speechSynthesis.speaking) {}
    else {
	button.innerHTML = '<ion-icon name="mic-outline"></ion-icon> - Speak';
	buttonloop.innerHTML = '<ion-icon name="mic-outline"></ion-icon> <ion-icon name="infinite"></ion-icon> - Speak, but in loop';
    	rButton.innerHTML = "Not available";
    	rButton.disabled = true;
    	pButton.innerHTML = "Not available";
    	pButton.disabled = true;
		const buttons = document.querySelectorAll('.prbs');
		
		for (const button of buttons) {
		button.style.backgroundColor = 'dodgerblue';
		}
    }
});

// Change element 'tw' to the input of the msg\'SpeechMsgInput'
const tw = document.getElementById ('tw');
speechMsgInput.addEventListener("input", function() {
	if (speechMsgInput.value.length > 0) {
		tw.innerHTML = 'when you gonna press the button on the bottom<br>of the page, the computer will say:<br>'+speechMsgInput.value;
	}
	else {
		tw.innerHTML = '';
	}
});

var saveButton = document.getElementById ('save');
var loadButton = document.getElementById ('load');
var values = document.createElement ('p')
document.body.appendChild (values)
values.hidden = true;
values.innerText = "loadSource('"+voiceSelect.value+"', "+volumeInputtwo.value+", "+rateInputtwo.value+", "+pitchInputtwo.value+", '"+speechMsgInput.value+"')";
saveButton.addEventListener('click', function(){
     navigator.clipboard.writeText(values.innerText)})
function LSA() {
  let input = prompt("Enter the saved settings string");
  if (input) {
    try {
      if (input.startsWith("loadSource(") && input.endsWith(")")) {
        let args = input.slice(11, -1).split(",");
        args = args.map(arg => arg.trim().replace(/'/g, ""));
        loadSource(...args);
      } else {
        alert("Invalid input: Please enter a valid values. if you don't know how, just press on save button to auto copy all the current values");
      }
    } catch (e) {
      alert("There was an error when trying to load the following values: '" + e.message + "'");
    }
  }
}
loadButton.addEventListener ('click', function(){
	LSA();
})
function loadSource(voiceL, volumeL, rateL, pitchL, SMI) {
    voiceSelect.value = voiceL;
    volumeInputtwo.value = volumeL;
    volumeNumbertwo.value = volumeL;
    rateInputtwo.value = rateL;
    rateNumbertwo.value = rateL;
    pitchInputtwo.value = pitchL;
    pitchNumbertwo.value = pitchL;
	 speechMsgInput.value = SMI;
}

