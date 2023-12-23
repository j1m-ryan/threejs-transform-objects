import * as THREE from "three";

function main() {
  const canvas = document.getElementById("c");
  if (!canvas) {
    alert("canvas not found");
    return;
  }

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 50);
  camera.position.z = 2;
  camera.position.x = 0.1;
  camera.position.y = 0.1;

  const scene = new THREE.Scene();

  const material = new THREE.MeshPhongMaterial({ color: "red" });

  const geometry = new THREE.BoxGeometry();

  const group = new THREE.Group();
  scene.add(group);

  const cube1 = new THREE.Mesh(geometry, material);
  const cube2 = new THREE.Mesh(geometry, material);
  cube2.position.x = 2;

  group.add(cube1);
  group.add(cube2);
  const axesHelper = new THREE.AxesHelper();
  scene.add(axesHelper);

  const color = 0xffffff;
  const intensity = 3;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time: number) {
    time *= 0.001;
    // cube.rotation.x = time;
    // cube.rotation.y = time;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
