const studentSuccess = prompt("Notunuzu Girin");
let result;

if (studentSuccess >= 0 && studentSuccess <= 100) {
    if (studentSuccess >= 90) {
        result = "AA-Başarılı"
    }
    else if (studentSuccess >= 85) {
        result = "BA-Başarılı"
    }
    else if (studentSuccess >= 80) {
        result = "BB-Başarılı"
    }
    else if (studentSuccess >= 75) {
        result = "CB-Geçer"
    }
    else if (studentSuccess >= 70) {
        result = "CC-Geçer"
    }
    else if (studentSuccess >= 60) {
        result = "DC-Koşullu Geçer"
    }
    else if (studentSuccess < 60) {
        result = "Başarısız-Dersi Tekrar Etmesi Gereklidir"
    }
console.log(result);
}
else {
    result = "Yanlış bilgi girdiniz"
    console.warn(result);
}




