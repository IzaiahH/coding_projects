let input = document.getElementById("custom")

let total = 0

function displayValue() {

    let sum = document.getElementById("custom");
    let inputValue = sum.inputValue

}

function addToTotal (amount) {
    total += amount
    totalSpan.textContent = total.toFixed(2)
}

console.log(displayValue)

document.getElementById("add").addEventListener("click", function(){
    displayValue() += addToTotal(5)
})s