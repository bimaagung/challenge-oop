/*
4. Berdasarkan array pada soal no.3 buatlah function yang berfungsi untuk mengurutkan array
pada soal no.3 berdasarkan property umur (ascending; umur lebih kecil di urutan awal)
*/

let arrPerson = [
  {
    first_name: "Agung",
    last_name: "Riansah",
    email: "Agung@gmail.com",
    umur: 23,
  },
  {
    first_name: "Rivan",
    last_name: "Saputra Hendra",
    email: "rivan@gmail.com",
    umur: 25,
  },
  {
    first_name: "Rena",
    last_name: "Fitri",
    email: "Rena@gmail.com",
    umur: 18,
  },
];

arrPerson.sort(function (a, b) {
  return a.umur - b.umur;
});

console.log(arrPerson);
