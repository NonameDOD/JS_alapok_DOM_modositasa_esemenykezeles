window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2_3();
    elemekElerese4()
    esemenykezelo();
    esemenykezelo2()
    
});

function elemekElerese1() {
    const ELEM = document.querySelectorAll("section h2")[0]
    console.log(ELEM.innerHTML)
}
function elemekElerese2_3() {
    const ELEM = document.getElementsByClassName("ide");
    for (let index = 0; index < ELEM.length; index++) {
        ELEM[index].innerHTML = "<p>Jó reggelt!</p>";
    }
}

function elemekElerese4() {
    const ELEM = document.getElementsByClassName("lista");
    console.log(ELEM);
    let szoveg = "<ul>";
    for (let i = 0; i < 5; i++) {
        szoveg += "<li>" + (Math.floor(Math.random() * 21) + 10) +"</li>";
        
    }
    szoveg+="</ul>";
    ELEM[0].innerHTML = szoveg;
    ELEM[0].classList.add("formazott");
}

function esemenykezelo() {
    const ELEM = document.getElementsByClassName("lista");
    ELEM[0].addEventListener("click", esemenykezeles1);
}

function esemenykezeles1() {
    const ELEM = document.getElementsByClassName("lista");
    const valtozando =document.getElementsByClassName("kattintasutan");
    valtozando[0].innerHTML = ELEM[0].innerHTML;
}
function esemenykezelo2() {
    const ELEM = document.getElementsByClassName("feladat");
    ELEM[0].innerHTML = "<button>OK</button>";
    ELEM[0].addEventListener("click", esemenykezeles2);
}
function esemenykezeles2() {
    const ELEM = document.getElementsByClassName("feladat");
    ELEM[0].innerHTML += `<div class="kep"><img src="https://imgs.search.brave.com/8gopTi3gkPtUj9jYJykWomNInk5b6i5U6aD5AEHTcqo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLW1QVWhE/UEJHMEkwZnlwbXMt/ZzBGb0VnLXQxMDgw/eDEwODAuanBn" alt="", width="300px"></div>`;
    esemenykezelo3()
}
function esemenykezelo3() {
    const ELEM = document.getElementsByClassName("kep");
    ELEM[0].addEventListener("mouseenter",enter);
    ELEM[0].addEventListener("mouseleave",leave);
}
function enter() {
    const ELEM = document.getElementsByClassName("kep");
    ELEM[0].innerHTML = `<img src="https://imgs.search.brave.com/8gopTi3gkPtUj9jYJykWomNInk5b6i5U6aD5AEHTcqo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLW1QVWhE/UEJHMEkwZnlwbXMt/ZzBGb0VnLXQxMDgw/eDEwODAuanBn" alt="", width="500px">`
    console.log(ELEM[0]);
}
function leave() {
    const ELEM = document.getElementsByClassName("kep");
    ELEM[0].innerHTML = `<img src="https://imgs.search.brave.com/8gopTi3gkPtUj9jYJykWomNInk5b6i5U6aD5AEHTcqo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLW1QVWhE/UEJHMEkwZnlwbXMt/ZzBGb0VnLXQxMDgw/eDEwODAuanBn" alt="", width="300px">`
}