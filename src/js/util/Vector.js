class Vector {
	
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}


	add(vect) {
		return new Vector(this.x + vect.x, this.y + vect.y, this.z + vect.z);
	}

	subtract(vect) {
		return new Vector(this.x - vect.x, this.y - vect.y, this.z - vect.z);
	}



	hypot() {
		return Math.hypot(this.x, this.y, this.z);
	}



	tanYaw() {
		return this.y / this.x;
	}

	tanPitch() {
		return this.z / Math.hypot(this.x, this.y);
	}


}