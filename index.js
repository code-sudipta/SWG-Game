const items = ['images/gun.jpg', 'images/snake.jpg', 'images/water.avif'];
let user_score = 0
let comp_score = 0 

let user_name = prompt("Enter your name to play the game");
if(user_name!=null)
document.getElementById('user-head').innerHTML= user_name;

const ask_user=()=>{
    let user_name = prompt("Enter your name to play the game");
    if(user_name!=null)
    document.getElementById('user-head').innerHTML= user_name;
}

const check_winner=()=>{
    if(user_score == 5 && comp_score < user_score)
    {
        document.getElementById('remark').innerHTML = 'You are the Winner!'
        document.getElementById('options').style.display='none'
        document.getElementById('restart').style.display= 'block'
        triggerConfetti();
    }
    if(comp_score == 5 && comp_score > user_score)
    {
        document.getElementById('remark').innerHTML = 'Computer Won 😢'
        document.getElementById('options').style.display='none'
        document.getElementById('restart').style.display= 'block'
    }
    
}

const comp_side=(user_choice)=>{
    const randomIndex = Math.floor(Math.random() * items.length);

    const randomItem = items[randomIndex];
    document.getElementById('comp-img').src = randomItem

    if(user_choice == 0 && randomIndex == 1)
    {
        user_score++;
        user_remark();
    }
    else if(user_choice == 0 && randomIndex == 2)
    {
        comp_score++;
        comp_remark();
    }
    else if(user_choice == 1 && randomIndex == 0)
    {
        comp_score++;
        comp_remark();
    }
    else if(user_choice == 1 && randomIndex == 2)
    {
        user_score++;
        user_remark();
    }
    else if(user_choice == 2 && randomIndex == 0)
    {
        user_score++;
        user_remark();
    }
    else if(user_choice == 2 && randomIndex == 1)
    {
        comp_score++;
        comp_remark();
    }
    else
    {
        document.getElementById('remark').innerHTML = 'No Points'
    }
    document.getElementById('scr1').innerHTML = comp_score
    document.getElementById('scr2').innerHTML = user_score
    document.getElementById('user-img').classList.remove('rotate-scale-up-ver');
    document.getElementById('comp-img').classList.remove('rotate-scale-up-ver');
    void document.getElementById('user-img').offsetWidth;
    void document.getElementById('comp-img').offsetWidth;
    document.getElementById('user-img').classList.add('rotate-scale-up-ver');
    document.getElementById('comp-img').classList.add('rotate-scale-up-ver');

    check_winner();
}

const user_side1=()=>{
    let user_choice = 1;
    document.getElementById('user-img').src = items[user_choice];
    comp_side(user_choice);
}

const user_side2=()=>{
    let user_choice = 2;
    document.getElementById('user-img').src = items[user_choice]
    comp_side(user_choice);
}

const user_side3=()=>{
    let user_choice = 0;
    document.getElementById('user-img').src = items[user_choice]
    comp_side(user_choice);
}

const user_remark=()=>{
    document.getElementById('remark').innerHTML = 'You got 1 Point'
}

const comp_remark=()=>{
    document.getElementById('remark').innerHTML = 'Computer got 1 Point'
}

const play_again=()=>{
    document.getElementById('options').style.display='flex'
    document.getElementById('restart').style.display= 'none'
    document.getElementById('remark').innerHTML = 'Play Now'
    document.getElementById('scr1').innerHTML = '0'
    document.getElementById('scr2').innerHTML = '0'
    document.getElementById('comp-img').src = 'images/robot.png'
    document.getElementById('user-img').src = 'images/human.png'
    document.getElementById('user-head').innerHTML = 'User'
    user_score = 0
    comp_score = 0
    ask_user();
}

const triggerConfetti=()=> {
    confetti({
        particleCount: 700,
        spread: 300,
        origin: { y: 0.8 }
    });
}