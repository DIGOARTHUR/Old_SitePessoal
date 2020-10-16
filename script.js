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




function digitaTexto() {
    const element = document.querySelector('#descricaoQuemSoueu');
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    console.log(textArray);
    textArray.forEach((letra,i) => {
        setTimeout(()=> element.innerHTML+=letra,75*i  );

    });
}



