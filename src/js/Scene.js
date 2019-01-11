class Scene {
	
	constructor() {

		this.world = undefined;
		this.gui = undefined;

		this.renderer = undefined;

		this.kbTracker = undefined;

	}


	update() {
		this.world.update();
		this.gui.update();
	}


}