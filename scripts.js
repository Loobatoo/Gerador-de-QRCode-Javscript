const URLdousuario = document.querySelector("#Text");
const BtnCriar = document.querySelector("#Btn");
const ImgQrCode = document.querySelector("#QrCode");
const ContainerClass = document.querySelector('.Container')

function GerarQrCode() {

    const TextoUrl = URLdousuario.value;

    if( URLdousuario.value === ""){
        console.log("Erro");
    }


    ImgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${TextoUrl}`;
    
    BtnCriar.value = "Criando código...";


    ImgQrCode.addEventListener("load", () => {
        ContainerClass.classList.add("active");
        BtnCriar.value = "Criado!";
    })

}

BtnCriar.addEventListener("click", () => {
    GerarQrCode();
});

URLdousuario.addEventListener("keydown", (e) => {
    if( e.code === "Enter"){
    GerarQrCode();
    }
});



