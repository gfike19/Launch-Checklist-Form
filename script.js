// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.querySelector("form");
   let formSubmit = document.getElementById("formSubmit");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatusCheck = document.getElementById("launchStatusCheck");
   let launchStatus = document.getElementById("launchStatus");

   form.addEventListener("submit", function(event) {

      if(pilotName.value == "" || copilotName.value == "" || fuelLevel.value == "" || cargoMass.value ==""){
         alert("All fields are required!");
         event.preventDefault();
      }

      if(isNaN(pilotName.value) == false) {
         alert("Pilot name cannot be a number");
         event.preventDefault();
      }

      if(isNaN(copilotName.value) == false) {
         alert("Copilot name cannot be a number");
         event.preventDefault();
      }

      if(isNaN(fuelLevel.value) == true){
         alert("Fuel level must be a number");
         event.preventDefault();
      }

      if(isNaN(cargoMass.value) == true){
         alert("Cargo mass must be a number");
         event.preventDefault();
      }

      if(fuelLevel.value < 10000) {
         pilotStatus.innerHTML = `${pilotName.value} ready`;
         copilotStatus.innerHTML = `${copilotName.value} ready`;
         fuelStatus.innerHTML = "Inadequate fuel level present";

         if(cargoMass.value > 10000) {
            cargoStatus.innerHTML = "Cargo mass too high";
         }

         faultyItems.style.visibility = "visible";
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         event.preventDefault();
      } else {
         pilotStatus.innerHTML = `${pilotName.value} ready`;
         copilotStatus.innerHTML = `${copilotName.value} ready`;
         faultyItems.style.visibility = "visible";
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle ready for launch";
         event.preventDefault();
      }


   })
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
