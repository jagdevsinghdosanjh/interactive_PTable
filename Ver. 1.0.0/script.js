const elements = {
    'H': { name: 'Hydrogen', position: '1,1' },
    'He': { name: 'Helium', position: '1,18' },
    'Li': { name: 'Lithium', position: '2,1' },
    'Be': { name: 'Beryllium', position: '2,2' },
    'B': { name: 'Boron', position: '2,13' },
    'C': { name: 'Carbon', position: '2,14' },
    'N': { name: 'Nitrogen', position: '2,15' },
    'O': { name: 'Oxygen', position: '2,16' },
    'F': { name: 'Fluorine', position: '2,17' },
    'Ne': { name: 'Neon', position: '2,18' },
    'Na': { name: 'Sodium', position: '3,1' },
    'Mg': { name: 'Magnesium', position: '3,2' },
    'Al': { name: 'Aluminium', position: '3,13' },
    'Si': { name: 'Silicon', position: '3,14' },
    'P': { name: 'Phosphorus', position: '3,15' },
    'S': { name: 'Sulfur', position: '3,16' },
    'Cl': { name: 'Chlorine', position: '3,17' },
    'Ar': { name: 'Argon', position: '3,18' },
    'K': { name: 'Potassium', position: '4,1' },
    'Ca': { name: 'Calcium', position: '4,2' },
    'Sc': { name: 'Scandium', position: '4,3' },
    'Ti': { name: 'Titanium', position: '4,4' },
    'V': { name: 'Vanadium', position: '4,5' },
    'Cr': { name: 'Chromium', position: '4,6' },
    'Mn': { name: 'Manganese', position: '4,7' },
    'Fe': { name: 'Iron', position: '4,8' },
    'Co': { name: 'Cobalt', position: '4,9' },
    'Ni': { name: 'Nickel', position: '4,10' },
    'Cu': { name: 'Copper', position: '4,11' },
    'Zn': { name: 'Zinc', position: '4,12' },
    'Ga': { name: 'Gallium', position: '4,13' },
    'Ge': { name: 'Germanium', position: '4,14' },
    'As': { name: 'Arsenic', position: '4,15' },
    'Se': { name: 'Selenium', position: '4,16' },
    'Br': { name: 'Bromine', position: '4,17' },
    'Kr': { name: 'Krypton', position: '4,18' },
    'Rb': { name: 'Rubidium', position: '5,1' },
    'Sr': { name: 'Strontium', position: '5,2' },
    'Y': { name: 'Yttrium', position: '5,3' },
    'Zr': { name: 'Zirconium', position: '5,4' },
    'Nb': { name: 'Niobium', position: '5,5' },
    'Mo': { name: 'Molybdenum', position: '5,6' },
    'Tc': { name: 'Technetium', position: '5,7' },
    'Ru': { name: 'Ruthenium', position: '5,8' },
    'Rh': { name: 'Rhodium', position: '5,9' },
    'Pd': { name: 'Palladium', position: '5,10' },
    'Ag': { name: 'Silver', position: '5,11' },
    'Cd': { name: 'Cadmium', position: '5,12' },
    'In': { name: 'Indium', position: '5,13' },
    'Sn': { name: 'Tin', position: '5,14' },
    'Sb': { name: 'Antimony', position: '5,15' },
    'Te': { name: 'Tellurium', position: '5,16' },
    'I': { name: 'Iodine', position: '5,17' },
    'Xe': { name: 'Xenon', position: '5,18' },
    'Cs': { name: 'Cesium', position: '6,1' },
    'Ba': { name: 'Barium', position: '6,2' },
    'La': { name: 'Lanthanum', position: '6,3' },
    'Ce': { name: 'Cerium', position: '6,4' },
    'Pr': { name: 'Praseodymium', position: '6,5' },
    'Nd': { name: 'Neodymium', position: '6,6' },
    'Pm': { name: 'Promethium', position: '6,7' },
    'Sm': { name: 'Samarium', position: '6,8' },
    'Eu': { name: 'Europium', position: '6,9' },
    'Gd': { name: 'Gadolinium', position: '6,10' },
    'Tb': { name: 'Terbium', position: '6,11' },
    'Dy': { name: 'Dysprosium', position: '6,12' },
    'Ho': { name: 'Holmium', position: '6,13' },
    'Er': { name: 'Erbium', position: '6,14' },
    'Tm': { name: 'Thulium', position: '6,15' },
    'Yb': { name: 'Ytterbium', position: '6,16' },
    'Lu': { name: 'Lutetium', position: '6,17' },
    'Hf': { name: 'Hafnium', position: '6,4' },
    'Ta': { name: 'Tantalum', position: '6,5' },
    'W': { name: 'Tungsten', position: '6,6' },
    'Re': { name: 'Rhenium', position: '6,7' },
    'Os': { name: 'Osmium', position: '6,8' },
    'Ir': { name: 'Iridium', position: '6,9' },
    'Pt': { name: 'Platinum', position: '6,10' },
    'Au': { name: 'Gold', position: '6,11' },
    'Hg': { name: 'Mercury', position: '6,12' },
    'Tl': { name: 'Thallium', position: '6,13' },
    'Pb': { name: 'Lead', position: '6,14' },
    'Bi': { name: 'Bismuth', position: '6,15' },
    'Po': { name: 'Polonium', position: '6,16' },
    'At': { name: 'Astatine', position: '6,17' },
    'Rn': { name: 'Radon', position: '6,18' },
    'Fr': { name: 'Francium', position: '7,1' },
    'Ra': { name: 'Radium', position: '7,2' },
    'Ac': { name: 'Actinium', position: '7,3' },
    'Th': { name: 'Thorium', position: '7,4' },
    'Pa': { name: 'Protactinium', position: '7,5' },
    'U': { name: 'Uranium', position: '7,6' },
    'Np': { name: 'Neptunium', position: '7,7' },
    'Pu': { name: 'Plutonium', position: '7,8' },
    'Am': { name: 'Americium', position: '7,9' },
    'Cm': { name: 'Curium', position: '7,10' },
    'Bk': { name: 'Berkelium', position: '7,11' },
    'Cf': { name: 'Californium', position: '7,12' },
    'Es': { name: 'Einsteinium', position: '7,13' },
    'Fm': { name: 'Fermium', position: '7,14' },
    'Md': { name: 'Mendelevium', position: '7,15' },
    'No': { name: 'Nobelium', position: '7,16' },
    'Lr': { name: 'Lawrencium', position: '7,17' },
    'Rf': { name: 'Rutherfordium', position: '7,4' },
    'Db': { name: 'Dubnium', position: '7,5' },
    'Sg': { name: 'Seaborgium', position: '7,6' },
    'Bh': { name: 'Bohrium', position: '7,7' },
    'Hs': { name: 'Hassium', position: '7,8' },
    'Mt': { name: 'Meitnerium', position: '7,9' },
    'Ds': { name: 'Darmstadtium', position: '7,10' },
    'Rg': { name: 'Roentgenium', position: '7,11' },
    'Cn': { name: 'Copernicium', position: '7,12' },
    'Nh': { name: 'Nihonium', position: '7,13' },
    'Fl': { name: 'Flerovium', position: '7,14' },
    'Mc': { name: 'Moscovium', position: '7,15' },
    'Lv': { name: 'Livermorium', position: '7,16' },
    'Ts': { name: 'Tennessine', position: '7,17' },
    'Og': { name: 'Oganesson', position: '7,18' }
};


let score = 0;

document.getElementById('submit-btn').addEventListener('click', () => {
    const userInput = document.getElementById('element-input').value.trim();
    const feedback = document.getElementById('feedback');
    const scoreDisplay = document.getElementById('score');

    if (elements[userInput]) {
        feedback.textContent = `Correct! ${userInput} is at position ${elements[userInput].position}.`;
        score += 1;
    } else {
        feedback.textContent = `Incorrect! Try again.`;
        score -= 1;
    }

    scoreDisplay.textContent = `Score: ${score}`;
});
