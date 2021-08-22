const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
planetEl.innerHTML = "<h1>Planets</h1>"
planets.forEach(planet => {
    planetEl.innerHTML += ` ${planet} ` 
}); 

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
    const capPlanets = planets.map(planet => {
       return planet.charAt(0).toUpperCase() + planet.substr(1).toLowerCase()
    }); 
    console.log(capPlanets)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const ePlanets = planets.filter(planet =>{

    let hasE = false
    
    if(planet.includes('e' || 'E')) {
        hasE = true
    }
    return hasE
});

console.log(ePlanets)