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

function foo() {
  let x = "webcamp";
  {
    let y = "hello webcamp";
  }
  console.log(x);
  console.log(y);
}
foo()

