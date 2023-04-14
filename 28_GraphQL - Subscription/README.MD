# (28) GraphQL - Subscription

## Definisi

GraphQL subscription adalah salah satu fitur yang dimiliki oleh graphQL yang dapat memungkinkan client bisa menerima perubahan data secara realtime. Fitur subscription ini diimplementasikan dengan menggunakan webSocket.

## Kelebihan Subscription

Dengan graphQL subscription, data yang diterima oleh client dapat ditampikan secara realtime berdasarkan yang ada pada server. Sehingga, ketika di server terjadi perubahan data, maka data yang ditampilkan di sisi client juga akan terupdate secara otomatis tanpa perlu melakukan request ulang.

## Contoh Penggunaan Subscription

Berikut adalah contoh penggunaan graphQL subscription:

```
subscription {
  product {
    id,
    name,
    category
  }
}
```
