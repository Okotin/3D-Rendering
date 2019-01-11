class Renderer {

	constructor(scene, cvs) {

		this.scene = scene;
		this.cvs = cvs;

	}


	render() {

		const ctx = this.cvs.getContext("2d");

		const cam = this.scene.activeCam;


		for (let i = 0; i < this.scene.world.objects.length; i++) {

			const obj = this.scene.world.objects[i];
			const mesh = obj.getMesh();

			const vertsOnScreen = [];

			for (let j = 0; j < mesh.vertices.length; j++) {

				const vert = mesh.vertices[j];

				const vertRel = vert.pos.subtract(cam.pos);

				

			}

		}



		for (let i = 0; i < this.scene.gui.items.length; i++) {

			const item = this.scene.gui.items[i];

		}

	}


}