// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.querySelector("form");
   let pilotName = "";
   let copilotName = "";
   let fuelLevel = "";
   let cargoMass = "";
   let faultyItems = "";
   let formSubmit = document.getElementById("formSubmit");

   pilotName = document.querySelector("input[name=pilotName]");
   copilotName = document.querySelector("input[name=copilotName]");
   fuelLevel = document.querySelector("input[name=fuelLevel]");
   cargoMass = document.querySelector("input[name=cargoMass]");
   faultyItems = document.getElementById("faultyItems");

   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let faultyItems = document.getElementById("faultyItems");
   let launchStatusCheck = document.getElementById("launchStatusCheck");
   let launchStatus = document.getElementById("launchStatus");

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
