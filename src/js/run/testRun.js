function testRun() {

	const scene = new Scene();
	const world = new World();
	const gui = new GUI();

	const sceneUpdater = new SceneUpdater(scene, 1, 1, 1);

	const renderer = new Renderer(scene, cvs);
	const kbTracker = new KeyboardTracker(cvs);

	scene.world = world;
	scene.gui = gui;

	scene.renderer = renderer;
	scene.kbTracker = kbTracker;

	
	const cam = new Camera(-10, 0, 0, 0, 0, 0, 90);
	world.addObj(cam);
	scene.activeCam = cam;



	const cubeMesh = {
					v1: new Vertex(-1, -1,  1),
					v2: new Vertex(-1,  1,  1),
					v3: new Vertex(-1,  1, -1),
					v4: new Vertex(-1, -1, -1),
					v5: new Vertex( 1, -1,  1),
					v6: new Vertex( 1,  1,  1),
					v7: new Vertex( 1,  1, -1),
					v8: new Vertex( 1, -1, -1),

					f1: new Face(this.v1, this.v2, this.v3, this.v4),
					f2: new Face(this.v1, this.v2, this.v6, this.v5),
					f3: new Face(this.v2, this.v3, this.v7, this.v6),
					f4: new Face(this.v3, this.v4, this.v8, this.v7),
					f5: new Face(this.v4, this.v1, this.v5, this.v8),
					f6: new Face(this.v5, this.v6, this.v7, this.v8)
				};

	const cube = new Obj("Cube", 0, 0, 0, 0, 0,
						new Mesh([cubeMesh.v1, cubeMesh.v2, cubeMesh.v3, cubeMesh.v4, cubeMesh.v5, cubeMesh.v6, cubeMesh.v7, cubeMesh.v8],
								 [],
								 [cubeMesh.f1, cubeMesh.f2, cubeMesh.f3, cubeMesh.f4, cubeMesh.f5, cubeMesh.f6]));


	sceneUpdater.startLoop();

}