// Doğum tarihi girilen kişinin yaşını hesaplayan programı yazınız.
function yasHesapla() {
    const dYili = parseInt(prompt("Doğum yılınızı giriniz:", 1998));
    const dAy = parseInt(prompt("Doğum ayınızı giriniz:", 1));
    const dGun = parseInt(prompt("Doğum gününüzü giriniz:", 1));

    let date = new Date();
    let newYear = date.getFullYear();
    let newMonth = date.getMonth();
    let newDate = date.getDate();

    console.log(newYear);
    console.log(`Yaşınız: ${newYear-dYili} yıl ${newMonth-dAy} ay ${newDate-dGun} gün`);  
}
yasHesapla();

console.log("************ Exercise-4 ************");
