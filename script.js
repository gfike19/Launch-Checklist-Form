// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      let pilotRdy = false;
      let coRdy = false;
      let fuelRdy = false;
      let cargoRdy = false;
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         // stop the form submission
         event.preventDefault();
      }

      if(isNaN(fuelLevel.value) == true){
         alert("Fuel must be numeric")
         event.preventDefault();
      } else{
         if(fuelLevel.value < 10000){
            faultyItems.style.visibility = "visible";
            
         }
      }

      if(isNaN(cargoMass.value) == true){
         alert("Cargo Mass must be numeric")
         event.preventDefault();
      }

      if(isNaN(copilotName.value) == false){
         alert("Co pilot name must be a string")
         event.preventDefault();
      } else {
         let copilotStatus = document.getElementById("copilotStatus");
         copilotStatus.innerHTML = `${copilotName.value}`;
      }

      if(isNaN(pilotName.value) == false){
         alert("Pilot name must be a string")
         event.preventDefault();
      } else {
         let pilotStatus = document.getElementById("pilotStatus");
         pilotStatus.innerHTML = `${pilotName.value}`;
      }

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
