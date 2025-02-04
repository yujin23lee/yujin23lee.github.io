import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//Define elements: scene (required), renderder (required), camera (required), a model loader (filetype specific), lights, controls (for mouse and keyboard interaction)
const div = document.querySelector('.threewrapper');
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const loader = new GLTFLoader();
const light = new THREE.AmbientLight(0xffffff, 3); // Soft white light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
const controls = new OrbitControls( camera, renderer.domElement );
let loadedModel;
function setScene() {
   //Enable shadows on renderer
   renderer.shadowMap.enabled = true;

   //Set renderer size to window size, could be a number if you want it in x pixels
   renderer.setSize( window.innerWidth, window.innerHeight );

   //Add the two lights we defined to the scene, set position of directional light
   scene.add(light);
   scene.add(directionalLight);

   //Add a background color
   scene.background = new THREE.Color( 'white' );

   //Set camera position
   camera.position.set(0.5, 0, 0.5);

   //Set directional light position
   directionalLight.position.set(5, 10, 7.5);
   directionalLight.castShadow = true;
}
function addPlane() {
   //Add a plane
   const geometry = new THREE.PlaneGeometry( 10, 10 );
   const material = new THREE.MeshStandardMaterial({ color: 'blue', side: THREE.DoubleSide, roughness: 0, metalness: 0 });
   const plane = new THREE.Mesh( geometry, material );
   plane.rotation.x = Math.PI / 2;
   plane.receiveShadow = true;
   scene.add( plane );
}
function addModel() {
   //Load our model
   loader.load( '01.glb', function ( gltf ) {
       loadedModel = gltf.scene;
       loadedModel.traverse((obj)=> {
           //obj.material = new THREE.MeshStandardMaterial({color:'blue',wireframe: true})
       })
       loadedModel.position.set(0,0.4,0);
       loadedModel.scale.set(4, 4, 4);
       scene.add( gltf.scene );
   }, undefined, function ( error ) {
       console.error( error );
   } );
}

setScene();
addModel();

function animate() {
   requestAnimationFrame(animate);
   if (loadedModel) {
       loadedModel.rotation.y += 0.01; // Rotate around the Y-axis
   }
   controls.update();
   renderer.render(scene, camera);
}
animate();
div.appendChild( renderer.domElement );