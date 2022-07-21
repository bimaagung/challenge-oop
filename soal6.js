//6. Buatlah function untuk mengembalikan object yang memiliki full name paling Panjang pada soal no 3!

let arrPerson = [
  {
    first_name: "Agung",
    last_name: "Riansah",
    email: "Agung@gmail.com",
    umur: 23,
    full_name: function () {
      return this.first_name + " " + this.last_name;
    },
  },
  {
    first_name: "Rivan",
    last_name: "Saputra Hendra",
    email: "rivan@gmail.com",
    umur: 25,
    full_name: function () {
      return this.first_name + " " + this.last_name;
    },
  },
  {
    first_name: "Rena",
    last_name: "Fitri",
    email: "Rena@gmail.com",
    umur: 18,
    full_name: function () {
      return this.first_name + " " + this.last_name;
    },
  },
];

const count_array_string = (array) => {
  let count = 0;
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].full_name().length > count) {
      count = array[i].full_name().length;
      index = i;
    }
  }
  return array[index].full_name();
};
// function count_full_name(arr) {}

console.log(count_array_string(arrPerson));
