
const quotes = [
'Love You so much My sweety Strawberry.❤️"',
'You are the light that guides me through life\'s darkest moments.❤️"',
'Your love is like a beacon of hope in my life."',
'You are the source of my strength and courage."',
'Your love is like a warm embrace that never fades away."',
'You are the sunshine in my life that brings me joy and happiness."',
'Your love is like a river that never runs dry."',
'You are the one who fills my heart with unconditional love and acceptance."',
'Your love is like a beautiful melody that never stops playing in my heart."',
'I would rather spend one lifetime with you, than face all the ages of this world alone."',
'I look at you and see the rest of my life in front of my eyes."',
'I see the life inside your eyes."',
'I still remember the first day I saw you at your university.❤️"', //Maynor
'I still remember the first word I have told to you.❤️"', //Maynor
'Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.❤️"',
'I choose you. And I’ll choose you over and over and over, without a doubt, I’ll keep choosing you."',
'I’m much more me when I’m with you."',
'You have bewitched me, body and soul, and I love you."',
'I wish I could turn back the clock. I’d find you sooner and love you longer."',
'If I know what love is, it is because of you."',
'I\'m with you to pamper you.❤️"', //Maynor
'I love what is more delicious than pomegranate blossom.❤️"',//Maynor
'I love you and I don’t want to lose you. Because my life has been better since the day I found out."',
'I love you. I am at rest with you. I have come home."',
'I love you like a fat kid loves cake."',
'Loved you yesterday, love you still, always have, always will."',
'I have died everyday waiting for you darling, don’t be afraid I have loved you for a thousand years."',
'If I had a flower for every time I thought of you… I could walk through my garden forever."',
'If I know how to love, it\'s because of you.❤️"',
'I like you very much, just as you are❤️"',
'\'I love you\' begins by I, but it ends up by you."',
'Your love shines in my heart as the sun that shines upon the earth."',
'I am so in love with you that there isn\'t anything else."',
'A hundred hearts would be too few to carry all my love for you."',
'Being with you and not being with you is the only way I have to measure time."',
'I find the most beautiful moments of life are\'t just with you but because of you"',
'I love you more than I can express, or can ever hope to express."',
'I never want to stop making memories with you."',
'Every day I’m convinced that I can’t possibly love you more… and every day I’m proven wrong."',
'Your words are my food, your breath is my water. You are everything to me."',
'Till my last day, I’ll be loving you."',
'I need you like a heart needs a beat."',
'I am in you and you in me, mutual in divine love."',
'If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you."',
'The day my life changed forever ... the day I first saw you.❤️"',
'I love you, not only for what you are, but for what I am when I am with you."',
'When I saw you I fell in love, and you smiled because you knew."',
'If you remember me, then I don\'t care if everyone else forgets."',
'I wish you to know that you have been the last dream of my soul."',
'My night has become a sunny dawn because of you."',
'I want you today, tomorrow, next week and for the rest of my life."',
'I love you and that’s the beginning and end of everything."',
'I\'ve never had a moment\'s doubt. I love you. I believe in you completely. You are my dearest one. My reason for life."',
'I would rather spend one lifetime with you, than face all the ages of this world alone."',
'It’s always better when we\'re together."',
'You really make me want to be a better man."',
'I love you. You… you complete me."',
'My soul and your soul are forever tangled."',
'Each day I love you more, today more than yesterday and less than tomorrow."',
'You are the one whom my soul loves."',
'You are my lover, my human diary and my other half. You mean the world to me and I love you."',
'You\'re a beautiful girl, you deserve a beautiful life. Nothing less."',
'When you look at me, when you think of me, I am in paradise."',
'I wish I could turn back the clock. I\'d find you sooner and love you longer."',
'It was love at first sight, at ever and ever sight."',
// In love with..
'I am In love with your eyes."', 
'I am In love with your smile.❤️"', 
'I am In love with your cheeks.❤️"', //Maynor
'I am In love with your voice."', 
'I am In love with your soul."', 
'I am In love with your style."', 
'I love the way you talk."', 
//Love you
'Ti amo tanto.❤️"', //Maynor
'I need you to know that I adore you.❤️"'

];

const userName = [
    '"Maynory❤️, ',
    '"My Soulmate, ',
    '"Sweety, ',
    '"Strawberry🍓, ',
    '"Twenkez, ',
    '"Baskota, ',
    '"My Moon🌕, ',
    '"My Twins, ',
    '"Koky, ',
    '"Frawla🍓, ',
    '"My Other Half, ',
    '"My Queen👑, ',
    '"Sweetheart, ',
    '"Honey🍯, ',
    '"Sugar, ',
    '"Flower🌹, ',
    '"Sunshine☀️, ',
    '"Kitty🐈, ',
    '"Darling❤️, ',
    '"My Lady, ',
    '"Sweetie, ',
    '"Cookie🍪, ',
    '"Baby, ',
    '"Caramela, ',
    '"Lollipop🍭, ',
    '"Rouhi❤️, ',
    '"Habibty❤️, ',
    '"3omry❤️, ',
]


function printQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomName = Math.floor(Math.random() * userName.length);

    console.log(quotes[randomNumber]);   // Prints quote to console for testing purposes

    document.getElementById("quote").innerHTML = userName[randomName] + quotes[randomNumber];   // Prints quote to HTML element with id="quote"
    
    let number = localStorage.getItem('number') || 0;
    number++;
    localStorage.setItem('number', number);

    document.getElementById('number').innerHTML = number;
    console.log(number + " || " + Date())
}
window.onload = function() {
    let number = localStorage.getItem('number') || 0;

    document.getElementById('total').innerHTML = number + Date();
}

//Disabled Button
let myButton = document.getElementById("button");
let disabledTime = localStorage.getItem("disabledTime");
let currentTime = new Date().getTime(); 
if (disabledTime && currentTime < disabledTime) { 
    myButton.disabled = true; 
} 
myButton.addEventListener("click", function() { 
    myButton.disabled = true; 
    let disableDuration = 900 * 1000; // 900 seconds = 15 Mins 
    let disabledTime = new Date().getTime() + disableDuration; 
    localStorage.setItem("disabledTsime", disabledTime); 

    setTimeout(function() {   // enable button after 900 seconds = 15 Mins
        myButton.disabled = false;   // enable button  
        localStorage.removeItem("disabledTime");   // remove item from storage  

    }, disableDuration);   // 900 seconds = 15 Mins  

 });

// dark mode
const selector = document.getElementById('theme-selector');

 selector.addEventListener('change', (event) => {

   const theme = event.target.value;

   document.body.className = theme;

 });


// Password Checker
function checkPassword() {
    var password = document.getElementById("password").value;
    if (password == "3omry") {
        document.getElementById("login").style.display = "none";
    }
    else
    {
        document.getElementById("incorrect").style.display = "block";
    }
}

//Copy Button

function copyElement() {
    var copyText = document.getElementById("quote").innerHTML;
    navigator.clipboard.writeText(copyText);
}




    // disable right click
    // document.addEventListener('contextmenu', event => event.preventDefault());

    // document.onkeydown = function (e) {

    //     // disable F12 key
    //     if(e.keyCode == 123) {
    //         return false;
    //     }

    //     // disable I key
    //     if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
    //         return false;
    //     }

    //     // disable J key
    //     if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
    //         return false;
    //     }

    //     // disable U key
    //     if(e.ctrlKey && e.keyCode == 85) {
    //         return false;
    //     }
    // }