**Tugas Perorangan**

**PRAKTIKUM DESAIN & PEMROGRAMAN WEB LANJUT**

**“Authentication and Authorization”**

**Jobsheet 12**

![LOGO POLITEKNIK NEGERI MALANG](media/4f35d4dd7c31c3a47e901fcd51fa1183.png)

**Oleh :**

**Angga Maulana Athaariq (08)**

**TI-2B / 1741720138**

**PROGRAM STUDI D-IV TEKNIK INFORMATIKA**  
**JURUSAN TEKNOLOGI INFORMASI**

**POLITEKNIK NEGERI MALANG**

**2019**

  
**Praktikum – Bagian 1: Implementation Login**

| **Langkah** | **Keterangan**                                                                                                                                                                                                         |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1           | Buka folder auth-demo-starter kemudian open terminal dan lakukan ng serve. Catat hasil nya (soal 1)                                                                                                                    |
| 2           | Apabila terjadi error seperti dibawah ini :                                                                                                                                                                            |
| 3           | [./media/image5.png](./media/image5.png)                                                                                                                                                                               |
| 4           | Buka file auth.service.ts lalu tambahkan perintah seperti berikut ini :                                                                                                                                                |
| 5           | Jika sudah ditambahkan, jalankan perintah ng serve, dan klik bagian login lalu masukkan email address : <mosh@domai.com> dan password 1234 kemudian klik sign in. perhatikan apa yang terjadi? Catat hasilnya (soal 3) |
| 6           | Kemudian lakukan login dengan email yang formatnya tidak valid contoh email kita isi 1234 dengan password 1234 maka ketika kita login dan kita inspect response apa yang muncul ? Catat hasilnya (soal 4)              |
| 7           | Buka file auth.service.ts kemudian lakukan perubahan seperti berikut :                                                                                                                                                 |
| 7           | Kemudian jalankan dan lakukan login dengan username dan password yang sesuai pada no 5, kemudian lakukan inspect pilih menu application liat di local storage, apa yang terlihat ? catat hasilnya (soal 5)             |

![](media/6f055ccf8d3cbb48ab7dd555a5c9f430.png)

![](media/bcb631f3ac43be4696a622c81d69ed2f.png)

Maka lakukan perintah untuk menginstall angular2-jwt, dengan perintah :

**npm install angular2-jwt –save** kemudian lakukan **ng serve –open**

catat hasilnya (soal 2)

![](media/b1cf35e4df6e0547a60fa500c0f96335.png)

![](media/226b42509e3c813c9716af9f7b5b668d.png)

![](media/c6dc257e3172e999175ccfa790773e31.png)

![](media/a26dd74f3778f8580ee3c9b7bb6bdfe1.png)

![](media/a46a3b9c46187667904fc1b4d147d695.png)

![../../../../../Desktop/Screen%20Shot%202019-04-27%20at%2011.20.19.png](media/180c1ea65ea6cf912c279c7791748f12.png)

![](media/8dafe60b54c7657348fcb25e0003b48f.png)

**Praktikum – Bagian 2: Implemetasi Logout**

| **Langkah** | **Keterangan**                                                                                                                                                                                                                                                  |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1           | Open file home.component.html, tambahkan                                                                                                                                                                                                                        |
| 2           | Open file auth.service.ts lalu tambahkan pada bagian logout :                                                                                                                                                                                                   |
| 3           | Jalankan aplikasi, lalukan login dengan username dan password seperti sebelumnya dan lakukan inspect, cek pada local storage harusnya token nya sudah ada di local storage. Kemudian lakukan logout. Apa yang terjadi pada local storage ? Catat hasil (soal 6) |

![../../../../../Desktop/Screen%20Shot%202019-04-27%20at%2011.48.06.png](media/276e565f26dce8fea96fdd02a1a56a3a.png)

![../../../../../Desktop/Screen%20Shot%202019-04-27%20at%2011.49.39.png](media/9639f9081aaaf3352443400ed1de058a.png)

  
**Praktikum - Bagian 3 : Getting the Current User**

| **Langkah** | **Keterangan**                                                                                                                                                                                                     |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1           | Buka https://jwt.io, kita akan membuat token yang nantinya akan kita tempelkan di fake-backed.ts                                                                                                                   |
| 2           | Open auth.service.ts, lakukan modifikasi pada part isLoggeedIn() sehingga menjadi seperti berikut :                                                                                                                |
| 3           | Kemudian tambahkan code berikut tepat dibawah langkah no 2 : get **currentUser**(){ let token = localStorage.**getItem**('token'); if (!token) return null; return new **JwtHelper**().**decodeToken**(token); } } |
| 4           | Open fake-backend.ts, ganti token yang lama menjadi token pada no 1                                                                                                                                                |
| 5           | Open file home.component.html , modifikasi seperti berikut :                                                                                                                                                       |
| 6           | Jalankan aplikasi. Cek apa yang terjadi dan beri penjelasan (soal 7)                                                                                                                                               |

![../../../../../Desktop/Screen%20Shot%202019-04-29%20at%2005.36.37.png](media/4ab693d01e26e9986e3dbc45ad0f57f6.png)

![../../../../../Desktop/Screen%20Shot%202019-04-29%20at%2005.36.25.png](media/6113ece987b245a3e293340dfb647019.png)

lalu copy code hasil diatas.

![../../../../../Desktop/Screen%20Shot%202019-04-29%20at%2005.38.00.png](media/afdb743241f6bc0aaf393be03b0ae5d5.png)

![](media/1a5f07272861a583b21f506066df179d.png)

![../../../../../Desktop/Screen%20Shot%202019-04-29%20at%2005.41.09.png](media/26caa98a0ceefa865d2decde3963657e.png)

![](media/bdd1a9ed70a678540c91053f4092cfbc.png)
