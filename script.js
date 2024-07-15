let display = document.querySelector(".display")
let equal = document.querySelector(".equal") 
let buttons = document.querySelectorAll(".button")

equal.addEventListener("click", function() {
    try {
        let expression = display.value.trim();
        
        if (expression === "") {
            display.value = "Please enter a number";
        } else {
            if (/\/0\s*$/.test(expression)) {
                display.value = "You can't divide by 0";
            } else {
                display.value = eval(expression);
            }
        }
    } catch (e) {
        display.value = "Invalid input";
    }
});

