  const glossaryEntries = [
    {
      term: "Hitbox",
      description: "An invisible shape used in video games to detect collisions or interactions with characters or objects."
    },
    {
      term: "FPS",
      description: "First-Person Shooter; a genre of games where the player experiences the game through the eyes of the protagonist."
    },
    {
      term: "RPG",
      description: "Role-Playing Game; a game in which players assume the roles of characters and take control over their actions and development."
    },
    {
      term: "NPC",
      description: "Non-Playable Character; any character in a game not controlled by the player, often used for storytelling or assistance."
    },
    {
      term: "Cooldown",
      description: "A period of time after using an ability or action in a game during which it cannot be used again."
    }
  ];

const mainElement = document.getElementById("creating-a-glossary");

const dl = document.createElement("dl");

glossaryEntries.forEach(entry => {
  const dt = document.createElement("dt");
  dt.textContent = entry.term;
  const dd = document.createElement("dd");
  dd.textContent = entry.description;
  dl.appendChild(dt);
  dl.appendChild(dd);
});

mainElement.appendChild(dl);