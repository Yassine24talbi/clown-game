let back = document.getElementById('back')
let link1 = document.getElementById('links1')
let link2 = document.getElementById('links2')
let link3 = document.getElementById('links3')
let content = document.getElementById('content')
let gameplay = document.getElementById('game-play')
let dice1 = document.getElementById('dice1')
let dice2 = document.getElementById('dice2')
let dice3 = document.getElementById('dice3')
let item = document.getElementById('item')
let child1 = document.getElementById('child1')
let child2 = document.getElementById('child2')
let child3 = document.getElementById('child3')
let replaybox = document.getElementById('replay')
let run = document.getElementById('run')
let yes = document.getElementById('yes')
let no = document.getElementById('no')
let chanse = document.getElementById('chanse')
let cart = document.getElementById('cart')
let box = document.getElementById('box')
let imageofclown = document.getElementById('imageofclown')
let image = document.getElementById('image')
let num1 =[26,28,22,43,38]
let num2 =[23,30]
let num3 =[27,33,34,66]
let count = 3;
let point = document.getElementById('pts')
let lps = document.getElementById('lps')
let points = 0;
let laps = 10;
const numtarget = document.querySelectorAll('.child-item')
const numget = document.querySelectorAll('.dice')
let text = document.getElementById('text')
let textval = 0
let audioback = document.getElementById("audioback");
let soulmp3 = document.getElementById('soulmp3')
let scrym = document.getElementById('scrym')
let runsound = document.getElementById('win')
let rulslist = document.getElementById('rulslist')
let sound = true;

function rulsshow(){
    link3.style.pointerEvents = 'none';
    rulslist.style.display = 'flex';
}
function rulscloas(){
    rulslist.style.display = 'none';
    link3.style.pointerEvents = 'all';
}

function rule() {
    if(parseInt(point.textContent) >= 13){
        text.innerHTML = '<span>You Win!</span>';
        setTimeout(function(){imageofclown.src ='sad.png';image.style.scale = '0';},500)
        runsound.play()
        runsound.volume = 1
        text.style.fontSize = '85px';
        cart.style.display = 'none';
        box.style.display = 'none';
        run.style.display = 'none';
        soulmp3.pause();
        setTimeout(function() {location.reload();}, 7000);
        return;
    }
    if (parseInt(lps.textContent) === 0) {
        text.innerHTML = '<span>You Lose!</span> HHH';
        document.getElementById('laugh').volume = 1;
        cart.style.pointerEvents = 'none';
        text.style.fontSize = '85px';
        cart.style.display = 'none';
        box.style.display = 'none';
        run.style.display = 'none';
        image.style.scale = '3';
        soulmp3.pause();
        scrym.play();
        document.getElementById('baf').style.display = 'none';
        image.style.opacity ='0';
        setTimeout(function(){imageofclown.src ='happy.png';image.style.opacity ='1'},1000)
        setTimeout(function() {location.reload();}, 7000);
        return;
    }
    if(text.innerHTML < `<span>+2 </span>points`){
        document.getElementById('laugh').play();
        document.getElementById('laugh').volume = 0.7;
      }else{
          document.getElementById('killaudio').play();
          document.getElementById('killaudio').volume = 0.3;
      }
}





function audio(){
    if(sound == false){
        soulmp3.pause();
        audioback.pause();
        document.getElementById('baf').style.background = 'rgba(255, 255, 255, 0.615)';
        document.getElementById('baf').style.color = 'black';
        document.getElementById('baf').innerHTML =`<i class='bx bxs-volume-mute'></i>`;
        sound = true;
        return
    }else{
        
        audioback.play();
        soulmp3.play();

        audioback.currentTime = 0;
        soulmp3.currentTime = 0;

        audioback.volume = 0.2;
        soulmp3.volume = 1;

        audioback.loop = true;
        soulmp3.loop = true;

        soulmp3.load();
        audioback.load();
       
       document.getElementById('baf').style.background = 'rgba(76, 76, 76, 0.615)';
       document.getElementById('baf').style.color = 'white';
       document.getElementById('baf').innerHTML =`<i class='bx bxs-volume-full'></i>`;
       sound = false;
    }
}





function start(){
    content.style.scale = '20';
    link1.style.display = 'none';
    link2.style.display = 'none';
    link3.style.display = 'none';
    gameplay.style.opacity = '1';
    gameplay.style.pointerEvents = 'all';
    gameplay.style.background = 'transparent';
}



function randomdice(){
    dice1.innerHTML = 0;
    let randomnum1 = Math.floor(Math.random() * num1.length);
    let resultnum1 = num1[randomnum1];
    
 setInterval(function() {
        if (parseInt(dice1.innerHTML) < 20) {
            dice1.innerHTML = parseInt(dice1.innerHTML) + 1;
        }
    }, 50);
    setTimeout(function(){dice1.innerHTML = resultnum1;},900)
    var pip = document.getElementById("pip");
    pip.play();
    pip.volume = 0.3;
}

function randomdice2(){
    dice2.innerHTML = 0;
    let randomnum2 = Math.floor(Math.random() * num2.length);
    let resultnum2 = num2[randomnum2];
    setInterval(function() {
        if (parseInt(dice2.innerHTML) < 20) {
            dice2.innerHTML = parseInt(dice2.innerHTML) + 1;
        }
    }, 50);
    setTimeout(function(){dice2.innerHTML = resultnum2;},900)

}

function randomdice3(){
    dice3.innerHTML = 0;
    let randomnum3 = Math.floor(Math.random() * num3.length);
    let resultnum3 = num3[randomnum3];
    setInterval(function() {
        if (parseInt(dice3.innerHTML) < 20) {
            dice3.innerHTML = parseInt(dice3.innerHTML) + 1;
        }
    }, 50);
    setTimeout(function(){dice3.innerHTML = resultnum3;},900)
}


function target(){
    item.style.top='140%';
    item.style.opacity = '1';
    item.style.scale = '1';
    document.getElementById('run').style.pointerEvents = 'all';
    document.getElementById('run').style.opacity = '1';
    cart.style.pointerEvents = 'none';
    
}
function index1(){
    let randomnum1 = Math.floor(Math.random() * num1.length);
    let resultnum1 = num1[randomnum1];
    child1.innerHTML = resultnum1;
}
function index2(){
    let randomnum2 = Math.floor(Math.random() * num2.length);
    let resultnum2 = num2[randomnum2];
    child2.innerHTML = resultnum2;
}
function index3(){
    let randomnum3 = Math.floor(Math.random() * num3.length);
    let resultnum3 = num3[randomnum3];
    child3.innerHTML = resultnum3;
}

function replay(){
    run.style.pointerEvents = 'none';
    run.style.opacity = '.3';
    setTimeout(
        function play(){
            replaybox.style.scale = '1';
            replaybox.style.opacity='1';
            replaybox.style.pointerEvents = 'all';
        }
    ,1500)
}

function Laps(){
    laps--
    lps.innerHTML = `<span>${laps} </span>laps`
}

function No(){
    run.style.pointerEvents = 'all';
    run.style.opacity = '1';
    replaybox.style.scale = '0';
    replaybox.style.opacity='0';
    replaybox.style.pointerEvents = 'none';
    

}
function No1(){
    item.style.top = '200%';
    item.style.opacity = '0';
    item.style.scale = '2';
    cart.style.pointerEvents = 'all';
    run.style.pointerEvents = 'none';
    run.style.opacity = '.3';
    setTimeout(function hh(){item.style.top = '-20%';    item.style.scale = '.7';},1000)
    play(0,1,2);
    point.innerHTML = `<span>${points} </span>points`;
    text.innerHTML = `<span>+${textval} </span>points`;
    Laps()
    text.classList.remove("animate-text");
    void text.offsetWidth; 
    text.classList.add("animate-text"); 
    textval =0;
    rule();
}

function Yes(){
    if(count < 1){
    yes.style.pointerEvents ='none';
    yes.style.color = 'rgb(110, 110, 110)';
    }else{
    randomdice();
    randomdice2();
    randomdice3();
    No();
    setTimeout(replay(),1500)
    count--;
    chanse.innerHTML = count +`<i class='bx bx-revision'></i>`;
    }
}
chanse.innerHTML = count +`<i class='bx bx-revision'></i>`;

function front(){
    content.style.scale = '1';
    link1.style.display = 'block';
    link2.style.display = 'block';
    link3.style.display = 'block';
    gameplay.style.opacity = '0';
    gameplay.style.pointerEvents = 'none';
}






// play





function play(A,B,C){
if(numtarget[A].innerHTML == numget[A].innerHTML){points++;textval++}
if(numtarget[B].innerHTML == numget[B].innerHTML){points++;textval++}
if(numtarget[C].innerHTML == numget[C].innerHTML){points++;textval++}

}
point.innerHTML = `<span>${points} </span>points`;
lps.innerHTML = `<span>${laps} </span>laps`;


if(parseInt(point.textContent)===15){

}


