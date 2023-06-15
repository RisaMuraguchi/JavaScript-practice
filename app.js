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

// for文
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


let alertString;
alertString = addString("WebCamp");

alert(alertString)

function addString(strA){
  let addStr = "Hello" + strA;
  return addStr;
}

let promptStr = prompt('何か好きな文字を入力してください。');
alert(promptStr);


// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);
// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let js_hand = '';

  if(js_hand_num == 0){
    js_hand = "グー";
  }else if(js_hand_num == 1){
    js_hand = "チョキ";
  }else if(js_hand_num == 2){
    js_hand = "パー";
  }
  return js_hand;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;
  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    }else if(js == "チョキ"){
      winLoseStr = "勝ち";
    }else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    }else if(js == "チョキ"){
      winLoseStr = "あいこ";
    }else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    }else if(js == "チョキ"){
      winLoseStr = "負け";
    }else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}

function foo(param) {
  console.log('パラメータの真偽チェック');
  if (param) {
    console.log('OK');
  } else {
    console.log('NG');
  }
}
foo(true);

