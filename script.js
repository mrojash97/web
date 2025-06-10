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
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("sql");
        habilidades[2].classList.add("powerbi");
        habilidades[3].classList.add("excel");
        habilidades[4].classList.add("orange");
        habilidades[5].classList.add("powerapps");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("responsabilidad");
        habilidades[11].classList.add("autodidacta");
    }
}
// Habilitar o deshabilitar el botón según si los campos están llenos
    document.getElementById('nombre').addEventListener('input', validarFormulario);
    document.getElementById('correo').addEventListener('input', validarFormulario);
    document.getElementById('tema').addEventListener('input', validarFormulario);
    document.getElementById('mensaje').addEventListener('input', validarFormulario);

    function validarFormulario() {
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const tema = document.getElementById('tema').value;
      const mensaje = document.getElementById('mensaje').value;
      const enviarBtn = document.getElementById('enviarBtn');

      // Habilita el botón si todos los campos están llenos
      if (nombre && correo && tema && mensaje) {
        enviarBtn.disabled = false;
      } else {
        enviarBtn.disabled = true;
      }
    }

    function enviarWhatsapp() {
      var nombre = document.getElementById("nombre").value;
      var correo = document.getElementById("correo").value;
      var tema = document.getElementById("tema").value;
      var mensaje = document.getElementById("mensaje").value;
      
      var telefono = "51956273115"; // Cambia por tu número
      var texto = `Hola, mi nombre es: ${nombre}%0A%0A`; // Corregir la concatenación
      texto += `Mi correo es: ${correo}%0A%0A`;
      texto += `Tema: ${tema}%0A%0A`;
      texto += `Mensaje:%0A${mensaje}`;
      var url = `https://wa.me/${telefono}?text=${texto}`;

      // Redirigir al enlace de WhatsApp
      window.open(url, "_blank");

      // Limpiar los campos después de enviar
      limpiarFormulario();
    }

    // Función para limpiar los campos del formulario
    function limpiarFormulario() {
      document.getElementById("nombre").value = "";
      document.getElementById("correo").value = "";
      document.getElementById("tema").value = "";
      document.getElementById("mensaje").value = "";
      document.getElementById("enviarBtn").disabled = true; // Deshabilitar el botón
    }

const pdfUrls = {
      1: "https://drive.google.com/file/d/ID2/preview",
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
