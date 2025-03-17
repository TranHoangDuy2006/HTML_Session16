let firstNumber = Number(prompt("Nhap so thu nhat:"))

let secondNumber = Number(prompt("Nhap so thu hai:"))

let thirdNumber = Number(prompt("Nhap so thu ba: "))

let largestNumber = Math.max(firstNumber, secondNumber, thirdNumber)

document.writeln("So lon nhat trong 3 so la: " + largestNumber)