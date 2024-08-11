let rastgele = ["a", "b", "c", "ç", "?", "@", "d", "!", "e", "#", "f", "g", "%", "ğ", "h", "+", "ı", "2", "-", "3", "4", "*", "5", "6", "7", "8", "9", "0"];

document.getElementById("btn").addEventListener("click", function () {
    let sifre = "";
    let uzunluk = parseInt(document.getElementById("inp").value); // Kullanıcının girdiği değeri alıyorum
    if (isNaN(uzunluk) || uzunluk <= 0) {
        alert("Lütfen geçerli bir sayı girin."); // Geçersiz girişler için uyarı veriyorum
        return;
    }
    for (let i = 0; i < uzunluk; i++) {
        let rastgeleIndex = Math.floor(Math.random() * rastgele.length);
        sifre += rastgele[rastgeleIndex];
    }
    document.getElementById("psw").textContent = sifre; // Oluşturulan şifreyi ekrana yazdırıyorum
});