/**********************************
* Zachary Huber - 2021            *
* Default project for three.js    *
**********************************/

// setting up the scene and the camera  
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// setting up the renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x2f2fff, 0.95); // color and transparency
document.body.appendChild( renderer.domElement ); 

// adding a cube to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0xf9ff00 } ); // cube color
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// adding lines to the scene
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x110000 } ) ); // line color
scene.add( line );

// parameter controllers
camera.position.z = 5;
moveSpeed = 0.015;
angle = 0;
maxScale = 1.75;
minScale = 0.5;

// Actually animates/renders the scene that we defined above
function animate() {
  requestAnimationFrame( animate );
  angle += moveSpeed;
  scaleRot = Math.sin(angle) * maxScale + minScale;

  cube.rotation.x += moveSpeed;
  cube.rotation.y += moveSpeed;
  cube.rotation.z += moveSpeed;

  cube.scale.x = scaleRot
  cube.scale.y = scaleRot
  cube.scale.z = scaleRot

  line.rotation.x += moveSpeed;
  line.rotation.y += moveSpeed;
  line.rotation.z += moveSpeed;

  line.scale.x = scaleRot
  line.scale.y = scaleRot
  line.scale.z = scaleRot

	renderer.render( scene, camera );
}
animate();