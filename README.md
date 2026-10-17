# Prova – Prototip Başlatıcı

Claude ile yaptığın HTML mobil prototiplerini telefonunda, tarayıcı çubukları olmadan,
gerçek bir uygulama gibi açmanı sağlar. iPhone ve Android’de çalışır.

## 1. İnternete koy (bir kez, ücretsiz)

Prova’nın ana ekrana eklenebilmesi için bir https adresinde durması gerekir.

**GitHub Pages (önerilen, kalıcı)**
1. github.com’da ücretsiz hesap aç, **New repository** ile `prova` adında **Public** bir depo oluştur.
2. **Add file → Upload files** ile bu klasördeki her şeyi (index.html, sw.js, manifest.webmanifest, ornek.html ve icons klasörü) yükle, **Commit changes**.
3. **Settings → Pages** bölümünde *Branch* olarak `main` ve `/ (root)` seç, **Save**.
4. Bir dakika sonra adresin hazır: `https://KULLANICIADIN.github.io/prova/`

**Netlify (alternatif)**
app.netlify.com’da ücretsiz hesapla giriş yap, bu klasörü **Sites** sayfasına sürükle-bırak.
Giriş yapmadan bırakılan siteler kısa süre sonra silinebilir, bu yüzden hesapla giriş yap.

## 2. Telefona kur

- **iPhone:** Adresi Safari’de aç → Paylaş → **Ana Ekrana Ekle**.
- **Android:** Adresi Chrome’da aç → **Uygulamayı yükle** (veya ⋮ → Ana ekrana ekle).

Sonra Prova’yı **ana ekrandaki simgesinden** aç ve prototiplerini oradan ekle.
(iPhone’da Safari’de eklenenler ana ekran uygulamasına geçmez.)

## 3. Kullan

- **Ekle → Dosyadan seç / Kodu yapıştır / Linkten al**
- Simgeye **dokun**: tam ekran açılır.
- Simgeye **basılı tut**: yeni sürüm yükle, ad/simge değiştir, paylaş, sil.
- Prototip açıkken **iki parmakla dokun ve yarım saniye bekle**: menü (listeye dön, baştan başlat, kenar boşlukları).
  Android’de geri hareketi de listeye döner. Bilgisayarda Esc.
- **Ayarlar → Tümünü yedekle**: telefon değiştirirken veya veri kaybına karşı.

## Claude’dan prototip isterken

Şu cümleyi isteğine ekle ya da Claude Projects talimatlarına koy:

> Prototipi tek dosyalık, kendi başına çalışan bir HTML dosyası olarak ver (CSS ve JS içinde).
> Mobil öncelikli tasarla, ekranı 100% yükseklikle doldur, sayfanın kendisi kaymasın.
> Kütüphane gerekiyorsa cdnjs veya jsDelivr’den sabit sürümle yükle.

## Prova’yı güncellemek

`index.html` veya `sw.js` dosyasını değiştirip yeniden yüklediğinde, `sw.js` içindeki
`VERSION` değerini (ör. `prova-v2`) artır. Prova açılınca “Yeni sürüm hazır” diye haber verir.
