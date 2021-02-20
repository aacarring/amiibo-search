const input = document.querySelector('.input input');
const btn = document.querySelector('.input button');
const charInfo = document.querySelector('.char-info');

function searchCharacter() {
    charInfo.innerHTML = "";
    let charName = input.value;
    fetch(`https://www.amiiboapi.com/api/amiibo/?name=${charName}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let amiiboArr = data.amiibo;
            for (let elem of amiiboArr) {
                let charName = elem.character;
                let src = elem.image;
                let game = elem.gameSeries;
                let type = elem.type;
                let amiiboInfo = document.createElement('div');
                amiiboInfo.innerHTML += `
                 <img src="${src}" alt="Image of character's Amiibo">
                 <div class="amiibo-info">
                    <span class="charName">Character: ${charName}</span>
                    <span class="game">Game: ${game}</span>
                    <span class="type">Type: ${type}</span>
                </div>
                `;
                charInfo.appendChild(amiiboInfo);
            }
            

        });
}

btn.addEventListener("click", searchCharacter);