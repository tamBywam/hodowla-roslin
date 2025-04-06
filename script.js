const plantTypes = ['images/plant1.png', 'images/plant2.png', 'images/plant3.png'];
let garden = [[], []];
const bedLimit = 2;
const maxPlantsPerBed = 3;

function showMessage(text) {
  const msg = document.getElementById('message');
  msg.textContent = text;
  setTimeout(() => msg.textContent = '', 3000);
}

function selectPlant(type) {
    createPlant(type);
  }

function createPlant(type = null) {
  for (let i = 0; i < bedLimit; i++) {
    if (garden[i].length < maxPlantsPerBed) {
      const plant = {
        id: garden[i].length,
        type: type || plantTypes[Math.floor(Math.random() * plantTypes.length)],
        waterLevel: 0,
        size: 1,
        dead: false
      };
      garden[i].push(plant);
      renderGarden();
      return;
    }
  }
  showMessage('Nie można mieć więcej niż 6 roślin.');
}

function renderGarden() {
  for (let i = 0; i < bedLimit; i++) {
    const container = document.getElementById(`bed-${i}`);
    container.innerHTML = '';
    garden[i].forEach((plant, index) => {
      const plantDiv = document.createElement('div');
      plantDiv.className = 'plant-container';
      const img = document.createElement('img');
      img.src = plant.type;
      img.className = 'plant';
      if (plant.dead) img.classList.add('withered');
      img.style.transform = `scale(${plant.size})`;
      img.alt = 'plant';
      plantDiv.appendChild(img);
      container.appendChild(plantDiv);
    });
  }
}

function waterPlants() {
  garden.flat().forEach(plant => {
    if (plant.dead) return;
    plant.waterLevel++;
    plant.size += 0.1;
    if (plant.waterLevel > 10) {
      plant.dead = true;
    } else if (plant.size >= 0.6 * window.innerHeight / 200) {
      showMessage('Roślina osiągnęła maksymalną wysokość');
      plant.size = 0.6 * window.innerHeight / 200;
    } else if (plant.size >= 2) {
      showMessage('Roślina osiągnęła maksymalną wysokość');
    }
  });
  renderGarden();
}

function addFertilizer() {
  createPlant();
}

function rescuePlants() {
  let rescued = false;
  garden.flat().forEach(plant => {
    if (plant.dead) {
      plant.dead = false;
      plant.waterLevel = 0;
      plant.size = 1;
      rescued = true;
    }
  });
  if (rescued) renderGarden();
}

function cutPlant() {
  const num = prompt('Podaj numer rośliny do ścięcia (0 - ' + (garden.flat().length - 1) + '):');
  const index = parseInt(num);
  if (isNaN(index) || index < 0 || index >= garden.flat().length) return;

  const all = garden.flat();
  if (all.length === 1) {
    const p = all[0];
    p.waterLevel = 0;
    p.dead = false;
    p.size = 1;
  } else {
    for (let i = 0, count = 0; i < bedLimit; i++) {
      if (index < count + garden[i].length) {
        garden[i].splice(index - count, 1);
        break;
      }
      count += garden[i].length;
    }
  }
  renderGarden();
}

window.onload = () => {
  renderGarden();
};