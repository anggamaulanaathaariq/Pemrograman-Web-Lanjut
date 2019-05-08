**Tugas Perorangan**

**PRAKTIKUM DESAIN & PEMROGRAMAN WEB LANJUT**

**(**Directive**)**

**Praktikum 7/ (BAB 5)**

![D:\\KULIAH\\LOGO POLITEKNIK NEGERI MALANG.png](media/4f35d4dd7c31c3a47e901fcd51fa1183.png)

**Oleh :**

**Angga Maulana Athaariq (08)**

**TI-2B / 1741720138**

**PROGRAM STUDI D-IV TEKNIK INFORMATIKA**  
**JURUSAN TEKNOLOGI INFORMASI**

**POLITEKNIK NEGERI MALANG**

**2019**

6.1 ngIf
--------

>   Directive ngIf digunakan untuk sebuah kondisi percabangan. Ada beberapa
>   contoh penggunaan ngIf. Contoh Pertama

-   buka file

![](media/c2d4c4d74628a35ca6f6a663c335b149.png)

-   buka file

![](media/4323d1e2ffb3430076bac8ce0401a24f.png)

-   jalankan localhost maka hasilnya seperti berikut

![](media/af682c1156e823221ffc01c0a9fe5968.png)

-   Jika array pada app.component.ts (courses=[];) dikosongkan maka hasilnya
    seperti berikut

![](media/a66c6eb8d73fe01c96783ebb78312c6a.png)

![](media/87277b7e5eaaee18ff75fbbc89b20116.png)

contoh kedua menggunakan else:

-   buka file app.component.html modifikasi kodenya menjadi berikut

![](media/af701d9372e2121f0fa5474a23e4a69e.png)

-   jalankan localhost dengan kondisi array pada app.component

1.  dengan array kosong

![](media/d33024d9fee6c7fccefd2cf6b67fced6.png)

![](media/c34f1c486a40765c1648335c156d1c3f.png)

1.  dengan array ada isi

![](media/8c65ee8daeb80b2c3e63ab1a991a278e.png)

![](media/e724ae730790e430dbb8a3014518df7d.png)

cara ketiga :

-   buka file app.component.html modifikasi kodenya menjadi berikut

![](media/3590375c88a9eb7dcadd3b80e87da6f8.png)

-   jalankan localhost dengan kondisi array pada app.component

1.  dengan array kosong

![](media/328178a69215c950b6a3455670226ce9.png)

![](media/89436837b2d18ded2aa2868b4760027a.png)

1.  dengan array ada isi

![](media/8c65ee8daeb80b2c3e63ab1a991a278e.png)

![](media/92b9188c8f3377c3e369d9ec250af476.png)

6.1 Hidden Property
-------------------

-   buka app.component.html

    ![](media/4ab46609d4306eb6a6203431ec5290f9.png)

-   jalankan localhost maka hasilnya seperti berikut

    ![](media/2cba24e7b6aa2d2f72e0ace7aca0c3ad.png)

-   selain contoh diatas kita juga dapat memberikan property seperti berikut

![](media/304d72949b095269bb26b24968399972.png)

>   dengan catatan pada app.component.ts pada courses terdapat array courses
>   dengan nilai 1 dan 2

![](media/4fa6551e7822c5971a55eed9cf8dd440.png)

-   jalankan localhost (berbeda hasil jika pada array courses tidak terdapat
    isinya)

![](media/46a9987610e26cf439aab5734fa2988e.png)

>   Jika kita inspect element maka akan terlihat property hidden tidak terdapat
>   kondisi true ataupun false.

![](media/72f56df44bd3642a0789c038899ce57c.png)

>   berbeda jika kita menggunakan ngIF terdapat bindings dengan nilai false

6.1 ngSwitchCase
----------------

-   buka file app.component.html modifikasi codenya menjadi seperti beriku**t**

![](media/ce149ae399d2988cd6323046142f3e27.png)

-   buka file app.component.ts tambahkan property viewMode (line 12)

![](media/9bf5b1039dd1c972906da7181bc12ace.png)

![](media/37910386804c23722a76fe32ee5b6ac2.png)

6.1 ngFor
---------

-   buka app.component.ts property CoursesFor yang berisikan array (line 12)

    ![](media/e90945f78c630609e8831a16762721c5.png)

-   buka file app.component.html tambahkan directive ngFor pada element li

![](media/276de33ee8f271b48e80340aa7928e55.png)

-   jika dijalankan maka hasilnya seperti berikut

![](media/185d4fc44e7dd8ffc687cf438898ed54.png)

-   kita juga dapat memberi tanda tertentu pada index yang bernilai ganjil
    dengan menggunakan isEven <https://angular.io/api/common/NgForOf>

![](media/9083b9d130c2db7e2a040cbdb42caa69.png)

![](media/dcba1d1cd149c8255b754744ebde4068.png)

6.1 ngFor dan change Detection
------------------------------

-   Pada percobaan ini kita akan menambahkan sebuah data array pada coursesFor

-   tambahkan button pada app.component.html (line 64)

![](media/713d19843e9981b8f1593baca0ff4c95.png)

-   tambahkan method onAdd()

![](media/53052a0cd5b3626d5f27fa340326a916.png)

-   sehingga hasilnya seperti berikut (jika kita tekan button add maka akan
    ditambahkan sebuah data courses 6)

![](media/38826c9ddc6f5b9cfa52a241395f8a51.png)

![](media/98a8e8ea2b7b46a6d9af21c42c0ae9e9.png)

-   setelah kita berhasil menambahkan sebuah data array pada courseFor maka
    untuk selanjutnya kita akan mencoba untuk melakukan penghapusan data. –

-   Tambahkan sebuah method onRemove pada app.component.ts

![](media/f8c858b1206b01d062648daa4298b848.png)

-   line 26 sebuah method dengan parameter item. Jika kita console.log (item)
    maka hasilnya pada saat kita hapus salah satu data maka hasilnya akan
    seperti berikut

![](media/5d79f7c936d264f63142dfc53aaf2318.png)

-   line 27 sebuah variabel baru dengan nama index bertipe data number. Untuk
    lebih jelasnya kita bisa tambahkan console.log(index) pada method onRemove
    dan hasilnya pada saat kita hapus salah satu data maka akan seperti berikut

![](media/5d79f7c936d264f63142dfc53aaf2318.png)

-   Buka app.component.html dan tambahkan sebuah button untuk menghapus (line69)

![](media/af4f05acac0207bdd6b37ac118505a6e.png)

-   line 69 adalah sebuah button dimana terdapat event click yang memanggil
    method onRemove dengan parameter item

-   hasilnya seperti berikut (pada saat button remove diclick maka salah satu
    data akan hilang sementara)

![](media/3e234ea3ab51bd6c86e4af059babb92b.png)

-   selain itu kita juga dapat melakukan perubahan status menggunakan event
    click

-   buka file app.component.html tambahkan button (line 70)

![](media/72572a66e4d2c9d082ece31f1001d3d2.png)

-   pada line 70 terdapat sebuah button dan event click dimana event click ini
    memanggil method onChange dengan parameter item

-   buka file app.component.ts buatlah sebuah method onChange dengan parameter
    item dan didalam method tersebut adanya perubahan string menjadi updated

![](media/14867e66a58c901501678790a114e38b.png)

-   Hasilnya

![](media/6706c1922a1db19d537bbd5b2787431a.png)

6.1 ngFor dan trackby
---------------------

-   Buka file app.component.ts buatlah sebuah method dengan nama loadCourses
    (line 38) tapi sebelumnya buat sebuah property dengan nama coursesForOne
    (line 37)

    ![](media/9370ed5292afa67625013c7b4a5a8b7d.png)

-   buka file app.component.html dan tambahkan code seperti pada gambar

    ![](media/58130fb5d6af150808fb530d13f5a6c7.png)

-   hasilnya saat button diclick

    ![](media/0f8afaa9aa2c10563942a44987b8eb4a.png)

-   sekarang kita lakukan analisa buka inspect element, saat button belum
    diclick seperti pada gambar berikut

    ![](media/6ab13e256482a4e3c3471a1545c81804.png)

-   dan saat button diklik maka element ul akan muncul seperti pada gambar
    berikut

![](media/e0a83dc37d693182cf37c74caab0c366.png)

-   jika kita lakukan klik kembali maka button akan merespon kembali dengan
    menampilkan data yang sudah ada dalam arti mengunduh ulang yang sudah ada
    (jika kita lakukan klik kembali maka pada inspect element akan muncul
    highlight warna ungu dimasing-masing element li)

![](media/cc9e6f885537ebd61ddd7566e22744f9.png)

-   oleh karena itu kita membutuhkan TrackBy yang nanti digunakan untuk mengecek
    jika data sudah ada maka button tidak perlu melakukan actionnya kembali

-   untuk menambahkan TrackBy dengan cara menambahkan pada app.component.html
    pada directive ngFor

![](media/0476a5fa86525268bb561fe2f12d1ad5.png)

-   selain itu tambahkan juga sebuah method trackCourse dengan parameter index
    dan itemone pada app.component.ts

![](media/838067ce395d8575742c1a8496175cb4.png)

-   line 48 sebuah nilai kembalian jika itemone bernilai true maka itemone.id
    akan ditampilkan dan jika itemone bernilai false maka itemone tidak
    terdefinisi

-   jika berhasil maka pada saat button tampilkan data diklik untuk kedua
    kalinya pada inspect element tidak ada muncul highlight ungu pada
    masing-masing element li

6.1 The leading Asterik
-----------------------

>   leading asterik adalah tanda asterisk yang ada pada directive seperti
>   \*ngFor dsb. adapun maksud leading asterisk pada sebuah directive adalah
>   bahwa kita memberi tahu angular untuk menulis ulang markup tertentu, seperti
>   code berikut

![](media/996339c623791159764f2fb9ecf707a4.png)

>   pada gambar diatas terdapat sebuah directive \*ngIF dimana fungsi dari
>   asterisk pada ngIf adalah memberi tahu angular untuk menulis ulang markup
>   dari div tersebut menggunakan ng template dengan menggunakan property
>   binding seperti pada gambar berikut

![](media/bd5a13a0ff9d09de6d74a78db543d3a0.png)

6.1 ngClass
-----------

>   jika pada percobaan sebelumnya kita membuat component favorite menggunakan 2
>   class binding yaitu class binding fa-star dan fa-star-o seperti pada gambar
>   berikut

![](media/4a840578ca68c2f094a60533d439cffe.png)

>   selain menggunakan class binding seperti diatas kita juga dapat menggunakan
>   attribute directive class seperti berikut

![](media/4aa6882528227a842021b21d1ab3f529.png)

6.1 Custom Directive
--------------------

-   pertama kita harus membuat directive dengan nama input-format terlebih
    dahulu dengan perintah seperti berikut:

    ![](media/13725e6532f3792b5375dce76561af8e.png)

-   jika directive berhasil digenerate maka kita pastikan di app.module.ts pada
    \@NgModule terdapat nama directive yang kita buat tadi

    ![](media/c7ccd5dc0c46b878a1eb9b0c2a77b125.png)

-   buka input-format.directive.ts dan tambahkan decorator HostListener seperti
    pada gambar berikut

    ![](media/1ee98445da8b27e45be2e3624d3e8d13.png)

-   Buka file app.component.html dan tambahakn code berikut

    ![](media/f9783ec88ab7925ab897ee6067d8e56c.png)

-   line 89 terdapat appInputFormat adalah selector pada
    inputformat.directive.ts

    ![](media/e96a7d421b7165ca5e0faa34909b94f3.png)

-   Kita jalan localhost:4200 setelah itu lakukan percobaan click pada textbox
    dan click diluar textbox. Amati dengan menggunakan console inspect element.
    Pada saat kita click pada textbox maka pada console akan muncul onFocus
    tetapi jika click diluar textbox maka console akan keluat onBlur

    ![](media/980ab4ae6f104d5daac73e30210a71c7.png)

-   Setelah kita memahami fungsi dari decorator \@HostListener maka untuk
    berikutnya kita akan mencoba membuat logika untuk merubah value dari textbox
    menjadi lowercase

-   buka file input-format.directive.ts dan modifikasi codenya menjadi berikut

    ![](media/76ed6861a4cafd4bce52f62873bb044d.png)

-   Jalankan localhost dan berikan masukan dengan huruf besar semua setelah itu
    tekan tab, jika berhasil maka valuenya akan berubah menjadi huruf kecil
    semua

    ![](media/9f03c8edd3b11a40382eed11be5ecd16.png)

    ![](media/4be1e0d5499543c353f2197830e60ef8.png)

    Setelah ditekan TAB

-   atau kita bisa menggunakan cara lain dengan menggunakan property binding

-   buka file app.component.html dan tambahkan property binding dengan nama
    format

    ![](media/64d4f52c765645ab2b8acab5a4dada13.png)

-   buka file input-format.directive.ts tambahkan decorator input dan modifikasi
    codenya seperti pada gambar berikut

    ![](media/712c24f249a769c701126f98aa21b796.png)

-   line 7 adalah sebuah decorator input dengan nama property format

-   line 14 – 16 adalah sebuah kondisi dimana jika format sama dengan lowercase
    maka semua inputan akan dibuat menjadi huruf kecil semua sedangkan jika
    selain lowercase maka akan dibuat huruf besar

-   cat:format disini adalah kondisi di app.component.html

    ![](media/b4dbda9f77d7d6e21cea37e7b293e3f9.png)

-   atau kita juga dapat menggunakan cara lain yaitu menggunakan nama selector
    sebagai property binding

-   buka app.component.hml modifikasi codenya menjadi berikut

    ![](media/0b1812b24bfc0909e5262a4db40ad99a.png)

-   buka input-format.directive.ts dan tambahkan decorator input dengan
    parameter appInputFormat

    ![](media/88577b43a7b4072642aedd2e46e3425c.png)

-   Jika dijalankan sebagai contoh kita memasukkan kalimat dengan huruf kecil
    dan pada saat kita tab maka akan berubah menjadi huruf besar semua seperti
    berikut

    ![](media/7efaccf40bb9f38c1ff9257f320e196f.png)

    ![](media/713fb9a5637536c0e8e88c0f24324270.png)

    Setelah di TAB
