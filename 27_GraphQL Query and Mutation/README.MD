# (27) GraphQL Query and Mutation

## Query

Query pada GraphQL digunakan untuk mengambil data dari server. Dengan menggunakan GraphQL query, client dapat menentukan data apa saja yang ingin diambil dari server, sehingga data yang dikirim oleh server bisa diperkecil. GraphQL query juga dapat digunakan untuk mengambil dua data sekaligus dalam satu kali request, sehingga dapat meminimalisir jumlah network request.

## Mutation

GraphQL mutation digunakan untuk melakukan modifikasi data yang ada di server. Modifikasi yang dapat dilakukan dengan mutation adalah create, update, dan delete data. Sintaks untuk penggunaan mutation hampir sama dengan sintaks query graphQL.

## Contoh Query dan Mutation

Contoh query graphQL:

```
query MyQuery {
  product {
    product_price
    product_name
    product_freshness
    product_category
    image
    id
    additional_description
  }
}
```

Contoh mutation graphQL:

```
mutation MyMutation {
  insert_product_one(
    object: {
      product_name: "Mug",
      product_price: 10
    })
}

```
