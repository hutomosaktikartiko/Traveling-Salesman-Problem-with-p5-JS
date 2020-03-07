# TRAVELING SALESMAN PROBLEM DENGAN LEXICOGRAPHIC ORDER

## Apa itu Lexicographic Order ?
Lexicographic Order atau Urutan leksikografis adalah cara pengurutan kata-kata berdasarkan urutan alfabet huruf-huruf komponennya. Ia juga dikenal sebagai urutan leksikal , urutan kamus dan urutan alfabet. Ini mirip dengan cara kita mencari kata apa pun di kamus. Dikamus kita memulai pencarian kata dengan hanya mencari huruf pertama dari kata tersebut. Kemudian mencoba menemukan huruf kedua dan seterusnya. Kata-kata dalam kamus disusun dalam urutan leksikografis.

## Langkah - langkah
Misalkan P [1..n] adalah permutasi 1 sampai n. Kita dapat membangun permutasi berikutnya dalam urutan leksikografis dengan mengikuti langkah-langkah sederhana ini:
```
1. Temukan x terbesar sehingga P [x] <P [x + 1].
   (Jika tidak ada x seperti itu, P adalah permutasi terakhir.)
2. Temukan y terbesar sehingga P [x] <P [y].
3. Tukar P [x] dan P [y].
4. Membalik P [x + 1 .. n].
```


[![TRAVELING SALESMAN PROBLEM DENGAN LEXICOGRAPHIC ORDER](https://i.ytimg.com/vi/9Xy-LMAfglE/default.jpg?sqp=-oaymwEECHQQQQ&rs=AMzJL3ki5QTx1r433K6wnBNW8PUJ-u5SGA)](https://www.youtube.com/watch?v=9Xy-LMAfglE)


Sumber :
* https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering
* https://www.quora.com/What-is-lexicographic-order
* https://www.youtube.com/watch?v=9Xy-LMAfglE