function setup() {
  // No es necesario el canvas de p5.js, pero puedes usarlo si necesitas
  // createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Aquí puedes implementar lógica adicional si es necesario
}

// Función para cambiar color de un objeto
function cambiarColor(entity) {
  entity.setAttribute('material', 'color', '#' + Math.floor(Math.random()*16777215).toString(16));
}

// Capturar evento del ratón
document.addEventListener('mouseenter', (event) => {
  const entity = document.querySelector('a-entity[gltf-model]');
  cambiarColor(entity);
});

// Capturar evento de teclas
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    const entity = document.querySelector('a-entity[gltf-model]');
    entity.object3D.scale.x += 0.1;
    entity.object3D.scale.y += 0.1;
    entity.object3D.scale.z += 0.1;
  } else if (event.key === 'ArrowDown') {
    const entity = document.querySelector('a-entity[gltf-model]');
    entity.object3D.scale.x -= 0.1;
    entity.object3D.scale.y -= 0.1;
    entity.object3D.scale.z -= 0.1;
  }
});
