var getTour = localStorage.getItem('arrTour');
var arrTour = JSON.parse(getTour);
var getUser1 = localStorage.getItem('user1');
var user1 = JSON.parse(getUser1);

function addTour(){
    Btour = {
        id: user1,
        name: document.getElementById("name").textContent, code: document.getElementById("tcode").textContent, departure: document.getElementById("depart").textContent
        , duration: document.getElementById("dura").textContent, place: document.getElementById("place").textContent
    }
    for(var i = 0; i < arrTour.length; i++){
        if(arrTour[i].id == user1){
            if(arrTour[i].code==Btour.code){
                alert("Duplicate tour")
                return;
            }
        }
    }

    if((a + b + c)==0){
        alert("Number of tour participants greater than 0")
        return;
    }

    arrTour.push(Btour);
    
    localStorage.setItem('arrTour', JSON.stringify(arrTour))
    alert("Book tour is success")
}
 
var a = 0;
var b = 0;
var c = 0;
var money = 0;

function addPer(per, sum){
    sum = sum + 1;
    document.getElementById(per).innerHTML = sum;
    return sum;
}

function addBaby(){
    b = addPer("bby", b);
    money = money + 100;
    total();
}

function addChild(){
    c = addPer("Chil", c);
    money = money + 400;
    total(); 
}

function addAdult(){
    a = addPer("Adult", a);
    money = money + 1000;
    total();
}

function minusPer(per, minus){
    minus = minus - 1;
    if(minus < 0)
        return 0;
    document.getElementById(per).innerHTML = minus;
    return minus;
}

function minusBaby(){
    if(money - 100 >= 0 && b > 0){
        b = minusPer("bby", b);
        money = money - 100;
        total();
    }else{
        return;
    }

}

function minusChild(){
    if(money - 400 >= 0 && c > 0){
        c = minusPer("Chil", c);
        money = money - 400;
        total();
    }else{
        return;
    }

}

function minusAdult(){
    if(money - 1000 >= 0 && a > 0){
        a = minusPer("Adult", a);
        money = money - 1000;
        total();
    }else{
        return;
    }
   
}

function total(){
    document.getElementById("totalPer").innerHTML = a+b+c+" person";

    document.getElementById("totalMoney").innerHTML = money+"$";
}

function checkGiamGia(){
    alert("Invalid code");
}