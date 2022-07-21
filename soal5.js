//5. Buatlah function untuk menghitung umur rata-rata pada soal no 3!

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

function mean_arr(arr) {
  let sum_arr = 0;
  for (let i = 0; i < arr.length; i++) {
    sum_arr += arr[i].umur;
  }

  return sum_arr / arr.length;
}

console.log(mean_arr(arrPerson));
