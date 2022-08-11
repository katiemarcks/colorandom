let paletteEl = document.querySelector(".palette");
let buttonsEl = document.querySelector(".buttons");
let newPaletteButtonEl = document.querySelector(".new-palette-button");
let savePaletteButtonEl = document.querySelector(".save-palette-button");
let savedPalettesSection = document.querySelector(".saved-palettes");

let palette = new Palette();
let savedPalettes = [];

newPaletteButtonEl.addEventListener("click", () =>
  palette.generateNewPalette()
);
