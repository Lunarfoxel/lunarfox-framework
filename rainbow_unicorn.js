
//LunarFox Framework (C) Copyright 2017 Michael Ilic'. All Rights Reserved.
//
//Alpha Stage Version, all modules to be consolidated into a single js file and minified
//
//Rainbow Unicorn module [Version 0.1]
//
//
//This version allows the user to set the time of the color changes and the element ID 
//Future enhancements will include jQuery animations for smoother color transitions

function makeRainbow(element, timer) {
  
  //Set variables
  
  var rainbow = ["tomato", "orange", "yellow", "green", "dodgerblue", "purple", "violet"];
  var rainbowLength = rainbow.length;
  var i = 0;
  
  //Check if both arguments are valid
  
  if (!element || !timer) {
    alert("Error: invalid makeRainbow() arguments");
  }
  
  setInterval(function() {
        
        document.getElementById(element).style.background = rainbow[i]; //Set element color
        
        i += 1; //Increment counter
        
        if (i == rainbowLength) { i = 0; } //Reset the counter
    
  }, timer);
    
}; 

function makeSparkles(element, amount, color) {
  
  //You would not believe your eyes, if ten million fireflies...
  
};

function makeSnow() {
  
  //Does not use arguments, only snows over the entire page
  //Let it snow, let it snow, can't hold it back anymore...
  
};

function makeRain(direction, amount) {
  
  //It's raining...
  
};

function makeMagic(element, amount, color) {
  
  //Magical rainbow sparkle effect on an element
  
};
