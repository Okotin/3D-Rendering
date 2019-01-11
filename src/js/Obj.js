class Obj {
	
	constructor(name, x, y, z, yaw, pitch, mesh) {

		this.name = name;
		this.pos = new Vector(x, y, z);
		this.yaw = yaw;
		this.pitch = pitch;
		this.mesh = mesh;

		this.world = undefined;
	}


	onUpdate() {}


	getMesh() {
		return this.mesh;
	}


}