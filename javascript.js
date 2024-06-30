$(document).ready(function(){

$('#Select').on('change', function(){

var SelectValor = '#' + $(this).val();
$('#fila1').children('div').hide();
$('#fila1').children(SelectValor).show();


  
});

});



$(document).ready(function(){
    $("#EXTREMO-INFERIOR").click(function(){
        $("#EXTREMO-INFERIORMODAL").modal();
    });
});

$(document).ready(function(){
    $("#EXTREMO-SUPERIOR").click(function(){
        $("#EXTREMO-SUPERIORMODAL").modal();
    });
});

$(document).ready(function(){
    $("#EXTREMO-DERECHO").click(function(){
        $("#EXTREMO-DERECHOMODAL").modal();
    });
});

$(document).ready(function(){
    $("#EXTREMO-IZQUIERDO").click(function(){
        $("#EXTREMO-IZQUIERDOMODAL").modal();
    });
});


<!--INTERNO-->

$(document).ready(function(){
    $("#INTERNO-IZQUIERDO").click(function(){
        $("#INTERNO-IZQUIERDOMODAL").modal();
    });
});


$(document).ready(function(){
    $("#INTERNO-DERECHO").click(function(){
        $("#INTERNO-DERECHOMODAL").modal();
    });
});

<!--COLGAROPA-->

$(document).ready(function(){
    $("#COLGAROPA").click(function(){
        $("#COLGAROPAMODAL").modal();
    });
});

<!--SQUADS-->

$(document).ready(function(){
    $("#SQUADS").click(function(){
        $("#SQUADSMODAL").modal();
    });
});

<!--RIGHT SECTION-->

$(document).ready(function(){
    $("#DERECHO-DIVISION1").click(function(){
        $("#DERECHO-DIVISIONMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DERECHO-DIVISION2").click(function(){
        $("#DERECHO-DIVISIONMODAL").modal();
    });
});

<!--CENTER SECTION-->

$(document).ready(function(){
    $("#CENTRAL-DIVISION1").click(function(){
        $("#CENTRAL-DIVISIONMODAL").modal();
    });
});

$(document).ready(function(){
    $("#CENTRAL-DIVISION2").click(function(){
        $("#CENTRAL-DIVISIONMODAL").modal();
    });
});

$(document).ready(function(){
    $("#CENTRAL-DIVISION3").click(function(){
        $("#CENTRAL-DIVISIONMODAL").modal();
    });
});
<!--LEFT SECTION-->

$(document).ready(function(){
    $("#IZQUIERDO-DIVISION1").click(function(){
        $("#IZQUIERDO-DIVISIONMODAL").modal();
    });
});

$(document).ready(function(){
    $("#IZQUIERDO-DIVISION2").click(function(){
        $("#IZQUIERDO-DIVISIONMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#IZQUIERDO-DIVISION2").click(function(){
        $("#IZQUIERDO-DIVISIONMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TORNILLOSMADERA").click(function(){
        $("#TORNILLOSMADERAMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TORNILLOSMADERA2").click(function(){
        $("#TORNILLOSMADERAMODAL2").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TORNILLOMETALICO").click(function(){
        $("#TORNILLOMETALICOMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TORNILLOMETALICO2").click(function(){
        $("#TORNILLOMETALICO2MODAL").modal();
    });
});

<!--LEFT SECTION---------------------------------------------------->
$(document).ready(function(){
    $("#PUERTA-EXTREMO-IZQUIERDA1").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#PUERTA-INTERNA-IZQUIERDA2").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});
<!--LEFT SECTION-->
$(document).ready(function(){
    $("#PUERTA-CENTRAL1").click(function(){
        $("#PUERTA-CENTRAL-MODAL").modal();
    });
});
<!--LEFT SECTION-->
$(document).ready(function(){
    $("#PUERTA-INTERNA-DERECHA1").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});
<!--LEFT SECTION-->
$(document).ready(function(){
    $("#PUERTA-EXTREMO-DERECHA2").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});


<!--Contenedor-->

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#LOCK").click(function(){
        $("#CERRADURA1").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#BOX").click(function(){
        $("#CAJONES1").modal();
    });
});

<!--Contenedor-->

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#SLIDER").click(function(){
        $("#SLID").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#MANIJA").click(function(){
        $("#MANIJAMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#MANIJA-CAJON").click(function(){
        $("#MANIJA-CAJONMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TRIPLEX-IZQUIERDO").click(function(){
        $("#TRIPLEX-IZQUIERDOMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TRIPLEX-CENTRAL").click(function(){
        $("#TRIPLEX-CENTRALMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TRIPLEX-DERECHO").click(function(){
        $("#TRIPLEX-IZQUIERDOMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#CIRCULO1").click(function(){
        $("#CIRCULO").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#CIRCULO2").click(function(){
        $("#CIRCULO").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#CIRCULO3").click(function(){
        $("#CIRCULO").modal();
    });
});


/*

<!--SELECTOR-->
function listenToClicks(){
    const buttons = document.querySelectorAll(".clickable-button");



    buttons.forEach((button) => {
    button.addEventListener("click", () => {
        activateBoxes(button.id);
    });
   });
}

   function activateBoxes(buttonId){
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        if (box.classList.contains(buttonId)) {
            box.dataset.active = true;
        }else{
            box.dataset.active = false;
        }
    });
   }

   listenToClicks();
<!--SELECTOR-->

 
*/

/*<!--SELECTOR1-->*/
function listenToClicks(){
    const botones = document.querySelectorAll(".clickable-g");



    botones.forEach((g) => {
    g.addEventListener("click", () => {
        activateBoxes(g.id);
    });
   });
}

   function activateBoxes(gId){
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        if (box.classList.contains(gId)) {
            box.dataset.active = true;
        }else{
            box.dataset.active = false;
        }
    });
   }

 listenToClicks();
 /*<!--SELECTOR1-->*/

 /*<!--SELECTOR2-->
function listenToClicks(){
    const botones2 = document.querySelectorAll(".clickable-g2");



    botones2.forEach((g) => {
    g.addEventListener("click", () => {
        activateCajas(g.id);
    });
   });
}

   function activateCajas(gId){
    const cajas = document.querySelectorAll(".caja");

    cajas.forEach((caja) => {
        if (caja.classList.contains(gId)) {
            caja.dataset.active = true;
        }else{
            caja.dataset.active = false;
        }
    });
   }

 listenToClicks();
 /*<!--SELECTOR2-->*/


const btnDepartamentos = document.getElementById('btn-departamentos'),
      btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
      grid = document.getElementById('grid'),
      contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
      contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
      esDispositivoMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener('mouseover', () => {
    if(!esDispositivoMovil()){
        grid.classList.add('activo');
    }
});

grid.addEventListener('mouseleave', () => {
    if(!esDispositivoMovil()){
        grid.classList.remove('activo');
    }
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {
        if(!esDispositivoMovil()){
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo');
                }
            });
        };
    });
});

// EventListeners para dispositivo movil.
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
    e.preventDefault();
    if(contenedorEnlacesNav.classList.contains('activo')){
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
    } else {
        contenedorEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden';
    }
});



btnCerrarMenu.addEventListener('click', (e)=> {
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento) => {
        elemento.classList.remove('activo');
    });
    document.querySelector('body').style.overflow = 'visible';
});



/* INCLUSION DE SONIDO*/

/* SELECTOR1*/

var p1 = new Audio();
p1.src = "SOUND/SELECTOR/1.mp3";

var p2 = new Audio();
p2.src = "SOUND/SELECTOR/2.mp3";

var p3 = new Audio();
p3.src = "SOUND/SELECTOR/3.mp3";

var p4 = new Audio();
p4.src = "SOUND/SELECTOR/4.mp3";

var p5 = new Audio();
p5.src = "SOUND/SELECTOR/5.mp3";

var p6 = new Audio();
p6.src = "SOUND/SELECTOR/6.mp3";

/* SELECTOR1*/

/* PIEZAS*/

var m1 = new Audio();
m1.src = "SOUND/PIEZAS/left.mp3";

var m2 = new Audio();
m2.src = "SOUND/PIEZAS/right.mp3";

var m3 = new Audio();
m3.src = "SOUND/PIEZAS/top.mp3";

var m4 = new Audio();
m4.src = "SOUND/PIEZAS/low.mp3";

/* INTERNAL*/

var m5 = new Audio();
m5.src = "SOUND/PIEZAS/internal-left.mp3";

var m6 = new Audio();
m6.src = "SOUND/PIEZAS/internal-right.mp3";

/* INTERNAL*/

/* INTERNAL*/

var m7 = new Audio();
m7.src = "SOUND/PIEZAS/support.mp3";

var m8 = new Audio();
m8.src = "SOUND/PIEZAS/hanger.mp3";

var m9 = new Audio();
m9.src = "SOUND/PIEZAS/division1.mp3";

var m10 = new Audio();
m10.src = "SOUND/PIEZAS/division2.mp3";

var m11 = new Audio();
m11.src = "SOUND/PIEZAS/tornillos.mp3";


/* INTERNAL*/

/* PIEZAS*/

/* SELECTOR2*/

var p7 = new Audio();
p7.src = "SOUND/SELECTOR/S1.mp3";

var p8 = new Audio();
p8.src = "SOUND/SELECTOR/S2.mp3";

var p9 = new Audio();
p9.src = "SOUND/SELECTOR/S3.mp3";

var p10= new Audio();
p10.src = "SOUND/SELECTOR/S4.mp3";

var p11 = new Audio();
p11.src = "SOUND/SELECTOR/S5.mp3";

var p12 = new Audio();
p12.src = "SOUND/SELECTOR/S6.mp3";

/* SELECTOR2*/

/* PIEZAS*/

var m12 = new Audio();
m12.src = "SOUND/PIEZAS/extreme-door.mp3";

var m13 = new Audio();
m13.src = "SOUND/PIEZAS/center-door.mp3";

/* PIEZAS*/






/* INCLUSION DE SONIDO*/

