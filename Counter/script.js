var b1=document.querySelector('.dec');
var b2=document.querySelector('.res');
var b3=document.querySelector('.inc');
var c=document.querySelector('#countervalue');
var count=0;
b1.addEventListener('click',function(){
    count-=1;
    c.innerHTML=count;
    if(count<0){
        c.style.color='red';
    }
    else if(count==0){
        c.style.color='#fff';
    }
})
b3.addEventListener('click',function(){
    count+=1;
    c.innerHTML=count;
    if(count>0){
        c.style.color='green';
    }
    else if(count==0){
        c.style.color='#fff';
    }
})
b2.addEventListener('click',function(){
    count=0;
    c.innerHTML=count;
    c.style.color='#fff';
})