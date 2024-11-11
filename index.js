let user_Input1 = document.getElementById('user_input1');
let plant_list = document.getElementById('output1');


let plants_owned = JSON.parse(localStorage.getItem('plants_owned')) || [];


function displayPlants() {
    plant_list.innerHTML = "";  
    plants_owned.forEach((plant, index) => {
        let plantItem = document.createElement("div");
        plantItem.classList.add("plant-item");
        plantItem.innerHTML = `${index + 1}. ${plant.name} ${plant.dateAdded} <button class="delete-btn" onclick="deletePlant(${index})">X</button>`;
        plant_list.appendChild(plantItem);
    });
}


function new_plants() {
    let plant_added = user_Input1.value;
    if (plant_added) {
        let dateAdded = new Date().toLocaleDateString();
        let plant = { name: plant_added, dateAdded: dateAdded };
        plants_owned.push(plant);  
        localStorage.setItem('plants_owned', JSON.stringify(plants_owned));  // Update localStorage
        displayPlants();  
        user_Input1.value = '';
    }
}


function deletePlant(index) {
    plants_owned.splice(index, 1); 
    localStorage.setItem('plants_owned', JSON.stringify(plants_owned)); 
    displayPlants(); 
}


displayPlants();
