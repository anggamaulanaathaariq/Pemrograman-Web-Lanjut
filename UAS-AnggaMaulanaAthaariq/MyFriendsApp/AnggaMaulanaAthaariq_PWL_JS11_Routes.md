  
**Tugas Perorangan**

**PRAKTIKUM DESAIN & PEMROGRAMAN WEB LANJUT**

**“Routes”**

**Jobsheet 11**

![LOGO POLITEKNIK NEGERI MALANG](media/4f35d4dd7c31c3a47e901fcd51fa1183.png)

**Oleh :**

**Angga Maulana Athaariq (08)**

**TI-2B / 1741720138**

**PROGRAM STUDI D-IV TEKNIK INFORMATIKA**  
**JURUSAN TEKNOLOGI INFORMASI**

**POLITEKNIK NEGERI MALANG**

**2019**

  
**Praktikum – Bagian 1: Configure the routes**

| **Langkah** | **Keterangan**                                                                                                         |
|-------------|------------------------------------------------------------------------------------------------------------------------|
| 1           | Buat project baru yang berisi komponen posts (praktikum http service), form-member (soal uts), navbar, not-found, home |
| 2           | Jika node_modules belum tersida, install menggunakan **npm install**                                                   |
| 3           | Buka file app.module.ts. Pastikan komponen pada langkah 1 sudah terdaftar seperti gambar dibawah ini                   |
| 4           | Tambahkan module router pada halaman app.module.ts seperti gambar dibawah ini:                                         |
| 5           | Buka halaman navbar.component.html dan tambahkan kode dibawah ini:                                                     |
| 6           | Buka halaman app.component.html. tambahkan kode dibawah ini:                                                           |
| 7           | Jalankan dan catat hasilnya (soal no. 1)                                                                               |

![](media/93695d8b185b1619d30085e7c3490100.png)

![](media/d4b0a4d8e2e42d7e8ced092b6d715ed7.png)

![](media/b098bac08ea0e982a5c5f458c2d0f25b.png)

![](media/d186ef83bfaa41726ba743db0a8a6c19.png)

![](media/8a50e52860a8d491c8cb18c6188cd499.png)

![](media/d727dd518eb018ee2d49a1315e779eae.png)

![](media/80b66193a927509a9e1d18bc44023621.png)

![](media/9af0898482b0634ab48162e2bfb305ed.png)

**Praktikum - Bagian 2 : Router Outlet**

| **Langkah** | **Keterangan**                                                            |
|-------------|---------------------------------------------------------------------------|
| 1           | Buka halaman app.component.html dan rubah menjadi seperti dibawah ini:    |
| 2           | Jalankan dan inspect elemen seperti pada gambar dibawah ini               |
| 3           | Jalankan link dibawah ini localhost:4200/form seperti gambar dibawah ini: |
| 4           | Jalankan link dibawah ini localhost:4200/post seperti gambar dibawah ini: |
| 5           | Jalankan link dibawah ini localhost:4200/coba seperti gambar dibawah ini: |
| 6           | SImpulkan langkah 3, 4 dan 5 (Soal No. 6)                                 |

![](media/0cefa867074366888c73170ace9d0a7c.png)

![](media/94580a42fd0a88c9ba8f95c43bd5ad11.png)

Apa yang bisa anda simpulkan? (Soal No 2)

![](media/2cb555e3fc2ea407ebe772b68ba0a5c8.png)

![](media/1f28f02790867dad8f90586043af8898.png)

catat hasilnya (Soaln No. 3)

![](media/d288d50c42f0741c14a05fb17baafb4b.png)

![](media/8d4792442bcd00dacc08414d744bf813.png)

catat hasilnya (Soaln No. 4)

![](media/c937f75707afd6041ed962ac37967090.png)

![](media/19ebb3d0e45bde04267853b00536294e.png)

catat hasilnya (Soaln No. 5)

![](media/74e81d8347b3b13385a3cc4d28abdeba.png)

**Praktikum - Bagian 3 : Add Link**

| **Langkah** | **Keterangan**                                                                                        |
|-------------|-------------------------------------------------------------------------------------------------------|
| 1           | Buka halaman navbar.component.html. tambahkan link pada href tiap menu seperti gambar dibawah ini:    |
| 2           | Jalankan, catat dan berikan penjelasan (Soal No. 7)                                                   |
| 3           | Modifikasi href menjadi routerLink pada halaman navbar.component.html seperti gambar dibawah ini:     |
| 4           | Jalankan, inspect element, coba link dan cek pada tab network. Catat dan beri penjelasan (Soal No. 8) |
| 5           | Modifikasi class li pada halaman navbar.component.html menjadi seperti pada gambar dibawah ini:       |
| 6           | Jalankan, catat dan beri penjelasan (Soal No. 9)                                                      |

![](media/f295dd6e8b9bde2538c33b9b9e22ac7f.png)

![](media/7c24342c6884cd0d046b8d70e5426fb3.png)

Menambahkan link form & post agar di klik bias pindah ke link halaman post &
link

![](media/05ae90103740ca298cd144c194ce42e4.png)

![](media/a0f409a510fc747797b81e4c53208b59.png)

![](media/1635d9b4ec76042a921bd1f098d48779.png)

![](media/0011b0c33b178b834721a3a2db84ee6f.png)

**Praktikum - Bagian 4 : Accesing Route Parameter**

| **Langkah** | **Keterangan**                                                                                                               |
|-------------|------------------------------------------------------------------------------------------------------------------------------|
| 1           | Buat komponen baru dengan nama profile dengan perintah **ng g c profile**                                                    |
| 2           | Buka app.module.ts dan tambahkan route untuk profile seperti gambar dibawah ini:                                             |
| 3           | Modifikasi halaman [home.component.html](http://home.component.html) menjadi seperti gambar dibawah ini:                     |
| 4           | Modifikasi file profile.component.ts menjadi seperti pada gambar dibawah ini:                                                |
| 5           | Jalankan, klik tombol home kemudian kliklink joko bowo kemudia inspect element seperti dibawah ini:                          |
| 6           | Modifikasi file profile.component.ts menjadi seperti pada gambar dibawah ini:                                                |
| 7           | Jalankan, klik tombol home kemudian klik link joko bowo kemudia inspect element. Catat dan berikan penjelasan (Soaln No. 11) |

![](media/94bca279b354abef0301c79b5b5dea2d.png)

![](media/72d767f2d811dacae9b6fbd5c1385792.png)

![](media/9469927c6cc51bdad54e8de2e9a73cc8.png)

![](media/0f4a0ef2243a060223f378d3f77b2c1b.png)

Catat dan berikan penjelasan (Soal No. 10)

![](media/5b7ea642527e05c89df622cd124c3308.png)

![](media/6127cd63628fa4fb9346e7213e2510f3.png)
