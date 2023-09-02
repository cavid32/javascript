// const n= 19;
// if(n%2==0){
//     funk1();
// }else{
//    funk2();}

// function funk1(){
//     console.log("2-e tam bolunur")
// }
// function funk2(){
//     console.log("qaliq var")
// }

// let calc = function(number){
//     if(number%2==0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }

// calc(5);

// let a = 9;
// let b = 7;
// let cal = a - b;

// let mp = function () {
//   if (calc > 0) {
//     console.log(a);
//   } else {
//     console.log("menfi");
//   }
// };

// mp();

// const btn = document.querySelector('.btn');
// const input = document.querySelector('input');
// const select = document.querySelector('select')

// btn.addEventListener('mouseenter', function(e) {
//   console.log("Buttonun uzerine gelindi");
// })

// btn.addEventListener("mouseout", function() {
//      console.log("Buttonun uzerinden cekildi");
// })

// input.addEventListener("change", function(e) {
//     console.log(e.target.value);
// });

// select.addEventListener("change", function(e) {
//   console.log(e.target.value);
// })

// const Adiniz = document.getElementById("ad");
// const Soyad = document.getElementById("soyad");
// const AtaAdi = document.getElementById("ata");
// const email = document.getElementById("em");
// const cins = document.getElementById("cins");
// const yasi = document.getElementById("age");
// const qeydiyyatBtn = document.querySelector("button");

// // qeydiyyatBtn.addEventListener("click", function () {
// //   alert(
// //     Adiniz.value +
// //       "," +
// //       Soyad.value +
// //       "," +
// //       AtaAdi.value +
// //       "," +
// //       email.value +
// //       "," +
// //       cins.value
// //   );
// // });

// qeydiyyatBtn.addEventListener("click", function () {
//   if (Number(yasi.value) > 18) {
//     alert("ugurla qeydiyyatdan kecidiz");
//   } else {
//     alert("yasiniz catmir");
//   }
// });
// const Adiniz =document.getElementById("ad");
// const Soyad = document.getElementById("soyad");
// const AtaAdi = document.getElementById("ata");
// const yas = document.getElementById("age");
// const Email = document.getElementById("em");
// const cins = document.getElementById("cins");
//  const QeydiyyatBtn = document.querySelector("button");
 
//  QeydiyyatBtn.addEventListener("click",function(){
//   alert(Adiniz.value + "," + Soyad.value + "," + AtaAdi.value  + ","   + yas.value  + ","  + Email.value  + ","   + cins.value );
//  });

//  QeydiyyatBtn.addEventListener("click",function(){
//   if(Number(yas.value) >18){
//     alert("ugurla qeydiyyat oldunuz");
//   } else{
//     alert("yasiniz catmir");
//   }
//  });


const Adiniz = document.getElementById("ad");
const Soyad = document.getElementById("soyad");
const ataadi = document.getElementById("ata");
const yas = document.getElementById("yas");
const cins = document.getElementById("cins");
const qeydiyyatBtn = document.querySelector("button");

// qeydiyyatBtn.addEventListener("click",function(){
//   alert(Adiniz.value + "," + Soyad.value  + "," + ataadi.value  + "," + yas.value  + "," + cins.value)
// });
qeydiyyatBtn.addEventListener("click",function(){
 if(Number(yas.value) >18)
 {
  alert(" ugurla qeydiyyat oldunuz");
 }
 else{
       alert("yasiniz catmir");
     };
});





































