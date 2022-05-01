console.log("My First Js Project...")

// calculator class has defined.
class Calculator{
    constructor(previousTextElement, CurrentTextElement) {
        this.previousTextElement = previousTextElement
        this.CurrentTextElement = CurrentTextElement
        this.clear()
    }
    // clear func has defined.
    clear() {
        this.current = ""
        this.previous = ""
        this.operation = undefined
    }

    // delete func has defined.
    delete() {
        this.current = this.current.toString().slice(0, -1)
    }
    // simple func for numbers on current and previous screen has defined.
    appendNumber(number) {
        if (number === "." && this.current.includes(".")) return
        this.current = this.current.toString() + number.toString()
    }
    
    chooseOperation(operation) {
        if (this.current === "") return
        if (this.previous !== "") {
            this.compute()
        }
        this.operation = operation
        this.previous = this.current
        this.current = ""

    }
    // compute func is for operations in calcualtor
    compute() {
        let computation
        const prev = parseFloat(this.previous)
        const curr = parseFloat(this.current)
        if (isNaN(prev) || isNaN(curr)) return
        switch (this.operation) {
            case "+":
                computation = prev + curr
                break
            case "-":
                computation = prev - curr
                break
            case "x":
                computation = prev * curr
                break
            case "÷":
                computation = prev / curr
                break
            case "^":
                computation = prev ** curr
                break
            default:
                return
        }
        this.current = computation
        this.operation = undefined
        this.previous = ""
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split("."[0]))
        const decimalDigits = stringNumber.split(".")[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ""
        } else {
            integerDisplay = integerDigits.toLocaleString("en", {
            maximumFractionDigits : 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else{
            return integerDisplay
        }
    }
    // updateDisplay func is for using display numbers on screen
    updateDisplay() {
        this.CurrentTextElement.innerText = this.getDisplayNumber(this.current) 
        if (this.operation != null){
            this.previousTextElement.innerText = 
                `${this.getDisplayNumber(this.previous)} ${this.operation}`
        } else{
            this.previousTextElement.innerText = ""
        }
    }
}

//definitions of consts
const numberButtons = document.querySelectorAll("[data-number]")
const oparationButtons = document.querySelectorAll("[data-oparation]")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const allclearButtons = document.querySelectorAll("[data-all-clear]")
const previousTextElement = document.querySelector("[data-previous]")
const CurrentTextElement = document.querySelector("[data-current]")

const calculator = new Calculator(previousTextElement,CurrentTextElement)
//next lines is for connecting html file and our defined calculator class
numberButtons.forEach(button => {
    button.addEventListener("click", () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

oparationButtons.forEach(button => {
    button.addEventListener("click", () =>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener("click", button =>{
    calculator.compute()
    calculator.updateDisplay()
})

allclearButtons.forEach(button => {
    button.addEventListener("click", () =>{
        calculator.clear()
        calculator.updateDisplay()
    })
})


deleteButton.addEventListener("click", button =>{
    calculator.delete()
    calculator.updateDisplay()
})