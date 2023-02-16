const numOfClicks = 0;
document.getElementById("btntry1").addEventListener("click", function() {
	numOfClicks = numOfClicks + 1;
	document.getElementById("aaaaa1")innerHTML = numOfClicks;
});
const bg = document.getElementById('bg');
const body = document.getElementById('body');
bg.addEventListener('input', function(e) {
	body.style.backgroundColor = bg.value;
})