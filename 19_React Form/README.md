# (19) React Form

## Basic Form

Form merupakan sebuah sekumpulan elemen input yang digunakan untuk mendapatkan data yang dibutuhkan yang biasanya diisi oleh pengguna aplikasi. Beberapa jenis input pada form, antara lain:

- input => `<input />`
- text area => `<textarea />`
- radio button => `<input type='radio' />`
- checkbox => `<input type='checkbox' />`
- input select => `<select> </select>`

## Controlled Component

Controlled component adalah sebuah komponen elemen form yang nilai atau valuenya dikontrol oleh react. Value yang dimiliki oleh sebuah input dikontrol oleh react dengan menggunakan state pada react. Perubahan value sebuah inputan akan ditangani oleh sebuah function event handler. Menggunakan controlled component akan memberikan kemudahan dan kustomisasi yang lebih dalam menangani sebuah form, misalnya **melakukan validasi secara real-time**.

## Uncontrolled Component

Uncontrolled component merupakan sebuah komponen form yang data-data atau value dalam inputanntya akan ditangani oleh DOM-nya sendiri. Value yang dimiliki oleh input tidak dapat dikontrol perubahannya. Value tersebut dapat diambil menggunakan ref.

## Form Validation

Validasi form adalah sebuah hal yang sangat penting untuk dilakukan. Validasi form adalah sebuah pengecekan yang akan dilakukan oleh sistem untuk mendapat inputan yang sesuai dengan format yang diminta aplikasi. Validasi form dapat dilakukan pada client-side ataupun server-side. Menambahkan validasi pada sebuah form dapat sangat berguna untuk bebrapa hal, seperti:

- Mendapatkan data yang sesuai dengan format agar aplikasi dapat berjalan dengen benar.
- Melindungi pengguna dengan meminta inputan yang sesuai, misalnya inputan password.
- Mencegah data-data atau inputan berbahaya yang dapat meretas sistem / aplikasi.
