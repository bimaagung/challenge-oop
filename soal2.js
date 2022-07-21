/*
2. Buatlah method pada object yang telah dibuat di soal no.1 yang berfungsi untuk
mengembalikan full name (gabungan fist_name dan last_name)!
*/

let Person = {
  first_name: "Rivan",
  last_name: "Saputra",
  email: "rivan@gmail.com",
  umur: 25,
  full_name: function () {
    return this.first_name + " " + this.last_name;
  },
};

console.log(Person.full_name());
