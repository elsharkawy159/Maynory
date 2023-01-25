
const quotes = [
    'Love You My sweety Strawberry"',
'you are the light that guides me through life\'s darkest moments."',
'your love is like a beacon of hope in my life."',
'you are the source of my strength and courage."',
'your love is like a warm embrace that never fades away."',
'you are the sunshine in my life that brings me joy and happiness."',
'your love is like a river that never runs dry."',
'you are the one who fills my heart with unconditional love and acceptance."',
'your love is like a beautiful melody that never stops playing in my heart."'


];

const userName = [
    '"Maynory, ',
    '"My Soulmate, ',
    '"Sweety, ',
    '"Strawberry🍓, ',
    '"Twenkez, ',
    '"Baskota, ',
    '"My Moon, ',
    '"My Twins, ',
    '"Koky, ',
    '"Frawla🍓, ',
    '"My Other Half, ',
    '"My Queen, ',
    '"Sweetheart, ',
    '"Honey, ',
    '"Sugar, ',
    '"Flower, ',
    '"Sunshine, ',
    '"Kitty, ',
    '"Darling, ',
    '"My Lady, ',
    '"Sweetie, ',
    '"Cookie, ',
    '"Baby, ',
    '"Caramela, ',
    '"Lollipop, ',
    '"Rouhi, ',
    '"Habibty, ',
    '"3omry, ',
]

var count = 0;

function printQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomName = Math.floor(Math.random() * userName.length);
    count++;
    console.log(quotes[randomNumber]);   // Prints quote to console for testing purposes

    document.getElementById("quote").innerHTML = "❤️" + userName[randomName] + quotes[randomNumber] + "❤️";   // Prints quote to HTML element with id="quote"

    document.getElementById("count").innerHTML = count;
    console.log(count)
}



let button = document.getElementById('button');
let disableTime = 10 * 60 * 13;
button.addEventListener('click', () => {
  button.disabled = true;
  setTimeout(() => {
    button.disabled = false;
  }, disableTime);
});



// Password Checker

function checkPassword() {
    var password = document.getElementById("password").value;
    if (password == "1") {
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
    document.addEventListener('contextmenu', event => event.preventDefault());

    document.onkeydown = function (e) {

        // disable F12 key
        if(e.keyCode == 123) {
            return false;
        }

        // disable I key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
            return false;
        }

        // disable J key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            return false;
        }

        // disable U key
        if(e.ctrlKey && e.keyCode == 85) {
            return false;
        }
    }