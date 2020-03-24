// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.querySelector("form");
   let pilotName = "";
   let copilotName = "";
   let fuelLevel = "";
   let cargoMass = "";
   let faultyItems = "";
   let formSubmit = document.getElementById("formSubmit");



   formSubmit.addEventListener("onclick", function (event) {
      pilotName = document.querySelector("input[name=pilotName]");
      copilotName = document.querySelector("input[name=copilotName]");
      fuelLevel = document.querySelector("input[name=fuelLevel]");
      cargoMass = document.querySelector("input[name=cargoMass]");
      faultyItems = document.getElementById("faultyItems");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         // stop the form submission
         event.preventDefault();
      }

      if (isNaN(fuelLevel.value) == true) {
         alert("Fuel must be numeric")
         event.preventDefault();
      }

      if (isNaN(cargoMass.value) == true) {
         alert("Cargo Mass must be numeric")
         event.preventDefault();
      }

      if (isNaN(copilotName.value) == false) {
         alert("Co pilot name must be a string")
         event.preventDefault();
      } else {
         let copilotStatus = document.getElementById("copilotStatus");
         copilotStatus.innerHTML = `${copilotName.value}`;
      }

      if (isNaN(pilotName.value) == false) {
         alert("Pilot name must be a string")
         event.preventDefault();
      } else {
         let pilotStatus = document.getElementById("pilotStatus");
         pilotStatus.innerHTML = `${pilotName.value}`;
      }

      form.addEventListener("submit", function(event) {
         let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let faultyItems = document.getElementById("faultyItems");
      let launchStatusCheck = document.getElementById("launchStatusCheck");
      let launchStatus = document.getElementById("launchStatus");

      pilotStatus.innerHTML = pilotName.value;
      copilotStatus.innerHTML = copilotName.value;

      if (fuelLevel < 10000) {
         faultyItems.style.visibility = "visible";
      }
      })
      
   });

   
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
