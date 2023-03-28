# (21) React Testing

## Basic Testing

Testing adalah sebuah cara yang dapat dilakukan untuk melakukan verifikasi bahwa kode program yang telah dibuat berjalan dengan baik dan sesuai dengan yang diharapkan di berbagai macam kondisi. Testing memiliki manfaat dalam memberikan bagian-bagian kode yang rusak atau tidak berjalan dengan semestinya. Dengan testing akan mencegah atau meminimalisir hal-hal yang berpotensi memunculkan bug. Contoh tools yang dapat digunakan untuk melakukan testing pada javascript ataupun react adalah **Jest** dan **React Testing Library**.

## React Testing Library

React testing library adalah sebuah library testing yang digunakan untuk melakukan testing pada aplikasi react. React Testing Library dapat bekerja dengan komponen react, sehingga library ini dapat mengakses atau berinteraksi dengan komponen komponen yang ada. Beberapa hal yang dapat dilakukan React Testing Library adalah:

- Melakukan render dan debug komponen
- Mendapatkan elemen dalam struktur halaman website. Elemen dapat diperoleh berdasarkan isi teks, label, placeholderText, altText, dan display value nya.
- Menghandle suatu event. React Testing Library memungkinkan untuk mentrigger sebuah event.
- Menghandle asynchronous function, seperti fetching API.

## Custom Hook Testing

Dalam melakukan testing sebuah aplikasi react, dapat dimungkinkan juga untuk testing suatu custom hook. Library yang dapat digunakan untuk melakukan testing custom hook adalah React Hoooks Testing Library. Library ini akan menyediakan tools untuk menguji custom hooks tanpa perlu merender komponen. Hal tersebut dapat memudahkan untuk menyelesaikan sebuah masalah yaitu hook hanya bisa dipanggil di dalam suatu komponen. Instalasi library React Hooks Testing Library dapat dilakukan dengan menjalankan perintah berikut:

`npm install -D @testing-library/react-hooks`
