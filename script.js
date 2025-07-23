let word = "";
let clue = "";
let wrongGuesses = 0;
let maxWrong = 7;
let guessed = [];
let isDark = false;

const words = [
  { word: "kangaroo", clue: "This marsupial's locomotion is illegal in most buildings." },
  { word: "chameleon", clue: "Its résumé includes 'professional color consultant' for stealth missions." },
  { word: "jaguar", clue: "Not a car, but it purrs and comes with factory-installed spots." },
  { word: "octopus", clue: "A sea creature with three hearts, eight arms, and a PhD in escape artistry." },
  { word: "gazelle", clue: "Nature’s ballet dancer, always one leap ahead of lunch." },
  { word: "microscope", clue: "The reason your ‘clean’ kitchen counter is actually a zoo." },
  { word: "astronaut", clue: "A job where ‘floating’ during work isn’t just a metaphor." },
  { word: "volcano", clue: "Earth’s version of a bad temper with molten consequences." },
  { word: "electron", clue: "It’s always negative but somehow essential to your phone’s happiness." },
  { word: "telescope", clue: "A device that proves stars are just as nosy as we are." },
  { word: "avocado", clue: "The reason millennials can’t afford houses (allegedly)." },
  { word: "cinnamon", clue: "Spice that doubles as a punishment in dare games." },
  { word: "pineapple", clue: "The fruit that sparked the debate: ‘Does pizza deserve fruit?’" },
  { word: "macaroni", clue: "The only acceptable reason an adult would wear ‘art’ made in 1997." },
  { word: "espresso", clue: "Liquid panic in a tiny cup." },
  { word: "pyramid", clue: "Ancient Instagram filter for pharaohs." },
  { word: "glacier", clue: "Climate change’s slowest disappearing act." },
  { word: "oasis", clue: "A desert’s ‘plot twist’." },
  { word: "archipelago", clue: "When land can’t decide if it wants to commit to being a continent." },
  { word: "canyon", clue: "Nature’s way of saying, ‘Take the scenic detour.’" },
  { word: "badminton", clue: "The only sport where a ‘birdie’ isn’t alive but still flies." },
  { word: "checkmate", clue: "A polite way to say, ‘I own you’ in medieval nerd language." },
  { word: "paralympics", clue: "Where ‘disabled’ means ‘differently awesome’." },
  { word: "goalkeeper", clue: "The one person allowed to use their hands in a foot game." },
  { word: "wrestling", clue: "Aggressive cuddling with a championship belt." },
  { word: "symphony", clue: "An orchestra’s way of saying, ‘We practiced, we swear.’" },
  { word: "watercolor", clue: "Paint that laughs at your attempt to control it." },
  { word: "haiku", clue: "Poetry’s version of a tweet from 1600." },
  { word: "fresco", clue: "Art that’s literally stuck in the wall." },
  { word: "sonnet", clue: "14 lines of emotional math." },
  { word: "quicksand", clue: "Nature’s way of asking, ‘Why were you even walking there?’" },
  { word: "doppelgänger", clue: "Proof your mom lied when she said you’re unique." },
  { word: "kaleidoscope", clue: "A toy that turns ‘pretty’ into ‘seizure-inducing’." },
  { word: "labyrinth", clue: "Architectural prank from the 1600s." },
  { word: "vuvuzela", clue: "The reason the 2010 World Cup sounded like an angry beehive." },
  { word: "sasquatch", clue: "The world’s worst hide-and-seek player (allegedly)." },
  { word: "bioluminescence", clue: "Nature’s rave party for deep-sea creatures." },
  { word: "hieroglyph", clue: "Emoji, but with more pyramids and less irony." },
  { word: "karaoke", clue: "A legal way to torture strangers with your shower voice." },
  { word: "zenith", clue: "The sky’s way of saying, ‘You can’t sit with us.’" },
  { word: "xylophone", clue: "The only instrument that sounds like a skeleton dancing." },
  { word: "yacht", clue: "A floating ‘I have too much money’ metaphor." },
  { word: "zephyr", clue: "Wind’s way of whispering, ‘I’m barely here.’" },
  { word: "algorithm", clue: "The secret sauce that makes your phone judge you." },
  { word: "bonsai", clue: "Tree torture disguised as art." },
  { word: "cappuccino", clue: "Coffee’s way of wearing a fancy hat." },
  { word: "déjà vu", clue: "Glitch in the Matrix or proof you need more sleep?" },
  { word: "euphemism", clue: "A polite way to say something horrifying." },
  { word: "fiasco", clue: "Italian for ‘We regret everything.’" },
  { word: "gossamer", clue: "Fairy laundry or spider’s version of flexing." },
  { word: "hologram", clue: "Ghosts for people who love tech too much." },
  { word: "irony", clue: "Like rain on your wedding day, or this clue being obvious." },
  { word: "juxtaposition", clue: "Fancy way to say ‘odd couple’ in art class." },
  { word: "kismet", clue: "Fate, but with more mystical eyeliner." },
  { word: "limerick", clue: "Poetry’s dad joke wearing a leprechaun hat." },
  { word: "mnemonic", clue: "A brain hack for people who forget brain hacks." },
  { word: "nebula", clue: "Space’s way of saying, ‘I spilled my glitter.’" },
  { word: "oxymoron", clue: "Like ‘jumbo shrimp’ or ‘fun run.’" },
  { word: "pandemonium", clue: "What happens when you give sugar to 5-year-olds." },
  { word: "quarantine", clue: "The universe’s timeout corner." },
  { word: "renaissance", clue: "History’s glow-up era." },
  { word: "serendipity", clue: "Accidentally finding pizza money in your old jeans." },
  { word: "trebuchet", clue: "Medieval yeeting machine." },
  { word: "ubiquitous", clue: "Fancy way to say ‘annoyingly everywhere.’" },
  { word: "vexillology", clue: "The study of flags (yes, this is a real thing)." },
  { word: "wanderlust", clue: "The urge to flee your responsibilities, poetically." },
  { word: "xenophobia", clue: "Fear of aliens (or neighbors, depending on context)." },
  { word: "yonder", clue: "Where your grandparents insist the good old days went." },
  { word: "zodiac", clue: "Horoscopes: because blaming stars is easier than therapy." },
  { word: "amok", clue: "What toddlers run when they miss nap time." },
  { word: "brouhaha", clue: "Noise made by people who love drama too much." },
  { word: "cacophony", clue: "Soundtrack of a cat walking on a piano." },
  { word: "doldrums", clue: "Where motivation goes to die (geographically or emotionally)." },
  { word: "ephemeral", clue: "Fancy way to say ‘gone too soon,’ like your willpower." },
  { word: "flabbergasted", clue: "You after reading this entire list." },
  { word: "gargoyle", clue: "Gothic architecture’s way of trolling pigeons." },
  { word: "hullabaloo", clue: "What your mom calls ‘unnecessary noise.’" },
  { word: "incognito", clue: "The internet’s version of a fake mustache." },
  { word: "jamboree", clue: "Scouts’ excuse to eat marshmallows competitively." },
  { word: "klutz", clue: "Someone who trips over their own shadow." },
  { word: "lugubrious", clue: "A word so sad it sounds like it’s crying." },
  { word: "maelstrom", clue: "A whirlpool with a dramatic name." },
  { word: "nincompoop", clue: "Shakespearean insult for your least favorite coworker." },
  { word: "obfuscate", clue: "To confuse others so they stop asking questions." },
  { word: "palaver", clue: "Fancy word for ‘pointless chatter.’" },
  { word: "quizzical", clue: "The face you make when reading these clues." },
  { word: "ragamuffin", clue: "A child who looks like they fought a laundry basket." },
  { word: "skedaddle", clue: "What you yell before running from responsibility." },
  { word: "tintinnabulation", clue: "Bells ringing, but with extra syllables." },
  { word: "ukelele", clue: "A guitar that went on a diet." },
  { word: "vamoose", clue: "Cowboy for ‘I’m out.’" },
  { word: "whippersnapper", clue: "Old-person slang for ‘young troublemaker.’" },
  { word: "xenial", clue: "Friendly, if you’re a Scrabble nerd." },
  { word: "yawp", clue: "The sound of a hipster trying to summon a spirit." },
  { word: "zilch", clue: "What you get when you lose at Hangman." },
  { word: "pizza", clue: "The only acceptable breakfast, lunch, and dinner according to college students." },
  { word: "robot", clue: "What your vacuum becomes when it 'accidentally' eats your charger." },
  { word: "zombie", clue: "You before coffee, according to your coworkers." },
  { word: "moon", clue: "Earth's clingy ex that won't stop orbiting." },
  { word: "shadow", clue: "Your stalker that copies everything you do." },
  { word: "banana", clue: "Nature's joke: comes with its own slippery peel trap." },
  { word: "dragon", clue: "The reason medieval villages needed 'No Smoking' signs." },
  { word: "ghost", clue: "The original influencer - everyone talks about them, nobody sees them." },
  { word: "wizard", clue: "A nerd with a fashion sense for bathrobes and pointy hats." },
  { word: "vampire", clue: "Proof that avoiding sunlight and garlic makes you immortal." },
  { word: "pirate", clue: "A job where 'stealing' is rebranded as 'finding treasure'." },
  { word: "ninja", clue: "Professional tiptoer with a side gig in throwing sharp things." },
  { word: "unicorn", clue: "A horse that invested too heavily in the horn market." },
  { word: "alien", clue: "The universe's way of saying 'You're probably not special'." },
  { word: "dinosaur", clue: "Nature's first draft of a chicken." },
  { word: "robot", clue: "Your future roommate who judges your snack choices." },
  { word: "cactus", clue: "A plant that's basically middle fingers all the way down." },
  { word: "volcano", clue: "Earth's version of a bad temper tantrum." },
  { word: "tornado", clue: "Nature's blender for mobile homes." },
  { word: "rainbow", clue: "Sky graffiti that disappears when you try to approach it." },
  { word: "lightning", clue: "Nature's camera flash for dramatic sky selfies." },
  { word: "thunder", clue: "The sky's way of saying 'That last lightning bolt was cool, right?'" },
  { word: "hurricane", clue: "Weather's version of spinning in an office chair until things break." },
  { word: "avalanche", clue: "Snow's way of saying 'Get off my lawn'." },
  { word: "meteor", clue: "Space rock that skipped 'knock knock' and went straight to 'BAM'." },
  { word: "planet", clue: "A cosmic marble that got too big for its own good." },
  { word: "comet", clue: "Space's version of a tourist who only visits every 75 years." },
  { word: "galaxy", clue: "The universe's glitter spill that nobody cleaned up." },
  { word: "blackhole", clue: "Space's version of 'I'll just put this here for now' and then forgetting it." },
  { word: "astronaut", clue: "A person who gets paid to float and eat freeze-dried ice cream." },
  { word: "spaceship", clue: "A very expensive can with people inside." },
  { word: "telescope", clue: "A device for confirming that yes, those stars are still there." },
  { word: "satellite", clue: "Earth's selfie stick that's always watching you." },
  { word: "shark", clue: "The ocean's way of reminding you it's not your friend." },
  { word: "octopus", clue: "A sea creature with eight arms and zero patience for your nonsense." },
  { word: "jellyfish", clue: "Saltwater's version of 'look but don't touch'." },
  { word: "whale", clue: "The ocean's largest animal that still gets scared by tiny fish." },
  { word: "dolphin", clue: "The ocean's show-off that's definitely smarter than you." },
  { word: "starfish", clue: "A sea creature that forgot to evolve its other four points." },
  { word: "lobster", clue: "A sea insect rich people convinced us is fancy." },
  { word: "penguin", clue: "A formal-dressed bird that failed at flying but aced swimming." },
  { word: "giraffe", clue: "Nature's skyscraper with a built-in scarf." },
  { word: "elephant", clue: "The animal that never forgets... to take up all the space." },
  { word: "kangaroo", clue: "Australia's boxer that carries its kids in a pocket." },
  { word: "rhinoceros", clue: "A tank that grew a horn and became an animal." },
  { word: "hippopotamus", clue: "A river horse that skipped leg day... every day." },
  { word: "crocodile", clue: "A living log that's always ready for a snack." },
  { word: "chameleon", clue: "Nature's mood ring with a tongue faster than your WiFi." },
  { word: "parrot", clue: "The only animal that will actually repeat your dumb jokes." },
  { word: "peacock", clue: "A bird that's 90% tail and 100% full of itself." },
  { word: "flamingo", clue: "A bird that stands on one leg just to make you feel lazy." },
  { word: "gorilla", clue: "A muscle-bound philosopher who could probably do your taxes." },
  { word: "cheetah", clue: "The speedster that still can't outrun habitat loss." },
  { word: "panda", clue: "A bear that chose monochrome before it was cool." },
  { word: "koala", clue: "Australia's tree hugger that sleeps 20 hours a day." },
  { word: "sloth", clue: "Nature's reminder that slow and steady wins... eventually." },
  { word: "hedgehog", clue: "A tiny animal that's 30% face, 70% 'don't touch me'." },
  { word: "raccoon", clue: "A trash panda with burglary skills." },
  { word: "skunk", clue: "Nature's pepper spray with legs." },
  { word: "beaver", clue: "A rodent with better engineering skills than most humans." },
  { word: "platypus", clue: "Proof that evolution was just throwing darts at a board." },
  { word: "porcupine", clue: "A walking pincushion with an attitude." },
  { word: "armadillo", clue: "Nature's tiny armored tank." },
  { word: "meerkat", clue: "Africa's most dramatic lookout." },
  { word: "lemur", clue: "A primate that moonlights as a disco dancer." },
  { word: "hyena", clue: "The animal that laughs at its own jokes... constantly." },
  { word: "ostrich", clue: "A bird that buried its head in the sand about being a bird." },
  { word: "eagle", clue: "America's favorite bird that isn't a turkey." },
  { word: "vulture", clue: "Nature's cleanup crew with bad PR." },
  { word: "woodpecker", clue: "A bird with a built-in jackhammer for a face." },
  { word: "hummingbird", clue: "A feathery helicopter that lives on sugar." },
  { word: "owl", clue: "A bird that's wise because it stays up all night thinking." },
  { word: "bat", clue: "A mouse that took night school too seriously." },
  { word: "spider", clue: "An eight-legged artist that redecorates your house daily." },
  { word: "scorpion", clue: "Nature's fork with a bad temper." },
  { word: "butterfly", clue: "A worm that went through its goth phase and came out fancy." },
  { word: "mosquito", clue: "The reason summer nights sound like a tiny air raid." },
  { word: "firefly", clue: "A bug that's basically a Tinkerbell without the attitude." },
  { word: "ladybug", clue: "A spotted beetle that's somehow cuter than its cousins." },
  { word: "grasshopper", clue: "A jumpy vegan that's bad at hiding." },
  { word: "ant", clue: "The employee of the month, every month, in Insect Inc." },
  { word: "bee", clue: "A fuzzy insect that's the reason we have food (no pressure)." },
  { word: "wasp", clue: "Bee's evil twin with anger management issues." },
  { word: "dragonfly", clue: "A helicopter bug that's been around since dinosaurs." },
  { word: "caterpillar", clue: "A worm in a sleeping bag that wakes up fabulous." },
  { word: "snail", clue: "A animal that carries its house everywhere like a weirdo." },
  { word: "turtle", clue: "A reptile that's basically a walking safe." },
  { word: "frog", clue: "A bug's worst nightmare with a sticky tongue." },
  { word: "toad", clue: "Frog's less photogenic cousin." },
  { word: "snake", clue: "A rope that came to life and said 'hiss'." },
  { word: "lizard", clue: "A tiny dinosaur that didn't get the memo about extinction." },
  { word: "gecko", clue: "A lizard with great grip and better insurance commercials." },
  { word: "chameleon", clue: "A mood ring that learned to walk." },
  { word: "alligator", clue: "A living handbag that hasn't been caught yet." },
  { word: "crocodile", clue: "Alligator's identical cousin who lives in different zip codes." },
  { word: "dinosaur", clue: "Nature's first draft of a chicken." },
  { word: "fossil", clue: "An old rock that used to be someone important." },
  { word: "amber", clue: "Tree sap that's been holding onto bugs for way too long." },
  { word: "cave", clue: "Earth's basement that's always slightly damp." },
  { word: "crystal", clue: "A rock that grew up to be pretty." },
  { word: "diamond", clue: "Compressed carbon that convinced people it's romantic." },
  { word: "gold", clue: "The shiny rock that started all the trouble." },
  { word: "silver", clue: "Gold's less popular but more useful sibling." },
  { word: "platinum", clue: "What you get when gold and silver have a fancy baby." },
  { word: "copper", clue: "The metal that turns green when it's feeling shy." },
  { word: "iron", clue: "The metal that makes you strong (if you eat cereal)." },
  { word: "steel", clue: "Iron that went to the gym and got buff." },
  { word: "aluminum", clue: "The metal we wrap food in when we're too lazy to wash dishes." },
  { word: "mercury", clue: "The liquid metal that's definitely not safe in thermometers." },
  { word: "lead", clue: "The heavy metal that's bad in pencils and worse in water." },
  { word: "tin", clue: "The metal that's mostly famous for foil hats." },
  { word: "zinc", clue: "The metal you take when you feel a cold coming on." },
  { word: "nickel", clue: "The metal that's worth exactly five cents." },
  { word: "bronze", clue: "What you get when copper and tin decide to be friends." },
  { word: "brass", clue: "Bronze's louder, more musical cousin." },
  { word: "pewter", clue: "The metal that's mostly famous for mugs and D&D figurines." }
];

function toggleTheme() {
  document.body.classList.toggle("dark");
  isDark = !isDark;
}

function goHome() {
  location.reload();
}

function showFriendInput() {
  document.getElementById("home-screen").classList.add("hidden");
  document.getElementById("friend-input-screen").classList.remove("hidden");
}

function startComputerGame() {
  const rand = words[Math.floor(Math.random() * words.length)];
  startGame(rand.word, rand.clue);
}

function startFriendGame() {
  const input = document.getElementById("custom-word-input").value.trim();
  if (!input) return alert("Please enter a word.");
  startGame(input.toLowerCase(), "Your friend's word");
}

function startGame(selectedWord, selectedClue) {
  word = selectedWord;
  clue = selectedClue;
  guessed = [];
  wrongGuesses = 0;

  document.getElementById("home-screen").classList.add("hidden");
  document.getElementById("friend-input-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  document.getElementById("result-message").textContent = "";
  document.getElementById("play-again").classList.add("hidden");

  updateImage();
  updateWordDisplay();
  createKeyboard();
  document.getElementById("clue-container").textContent = "Clue: " + clue;
}

function updateImage() {
  document.getElementById("hangman-img").src = `${wrongGuesses}.png`;
}

function updateWordDisplay() {
  const display = word
    .split("")
    .map((ch) => (guessed.includes(ch) ? ch : "_"))
    .join(" ");
  document.getElementById("word-display").textContent = display;
}

function createKeyboard() {
  const qwertyLayout = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];

  const keyboard = document.getElementById("keyboard");
  keyboard.innerHTML = "";

  qwertyLayout.forEach((row, index) => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("keyboard-row");

    keyboard.appendChild(rowDiv);

    row.forEach(letter => {
      const btn = document.createElement("button");
      btn.textContent = letter;
      btn.className = "key";
      btn.onclick = () => handleGuess(letter, btn);
      rowDiv.appendChild(btn);
    });
  });
}

function handleGuess(letter, btn) {
  btn.disabled = true;
  if (word.includes(letter)) {
    guessed.push(letter);
  } else {
    wrongGuesses++;
    updateImage();
  }

  updateWordDisplay();

  if (!document.getElementById("word-display").textContent.includes("_")) {
    endGame(true);
  } else if (wrongGuesses >= maxWrong) {
    endGame(false);
  }
}

function endGame(won) {
  document.getElementById("result-message").textContent = won
    ? "🎉 Congratulations! You won!"
    : `😞 You lost. Word was: ${word}`;
  document.getElementById("play-again").classList.remove("hidden");
  document.querySelectorAll(".key").forEach((key) => (key.disabled = true));
}
