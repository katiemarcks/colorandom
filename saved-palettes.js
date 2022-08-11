savePaletteButtonEl.addEventListener("click", () => {
  const colors = palette.colors.map((color) => {
    return {
      ...color,
    };
  });
  const newPalette = new Palette(null, colors);
  savedPalettes.push(newPalette);
  renderSavedPalettes();
  palette.generateNewPalette();
});

function renderSavedPalettes() {
  savedPalettesSection.innerHTML = "";
  for (let i = 0; i < savedPalettes.length; i++) {
    const element = savedPalettes[i];
    savedPalettesSection.innerHTML += `
    <div style="display: flex; justify-content: space-around;" > 
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${element.colors[0].color}">
    
    </div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${element.colors[1].color}">
    
    </div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${element.colors[2].color}">
    
    </div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${element.colors[3].color}">
    
    </div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${element.colors[4].color}">
    
    </div>
    <img id="${element.id}" onClick="deleteSavedPalette(event)" style="height:17px; width:17px" src="assets/images/delete.png">
    </div>

    `;
  }
}

function deleteSavedPalette(event) {
  savedPalettes = savedPalettes.filter(
    (palette) => Number(palette.id) !== Number(event.target.id)
  );
  renderSavedPalettes();
}
