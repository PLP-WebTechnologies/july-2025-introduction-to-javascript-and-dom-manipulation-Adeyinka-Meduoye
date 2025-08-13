// ====================
// Part 1: Variables & Conditionals
// ====================
document.getElementById("checkAgeBtn").addEventListener("click", () => {
    const age = parseInt(document.getElementById("ageInput").value);
    const result = document.getElementById("ageResult");

    if (isNaN(age)) {
        result.textContent = "❌ Please enter a valid age.";
    } else if (age < 18) {
        result.textContent = "🚫 You must be at least 18 years old.";
    } else {
        result.textContent = "✅ You are old enough!";
    }
});

// ====================
// Part 2: Functions
// ====================

// Function to create a list of numbers
function generateNumbersList(limit) {
    const numbers = [];
    for (let i = 1; i <= limit; i++) {
        numbers.push(i);
    }
    return numbers;
}

// Function to render numbers in the DOM
function renderNumbers(numbersArray) {
    const listElement = document.getElementById("numbersList");
    listElement.innerHTML = ""; // Clear previous list
    numbersArray.forEach(num => {
        const li = document.createElement("li");
        li.textContent = num;
        listElement.appendChild(li);
    });
}

// ====================
// Part 3: Loops
// ====================
document.getElementById("showNumbersBtn").addEventListener("click", () => {
    const numbers = generateNumbersList(5); // Using a for loop inside
    renderNumbers(numbers); // Using forEach loop inside
});

// ====================
// Part 4: DOM Manipulation
// ====================

// Change background color
document.getElementById("changeColorBtn").addEventListener("click", () => {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightyellow" ? "#f4f4f4" : "lightyellow";
});

// Toggle extra text
document.getElementById("toggleTextBtn").addEventListener("click", () => {
    const textElement = document.getElementById("extraText");
    textElement.classList.toggle("hidden");
});
