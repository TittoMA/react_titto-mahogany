# [5] Version Control System and Branch Management (Git)

## Versioning

Versioning adalah mengatur atau me-manage versi dari kode program yang dibuat. Dengan melakukan versioning, dapat dilakukan pelacakan terhadap kode program dalam versi-versi yang sebelumnya. Setiap perubahan akan tercatat sehingga akan sangat mudah untuk menelusuri sesuatu jika terdapat kesalahan atau masalah pada kode program.

## Saving Changes

perubahan dapat disimpan dengan git dapat mengunakan perintah `git add` . Perintah tersebut akan memindahkan file yang berubah dari working directory ke dalam staging area. Selanjutnya lakukan commit dengan perintah `git commit`, lalu push ke dalam remote server menggunakan perintah `git push`.

## Syncing

Syncing adalah sinkronisasi project yang ada di working directory dengan yang ada pada remote server. `git pull` dapat digunakan untuk mengambil data terbaru pada remote server dan menerapkannya pada project yang ada di local. Lalu juga terdapat perintah `git fetch` yang berfungsi untuk mengambil data perubahan terbaru pada remote server tanpa menerapkannya pada project local.

## Branches

Branch pada git merupakan sebuah percabangan yang bisa digunakan untuk mengisolasi perubahan dari sebuah branch terhadap branch utama. Branching dapat digunakan untuk mengembangan sebuah fitur tertentu sehingga saat dalam pengembangan, perubahan yang terjadi tidak mengganggu branch lainnya.
