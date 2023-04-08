# (26) Introduction GraphQL and Apollo Client Setup

## GraphQL

GraphQL adalah bahasa query yang dapat digunakan untuk pengambilan data dari API. Dengan menggunakan GraphQL, pengambilan data dapat dilakukan dengan lebih efisien dan fleksibel. Data yang diambil dapat disesuaikan sesuai dengan kebutuhan saja, sehingga GraphQL dapat meminimalisir jumlah data yang ditransfer. Selain itu, dengan GraphQL hanya membutuhkan satu endpoint saja untuk semua jenis request yang dilakukan. Tiga fitur utama dari GraphQL client adalah query, mutation, dan subscription. Query adalah fitur graphQL untuk mengambil data-data sesuai dengan apa saja yang didefinisikan. Mutation adalah fitur untuk menambahkan, mengupdate, dan menghapus data. Sedangkan subscription adalah sebuah fitur untuk menerima data terupdate secara realtime.

## Hasura

Hasura merupakan sebuah layanan yang menyediakan pengembangan API yang dibangun menggunakan GraphQL. Dengan menggunakan hasura, pembuatan API yang menggunakan GraphQL akan menjadi lebih mudah dan cepat, sehingga front end developer dapat fokus untuk pengembangan aplikasi di sisi client.

## Apollo Client

Apollo client merupakan sebuah library javascript yang terpasang di sisi client untuk melakukan interaksi dengan GraphQL API. Tujuan utama dari Apollo Client adalah untuk menyederhanakan proses pengambilan dan pengelolaan data dari API GraphQL. Dengan Apollo Client, developer dapat menulis query dan mutation dengan cara deklaratif, lalu Apollo Client akan menangani sisanya, termasuk caching hingga error handling.
