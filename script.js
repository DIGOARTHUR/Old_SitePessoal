




//****************************************** 
// TROCA DE PÁGINA NAV PAGE
//******************************************
function navPage(tela) {

    if (tela == 1) {
        var tag_css = document.querySelector(".page3");
        tag_css.style.display = "none"
        var tag_css = document.querySelector(".page1");
        tag_css.style.display = "block";

    }


    if (tela == 3) {
        var tag_css = document.querySelector(".page1");
        tag_css.style.display = "none"
        var tag_css = document.querySelector(".page3");
        tag_css.style.display = "block";

    }

}




//****************************************** 
// CARDS PAGE 3
//******************************************



//****************************************** 
// DEFINE A LINGUA DA PÁGINA
//******************************************

function lingua(op) {


    if (op == 0) {
        /*CENTER BODY PORTUGUES*/
        document.querySelector("#NameAbaProjeto").innerHTML = "Projeto"
        document.querySelector("#NameTituloObjetivo").innerHTML = "Objetivo"
        document.querySelector("#NameDescricaoObjetivo").innerHTML = "Chegou um ponto da minha graduação que vi a necessidade de unificar tudo que fiz, tudo que desenvolvi em um só lugar. Um lugar onde eu possa organizar tudo ao meu respeito, seja as redes acadêmicas e profissionais(GitHub, Linkedin, Lattes), redes socias (Facebook, Instagram, Twitter), habilidades, projetos, ideias, diplomas. Currículo++ está me proporcionando tudo isso, de uma forma limpa, direta e organizada."
        document.querySelector("#NameTituloAgradecimentos").innerHTML = "Agradecimentos"
        document.querySelector("#NameDescricaoAgradecimentos").innerHTML = "Quero agradecer a todos que sempre acreditaram em mim, me procurando para ajudá-los na área ou talvez apenas elogiando o que faço. Github por estar proporcionando a oportunidade de não só apenas existir aqui neste mundo, mas o de poder construir algo que reflita minha identidade. Isso aqui não parece ser algo grandioso, mas há um peso e um significado enorme para mim."
    }

    if (op == 1) {
        /*CENTER BODY INGLES*/
        document.querySelector("#NameAbaProjeto").innerHTML = "Project"
        document.querySelector("#NameTituloObjetivo").innerHTML = "Objective"
        document.querySelector("#NameDescricaoObjetivo").innerHTML = "There came a point in my graduation that I saw the need to unify everything I did, everything I developed in one place. A place where I can organize everything about myself, be it academic networks and professionals (GitHub, Linkedin, Lattes), social networks (Facebook, Instagram, Twitter), skills, projects, ideas, diplomas. Curriculum ++ is providing me with all this, in a clean, direct and organized."
        document.querySelector("#NameTituloAgradecimentos").innerHTML = "Acknowledgment"
        document.querySelector("#NameDescricaoAgradecimentos").innerHTML = " I want to thank everyone who always believed in me, looking for me to help them in the area or maybe just praising what I do. Github for providing the opportunity to not only just exist here in this world, but to be able to build something that reflects my identity. This doesn’t seem like a big deal, but there’s a huge weight and meaning to me."
        document.querySelector("#NameAbaQuemSouEu").innerHTML = "Who am I?"
        document.querySelector("#NameAbaExperienciaAcademica").innerHTML = "Academic Experience"

       
       
        
        document.querySelector("#descricaoQuemSoueu").innerHTML = "console.log(HELLO, WORLD!)"
        document.querySelector("#descricaoQuemSoueu2").innerHTML = "Nostalgic for the 90s, enthusiastic about extraterrestrial life, time travel, black holes, artificial intelligence and machine domination."

        
    }
}




//****************************************** 
// EFEITO ÍCONE SOCIAIS HEADER
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
            document.getElementById("iconLattes").src = "img/icon_Lattes_Color.png";
            break;
        case 4:
            document.getElementById("iconFacebook").src = "img/icon_Facebook_Color.png";
            break;
        case 5:
            document.getElementById("iconInstagram").src = "img/icon_Instagram_Color.png";
            break;
        case 6:
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
            document.getElementById("iconLattes").src = "img/icon_Lattes.png";
            break;
        case 4:
            document.getElementById("iconFacebook").src = "img/icon_Facebook.png";
            break;
        case 5:
            document.getElementById("iconInstagram").src = "img/icon_Instagram.png";
            break;
        case 6:
            document.getElementById("iconTwitter").src = "img/icon_Twitter.png";
            break;
    };

}




//****************************************** 
// EFEITO DIGITAR HEADER  "QUEM SOU SEU"
//******************************************
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


$('.carousel').carousel({ interval: 500 })