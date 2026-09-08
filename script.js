/* =========================
   PIN SYSTEM
========================= */

let pin = "";

function addPin(num){

    if(pin.length >= 4) return;

    pin += num;

    document.getElementById("pinInput").value =
        "●".repeat(pin.length);

}


function clearPin(){

    pin = pin.slice(0,-1);

    document.getElementById("pinInput").value =
        "●".repeat(pin.length);

}


function checkPin(){

    if(pin === "0809"){

        document.getElementById("pinScreen")
        .style.display = "none";

        document.getElementById("website")
        .classList.remove("hidden");

        const music =
            document.getElementById("music");

        music.play().catch(()=>{});

    }else{

        alert("Wrong PIN 💙");

        pin = "";

        document.getElementById("pinInput")
        .value = "";

    }

}


/* =========================
   OPEN HEART
========================= */

function openHeart(){

    document.getElementById("bottleSection")
    .classList.remove("hidden");

    document.getElementById("bottleSection")
    .scrollIntoView({
        behavior:"smooth"
    });

}


/* =========================
   FLOATING BLUE HEARTS
========================= */

function createHeart(){

    const heart =
        document.createElement("div");

    const emojis = [
        "💙",
        "🤍",
        "✨",
        "🩵"
    ];

    heart.innerHTML =
        emojis[
            Math.floor(
                Math.random() * emojis.length
            )
        ];

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.top = "-30px";

    heart.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    heart.style.opacity = ".8";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.animation =
        `fall ${Math.random() * 4 + 6}s linear`;

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,600);


/* =========================
   ANIMATION STYLE
========================= */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes fall{

    0%{
        transform:translateY(0) rotate(0deg);
        opacity:1;
    }

    100%{
        transform:translateY(120vh) rotate(360deg);
        opacity:0;
    }

}


@keyframes flowerBurst{

    0%{
        opacity:1;
        transform:
            translate(0,0)
            scale(.5);
    }

    100%{
        opacity:0;
        transform:
            translate(
                var(--x),
                var(--y)
            )
            scale(1.5)
            rotate(360deg);
    }

}


@keyframes popIn{

    from{
        opacity:0;
        transform:scale(.5);
    }

    to{
        opacity:1;
        transform:scale(1);
    }

}

`;

document.head.appendChild(style);


/* =========================
   BOTTLE BREAK
========================= */

let bottleOpened = false;

function breakBottle(){

    if(bottleOpened) return;

    bottleOpened = true;

    const bottle =
        document.getElementById("bottle");

    bottle.innerHTML = "💥";

    createFlowerBurst();

    setTimeout(()=>{

        bottle.style.display = "none";

        document.getElementById(
            "letterContainer"
        ).style.display = "block";

        typeLetter();

    },1500);

}


/* =========================
   FLOWER / HEART BURST
========================= */

function createFlowerBurst(){

    const flowers =
        document.getElementById("flowers");

    const emojis = [
        "💙",
        "🩵",
        "🤍",
        "✨",
        "💙",
        "🩵",
        "🤍",
        "✨",
        "🌸"
    ];

    for(let i=0;i<40;i++){

        const flower =
            document.createElement("div");

        flower.innerHTML =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];

        flower.style.position =
            "absolute";

        flower.style.left = "0px";

        flower.style.top = "0px";

        flower.style.fontSize =
            (Math.random() * 15 + 25) + "px";

        flower.style.setProperty(
            "--x",
            (Math.random() * 700 - 350) + "px"
        );

        flower.style.setProperty(
            "--y",
            (-Math.random() * 450 - 50) + "px"
        );

        flower.style.animation =
            "flowerBurst 2.5s forwards";

        flowers.appendChild(flower);

        setTimeout(()=>{
            flower.remove();
        },2500);

    }

}


/* =========================
   BIRTHDAY LETTER
========================= */

const message = `

Happy birthdayyy babyyy! 💙

Mayy yourrr speciall dayy bee fillend with joy, happiness, laughter and everything you wishh for.

May your dreams come true and may you have great days every day.

I hope you will bee succesful in life and have good mental health.

I lovee youu soo soo muchh 🤍🤍

Semoga hal baik selalu menimpa kamu, teruslah tumbuh menjadi apa yang kamu mau, apa yang kamu mimpikan.

Aku selalu di samping kamu, aku selalu temenin kamu berproses, tapi inget aku jika kamu sudah sukses!

Aku akan selalu mendukungmu dengan doa dan harapa baik.

Sayangg udah berusaha lebih baik untuk setiap tahun nya.

Sayangkuu keren sekali, happy birthday sayang 🤍

Akuu selalu sayangg ke kamuu setiap hari nya, dan akan bertambah terus sayang.

Aku gaakan pernah bosen ke babyku.

Sayang, umur kamu yang ke 19th ini, aku harap kamu selalu bahagia yaa?

Asal baby tau, aku sayang banget sama kamu.

Pokoknya selamat ulang tahun yaa sayangg.

Terima kasih sudah menerima aku hadir dalam hidupmu, dan terimakasih juga kamu sudah hadir menjadi bagian indah dalam hidupku.

May Allah give you anything good news.

Dan semoga diumur 19 tahun ini kamu diberi kesehatan, kebahagiaan, dan semua hal baik selalu menyertaimu yaa sayangg.

Apa yg kamu impikan bisa terwujud.

Aku bersyukur bisa bareng sama kamu sejauh ini.

Di hari besok ulang tahun kamu aku juga minta maaf yaa, masi belum cukup jadi apa yg kamuu inginkann.

Aku juga belum bisa ngasi banyak apa yg kamu inginkan.

Semoga kita bisa wujudin apa yg selalu kita harapkan dimasa depan.

Happy birthday, Kaido. 💙

I love you so much.

— Louis
`;


function typeLetter(){

    const target =
        document.getElementById("letterText");

    target.innerHTML = "";

    let i = 0;

    const typing =
        setInterval(()=>{

            target.innerHTML +=
                message.charAt(i);

            i++;

            if(i >= message.length){

                clearInterval(typing);

            }

        },5);

}


/* =========================
   LOVE QUIZ
========================= */

let currentQuestion = 0;

const questions =
    document.querySelectorAll(".question");


function checkAnswer(button,correct){

    if(!correct){

        alert("Oops! Try again, baby 💙");

        return;

    }


    questions[currentQuestion]
        .classList.remove("active");

    currentQuestion++;


    if(currentQuestion < questions.length){

        questions[currentQuestion]
            .classList.add("active");

    }else{

        document.getElementById(
            "quizSuccess"
        ).classList.remove("hidden");

        createConfetti();

        document.getElementById(
            "quizSuccess"
        ).scrollIntoView({
            behavior:"smooth"
        });

    }

}


/* =========================
   CONFETTI
========================= */

function createConfetti(){

    const emojis = [
        "💙",
        "🩵",
        "🤍",
        "✨",
        "🎉"
    ];

    for(let i=0;i<80;i++){

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];

        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-20px";

        confetti.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        confetti.style.animation =
            `fall ${Math.random() * 3 + 3}s linear`;

        confetti.style.pointerEvents =
            "none";

        confetti.style.zIndex =
            "9999";

        document.body.appendChild(
            confetti
        );

        setTimeout(()=>{

            confetti.remove();

        },6000);

    }

}
