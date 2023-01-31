
const quotes = [
'Love You so much My sweety Strawberry.❤️"',
'you are the light that guides me through life\'s darkest moments.❤️"',
'your love is like a beacon of hope in my life."',
'you are the source of my strength and courage."',
'your love is like a warm embrace that never fades away."',
'you are the sunshine in my life that brings me joy and happiness."',
'your love is like a river that never runs dry."',
'you are the one who fills my heart with unconditional love and acceptance."',
'your love is like a beautiful melody that never stops playing in my heart."',
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
// In love with..
'I am In love with your eyes."', 
'I am In love with your smile.❤️"', 
'I am In love with your cheeks.❤️"', //Maynor
'I am In love with your voice."', 
'I am In love with your soul."', 
'I am In love with your style."', 
'I love the way you talk."', 
//Love you
'Ti amo tanto.❤️❤️"', //Maynor
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

    document.getElementById("quote").innerHTML = userName[randomName] + quotes[randomNumber] + "❤️";   // Prints quote to HTML element with id="quote"
    
    let number = localStorage.getItem('number') || 0;
    number++;
    localStorage.setItem('number', number);

    document.getElementById('number').innerHTML = number + " || " + Date();

}
window.onload = function() {
    let number = localStorage.getItem('number') || 0;

    document.getElementById('total').innerHTML = number + Date();
}


let button = document.getElementById('button');
let disableTime = 10 * 60 * 60;
button.addEventListener('click', () => {
button.disabled = true;
localStorage.setItem('button', button);
setTimeout(() => {
    button.disabled = false;
}, disableTime);
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
    if (password == "2") {
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


    