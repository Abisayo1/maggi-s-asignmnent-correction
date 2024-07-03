let animals = [
    { name: 'Lion', img: 'animal1.jpg' },
    { name: 'Tiger', img: 'animal2.jpg' },
    { name: 'Elephant', img: 'animal3.jpg' },
    { name: 'Giraffe', img: 'animal4.jpg' },
    { name: 'Zebra', img: 'animal5.jpg' }
];

let currentIndex = 0;

function flipAnimal() {
    currentIndex = (currentIndex + 1) % animals.length;
    document.getElementById('animalImage').src = animals[currentIndex].img;
    document.getElementById('animalName').textContent = animals[currentIndex].name;
}
