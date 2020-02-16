import * as THREE from 'three';
import {ResizeObserver} from 'resize-observer';

var camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.Renderer;
var geometry: THREE.Geometry;
var material: THREE.Material;
var mesh: THREE.Mesh;
var workspace: HTMLElement;

function init() {

    camera = new THREE.PerspectiveCamera(70, 1, 0.01, 10);
    camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({antialias: true});
    let w = document.getElementById("workspace");
    if (w == null) return;
    workspace = w;
    workspace.appendChild(renderer.domElement);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(workspace);

    resize();
}

function resize() {
    renderer.setSize(workspace.offsetWidth, workspace.offsetHeight);
    camera.aspect = workspace.offsetWidth / workspace.offsetHeight;
    camera.updateProjectionMatrix();
}

function animate() {

    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera);
}

export function start() {
    init();
    animate();
}

