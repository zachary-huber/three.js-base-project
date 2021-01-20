/**********************************
* Zachary Huber - 2021            *
* Default project for three.js    *
**********************************/

// defining the scene and the camera  
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// defining the renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x2f2fff, 0.95); // color and transparency
// renderer.background = new THREE.Color( 0xffff00 );
// adding the renderer to the body
document.body.appendChild( renderer.domElement ); 

// Adds a cube to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0xf9ff00 } ); // cube color
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Adds some lines to the scene
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x110000 } ) ); // line color
scene.add( line );

// set camera position Z axis (distance from scene center)
camera.position.z = 5;

// Actually animates/renders the scene that we defined above
function animate() {
  requestAnimationFrame( animate );
  // Rotating the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  cube.scale.x += 0.01;
  cube.scale.x %= 2 + 1;
  cube.scale.y += 0.01;
  cube.scale.y %= 2 + 1;
  cube.scale.z += 0.01;
  cube.scale.z %= 2 + 1;

  line.rotation.x += 0.01;
  line.rotation.y += 0.01;
  line.rotation.z += 0.01;

  line.scale.x += 0.01;
  line.scale.x %= 2 + 1;
  line.scale.y += 0.01;
  line.scale.y %= 2 + 1;
  line.scale.z += 0.01;
  line.scale.z %= 2 + 1;

	renderer.render( scene, camera );
}
animate();