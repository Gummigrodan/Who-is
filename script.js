const person1 = document.getElementById("button1");
const person2 = document.getElementById("button2");

let tjejer_i_klass = [
    "Khiara",
    "Lovis",
    "Saga", 
    "Yuni", 
    "Paulina",
    "Amélie",
    "Alvida",
    "Elwira",
    "Lova",
    "Alma",
    "Sarah",
    "Karin",
    "Alvilde",
    "Doris"
]

function choosePerson () {
    let index1 = Math.floor(Math.random() * tjejer_i_klass.length);
    let index2;

    do {
        index2 = Math.floor(Math.random() * tjejer_i_klass.length);
    } while (index1 === index2);

    let namn1 = tjejer_i_klass[index1];
    let namn2 = tjejer_i_klass[index2];

    while (index1 == index2) {
        choosePerson()
        console.log("Trying again")
    }

    person1.textContent = namn1;
    person2.textContent = namn2;
}
choosePerson()