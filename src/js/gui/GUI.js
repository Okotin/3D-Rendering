class GUI {
	
	constructor() {
		this.items = [];
	}


	update() {
		for (let i = 0; i < this.items.length; i++) {
			this.items[i].onUpdate();
		}
	}


}