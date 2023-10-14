// Constants for query selector
const myStudentId = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");

// Function to change bg color from user input and add student id
function changeCustomColor() {
    const customNumber = parseInt(customNumberInput.value);

    // Display student ID
    myStudentId.textContent = " Student ID: 200518162"; // Replace with your actual student ID

    // Change background color based on customNumber
    if (customNumber < 0 || customNumber > 100) {
        document.body.style.backgroundColor = "red";
    } else if (customNumber >= 0 && customNumber <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (customNumber > 20 && customNumber <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (customNumber > 40 && customNumber <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (customNumber > 60 && customNumber <= 80) {
        document.body.style.backgroundColor = "purple";
    } else if (customNumber > 80 && customNumber <= 100) {
        document.body.style.backgroundColor = "yellow";
    }
}

// Function to change bg color from random no.
function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 100) + 1;

    // Display student ID
    myStudentId.textContent = "Your Student ID: YOUR_STUDENT_ID"; // Replace with your actual student ID

    // Change background color based on the random number
    if (randomNum < 0 || randomNum > 100) {
        document.body.style.backgroundColor = "red";
    } else if (randomNum >= 0 && randomNum <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (randomNum > 20 && randomNum <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (randomNum > 40 && randomNum <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (randomNum > 60 && randomNum <= 80) {
        document.body.style.backgroundColor = "purple";
    } else if (randomNum > 80 && randomNum <= 100) {
        document.body.style.backgroundColor = "yellow";
    }
}

// Function to generate options for select list
function addList() {
    const imageNames = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]; // Replace with your image names
    for (const imageName of imageNames) {
        const option = document.createElement("option");
        option.value = imageName;
        option.textContent = imageName;
        imageSelect.appendChild(option);
    }
}

// Function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = `img/${selectedImage}`;
    images.alt = selectedImage;
}

// Event listeners for on click event of buttons
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);

// Event listener for on change event of select
imageSelect.addEventListener("change", changeImage);

// Initialize select list options
addList();
