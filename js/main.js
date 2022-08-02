    var btn1 = document.getElementById("1");
    var btn2 = document.getElementById("2");
    var btn3 = document.getElementById("3");
    var foto1 = document.getElementById("foto1");
    var foto2 = document.getElementById("foto2");
    var foto3 = document.getElementById("foto3");

    let temporizador;
    let temporizador2;
    let temporizador3;

    clearTimeout(temporizador2);
    clearTimeout(temporizador3);

    window.onload = function() {
      foto1.style.opacity = '1';
      btn1.setAttribute('class','actual');
      temporizador = setTimeout(cambioColor2, 5000);
    }

    function cambiarColor(img1,img2,img3,boton1,boton2,boton3,funcion) {
      img1.style.opacity = '1';
      img2.style.opacity = '0';
      img3.style.opacity = '0';
      boton1.setAttribute('class','actual');
      boton2.removeAttribute('class','actual');
      boton3.removeAttribute('class','actual');
    }

    function cambioColor1(){
      cambiarColor(foto1,foto2,foto3,btn1,btn2,btn3,temporizador,cambioColor2);
      temporizador = setTimeout(cambioColor2, 5000);
      clearTimeout(temporizador2);
      clearTimeout(temporizador3);
    }
    function cambioColor2(){
      cambiarColor(foto2,foto3,foto1,btn2,btn3,btn1,temporizador2,cambioColor3);
      temporizador2 = setTimeout(cambioColor3, 5000);
      clearTimeout(temporizador);
      clearTimeout(temporizador3);
    }
    function cambioColor3(){
      cambiarColor(foto3,foto1,foto2,btn3,btn1,btn2,temporizador3,cambioColor1);
      temporizador3 = setTimeout(cambioColor1, 5000);
      clearTimeout(temporizador2);
      clearTimeout(temporizador);
    }
    
    btn1.addEventListener('click', cambioColor1);
    btn2.addEventListener('click', cambioColor2);
    btn3.addEventListener('click', cambioColor3);


    