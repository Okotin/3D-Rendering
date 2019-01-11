class SceneUpdater {
	
	constructor(scene, frequency, ud, rd) {

		this.scene = scene;

		this.frequency = frequency;

		this.updateDelay = ud;
		this.renderDelay = rd;


		this.updateTick = 0;
		this.renderTick = 0;


		this.loopId = undefined;

	}


	tick(updater) {
		return function() {

			updater.updateTick++;
			updater.renderTick++;

			if (updater.updateTick == updater.updateDelay) {
				updater.scene.update();
				updater.updateTick = 0;
			}

			if (updater.renderTick == updater.renderDelay) {
				updater.scene.renderer.render();
				updater.renderTick = 0;
			}

		}
	}


	startLoop() {
		this.loopId = setInterval(this.tick(this), 1000 / this.frequency);
	}

	stopLoop() {
		clearInterval(this.loopId);
		this.loopId = undefined;
	}


}