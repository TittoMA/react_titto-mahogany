# (20) Global State Management and Data Fetching

## Global State

Global state adalah suatu state yang diinisialisasi dalam satu komponen induk agar dapat digunakan oleh seluruh komponen child yang ada dalam web atau aplikasi. Dengan global state, seluruh komponen dapat menggunakan atau memanggil data-data yang tersimpan di dalam global state tersebut.

## Redux

Redux adalah sebuah library yang digunakan untuk melakukan state management pada web / aplikasi yang dibuat. Dengan menggunakan redux, dapat mengimplementasikan global state management pada sebuah app. Beberapa kondisi yang tepat untuk menggunakan redux, antara lain:

- Saat terdapat banyak state yang perlu diletakkan di banyak komponen.
- Saat state pada app sering berubah.
- Logic dalam mengubah state kompleks
- Saat codebase berukuran sedang sampai besar dan dikerjakan oleh banyak orang.
- Perlu mengetahui bagaimana state diupdate seiring berjalannya waktu.

## Redux Thunk

Redux Thunk adalah middleware yang dapat mengembalikan suatu function, bukan hanya action. Alasan untuk menggunakan redux thunk adalah yaitu untuk menghandle side effect logic yang cukup kompleks. Selain itu juga dapat digunakan untuk logic async seperti request data.
