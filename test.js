for(let count = 1; count <= 50; count++){
  if(count % 10 === 0){
    console.log('今' + count + '回ループしました。');
  } else if(count % 4 === 0){
    console.log('4で割れる数です。' + count);
  } else if(count === 50){
    alert("50回カウントが終わりました。");
}
}



// let count = 1;
// 
// function doCount() {
  // if (count <= 50) {
    // console.log(`今${count}回ループしました。`);
    // if (count % 4 === 0) {
      // console.log(`4で割れる数です。${count}`);
    // }
    // count++;
    // if (count === 51) {
      // alert("50回カウントが終わりました。");
    // } else {
      // setTimeout(doCount, 1000);
    // }
  // }
// }
// 
// doCount();
