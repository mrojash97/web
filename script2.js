let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}



const pdfUrls = {
      1: "https://drive.google.com/file/d/1kF5LZGtVYvwxwcotz79YzIaihtOvS_Hw/preview",
      2: "https://drive.google.com/file/d/1ldKBaGbmOgzuPMddeoJkTSxo7oImBdpE/preview",
      3: "https://drive.google.com/file/d/1Sl8xGgrzBgoNA34_19Po_jEw0ulFIJZl/preview",
      4: "https://drive.google.com/file/d/1fTYqGJOZ9UIppNCDQksKuUz75OmLyQc2/preview",
      5: "https://drive.google.com/file/d/ID2/preview",
      6: "https://drive.google.com/file/d/1piY_58hSAdWigDJp4dt8NENySSUtUTzg/preview",
      7: "https://drive.google.com/file/d/1cChjccuslTI_gmSlnDE5Oqk5Bj72DXxI/preview"
    };

    function abrirModal(id) {
      const iframe = document.getElementById("iframePDF");
      iframe.src = pdfUrls[id];
      document.getElementById("modalPDF").style.display = "block";
    }

    function cerrarModal() {
      const iframe = document.getElementById("iframePDF");
      iframe.src = "";
      document.getElementById("modalPDF").style.display = "none";
    }

    window.onclick = function(event) {
      const modal = document.getElementById("modalPDF");
      if (event.target === modal) {
        cerrarModal();
      }
    };
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
