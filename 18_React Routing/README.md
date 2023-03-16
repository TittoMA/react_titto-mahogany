# (18) React Routing

## Multi Page Application and Single Page Application

### Multi Page Application

Multi page application merupakan jenis aplikasi web yang akan memuat ulang seluruh komponen pada halaman web setiap kali ada request baru ataupun berpindah halaman. Meskipun memiliki komponen yang sama misalnya **_*header*_** dan **_*footer*_**, tetap akan dimuat ulang.

### Single Page Application

Single page application merupakan jenis aplikasi web yang hanya memililki satu halaman saja. Halaman tersebut akan menangani seluruh aktivitas yang terjadi dalam web tersebut.

## Routing

Routing adalah sebuah cara untuk membuat aplikasi react bisa memiliki banyak halaman. Melakukan routing pada aplikasi react dapat dengan cara menambahkan sebuah modul router untuk dapat melakukan navigasi antar halaman pada single page application. Salah satu modul yang dapat digunakan untuk melakukan routing dalam react adalah react-router-dom. Beberapa fitur yang ada pada react-router-dom adalah `BrowserRouter, Switch, Route`.

## URL Params

URL params adalah parameter URL yang nilainya dapat ditetapkan secara dinamis. Contoh dari URL params seperti:

- `/user/kevin`
- `/user/nathan`
- `/user/erling`

Kegunaan dari contoh url params seperti yang ada di atas adalah untuk menampilkan informasi user secara spesifik berdasarkan username yang dimasukkan dalam url params (kevin, nathan, erling)
