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


let a = 6;
a += 2;
console.log(a);

let foo = 6;
foo += 2;
console.log(foo);


let orange = 100;
let apple = 120;

if(orange < apple) {
  alert('みかんの値段がりんごより安い');
} else if(orange == apple) {
  alert('みかんとりんごが同じ値段');
} else {
  alert('みかんの値段がりんごより高い');
}

let b = 1;
switch (b) {
  case 1:
      console.log('bは1です');
      break;
  default:
      console.log('bの値は1ではありません');
}

let birthplace = "東京";
switch (birthplace) {
  case '東京':
      console.log('出身地は東京です');
      break;
  default:
      console.log('出身地は東京以外です');
}


// let num = 0;
// for(let i = 1; i < 11; i++){
  // num = num + i;
// }
// console.log('1から10まで足し算した結果は' + num + 'です');

// for...in文
const fruit = {orange:170, apple:90, lemon:110};
for (let i in fruit){
  console.log("fruit." + i + ' = ' + fruit[i]);
}
console.log('end');

// while文
let max = 100;
let num = 1;
let count = 0;

while(num < max) {
  num = num * 2;
    count++;
}
console.log('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');