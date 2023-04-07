# (25) Authentication in React

## Authentication

Authentication adalah sebuah proses untuk verifikasi identitas dari pengguna. Authentication dapat dilakukan dengan cara login. Login merupakan sebuah proses yang dilakukan untuk mengakses sebuah sistem menggunakan credentials sesuai yang diminta oleh sistem. Biasanya informasi yang diminta pada saat melakukan login adalah username / email dan password.

## Authorization

Authorization merupakan proses lanjutan dari authentication. Authorization adalah proses pengecekan hak akses pengguna terhadap sebuah fitur atau layanan tertentu. Hal ini dilakukan untuk memastikan bahwa pengguna yang telah terverifikasi melalui proses authentication memiliki hak akses terhadap sebuah fitur.

## Alur Login

Pada sebuah proses login, hal pertama yang dilakukan adalah pengecekan token. Jika pengguna memiliki token yang tersimpan dan token tersebut masih valid, maka pengguna tidak perlu melakukan login, dan akan langsung terverifikasi. Namnun, jika tidak ada token yang tersimpan, maka pengguna perlu melakukan login dengan memasukkan data yang diminta sistem, pada umumnya adalah username / email dan password. Setelah itu, data yang dimasukkan akan dicek apakah benar atau tidak, jika benar maka proses login berhasil, jika salah maka pengguna tidak bisa masuk aplikasi dan harus mengulang login.
