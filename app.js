let hello = "Hello World";
alert(hello);

let user = {
  name: '山田太郎',
  age: 30,
  birthday: '1991/7/21',
  hobby: ['ゲーム','スポーツ'],
  getAge: function () {
    return this.age;
  }
}
user.name = '田中次郎'
console.log(user.name); // 田中次郎

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// var str = "webcamp";
// function foo() {
  // console.log(str);
  // var str = "dmm webcamp";
  // console.log(str);
// }
// 
// foo();

let a = 6;
a += 2;
console.log(a);

let foo = 6;
foo += 2;
console.log(foo);