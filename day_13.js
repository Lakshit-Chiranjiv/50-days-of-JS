// Convert given seconds to space age on all planets of our solar system
// Instructions
// Given an age in seconds, calculate how old someone would be on:

// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
// Pluto is not a planet

// So if your function was called with 436575687 as the argument i.e spaceAge(436575687) it should return { "Mercury": 57.44, "Venus": 22.49, "Earth": 13.83, "Mars": 7.36, "Jupiter": 1.17, "Saturn": 0.47, "Uranus": 0.16, "Neptune": 0.08 }

// IMPORTANT!!

// Your spaceAge function should return the (already given) yearsInAllPlanets object after setting age on each planet (each property of the object)

// THE VALUE OF EACH PROPERTY SHOULD BE A NUMBER AND SHOULD HAVE MAXIMUM 2 DIGITS AFTER THE POINT example 4.34

const spaceAge = (seconds) => {
	const yearsInAllPlanets = {
		Mercury: 0,
		Venus: 0,
		Earth: 0,
		Mars: 0,
		Jupiter: 0,
		Saturn: 0,
		Uranus: 0,
		Neptune: 0,
	}

	// Your solution starts here
    yearsInAllPlanets.Mercury = Math.round(((seconds/31557600)/0.2408467)*100)/100;
    yearsInAllPlanets.Venus = Math.round(((seconds/31557600)/0.61519726)*100)/100;
    yearsInAllPlanets.Earth = Math.round(((seconds/31557600)/1.0)*100)/100;
    yearsInAllPlanets.Mars = Math.round(((seconds/31557600)/1.8808158)*100)/100;
    yearsInAllPlanets.Jupiter = Math.round(((seconds/31557600)/11.862615)*100)/100;
    yearsInAllPlanets.Saturn = Math.round(((seconds/31557600)/29.447498)*100)/100;
    yearsInAllPlanets.Uranus = Math.round(((seconds/31557600)/84.016846)*100)/100;
    yearsInAllPlanets.Neptune = Math.round(((seconds/31557600)/164.79132)*100)/100;

	// Your solution ends here

	return yearsInAllPlanets;
}

console.log(spaceAge(Math.round(Math.random() * 99999999)));
console.log(spaceAge(436575687));
console.log(spaceAge(65965561));