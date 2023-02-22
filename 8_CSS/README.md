# [8] CSS

## **CSS**

CSS adalah singkatan dari Cascading Style Sheets. CSS dianalogikan sebagai sesuatu yang digunakan untuk menghias atau memberikan dekorasi pada struktur yang telah dibuat oleh HTML. CSS pada sebuah website memiliki peran penting dalam menghias halaman web dan mengatur tata letaknya agar terlihat indah dan rapi. Dengan adanya CSS eleme-elemen yang ada pada tampilan website dapat diatur warna, ukuran,jarak antar elemen, dan masih banyak lagi.

<br>

## **Menambahkan CSS**

Menambahkan sebuah CSS ke dalam halaman website dapat dilakukan dengan 3 cara, yaitu dengan menggunakan external CSS, internal CSS, dan inline CSS.

### _External CSS_

Metode External CSS dapat dilakukan dengan cara membuat satu file terpisah yang dikhususkan untuk memuat syntax-syntax CSS. File tersebut dapat dihubungkan ke dalam file HTML yang ingin ditambahkan CSS dengan menggunakan tag `<link>` yang dimasukkan dalam bagian `<head>`.
contohnya:
`<link href='style.css' rel='stylesheet>`

### _Internal CSS_

Menggunakan metode internal CSS tidak perlu membuat file terpisah untuk menambahkan CSS. Dengan metode internal CSS, styling dapat dilakukan secara langsung pada file HTML dengan memasukkan syntax CSS pada tag `<style> </style>`.

### _Inline CSS_

Sama seperti internal CSS, inline CSS tidak perlu menambahkan file baru untuk membuat CSS. Dengan inline CSS, styling dapat dilakukan langsung dari file HTML. Namnun perbadaannya dengan internal CSS adalah syntax CSS ditambahkan langsung di dalam elemen yang ingin di-styling melalui atribut `style`.

<br>

## **Syntax CSS**

Dalam sebuah syntax CSS, terdapat 3 bagian yang harus dituliskan, yaitu selector, property, dan value. Selector menunjukkan elemen mana pada HTML yang akan dilakukan styling. Property menunjukkan hal/properti apa yang akan diubah (styling) pada elemen tersebut. Value merupakan nilai yang akan digunakan untuk menentukan bagaimana properti tersebut akan diubah. Contoh syntax CSS:
<br>

```css
h1 {
  color: blue;
}
```

**h1** pada contoh di atas adalah sebagai selector, **color** adalah sebagai property, dan blue adalah sebagai **value**.

<br>
