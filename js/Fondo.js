//Escenarios
let scene;

function init(){

const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();

loader.load("../Figuras3D/FondoGravitar.jpg", function(texture){

scene.background = texture;
});
//Camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1 );
//RENDER
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

const luz = new THREE.DirectionalLight(0xffffff, 6);

luz.position.set(4, 8, 4);

scene.add(luz)
//Figuras 3D

const loader1 = new THREE.GLTFLoader();
loader1.load("../Figuras3D/Dron/scene.gltf", function(gltf){
    dron = gltf.scene.children[0];
    dron.scale.set(0.2, 0.2, 0.2);
    scene.add(gltf.scene)
    renderer.render(scene, camera);
    dron.position.y = -1
    dron.position.x = -20
})

const loader2 = new THREE.GLTFLoader();
loader2.load("../Figuras3D/JefeMalvado/scene.gltf", function(gltf){
    malvado = gltf.scene.children[0];
    malvado.scale.set(4.7, 4.7, 4.7);
    scene.add(gltf.scene)
    renderer.render(scene, camera);
    malvado.position.y = -11.5
    malvado.position.x = 5
})

const loader3 = new THREE.GLTFLoader();
loader3.load("../Figuras3D/SecretarioMalvado/scene.gltf", function(gltf){
    secretario = gltf.scene.children[0];
    secretario.scale.set(3.6, 3.6, 3.6);
    scene.add(gltf.scene)
    renderer.render(scene, camera);
    secretario.position.y = -7
    secretario.position.x = 29
})

const loader4 = new THREE.GLTFLoader();
loader4.load("../Figuras3D/PersonajeBueno/scene.gltf", function(gltf){
    bueno = gltf.scene.children[0];
    bueno.scale.set(0.9, 0.9, 0.9);
    scene.add(gltf.scene)
    renderer.render(scene, camera);
    bueno.position.y = -7
    bueno.position.x = -4
})

const loader5 = new THREE.GLTFLoader();
loader4.load("../Figuras3D/Burbujas/scene.gltf", function(gltf){
    bueno = gltf.scene.children[0];
    bueno.scale.set(8.9, 8.9, 8.9);
    scene.add(gltf.scene)
    renderer.render(scene, camera);
    bueno.position.y = 1
    bueno.position.x = -24
})

//Controles
var control = new THREE.OrbitControls(camera, renderer.domElement)
control.maxDistance = 25
control.minDistance = 2

camera.position.z = 20;

//Funciones
function animate() {
requestAnimationFrame( animate );
renderer.render( scene, camera, );
}
animate();
}
init();