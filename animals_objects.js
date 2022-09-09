"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];
const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

function start() {
  console.log("ready");
  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    const animal = Object.create(Animal);

    console.log("dyr: ", animal);
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    // TODO: MISSING CODE HERE !!!
    let fullname;

    fullname = jsonObject.fullname;
    let fullnameArr = fullname.split(" ");
    let name = fullnameArr[0];
    animal.name = name;

    let desc = fullnameArr[1] + " " + fullnameArr[2];
    animal.desc = desc;

    let type = fullnameArr[3];
    animal.type = type;

    console.log(fullnameArr);
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
