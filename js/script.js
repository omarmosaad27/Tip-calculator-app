let tipSpans = document.querySelectorAll(".tip span");
let bill = document.querySelector("#bill");
let people = document.querySelector("#people");
let custom = document.querySelector("#custom-tip");
let error = document.querySelector(".error");
let tipAmount = document.querySelector(".tip-amount");
let totalAmount = document.querySelector(".total-amount");
let reset = document.querySelector(".reset");
let billValue = "";
let peopleNum = "";
// function to calculate tip amount per person and total amount per person 
const getAmounts = () => {
    tipSpans.forEach((tip) => {
        bill.addEventListener("keyup", function () {
            billValue = bill.value
        })
        people.addEventListener("keyup", function () {
            peopleNum = people.value
            console.log(peopleNum);
            if (people.value === "0") {
                error.innerHTML = "can't be zero"
        } else {
            error.innerHTML = " "
            }
        })
        custom.addEventListener("keyup", function () {
            let customVal = custom.value
            let tip = ((parseInt(billValue) * customVal / 100) / peopleNum).toFixed(2)
            tipAmount.innerHTML = `$${tip}`
            let total = ((parseInt(billValue) + (parseInt(billValue) * customVal / 100)) / peopleNum).toFixed(2)
            totalAmount.innerHTML = `$${total}`
        })
        tip.addEventListener("click", function (e) {
            const target =parseFloat(e.target.textContent) 
            let tip = ((parseInt(billValue) * target / 100) / peopleNum).toFixed(2)
            tipAmount.innerHTML = `$${tip}`
            let total = ((parseInt(billValue) + (parseInt(billValue) * target / 100)) / peopleNum).toFixed(2)
            totalAmount.innerHTML = `$${total}`
            console.log(tip);
        })
    })
};


// function to reset everything
const resetValues = () => {
    reset.addEventListener("click", function () {
        tipAmount.innerHTML = '$0.00'
        totalAmount.innerHTML = '$0.00'
        document.querySelector("#bill").value = " "
        document.querySelector("#people").value = " "
    })
}


function calcAll() {
    getAmounts()
    resetValues()
}
calcAll()