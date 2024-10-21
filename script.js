
/* .js files add interaction to your website */

var facts = [
  "Sea Otters are directly related to Weasels.",
  "Russian Otters can be found in the Pacific Ocean near Russia's east coast and Japan.",
  "When urchins go unchecked, they create areas called “urchin barrens” where nothing else lives. With sea otters helping to keep the urchins under control, kelp forests can thrive and support a rich community of plants and animals.",
  "To forage for food underwater, a sea otter can dive to 600 feet and stay down for 6 to 7 minutes.",
  "With its thick and fluffy fur, large eyes and large noses, the sea otter may be — scientifically speaking — one of the cutest animals in the world.",
  "Popular Twitch streamer DougDoug has raised over $500,000 dollars for the Monterey Bay Aquarium to help support Sea Otters."
];

//variables for the different html elements, and a counter to keep track of the list order
var button = document.getElementById("button");
var fact = document.getElementById("fact");
var count = 0;

button.addEventListener("click",generateFact);

// function that runs when the button is clicked, cycling through the list of facts and updating the text.
function generateFact() {
  fact.innerHTML = facts[count];
  count++;
  if (count == facts.length) {
    count = 0;
  }
}
