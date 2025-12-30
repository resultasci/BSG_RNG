class CollatzRNG {
    constructor(seed) {
        // Seed 0 veya negatif olamaz, kontrol edelim.
        if (seed <= 0) {
            this.state = Date.now(); // Hata durumunda zamanı kullan
        } else {
            this.state = seed;
        }
    }

    // Bir sonraki rastgele sayıyı üretir
    nextInt() {
        // Collatz Teoremi (3n + 1)
        if (this.state % 2 === 0) {
            this.state = this.state / 2;
        } else {
            this.state = (3 * this.state) + 1;
        }

        // Sayı çok küçülürse (1 döngüsüne girerse) veya çok büyürse modifiye et
        // Rastgelelik hissini artırmak için büyük bir asal sayı ile mod alabiliriz
        // Ancak Collatz'ın doğal kaosunu görmek için ham halini döndürüp, 
        // kullanıcıya göstermek için mod alacağız.
        
        return this.state; 
    }

    // Belirli bir aralıkta sayı üretmek için (Örn: 0-100 arası)
    nextRange(min, max) {
        let raw = this.nextInt();
        // Negatif ihtimaline karşı mutlak değer alıp mod işlemi yapıyoruz
        return min + (Math.abs(raw) % (max - min + 1));
    }
}

// --- Test Kısmı (Konsolda denemek istersen) ---
const seed = 12345; // Öğrenci numaranın son hanesi olabilir
const rng = new CollatzRNG(seed);

console.log(`Seed Değeri: ${seed}`);
console.log("Üretilen Sayılar:");
for (let i = 0; i < 10; i++) {
    console.log(rng.nextRange(0, 100));
}