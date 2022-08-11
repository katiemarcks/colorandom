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
    <div style="display: flex; justify-content: space-around; gap: 10px; margin: 10px;" > 
    
    <div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${element.colors[0].color}">
    </div>
    <p style="font-size: 10px;">${element.colors[0].color}</p>
    </div>

    <div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${element.colors[1].color}">
    </div>
    <p style="font-size: 10px;">${element.colors[1].color}</p>
    </div>

    <div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${element.colors[2].color}">
    </div>
    <p style="font-size: 10px;">${element.colors[2].color}</p>
    </div>

    <div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${element.colors[3].color}">
    </div>
    <p style="font-size: 10px;">${element.colors[3].color}</p>
    </div>

    <div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${element.colors[4].color}">
    </div>
    <p style="font-size: 10px;">${element.colors[4].color}</p>
    </div>


    <img id="${element.id}" onClick="deleteSavedPalette(event)" style="height:17px; width:17px; cursor: pointer" src="assets/images/delete.png">
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
