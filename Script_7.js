let mathPoint = Number(prompt("Nhap diem trung binh mon toan:"))

let physicPoint = Number(prompt("Nhap diem trung binh mon vat li:"))

let chemistryPoint = Number(prompt("Nhap diem trung binh mon hoa hoc:"))

let averageSubjects = (mathPoint + physicPoint + chemistryPoint) / 3

document.writeln("Diem trung binh cua 3 mon toan, vat li va hoa hoc la: " + averageSubjects.toFixed(2))