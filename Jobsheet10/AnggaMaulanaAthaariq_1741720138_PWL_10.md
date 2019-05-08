**Tugas Perorangan**

**PRAKTIKUM DESAIN & PEMROGRAMAN WEB LANJUT**

**“HTTP-Services”**

**Jobsheet 10**

![LOGO POLITEKNIK NEGERI MALANG](media/4f35d4dd7c31c3a47e901fcd51fa1183.png)

**Oleh :**

**Angga Maulana Athaariq (08)**

**TI-2B / 1741720138**

**PROGRAM STUDI D-IV TEKNIK INFORMATIKA**  
**JURUSAN TEKNOLOGI INFORMASI**

**POLITEKNIK NEGERI MALANG**

**2019**

**Praktikum – Bagian 1: JSONPlaceHolder**

Pada bagian ini kita akan menggunakan fake HTTP Service yang akan kita gunakan
sebagai back end aplikasi kita. Kunjungi alamat berikut :
<http://jsonplaceholder.typicode.com/>

Jika Anda scroll down maka Anda akan menemukan bagian Resources seperti pada
gambar 2 berikut :

![](media/35db91e9b9cd7dbdc51f4a010ab1cc1b.png)

Gambar 2. Tampilan fake HTTP Service pada jsonplaceholder

Ini adalah fake HTTP Service, sehingga ketika kita menambahkan sebuah data baru,
maka akan ditampilkan sesuai dengan data yang kita masukkan, tetapi jika kita
mereload halamannya, maka data yang baru kita tambahkan akan hilang karena tidak
ada database di belakang HTTP Service ini.

**Praktikum - Bagian 2 : Getting Data**

| **Langkah** | **Keterangan**                                                                                                                                                                                                                       |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1           | Buat component baru dengan nama posts dengan perintah **ng g c posts**                                                                                                                                                               |
| 2           | Untuk menggunakan HTTPService, kita perlu melakukan import HttpModule pada app.module.ts.                                                                                                                                            |
| 3           | Modifikasi file **posts.component.ts** menjadi seperti berikut:                                                                                                                                                                      |
| 4           | Ubah file app.component.html seperti berikut :                                                                                                                                                                                       |
| 5           | Jalankan dan Catat hasilnya (soal 1)                                                                                                                                                                                                 |
| 6           | Bagaimana jika anda lupa melakukan import HttpModule pada langkah ke-2 ? Lakukan commenting pada HttpModule seperti pada kode berikut :                                                                                              |
| 7           | Apa yang terjadi pada console? Berikan penjelasan atas error yang terjadi. (soal 2)                                                                                                                                                  |
| 8           | Lengkapi kode program pada **posts.component.ts** menjadi :                                                                                                                                                                          |
| 9           | Jalankan pada browser dan jelaskan yang muncul pada console. (soal 3)                                                                                                                                                                |
| 10          | Jelaskan perbedaan yang terjadi pada console jika kode pada **posts.component.ts** diubah menjadi : (soal 4)                                                                                                                         |
| 11          | Untuk menampilkan data pada halaman browser, ubah kode program pada **posts.component.html** seperti berikut : \<ul class="list-group"\> \<li \*ngFor="let post of posts" class="list-group-item"\> {{ post.title }} \</li\> \</ul\> |
| 12          | Ubah kode program pada **posts.component.ts :**                                                                                                                                                                                      |
| 13          | Jalankan dan jelaskan apa yang muncul pada browser. (soal 5)                                                                                                                                                                         |

![](media/181a773f9212f5d22520b0233a136f18.png)

![](media/fc9da093c7f4b7f362d7328375287856.png)

Setelah kita menambahkan HttpModule pada bagian imports, maka secara otomatis
akan menambah imports pada bagian paling atas

![](media/e2e6a035f7a35ddb685cb44fdf00cf63.png)

Hint :

Jika HttpModule tidak muncul secara otomatis maka anda harus menginstal terlebih
dahulu dengan perintah **npm i \@angular/http**

![](media/683a7a5ef09d2b071c7c88a933c52a01.png)

Setelah \@angular/http terinstall, maka anda dapat menjalankan praktikum pada
langkah 2.

![](media/28080833a59662aa0a8317d56d21d50e.png)

Class Http pada contructor digunakan untuk melakukan HTTP request ke back end.

![](media/431e8254782a78540590ea4fbaf7af8c.png)

![](media/142ac7ea289c70715aa82cf45e6fbd43.png)

![](media/72ff4183a406d4db6cff5eba0f1ae8f4.png)

![](media/9d6cc358c4249d9f2e76568da0e1511d.png)

Simpan dan jalankan kembali browser.

![](media/663179709beec187f205345624a05a1f.png)

![](media/19f53fd82bcd1dda1f04d768ed2a4c21.png)

![](media/6623b904397159d4103c2a8920a89d6f.png)

![](media/221fc274dcc67897ed4133c9390b868d.png)

![](media/e919da9f56847935ff96d76fd2605e55.png)

![](media/491ae27d824fc875b84eb99a5361dcca.png)

![](media/4496c963f899b5d700fa5466e3eac789.png)

Hasil Runningnya merupakan dari posts JSONplaceholder, Karena kita memasukkan
link dari JSONplaceholder/posts sehinggan yang keluar adalah hasil dari
placeholder posts

**Praktikum - Bagian 3 : Creating Data**

Perintah-perintah yang digunakan untuk melakukan HTTP Request diwakili oleh
beberapa kata kerja sebagai berikut digambarkan pada gambar 3.

![](media/a91bd53119b72122684a629841a50881.png)

Gambar 3. HTTP Request

| **Langkah** | **Keterangan**                                                                                                 |
|-------------|----------------------------------------------------------------------------------------------------------------|
| 1           | Kita akan menambahkan sebuah text area untuk memasukkan data melalui browser, seperti gambar berikut :         |
| 2           | Pertama, tambahkan input elemen pada **posts.component.html** :                                                |
| 3           | Modifikasi kode program pada **posts.component.ts**                                                            |
| 4           | Simpan dan jalankan pada browser.                                                                              |
| 5           | Jelaskan dengan kalimatmu sendiri bagaimana jalannya program setiap baris pada fungsi **createPost**. (soal 6) |

![](media/d19d2cd6f12dbc38d43d3ac9086ca381.png)

![](media/5de0b2e610c9ea350dc6e12a725c482d.png)

![](media/6d9640615adfdd9fac1349ba05a4e6dd.png)

![](media/cb8e69b2514924cb1fccad19ac974ef7.png)

**Praktikum - Bagian 4 : Updating Data**

| **Langkah** | **Keterangan**                                                                                           |
|-------------|----------------------------------------------------------------------------------------------------------|
| 1           | Kita akan menambahkan sebuah button Update untuk mengubah data melalui browser, seperti gambar berikut : |
| 2           | Tambahkan button Update dengan modifikasi kode program seperti di bawah ini :                            |
| 3           | Tambahkan fungsi updatePost pada posts.ts seperti di bawah :                                             |
| 4           | Simpan dan jalankan pada browser.                                                                        |
| 5           | Apa fungsi patch pada potongan kode program pada langkah 3? (soal 7)                                     |

![](media/cbdc2ee8ae43495b1e7fcbf057a204a2.png)

![](media/ba67f78b05de41da46fc0ab346df490f.png)

![](media/73624866d7ff4d90c21da30241a2d8be.png)

![](media/a50e92e3f59f5b2e136306c3f2dbdbc8.png)

**Praktikum - Bagian 5 : Deleting Data**

| **Langkah** | **Keterangan**                                                                                                                     |
|-------------|------------------------------------------------------------------------------------------------------------------------------------|
| 1           | Kita akan menambahkan sebuah button Delete di sebelah button Update untuk menghapus data melalui browser, seperti gambar berikut : |
| 2           | Tambahkan button Delete dengan modifikasi kode program seperti di bawah ini :                                                      |
| 3           | Tambahkan fungsi deletePost pada posts.ts seperti di bawah :                                                                       |
| 4           | Simpan dan jalankan pada browser.                                                                                                  |
| 5           | Apa fungsi splice pada potongan kode program pada langkah 3? (soal 8)                                                              |

![](media/a61f94563931fc6cffbacd9cb2101456.png)

![](media/ac3aebca9aba6755b06190567531df21.png)

![](media/680525a9576739889a394a4d704a0e5a.png)

![](media/74edabd07d95d0bed903a56c3342687c.png)
