function main() {

	const cvs = document.getElementById("cvs");
	const ctx = cvs.getContext("2d");

	initCanvas();

	window.onresize = initCanvas;

	function initCanvas() {
		cvs.width = window.innerWidth;
		cvs.height = window.innerHeight;
	}

	testRun();

}

window.onload = main;