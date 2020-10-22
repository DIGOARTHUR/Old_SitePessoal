//****************************************** 
// EFEITO ÍCONE SOCIAIS HEADER
//******************************************


//****************************************** 
// EFEITO DIGITAR HEADER
//******************************************





function setNewImage(valorIcon) {



    switch (valorIcon) {
        case 1:
            document.getElementById("iconGithub").src = "img/icon_Github_Color.png";

            break;
        case 2:
            document.getElementById("iconLinkedin").src = "img/icon_Linkedin_Color.png";
            break;
        case 3:
            document.getElementById("iconFacebook").src = "img/icon_Facebook_Color.png";
            break;
        case 4:
            document.getElementById("iconInstagram").src = "img/icon_Instagram_Color.png";
            break;
        case 5:
            document.getElementById("iconTwitter").src = "img/icon_Twitter_Color.png";
            break;
    };//End Switch

}

function setOldImage(valorIcon) {

    switch (valorIcon) {
        case 1:
            document.getElementById("iconGithub").src = "img/icon_Github.png";
            break;
        case 2:
            document.getElementById("iconLinkedin").src = "img/icon_Linkedin.png";
            break;
        case 3:
            document.getElementById("iconFacebook").src = "img/icon_Facebook.png";
            break;
        case 4:
            document.getElementById("iconInstagram").src = "img/icon_Instagram.png";
            break;
        case 5:
            document.getElementById("iconTwitter").src = "img/icon_Twitter.png";
            break;
    };

}



const element = document.querySelector('#descricaoQuemSoueu');
digitaTexto(element);
function digitaTexto(element) {




    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    document.querySelector("#descricaoQuemSoueu2").innerHTML = " ";
    console.log(textArray);
    textArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 100 * i);

    });

    setTimeout(digitaTexto2, 1000 * 4);
}


function digitaTexto2() {

    document.querySelector("#descricaoQuemSoueu2").innerHTML = "Nostálgico pelo os anos 90, entusiasta pela a vida extraterrestre, viagem no tempo, buracos negros, inteligência artificial e dominação das máquinas.";

    const element = document.querySelector('#descricaoQuemSoueu2');
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    console.log(textArray);
    textArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 40 * i);

    });
    setTimeout(digitaTexto3, 1000 * 7);
}

function digitaTexto3() {

    document.querySelector("#descricaoQuemSoueu3").innerHTML = "Apaixonado por lugares de temperatura amena, chocolate quente e capuccino. Ambientes de cafeterias me atraem e me inspiram. Pizza, Lanche e Sushi. Curto bandas de Rock do tipo Terno Rei, Moptop e sou SuperMega empolgado por Eletrônica. Homem aranha o melhor herói! Amo jogar bolar escutando música. Lugares que tenho muita vontade de conhecer: Austrália e Canadá.";

    const element = document.querySelector('#descricaoQuemSoueu3');
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    console.log(textArray);
    textArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 40 * i);

    });
    setTimeout(digitaTexto4, 1000 * 15);
}

function digitaTexto4() {

    document.querySelector("#descricaoQuemSoueu4").innerHTML = "'Da areia ⚡ ao vidro'. ";

    const element = document.querySelector('#descricaoQuemSoueu4');
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    console.log(textArray);
    textArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 40 * i);

    });
    setTimeout(digitaTexto5, 1000 * 2);
}

function digitaTexto5() {

    document.querySelector("#descricaoQuemSoueu5").innerHTML = " Tomei e levei essa frase comigo desde que iniciei a Universidade. Ela significa o ato de uma ação repentina que causou o feito de mudança. Essa é a essência que vivenciei.";

    const element = document.querySelector('#descricaoQuemSoueu5');
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    console.log(textArray);
    textArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 40 * i);

    });

}



$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


