
let dropdownMenu = document.getElementsByClassName("dropdown-item");
let currAlgo = "Bubble Sort";
for (let i = 0; i < dropdownMenu.length; i++) {
    dropdownMenu[i].addEventListener("click", function () {
        currAlgo = dropdownMenu[i].innerHTML;
        dropdownMenu[i].innerHTML = document.getElementById("navbarDropdownMenuLink").innerHTML;
        document.getElementById("navbarDropdownMenuLink").innerHTML = currAlgo;
    });
}


let barsHeight = [];
let bars = [];
let n = 30; 
let barsCon = document.querySelector(".barsCon");
let upWidth = 2;


const generateNewArray = () => {
    clearTimeout(); 
    document.getElementById("sort-button").disabled = false;
    document.getElementById("size").disabled = false;
    document.getElementById("speed").disabled = false;
    document.getElementById("navbarDropdownMenuLink").disabled = false;
    c = 0;
    document.getElementById("sort-button").innerHTML = "Sort";
    barsCon.innerHTML = "";
    for (let i = 0; i < n; i++) {
        barsHeight[i] = randomNumber(100, 500);
        bars[i] = document.createElement("div");
        bars[i].classList.add("bar");
        barsCon.appendChild(bars[i]);
        bars[i].style.height = barsHeight[i] + "px";
        bars[i].style.width = upWidth + "%";
    }

   
    let startingArray = document.createElement("div");
    startingArray.classList.add("startingArray");
    barsCon.appendChild(startingArray);

};


let speed = 500;
let delay = 10000 / (Math.floor(n / 10) * speed);
let c = 0;


const animation = (bar, height, color) => {
    setTimeout(() => {
        bar.style.height = height + "px";
        bar.style.backgroundColor = color;
    }, (c += delay)); 

};



document.querySelector(".newArray").addEventListener("click", generateNewArray);


function updateSpeed() {
    let newSpeed = document.getElementById("speed").value;
    speed = newSpeed;
    delay = 10000 / (Math.floor(n / 10) * speed);
}

function updateSize() {
    let newSize = document.getElementById("size").value;
    n = newSize;
    upWidth = 70 / n;
    generateNewArray();
}

document.getElementById("speed").addEventListener("input", updateSpeed);
document.getElementById("size").addEventListener("input", updateSize);


let sortBtn = document.getElementById("sort-button");
sortBtn.addEventListener("click", () => {
    document.getElementById("sort-button").disabled = true;
    document.getElementById("size").disabled = true;
    document.getElementById("speed").disabled = true;
    document.getElementById("navbarDropdownMenuLink").disabled = true;
    document.getElementById("sort-button").innerHTML = "Sorting . . .";

    for (let i = 0; i < n; i++) {
        bars[i].style.backgroundColor = "#57cc99";  
    }
 
    switch (currAlgo) {
        case "Bubble Sort":
            bubbleSort();
            break;
        case "Insertion Sort":
            insertionSort();
            break;
        case "Selection Sort":
            selectionSort();
            break;
        case "Quick Sort":
            quickSort(0, n - 1);
            break;
        case "Merge Sort":
            mergeSort(0, n - 1);
            break;
        case "Heap Sort":
            heapSort();
            break;

        default:
            bubbleSort();   
    }
   

    for (let i = 0; i < n; i++) {
        animation(bars[i], barsHeight[i], "#FF6363");  
    }
    for (let i = 0; i < n; i++) {
        animation(bars[i], barsHeight[i], sorted);      
    }

   
    setTimeout(function () { 
        document.getElementById("sort-button").disabled = false;
        document.getElementById("size").disabled = false;
        document.getElementById("speed").disabled = false;
        document.getElementById("navbarDropdownMenuLink").disabled = false;
        document.getElementById("sort-button").innerHTML = "Sort";
        c = 0;
    }, c);
});


let cm = "#FF6363"; 
let c1 = "#F8A1D1"; 
let c2 = "#822659"; 
let sorted = "#22577A"; 
let heapcol = "#FF6363"; 


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

generateNewArray();