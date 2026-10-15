const emojiCodes = [
  128512, 128514, 128525, 128513,
  128522, 128526, 128540, 128521,
  128516, 128523, 128536, 128077
];

const gallery = document.querySelector("#emoji-gallery");

function showEmojis(count = emojiCodes.length) {
  gallery.innerHTML = "";

  for (let index = 0; index < count; index++) {
    const code = emojiCodes[index];
    const card = document.createElement("div");
    card.className = "emoji-card";

    const emoji = document.createElement("span");
    emoji.className = "emoji";
    emoji.textContent = String.fromCodePoint(code);

    const decimalCode = document.createElement("p");
    decimalCode.className = "emoji-code";
    decimalCode.textContent = code;

    card.append(emoji, decimalCode);
    gallery.appendChild(card);
  }
}

showEmojis();