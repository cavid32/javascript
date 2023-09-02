
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const sifir = document.querySelector("#sifir");

let i =0;
sifir.innerHTML =i;

minus.addEventListener("click",function(){
  if(i==0){
    alert("mimimum qiymet 0-dir")
  }
  else{
    i-=1;
    sifir.innerHTML=i;
  }

});
plus.addEventListener("click",function(){
  if(i==10)
{
  alert("maximum qiymet 10-dur");
}
else{
i+=1;
sifir.innerHTML=i;
}
});