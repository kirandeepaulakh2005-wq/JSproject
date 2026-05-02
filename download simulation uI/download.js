let count=0;
let seconds=10;
let progress=document.querySelector(".progress-bar");
let precentText=document.querySelector("#percentText");
let intv=setInterval(function(){
    if (count<=99){
        count++;
        progress.style.width=`${count}%`;
        precentText.textContent=`${count}%`;
    } else{
        document.querySelector("h2").textContent="Downloaded.";
        clearInterval(intv);
    }
},(seconds*1000)/100);