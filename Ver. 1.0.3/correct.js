// Main periodic table elements
const mainElements = [
    { number: 1, symbol: "H", name: "Hydrogen", group: 1, period: 1 },
    { number: 2, symbol: "He", name: "Helium", group: 18, period: 1 },
    { number: 3, symbol: "Li", name: "Lithium", group: 1, period: 2 },
    { number: 4, symbol: "Be", name: "Beryllium", group: 2, period: 2 },
    { number: 5, symbol: "B", name: "Boron", group: 13, period: 2 },
    { number: 6, symbol: "C", name: "Carbon", group: 14, period: 2 },
    { number: 7, symbol: "N", name: "Nitrogen", group: 15, period: 2 },
    { number: 8, symbol: "O", name: "Oxygen", group: 16, period: 2 },
    { number: 9, symbol: "F", name: "Fluorine", group: 17, period: 2 },
    { number: 10, symbol: "Ne", name: "Neon", group: 18, period: 2 },
    { number: 11, symbol: "Na", name: "Sodium", group: 1, period: 3 },
    { number: 12, symbol: "Mg", name: "Magnesium", group: 2, period: 3 },
    { number: 13, symbol: "Al", name: "Aluminium", group: 13, period: 3 },
    { number: 14, symbol: "Si", name: "Silicon", group: 14, period: 3 },
    { number: 15, symbol: "P", name: "Phosphorus", group: 15, period: 3 },
    { number: 16, symbol: "S", name: "Sulfur", group: 16, period: 3 },
    { number: 17, symbol: "Cl", name: "Chlorine", group: 17, period: 3 },
    { number: 18, symbol: "Ar", name: "Argon", group: 18, period: 3 },
    // Add all remaining main elements
];

// Function to render elements in their respective positions
function renderElements(containerSelector, elements) {
    const container = document.querySelector(containerSelector);
    elements.forEach(element => {
        const item = document.createElement('div');
        item.className = 'element';
        item.style.gridColumnStart = element.group; // Aligns element to the correct group (column)
        item.style.gridRowStart = element.period;  // Aligns element to the correct period (row)
        item.innerHTML = `
            <div class="number">${element.number}</div>
            <div class="symbol">${element.symbol}</div>
            <div class="name">${element.name}</div>
        `;
        container.appendChild(item);
    });
}

// Render main periodic table elements
renderElements('.periodic-table', mainElements);
