# CRNG - Collatz Random Number Generator

Bu projede, ünlü matematiksel problem olan **Collatz Teoremi (3n+1 Problemi)** kaotik yapısı kullanılarak, seed (başlangıç değeri) tabanlı sözde rastgele sayı üreten bir algoritma geliştirilmiştir.

Proje, **Bilgi Sistemleri Güvenliği** dersi kapsamında; rastgelelik, kaos teorisi ve deterministik algoritmaların güvenlik üzerindeki etkilerini incelemek amacıyla hazırlanmıştır.

## Algoritmanın Temeli: Collatz Teoremi
Algoritma, kullanıcı tarafından belirlenen pozitif bir tam sayı (seed) ile başlar. Bir sonraki sayıyı üretmek için şu kurallar uygulanır:

- Eğer sayı **çift** ise: $n / 2$
- Eğer sayı **tek** ise: $3n + 1$

Bu basit kural, sayılar üzerinde kaotik bir "yörünge" oluşturur. Bu yörüngedeki değişimler, rastgele sayı üretiminin kaynağı olarak kullanılmıştır.

## Seed (Anahtar) Kavramı
Seed değeri, Collatz dizisinin başlangıç noktasını belirler.
- Aynı seed değeri her zaman aynı sayı dizisini (yörüngeyi) üretir.
- Bu özellik, sistemin **deterministik** olduğunu kanıtlar.

## İstatistiksel ve Güvenlik Değerlendirmesi
Bu algoritma:
- **Kaotik Yapı:** Sayıların artış ve azalışı tahmin edilmesi zor dalgalanmalar gösterir.
- **Güvenlik:** Kriptografik olarak güvenli değildir (CSPRNG değildir). Collatz dizisi matematiksel olarak geri takip edilebilir.
- **Amaç:** Bu çalışma, basit matematiksel fonksiyonların nasıl karmaşık çıktılar üretebildiğini göstermek için eğitim amaçlı hazırlanmıştır.
