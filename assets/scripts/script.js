// Récuperation des elements du DOM
// ********************************
// - Les inputs
const inputNb1 = document.getElementById('input_nb1');
const inputNb2 = document.getElementById('input_nb2');
// - Les boutons
const btnAdd = document.getElementById('btn_add');
const btnSub = document.getElementById('btn_sub');
const btnMulti = document.getElementById('btn_multi');
const btnDiv = document.getElementById('btn_div');
const btnRest = document.getElementById('btn_rest');
// - Le paragraphe de resultat
const displayResult = document.getElementById('zone_result');


// Ajout des evenements sur les différents boutons
// ***********************************************
// - Addition
btnAdd.addEventListener('click', () => {
    const nb1 = parseFloat(inputNb1.value);
    const nb2 = parseFloat(inputNb2.value);
    const res = nb1 + nb2;

    displayResult.innerText = `L'addition entre ${nb1} et ${nb2} vaut ${res}`;
});

// - Soustraction
btnSub.addEventListener('click', () => {
    const nb1 = parseFloat(inputNb1.value);
    const nb2 = parseFloat(inputNb2.value);
    const res = nb1 - nb2;

    displayResult.innerText = `La soustraction de ${nb1} par ${nb2} vaut ${res}`;
});

// - Multiplication
btnMulti.addEventListener('click', () => {
    const nb1 = parseFloat(inputNb1.value);
    const nb2 = parseFloat(inputNb2.value);
    const res = nb1 * nb2;

    displayResult.innerText = `La multiplication entre ${nb1} et ${nb2} vaut ${res}`;
});

// - Division
btnDiv.addEventListener('click', () => {
    const nb1 = parseFloat(inputNb1.value);
    const nb2 = parseFloat(inputNb2.value);
    const res = nb1 / nb2;

    displayResult.innerText = `La division de ${nb1} par ${nb2} vaut ${res}`;
});

// - Le reste de la divison
btnRest.addEventListener('click', () => {
    const nb1 = parseFloat(inputNb1.value);
    const nb2 = parseFloat(inputNb2.value);
    const res = nb1 % nb2;

    displayResult.innerText = `Le reste de la division de ${nb1} par ${nb2} vaut ${res}`;
});




// Les Bonus
// *********
const btnIntDiv = document.getElementById('btn_int_div');
const btnRng = document.getElementById('btn_rng');

// - Division entiere
btnIntDiv.addEventListener('click', () => {
    const nb1 = parseFloat(inputNb1.value);
    const nb2 = parseFloat(inputNb2.value);
    const res = Math.floor(nb1 / nb2);

    displayResult.innerText = `La division entiere de ${nb1} par ${nb2} vaut ${res}`;
});

// - Génération aleatoire
btnRng.addEventListener('click', () => {
    // Nombre 1
    inputNb1.value = Math.round(Math.random() * 100);
    
    // Nombre 2
    inputNb2.value = Math.round(Math.random() * 100);
});