

const play_stop_btn = document.querySelector('.play_stop');
const playground = document.querySelector('.playground');
const remain_carrot = document.querySelector('.remain_carrot');

const win_lose = document.querySelector('.win_lose');
const msg = document.querySelector('.msg');
const replay_ico = document.querySelector('.replay_ico');

const time_count = document.querySelector('.time_count');

time_count.addEventListener('change',e => {console.log('time')});
remain_carrot.addEventListener('change',e => {console.log('carrot')});
play_stop_btn.addEventListener('change',e => {console.log('play')});

let timer;
const carrot_bgm = new Audio('./carrot/sound/carrot_pull.mp3');
const lose_bgm = new Audio('./carrot/sound/alert.wav');
const win_bgm = new Audio('./carrot/sound/game_win.mp3');
const bug_bgm = new Audio('./carrot/sound/bug_pull.mp3');
const bgm = new Audio('./carrot/sound/bg.mp3');
           

play_stop_btn.addEventListener('click',e => {
    if(e.target.getAttribute('id') == 'stop'){
        replay();
        return;
    }
    bgm.currenttime = 0;
    bgm.play();

    let sec = 10;
    time_count.innerHTML = "0:"+sec;
    sec--;
    timer = setInterval(function(){
        time_count.innerHTML = "0:"+sec;
        if(sec <= 0){
            lose();
        }
        sec--;
    },1000);
    // setTimeout( () => {clearInterval(timer)},10000);

    play_stop_btn.innerHTML = '<i class="fa-solid fa-stop" id="stop"></i>';
    play_stop_btn.setAttribute('id','stop');

    let carrot;
    let bug;

    for(let i = 0 ; i < 10; i++){
        carrot = create_btn('carrot');
        playground.appendChild(carrot);

        bug = create_btn('bug');
        playground.appendChild(bug);
    }

    let now = Number(remain_carrot.innerHTML);
    remain_carrot.innerHTML = 10 + now;


})

playground.addEventListener('click',e => {
    if(e.target.tagName == 'IMG'){
        if(win_lose.style.display == 'block'){
            return;
        }
        if(e.target.getAttribute('class') == 'carrot'){
            e.target.remove();
            subtract_carrot();
            carrot_bgm.play();

            if(remain_carrot.innerHTML == 0){
                win();
            }
        }
        else{
            bug_bgm.play();
            lose();
        }
    }
    else{
        console.log('no');
    }
})

replay_ico.addEventListener('click',reset);

function create_btn(who){

    const width = playground.offsetWidth;
    const height = playground.offsetHeight;
    const x_pos = rand(-3,width-110);
    const y_pos = rand(-5,height-120);

    let div = document.createElement('div');
    div.setAttribute('class','bound');
    div.innerHTML = `<button class="${who}">
    <img src="/carrot/img/${who}.png" class="${who}">
        </button>`;

    div.style.transform=`translateX(${x_pos}px) translateY(${y_pos}px) scale(1.8) `;

    return div;
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function subtract_carrot(){
let now = Number(remain_carrot.innerHTML);
if(now == 0){
    return;
}
remain_carrot.innerHTML = now - 1
}

function lose(){
win_lose.style.display = 'block';
msg.innerHTML = 'YOU LOSE';
clearInterval(timer);
play_stop_btn.classList.add('invisible');
lose_bgm.play();
}

function reset(){
    while(playground.hasChildNodes()){
        playground.removeChild(
            playground.firstChild
        );
    }
    remain_carrot.innerHTML = 0;
    win_lose.style.display = 'none';
    play_stop_btn.classList.remove('invisible');
    play_stop_btn.setAttribute('id','');
    play_stop_btn.click();
}

function win(){
    win_lose.style.display = 'block';
    msg.innerHTML = 'YOU WON';
    clearInterval(timer);
    play_stop_btn.classList.add('invisible');
    win_bgm.play();
}

function replay(){
    win_lose.style.display = 'block';
    msg.innerHTML = 'REPLAY';
    clearInterval(timer);
    play_stop_btn.classList.add('invisible');
}