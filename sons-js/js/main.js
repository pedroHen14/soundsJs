

const mySound = [
    { key: "A", sound: "clap.wav"},
    { key: "S", sound: "boom.wav"},
    { key: "D", sound: "hihat.wav"},
    { key: "F", sound: "kick.wav"},
    { key: "G", sound: "openhat.wav"},
    { key: "H", sound: "ride.wav"},
    { key: "J", sound: "snare.wav"},
    { key: "K", sound: "tink.wav"},
    { key: "L", sound: "tom.wav"}
];

const container = document.querySelector('#container');


const criarDiv = (key, sound) => {
    let som = 1;
    const novaDiv = document.createElement('div');
    novaDiv.innerHTML = `
        <div class='card' id="${key}">
            ${key}
            <audio src="./sounds/${sound}" id="som${key}"></audio>
        </div>
        `;
        som ++;
    return novaDiv;
}

const mostrarDiv = (sons) => {
    container.appendChild ( criarDiv(sons.key, sons.sound) );
};

mySound.forEach ( mostrarDiv );

const log = document.querySelectorAll('.card');

const rodarSom = (key, id) => {
    const button = document.querySelector(key)
    button.addEventListener('click', function(){
         const audio = document.querySelector(id);
         audio.play();
        
     });
    console.log(1)
}
rodarSom('#A', '#somA');
rodarSom('#S', '#somS');
rodarSom('#D', '#somD');
rodarSom('#F', '#somF');
rodarSom('#G', '#somG');
rodarSom('#H', '#somH');
rodarSom('#J', '#somJ');
rodarSom('#K', '#somK');
rodarSom('#L', '#somL');
    

// const rodarSom = (key) => {
//     const audio = document.getElementById(key);
//     audio.play();
// }