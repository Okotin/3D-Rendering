class World {
	
	constructor() {

		this.objects = [];
		this.activeCam = undefined;

	}


	update() {
		for (let i = 0; i < this.objects.length; i++) {
			this.objects[i].onUpdate();
		}
	}


	addObj(obj) {
		this.objects.push(obj);
		obj.world = this;
	}

	remObj(obj) {
		this.objects.splice(this.objects.indexOf(obj), 1);
	}


}