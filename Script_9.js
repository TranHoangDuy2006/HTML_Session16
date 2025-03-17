let celsius = Number(prompt("Nhap vao do C ma ban muon chuyen doi sang do F:"))

let exchangeToFahrenheit = ((celsius * 9) / 5) + 32

document.writeln(celsius + " do C khi doi sang do F la: " + exchangeToFahrenheit.toFixed(1))