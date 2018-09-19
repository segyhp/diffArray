import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-array',
  templateUrl: './filter-array.component.html',
  styleUrls: ['./filter-array.component.css']
})
export class FilterArrayComponent implements OnInit {



//Inisiasi global variable agar bisa digunakan di html dengan String Interpolation
  public arrOne = [];
  public arrTwo = [];

  constructor() {
    //memasukan nilai dari masing-masing array yang akan dibandingkan
    this.arrOne = [10,1,2,4,5,7,8]
    this.arrTwo = [2,6,4,7];
}


//membuat fungsi untuk membandingkan 2 array di atas yang hasilnya akan di tampilkan di html
diffArray(arr1, arr2){
//initasi var lokal bernama  arrRes
var arrRes = arr1
//filter pertama = filter array pertama dengan mencari nilai dari array pertama yang tidak ada di array kedua dengan method includes
              .filter(x => !arr2.includes(x))
//menyambungkan filter pertama dengan filter kedua dengan method concat
              .concat
//filter kedua = filter array kedua dengan mencari nilai dari array kedua yang tidak ada di array pertama dengan method includes
              (arr2.filter(x => !arr1.includes(x)));
// sortir hasil array perbedaan dengan ascending (dari yang terkecil ke terbesar)
arrRes.sort((a, b)=>
{return a - b});


//mengembalikan hasil array
return arrRes;
}


}
