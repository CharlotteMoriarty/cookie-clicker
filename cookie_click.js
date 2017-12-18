var money = 0,//kasa
    cps = 0,
    clicker = 1,
    cursorBought = 0, //liczba kupionych
    cursorPrice = 0,//cena za kursor
    granniePrice =0, //cena za babcię 
    grannieBought = 0, //liczba kupionych babć
    farmPrice= 0,
    farmBought = 0,//liczba kupionych farm
    bakeryPrice = 0, //cena za piekarnie
    bakeryBought = 0, //kupione piekarnie
    minePrice = 0, //cena za kopanie 
    mineBought = 0, //kupione kopalnie
    multiply = 1.1; 

var element =document.getElementById("makeCookie");
element.addEventListener('click',function(){money+=clicker});


function manufacturer(){
    document.getElementById("cookies").innerHTML="Cookies:"+Math.floor(money);
    money+=cps/10 
    document.getElementById("CPS").innerHTML="CPS:"+" "+cps.toFixed(1);
    cursorPrice = Math.floor((10*Math.pow(multiply,cursorBought)));
    granniePrice = Math.floor((15*Math.pow(multiply,grannieBought)));
    farmPrice = Math.floor((25*Math.pow(multiply,farmBought)));
    bakeryPrice = Math.floor((35*Math.pow(multiply,bakeryBought)));
    minePrice =Math.floor((100*Math.pow(multiply,mineBought)));
    document.getElementById("cursor").innerHTML="Cursor"+" "+"price:"+" " +cursorPrice +" Speed: 0.1 CPS "+"Owned: "+cursorBought;
    document.getElementById("grannie").innerHTML="Grannie"+" "+"price:"+" " +granniePrice +" Speed: 1CPS " +"Owned: "+grannieBought;
    document.getElementById("farm").innerHTML = "Farm"+" "+ "price:"+ " "+ farmPrice +" Speed: 25CPS "+"Owned: "+farmBought;
    document.getElementById("bakery").innerHTML =" Bakery" +" "+ "price:"+ " "+ bakeryPrice +" Speed: 100CPS "+"Owned: "+bakeryBought;
    document.getElementById("mine").innerHTML = "Mine" +" "+ "price:"+ " "+ minePrice +"Speed: 250CPS " + "Owned: "+mineBought;
    setTimeout(manufacturer,100);
}
manufacturer();
function cursor(){
    if(money>=cursorPrice){
        money=money-cursorPrice;
        cps=cps+0.1;
        cursorBought=cursorBought+1;
    }
}
function grannie(){
    if(money>=granniePrice){
        money=money-granniePrice;
        cps=cps+1;
        grannieBought=grannieBought+1;
    }
}
function farm(){
    if(money>=farmPrice){
        money=money-farmPrice;
        cps=cps+25;
        farmBought=farmBought+1;
    }
}
function bakery(){
    if(money>=bakeryPrice);
    cps=cps+100;
    bakeryBought=bakeryBought+1;
}
function mine() {
    if(money>=minePrice);
    cps=cps+250;
    mineBought=mineBought+1;
}