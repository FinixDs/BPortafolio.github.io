
       
       //Oculto todos los textos excepto el texto inicial
        document.getElementById("texto1").style.display = "none";
        document.getElementById("texto2").style.display = "none";
        document.getElementById("texto3").style.display = "none";
        document.getElementById("texto4").style.display = "none";

        function seleccion() {

            if (document.getElementById("blanco").selected == true) {
                document.getElementById("texto1").style.display = "none";
                document.getElementById("texto2").style.display = "none";
                document.getElementById("texto3").style.display = "none";
                document.getElementById("texto4").style.display = "none";
                document.getElementById("blanco1").style.display = "block";

            }

            if (document.getElementById("opcion1").selected == true) {

                document.getElementById("texto2").style.display = "none";
                document.getElementById("texto3").style.display = "none";
                document.getElementById("texto4").style.display = "none";
                document.getElementById("blanco1").style.display = "none";
                document.getElementById("texto1").style.display = "block";

                console.log("Has seleccionado Opcion 1");

            } else if (document.getElementById("opcion2").selected == true) {

                document.getElementById("blanco1").style.display = "none";
                document.getElementById("texto1").style.display = "none";
                document.getElementById("texto4").style.display = "none";
                document.getElementById("texto3").style.display = "none";
                document.getElementById("texto2").style.display = "block";
                console.log("Has seleccionado Opcion 2");

            } else if (document.getElementById("opcion3").selected == true) {

                document.getElementById("blanco1").style.display = "none";
                document.getElementById("texto1").style.display = "none";
                document.getElementById("texto2").style.display = "none";
                document.getElementById("texto3").style.display = "block";
                document.getElementById("texto4").style.display = "none";
                console.log("Has seleccionado Opción 3");

            } else if (document.getElementById("opcion4").selected == true) {

                document.getElementById("blanco1").style.display = "none";
                document.getElementById("texto1").style.display = "none";
                document.getElementById("texto2").style.display = "none";
                document.getElementById("texto3").style.display = "none";
                document.getElementById("texto4").style.display = "block";
                console.log("Has seleccionado Opción 4");

            } 
        }




$(document).ready(function(){

$('#Select').on('change', function(){

var SelectValor = '#' + $(this).val();
$('#fila1').children('div').hide();
$('#fila1').children(SelectValor).show();


});
});

$(document).on('click', '#BOX', function() {
    $('#CAJONES1').modal('show');
  });
  
  $(document).on('click', '#FRONTAL-BACKK', function() {
    $('#FRONTAL-BACKKMODAL').modal('show');
  });

  $(document).on('click', '#LATERALESS', function() {
    $('#LATERALESSMODAL').modal('show');
  });

  $(document).on('click', '#COVER-FRONTAL-BOX', function() {
    $('#COVER-FRONTAL-BOXMODAL').modal('show');
  });

  $(document).on('click', '#TRIPLEXX', function() {
    $('#TRIPLEXXMODAL').modal('show');
  });

  $(document).on('click', '#PUNTILLASS', function() {
    $('#PUNTILLASSMODAL').modal('show');
  });

  $(document).on('click', '#RIELES', function() {
    $('#RIELESMODAL').modal('show');
  });

  $(document).on('click', '#TORNILLOSS', function() {
    $('#TORNILLOSSMODAL').modal('show');
  });


 /*ESTRUCTURA*/

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

 /*FIN ESTRUCTURA*/

/*INTERNO*/

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

/*FIN INTERNO*/

/*COLGAROPA*/

$(document).ready(function(){
    $("#COLGAROPA").click(function(){
        $("#COLGAROPAMODAL").modal();
    });
});

/*FIN COLGAROPA*/

/*SQUADS*/

$(document).ready(function(){
    $("#SQUADS").click(function(){
        $("#SQUADSMODAL").modal();
    });
});

/*FIN SQUADS*/

/*RIGHT SECTION*/
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

/*FIN RIGHT SECTION*/

/*CENTER SECTION*/

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

/*FIN CENTER SECTION*/

/*LEFT SECTION*/

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

$(document).ready(function(){
    $("#IZQUIERDO-DIVISION2").click(function(){
        $("#IZQUIERDO-DIVISIONMODAL").modal();
    });
});

/*FIN LEFT SECTION*/

/*TORNILLOS*/

/*PUERTAS*/
$(document).ready(function(){
    $("#TORNILLOSMADERA").click(function(){
        $("#TORNILLOSMADERAMODAL").modal();
    });
});

/*PUERTAS*/
$(document).ready(function(){
    $("#TORNILLOSMADERA2").click(function(){
        $("#TORNILLOSMADERAMODAL2").modal();
    });
});

/*PUERTAS*/
$(document).ready(function(){
    $("#TORNILLOMETALICO").click(function(){
        $("#TORNILLOMETALICOMODAL").modal();
    });
});

/*PUERTAS*/
$(document).ready(function(){
    $("#TORNILLOMETALICO2").click(function(){
        $("#TORNILLOMETALICO2MODAL").modal();
    });
});

/*FIN-TORNILLOS*/

/*PUERTAS*/
$(document).ready(function(){
    $("#PUERTA-EXTREMO-IZQUIERDA1").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});

/*PUERTAS*/
$(document).ready(function(){
    $("#PUERTA-INTERNA-IZQUIERDA2").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});
/*PUERTAS*/
$(document).ready(function(){
    $("#PUERTA-CENTRAL1").click(function(){
        $("#PUERTA-CENTRAL-MODAL").modal();
    });
});
/*PUERTAS*/
$(document).ready(function(){
    $("#PUERTA-INTERNA-DERECHA1").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});
/*PUERTAS*/
$(document).ready(function(){
    $("#PUERTA-EXTREMO-DERECHA2").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});

/*FIN PUERTAS*/

/*--CERRADURA - CAJONES*/
$(document).ready(function(){
    $("#LOCK").click(function(){
        $("#CERRADURA1").modal();
    });
});

/*PUERTAS*/


/*--FIN CERRADURA - CAJONES*/

/*SLIDER*/

$(document).ready(function(){
    $("#SLIDER").click(function(){
        $("#SLID").modal();
    });
});

/*FIN SLIDER*/

/*MANIJAS*/

$(document).ready(function(){
    $("#MANIJA").click(function(){
        $("#MANIJAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#MANIJA-CAJON").click(function(){
        $("#MANIJA-CAJONMODAL").modal();
    });
});

/*FIN MANIJAS*/

/*TRIPLEX*/

$(document).ready(function(){
    $("#TRIPLEX-IZQUIERDO").click(function(){
        $("#TRIPLEX-IZQUIERDOMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TRIPLEX-CENTRAL").click(function(){
        $("#TRIPLEX-CENTRALMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TRIPLEX-DERECHO").click(function(){
        $("#TRIPLEX-IZQUIERDOMODAL").modal();
    });
});

/*FIN TRIPLEX*/

/*ESPECIFICACION TRIPLEX*/
$(document).ready(function(){
    $("#CIRCULO1").click(function(){
        $("#CIRCULO").modal();
    });
});

$(document).ready(function(){
    $("#CIRCULO2").click(function(){
        $("#CIRCULO").modal();
    });
});

$(document).ready(function(){
    $("#CIRCULO3").click(function(){
        $("#CIRCULO").modal();
    });
});

/*FIN ESPECIFICACION TRIPLEX*/

/*SELECTOR1*/
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
 /*FIN SELECTOR1*/






/*-----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/

/* MANUAL-INSTRUCCIONES-MUEBLE-COCINA*/

/*INICIO-PIEZAS*/

/*MODALES*/

/*MODALES-MADERA-PIEZAS*/

$(document).ready(function(){
    $("#DIVISION-VERTICAL-INTERNA").click(function(){
        $("#DIVISION-VERTICAL-INTERNAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#LATERALES").click(function(){
        $("#LATERALESMODAL").modal();
    });
});

$(document).ready(function(){
    $("#BASE-TECHO").click(function(){
        $("#BASE-TECHOMODAL").modal();
    });
});


$(document).ready(function(){
    $("#TABLITA").click(function(){
        $("#TABLITAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-MUEBLE").click(function(){
        $("#SOPORTE-MUEBLEMODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-PARED5").click(function(){
        $("#SOPORTE-PARED5MODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-HORIZONTAL-INTERNA").click(function(){
        $("#DIVISION-HORIZONTAL-INTERNAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TRIPLEX").click(function(){
        $("#TRIPLEXMODAL").modal();
    });
});



$(document).ready(function(){
    $("#PUERTAS-2").click(function(){
        $("#PUERTAS-2MODAL").modal();
    });
});

/*FIN-MADERA-PIEZAS*/

/*ACCESORIOS-MUEBLE*/

$(document).ready(function(){
    $("#PUNTILLAS").click(function(){
        $("#PUNTILLASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#MANIJAS").click(function(){
        $("#MANIJASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA").click(function(){
        $("#TORNILLERIAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#BISAGRAS").click(function(){
        $("#BISAGRASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTES-2").click(function(){
        $("#SOPORTES-2MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-SOPORTE-4").click(function(){
        $("#TORNILLERIA-SOPORTE-4MODAL").modal();
    });
});

/*FIN ACCESORIOS-MUEBLE*/

/*ESPECIFICACIONES-MUEBLE*/

$(document).ready(function(){
    $("#CORTE-SOPORTE-DETALLADO-PARED").click(function(){
        $("#CORTE-SOPORTE-DETALLADO-PAREDMODAL").modal();
    });
});

$(document).ready(function(){
    $("#CORTE-SOPORTE-DETALLADO-MUEBLE").click(function(){
        $("#CORTE-SOPORTE-DETALLADO-MUEBLEMODAL").modal();
    });
});

/*FIN ESPECIFICACIONES-MUEBLE*/

/*FIN MODALES*/

/*MODALES-MADERA-PIEZAS*/

$(document).ready(function(){
    $("#DIVISION-VERTICAL-INTERNA1").click(function(){
        $("#DIVISION-VERTICAL-INTERNAMODAL1").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-VERTICAL-INTERNA2").click(function(){
        $("#DIVISION-VERTICAL-INTERNA2MODAL").modal();
    });
});

$(document).ready(function(){
    $("#LATERALES1").click(function(){
        $("#LATERALESMODAL").modal();
    });
});

$(document).ready(function(){
    $("#BASE-TECHO1").click(function(){
        $("#BASE-TECHOMODAL").modal();
    });
});


$(document).ready(function(){
    $("#TABLITA1").click(function(){
        $("#TABLITAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-MUEBLE1").click(function(){
        $("#SOPORTE-MUEBLEMODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-PARED1").click(function(){
        $("#SOPORTE-PAREDMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-HORIZONTAL-INTERNA1").click(function(){
        $("#DIVISION-HORIZONTAL-INTERNAMODAL").modal();
    });
});
$(document).ready(function(){
    $("#TRIPLEX1").click(function(){
        $("#TRIPLEXMODAL").modal();
    });
});



$(document).ready(function(){
    $("#PUERTAS-21").click(function(){
        $("#PUERTAS-2MODAL").modal();
    });
});

/*FIN-MADERA-PIEZAS*/

/*ACCESORIOS-MUEBLE*/

$(document).ready(function(){
    $("#PUNTILLAS1").click(function(){
        $("#PUNTILLASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#MANIJAS1").click(function(){
        $("#MANIJASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA1").click(function(){
        $("#TORNILLERIAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#BISAGRAS1").click(function(){
        $("#BISAGRASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTES-21").click(function(){
        $("#SOPORTES-2MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-SOPORTE-41").click(function(){
        $("#TORNILLERIA-SOPORTE-4MODAL").modal();
    });
});

/*FIN ACCESORIOS-MUEBLE*/

/*ESPECIFICACIONES-MUEBLE*/

$(document).ready(function(){
    $("#CORTE-SOPORTE-DETALLADO-PARED1").click(function(){
        $("#CORTE-SOPORTE-DETALLADO-PAREDMODAL").modal();
    });
});

$(document).ready(function(){
    $("#CORTE-SOPORTE-DETALLADO-MUEBLE1").click(function(){
        $("#CORTE-SOPORTE-DETALLADO-MUEBLEMODAL").modal();
    });
});

/*FIN ESPECIFICACIONES-MUEBLE*/

/*FIN-PIEZAS*/



/*ACCESORIOS-MUEBLE*/

$(document).ready(function(){
    $("#LATERAL-DERECHA").click(function(){
        $("#LATERAL-DERECHAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#LATERAL-IZQUIERDA").click(function(){
        $("#LATERAL-IZQUIERDAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#BASE").click(function(){
        $("#BASEAMODAL").modal();
    });
});


$(document).ready(function(){
    $("#TECHO").click(function(){
        $("#TECHOMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA1").click(function(){
        $("#TORNILLERIAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-HORIZONTAL-EXTREMA-IZQUIERDA").click(function(){
        $("#DIVISION-HORIZONTAL-EXTREMA-IZQUIERDAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-HORIZONTAL-INTERNA-DERECHA").click(function(){
        $("#DIVISION-HORIZONTAL-INTERNA-DERECHAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-HORIZONTAL-EXTREMA-DERECHA").click(function(){
        $("#DIVISION-HORIZONTAL-EXTREMA-DERECHAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-HORIZONTAL-INTERNA-IZQUIERDA").click(function(){
        $("#DIVISION-HORIZONTAL-INTERNA-IZQUIERDAMODAL").modal();
    });
});

/*FIN ACCESORIOS-MUEBLE*/

/*ESPECIFICACIONES-MUEBLE*/

$(document).ready(function(){
    $("#DIVISION-VERTICAL-IZQUIERDA").click(function(){
        $("#DIVISIONES-VERTICAL-IZQUIERDAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-CENTRAL").click(function(){
        $("#DIVISIONES-VERTICAL-CENTRALMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-VERTICAL-DERECHA").click(function(){
        $("#DIVISIONES-VERTICAL-DERECHAMODAL").modal();
    });
});



$(document).ready(function(){
    $("#TORNILLERIA-SOPORTE-1").click(function(){
        $("#TORNILLERIA-SOPORTE1MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-SOPORTE-2").click(function(){
        $("#TORNILLERIA-SOPORTE2MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-SOPORTE-3").click(function(){
        $("#TORNILLERIA-SOPORTE3MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-SOPORTE-45").click(function(){
        $("#TORNILLERIA-SOPORTE4MODAL").modal();
    });
});


$(document).ready(function(){
    $("#SOPORTES3").click(function(){
        $("#SOPORTES3MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TABLITA-DELANTERA").click(function(){
        $("#TABLITA-DELANTERAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TABLITA-TRASERAS").click(function(){
        $("#TABLITA-TRASERASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TABLITA-TRASERA-ESCONDIDA").click(function(){
        $("#TABLITA-TRASERA-ESCONDIDAMODAL").modal();
    });
});


$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-10").click(function(){
        $("#TORNILLERIA-EXTERIORMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-6").click(function(){
        $("#TORNILLERIA-EXTERIORMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-5").click(function(){
        $("#TORNILLERIA-EXTERIORMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-1").click(function(){
        $("#TORNILLERIA-EXTERIORMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-2").click(function(){
        $("#TORNILLERIA-EXTERIOR-INTERNAMODAL").modal();
    });
});
$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-3").click(function(){
        $("#TORNILLERIA-EXTERIOR-INTERNAMODAL").modal();
    });
});
$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-4").click(function(){
        $("#TORNILLERIA-EXTERIOR-INTERNAMODAL").modal();
    });
});
$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-7").click(function(){
        $("#TORNILLERIA-EXTERIOR-INTERNAMODAL").modal();
    });
});
$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-8").click(function(){
        $("#TORNILLERIA-EXTERIOR-INTERNAMODAL").modal();
    });
});
$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-9").click(function(){
        $("#TORNILLERIA-EXTERIOR-INTERNAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-TABLITA-BACK-LEFT").click(function(){
        $("#TORNILLERIA-TABLITAS-TRASERA-LEFTMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLOS-COLGADOR20").click(function(){
        $("#TORNILLOS-COLGADOR20MODAL").modal();
    });
});


$(document).ready(function(){
    $("#TORNILLERIA-TABLITA-BACK-RIGHT").click(function(){
        $("#TORNILLERIA-TABLITAS-TRASERA-RIGHTMODAL").modal();
    });
});


$(document).ready(function(){
    $("#TORNILLERIA-TABLITA-DELANTERA").click(function(){
        $("#TORNILLERIA-TABLITA-DELANTERAMODAL").modal();
    });
});
/*FIN ESPECIFICACIONES-MUEBLE*/

/*ESPECIFICACIONES-PUERTAS*/
$(document).ready(function(){
    $("#TABLITA-PUERTA").click(function(){
        $("#TABLITA-PUERTAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PUERTA-IZQUIERDA-EXTREMA").click(function(){
        $("#PUERTA-IZQUIERDA-EXTREMAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PUERTA-DERECHA-EXTREMA").click(function(){
        $("#PUERTA-DERECHA-EXTREMAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PUERTA-DERECHA-INTERNA").click(function(){
        $("#PUERTA-DERECHA-INTERNAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PUERTA-IZQUIERDA-INTERNA").click(function(){
        $("#PUERTA-IZQUIERDA-INTERNAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#BISAGRAS2").click(function(){
        $("#BISAGRAS2MODAL").modal();
    });
});

$(document).ready(function(){
    $("#MANIJAS-PUERTAS").click(function(){
        $("#MANIJAS-PUERTASMODAL").modal();
    });
});

/*FIN ESPECIFICACIONES-PUERTAS*/

/*FIN-PIEZAS*/


/*ESPECIFICACIONES-PUERTAS*/
$(document).ready(function(){
    $("#TABLITAS-TRASERAS").click(function(){
        $("#TABLITAS-TRASERASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PUNTILLAS5").click(function(){
        $("#PUNTILLAS5MODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-MUEBLE2").click(function(){
        $("#SOPORTE-MUEBLE2MODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-MUEBLE10").click(function(){
        $("#SOPORTE-MUEBLE10MODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-PARED").click(function(){
        $("#SOPORTE-PAREDMODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-PARED1").click(function(){
        $("#SOPORTE-PARED1MODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-PARED10").click(function(){
        $("#SOPORTE-PARED10MODAL").modal();
    });
});

$(document).ready(function(){
    $("#PROCESO-SOPORTE-MUEBLE").click(function(){
        $("#PROCESO-SOPORTE-MUEBLEMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PROCESO-PUNTILLAS").click(function(){
        $("#PROCESO-PUNTILLASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PROCESO-SOPORTE-PARED").click(function(){
        $("#PROCESO-SOPORTE-PAREDMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TRIPLEX5").click(function(){
        $("#TRIPLEX5MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLO9").click(function(){
        $("#TORNILLO9MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLO3").click(function(){
        $("#TORNILLO3MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLO9-1").click(function(){
        $("#TORNILLO9MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLO3-1").click(function(){
        $("#TORNILLO3MODAL").modal();
    });
});
/*FIN ESPECIFICACIONES-PUERTAS*/

/*FIN-PIEZAS*/








/* INCLUSION DE SONIDO PRIMER MANUAL INSTRUCTIVO*/

/* -------------------------------------------------*/

/*LOW SIDE SOUND*/
let sound = new Audio("./SOUND/PIEZAS/low.mp3");

playBtn.addEventListener('click', ()=>{
    sound.play()
    });

pauseBtn.addEventListener('click', ()=>{
    sound.pause()
});
pauseBtnClose.addEventListener('click', ()=>{
    sound.pause()
});
/*LOW SIDE SOUND*/

let sound1 = new Audio("./SOUND/PIEZAS/top.mp3");

playBtn1.addEventListener('click', ()=>{
    sound1.play()
    });

pauseBtn1.addEventListener('click', ()=>{
    sound1.pause()
});
pauseBtnClose1.addEventListener('click', ()=>{
    sound1.pause()
});

let sound2 = new Audio("./SOUND/PIEZAS/right.mp3");

playBtn2.addEventListener('click', ()=>{
    sound2.play()
    });

pauseBtn2.addEventListener('click', ()=>{
    sound2.pause()
});
pauseBtnClose2.addEventListener('click', ()=>{
    sound2.pause()
});

let sound3 = new Audio("./SOUND/PIEZAS/left.mp3");

playBtn3.addEventListener('click', ()=>{
    sound3.play()
    });

pauseBtn3.addEventListener('click', ()=>{
    sound3.pause()
});
pauseBtnClose3.addEventListener('click', ()=>{
    sound3.pause()
});


let sound4 = new Audio("./SOUND/PIEZAS/internal-left.mp3");

playBtn4.addEventListener('click', ()=>{
    sound4.play()
    });

pauseBtn4.addEventListener('click', ()=>{
    sound4.pause()
});

pauseBtnClose4.addEventListener('click', ()=>{
    sound4.pause()
});


let sound5 = new Audio("./SOUND/PIEZAS/internal-right.mp3");

playBtn5.addEventListener('click', ()=>{
    sound5.play()
    });

pauseBtn5.addEventListener('click', ()=>{
    sound5.pause()
});
pauseBtnClose5.addEventListener('click', ()=>{
    sound5.pause()
});


let sound6 = new Audio("./SOUND/PIEZAS/hanger.mp3");

playBtn6.addEventListener('click', ()=>{
    sound6.play()
    });

pauseBtn6.addEventListener('click', ()=>{
    sound6.pause()
});
pauseBtnClose6.addEventListener('click', ()=>{
    sound6.pause()
});

let sound7 = new Audio("./SOUND/PIEZAS/support.mp3");

playBtn7.addEventListener('click', ()=>{
    sound7.play()
    });

pauseBtn7.addEventListener('click', ()=>{
    sound7.pause()
});
pauseBtnClose7.addEventListener('click', ()=>{
    sound7.pause()
});

let sound8 = new Audio("./SOUND/PIEZAS/support.mp3");

playBtn8.addEventListener('click', ()=>{
    sound8.play()
    });

pauseBtn8.addEventListener('click', ()=>{
    sound8.pause()
});
pauseBtnClose8.addEventListener('click', ()=>{
    sound8.pause()
});


let sound9 = new Audio("./SOUND/PIEZAS/tornillos.mp3");

playBtn9.addEventListener('click', ()=>{
    sound9.play()
    });

pauseBtn9.addEventListener('click', ()=>{
    sound9.pause()
});
pauseBtnClose9.addEventListener('click', ()=>{
    sound9.pause()
});

let sound10 = new Audio("./SOUND/PIEZAS/tornillos.mp3");

playBtn10.addEventListener('click', ()=>{
    sound10.play()
    });

pauseBtn10.addEventListener('click', ()=>{
    sound10.pause()
});
pauseBtnClose10.addEventListener('click', ()=>{
    sound10.pause()
});

let sound11 = new Audio("./SOUND/PIEZAS/division1.mp3");

playBtn11.addEventListener('click', ()=>{
    sound11.play()
    });

pauseBtn11.addEventListener('click', ()=>{
    sound11.pause()
});
pauseBtnClose11.addEventListener('click', ()=>{
    sound11.pause()
});

let sound12 = new Audio("./SOUND/PIEZAS/division1.mp3");

playBtn12.addEventListener('click', ()=>{
    sound12.play()
    });

pauseBtn12.addEventListener('click', ()=>{
    sound12.pause()
});
pauseBtnClose12.addEventListener('click', ()=>{
    sound12.pause()
});

let sound13 = new Audio("./SOUND/PIEZAS/division2.mp3");

playBtn13.addEventListener('click', ()=>{
    sound13.play()
    });

pauseBtn13.addEventListener('click', ()=>{
    sound13.pause()
});
pauseBtnClose13.addEventListener('click', ()=>{
    sound13.pause()
});

let sound14 = new Audio("./SOUND/PIEZAS/hanger.mp3");

playBtn14.addEventListener('click', ()=>{
    sound14.play()
    });

pauseBtn14.addEventListener('click', ()=>{
    sound14.pause()
});
pauseBtnClose14.addEventListener('click', ()=>{
    sound14.pause()
});

let sound15 = new Audio("./SOUND/PIEZAS/extreme-door.mp3");

playBtn15.addEventListener('click', ()=>{
    sound15.play()
    });

pauseBtn15.addEventListener('click', ()=>{
    sound15.pause()
});
pauseBtnClose15.addEventListener('click', ()=>{
    sound15.pause()
});

let sound16 = new Audio("./SOUND/PIEZAS/center-door.mp3");

playBtn16.addEventListener('click', ()=>{
    sound16.play()
    });

pauseBtn16.addEventListener('click', ()=>{
    sound16.pause()
});
pauseBtnClose16.addEventListener('click', ()=>{
    sound16.pause()
});

let sound17 = new Audio("./SOUND/PIEZAS/the-lock.mp3");

playBtn17.addEventListener('click', ()=>{
    sound17.play()
    });

pauseBtn17.addEventListener('click', ()=>{
    sound17.pause()
});
pauseBtnClose17.addEventListener('click', ()=>{
    sound17.pause()
});

let sound18 = new Audio("./SOUND/PIEZAS/forniture-legs.mp3");

playBtn18.addEventListener('click', ()=>{
    sound18.play()
    });

pauseBtn18.addEventListener('click', ()=>{
    sound18.pause()
});
pauseBtnClose18.addEventListener('click', ()=>{
    sound18.pause()
});

let sound19 = new Audio("./SOUND/PIEZAS/knobs.mp3");

playBtn19.addEventListener('click', ()=>{
    sound19.play()
    });

pauseBtn19.addEventListener('click', ()=>{
    sound19.pause()
});
pauseBtnClose19.addEventListener('click', ()=>{
    sound19.pause()
});

let sound20 = new Audio("./SOUND/PIEZAS/knobs.mp3");

playBtn20.addEventListener('click', ()=>{
    sound20.play()
    });

pauseBtn20.addEventListener('click', ()=>{
    sound20.pause()
});
pauseBtnClose20.addEventListener('click', ()=>{
    sound20.pause()
});

let sound21 = new Audio("./SOUND/PIEZAS/triplex-extreme.mp3");

playBtn21.addEventListener('click', ()=>{
    sound21.play()
    });

pauseBtn21.addEventListener('click', ()=>{
    sound21.pause()
});
pauseBtnClose21.addEventListener('click', ()=>{
    sound21.pause()
});

let sound22 = new Audio("./SOUND/PIEZAS/triplex-center.mp3");

playBtn22.addEventListener('click', ()=>{
    sound22.play()
    });

pauseBtn22.addEventListener('click', ()=>{
    sound22.pause()
});
pauseBtnClose22.addEventListener('click', ()=>{
    sound22.pause()
});


let sound23 = new Audio("./SOUND/PIEZAS/nails.mp3");

playBtn23.addEventListener('click', ()=>{
    sound23.play()
    });

pauseBtn23.addEventListener('click', ()=>{
    sound23.pause()
});
pauseBtnClose23.addEventListener('click', ()=>{
    sound23.pause()
});









let sound24 = new Audio("./SOUND/PIEZAS/CAJONES/SIDE-FRONTAL-BACK-BOX.mp3");

playBtn24.addEventListener('click', ()=>{
    sound24.play()
    });

pauseBtn24.addEventListener('click', ()=>{
    sound24.pause()
});
pauseBtnClose24.addEventListener('click', ()=>{
    sound24.pause()
});

let sound25 = new Audio("./SOUND/PIEZAS/CAJONES/SIDE-LEFT-RIGHT-BOX.mp3");

playBtn25.addEventListener('click', ()=>{
    sound25.play()
    });

pauseBtn25.addEventListener('click', ()=>{
    sound25.pause()
});
pauseBtnClose25.addEventListener('click', ()=>{
    sound25.pause()
});

let sound26 = new Audio("./SOUND/PIEZAS/CAJONES/SIDE-COVER-FRONTAL-BOX.mp3");

playBtn26.addEventListener('click', ()=>{
    sound26.play()
    });

pauseBtn26.addEventListener('click', ()=>{
    sound26.pause()
});
pauseBtnClose26.addEventListener('click', ()=>{
    sound26.pause()
});

let sound27 = new Audio("./SOUND/PIEZAS/CAJONES/SIDE-TRIPLEX-BOX.mp3");

playBtn27.addEventListener('click', ()=>{
    sound27.play()
    });

pauseBtn27.addEventListener('click', ()=>{
    sound27.pause()
});
pauseBtnClose27.addEventListener('click', ()=>{
    sound27.pause()
});

let sound28 = new Audio("./SOUND/PIEZAS/CAJONES/NAILS-TRIPLEX-BOX.mp3");

playBtn28.addEventListener('click', ()=>{
    sound28.play()
    });

pauseBtn28.addEventListener('click', ()=>{
    sound28.pause()
});
pauseBtnClose28.addEventListener('click', ()=>{
    sound28.pause()
});

let sound29 = new Audio("./SOUND/PIEZAS/CAJONES/RAILS-BOX.mp3");

playBtn29.addEventListener('click', ()=>{
    sound29.play()
    });

pauseBtn29.addEventListener('click', ()=>{
    sound29.pause()
});
pauseBtnClose29.addEventListener('click', ()=>{
    sound29.pause()
});

let sound30 = new Audio("./SOUND/PIEZAS/CAJONES/SCREW-BOX.mp3");

playBtn30.addEventListener('click', ()=>{
    sound30.play()
    });

pauseBtn30.addEventListener('click', ()=>{
    sound30.pause()
});
pauseBtnClose30.addEventListener('click', ()=>{
    sound30.pause()
});

let sound31 = new Audio("./SOUND/PIEZAS/CAJONES/BOX-ASSEMBLY.mp3");

playBtn31.addEventListener('click', ()=>{
    sound31.play()
    });

pauseBtn31.addEventListener('click', ()=>{
    sound31.pause()
});
pauseBtnClose31.addEventListener('click', ()=>{
    sound31.pause()
});

/*--------------------------------------------------------------------------------------------------------------------------*/
/* INCLUSION DE SONIDO PRIMER MANUAL INSTRUCTIVO*/



let botonsound1 = new Audio("./SOUND/KITCHEN/PIECES/SUPPORT-WALL.mp3");

playBoton1.addEventListener('click', ()=>{
    botonsound1.play()
    });

pauseBoton1.addEventListener('click', ()=>{
    botonsound1.pause()
});
pauseBotonClose1.addEventListener('click', ()=>{
    botonsound1.pause()
});



let botonsound2 = new Audio("./SOUND/KITCHEN/PIECES/DIVISION-INTERNAL-VERTICAL.mp3");

playBoton2.addEventListener('click', ()=>{
    botonsound2.play()
    });

pauseBoton2.addEventListener('click', ()=>{
    botonsound2.pause()
});
pauseBotonClose2.addEventListener('click', ()=>{
    botonsound2.pause()
});


let botonsound3 = new Audio("./SOUND/KITCHEN/PIECES/DIVISION-INTERNAL-VERTICAL.mp3");

playBoton3.addEventListener('click', ()=>{
    botonsound3.play()
    });

pauseBoton3.addEventListener('click', ()=>{
    botonsound3.pause()
});
pauseBotonClose3.addEventListener('click', ()=>{
    botonsound3.pause()
});


let botonsound4 = new Audio("./SOUND/KITCHEN/PIECES/SIDES.mp3");

playBoton4.addEventListener('click', ()=>{
    botonsound4.play()
    });

pauseBoton4.addEventListener('click', ()=>{
    botonsound4.pause()
});
pauseBotonClose4.addEventListener('click', ()=>{
    botonsound4.pause()
});

let botonsound5 = new Audio("./SOUND/KITCHEN/PIECES/TOP-LOW.mp3");

playBoton5.addEventListener('click', ()=>{
    botonsound5.play()
    });

pauseBoton5.addEventListener('click', ()=>{
    botonsound5.pause()
});
pauseBotonClose5.addEventListener('click', ()=>{
    botonsound5.pause()
});

let botonsound6 = new Audio("./SOUND/KITCHEN/PIECES/BOARDS.mp3");

playBoton6.addEventListener('click', ()=>{
    botonsound6.play()
    });

pauseBoton6.addEventListener('click', ()=>{
    botonsound6.pause()
});
pauseBotonClose6.addEventListener('click', ()=>{
    botonsound6.pause()
});

let botonsound7 = new Audio("./SOUND/KITCHEN/PIECES/NAILS.mp3");

playBoton7.addEventListener('click', ()=>{
    botonsound7.play()
    });

pauseBoton7.addEventListener('click', ()=>{
    botonsound7.pause()
});
pauseBotonClose7.addEventListener('click', ()=>{
    botonsound7.pause()
});

let botonsound8 = new Audio("./SOUND/KITCHEN/PIECES/KNOBS.mp3");

playBoton8.addEventListener('click', ()=>{
    botonsound8.play()
    });

pauseBoton8.addEventListener('click', ()=>{
    botonsound8.pause()
});
pauseBotonClose8.addEventListener('click', ()=>{
    botonsound8.pause()
});

let botonsound9 = new Audio("./SOUND/KITCHEN/PIECES/SCREWS-ASSEMBLY.mp3");

playBoton9.addEventListener('click', ()=>{
    botonsound9.play()
    });

pauseBoton9.addEventListener('click', ()=>{
    botonsound9.pause()
});
pauseBotonClose9.addEventListener('click', ()=>{
    botonsound9.pause()
});

let botonsound10 = new Audio("./SOUND/KITCHEN/PIECES/SCREWS-BOARD.mp3");

playBoton10.addEventListener('click', ()=>{
    botonsound10.play()
    });

pauseBoton10.addEventListener('click', ()=>{
    botonsound10.pause()
});
pauseBotonClose10.addEventListener('click', ()=>{
    botonsound10.pause()
});

let botonsound11 = new Audio("./SOUND/KITCHEN/PIECES/EXPANSIVE-SCREW.mp3");

playBoton11.addEventListener('click', ()=>{
    botonsound11.play()
    });

pauseBoton11.addEventListener('click', ()=>{
    botonsound11.pause()
});
pauseBotonClose11.addEventListener('click', ()=>{
    botonsound11.pause()
});

let botonsound12 = new Audio("./SOUND/KITCHEN/PIECES/BORDER-CUT-TOP.mp3");

playBoton12.addEventListener('click', ()=>{
    botonsound12.play()
    });

pauseBoton12.addEventListener('click', ()=>{
    botonsound12.pause()
});
pauseBotonClose12.addEventListener('click', ()=>{
    botonsound12.pause()
});

let botonsound13 = new Audio("./SOUND/KITCHEN/PIECES/BORDER-CUT-LOW.mp3");

playBoton13.addEventListener('click', ()=>{
    botonsound13.play()
    });

pauseBoton13.addEventListener('click', ()=>{
    botonsound13.pause()
});
pauseBotonClose13.addEventListener('click', ()=>{
    botonsound13.pause()
});

let botonsound14 = new Audio("./SOUND/KITCHEN/PIECES/HINGE PATCH.mp3");

playBoton14.addEventListener('click', ()=>{
    botonsound14.play()
    });

pauseBoton14.addEventListener('click', ()=>{
    botonsound14.pause()
});
pauseBotonClose14.addEventListener('click', ()=>{
    botonsound14.pause()
});


let botonsound15 = new Audio("./SOUND/KITCHEN/PIECES/SQUADS.mp3");

playBoton15.addEventListener('click', ()=>{
    botonsound15.play()
    });

pauseBoton15.addEventListener('click', ()=>{
    botonsound15.pause()
});
pauseBotonClose15.addEventListener('click', ()=>{
    botonsound15.pause()
});

let botonsound16 = new Audio("./SOUND/KITCHEN/PIECES/HORIZONTAL-DIVISION-INTERNAL.mp3");

playBoton16.addEventListener('click', ()=>{
    botonsound16.play()
    });

pauseBoton16.addEventListener('click', ()=>{
    botonsound16.pause()
});
pauseBotonClose16.addEventListener('click', ()=>{
    botonsound16.pause()
});

let botonsound17 = new Audio("./SOUND/KITCHEN/PIECES/SUPPORT-FORNITURE.mp3");

playBoton17.addEventListener('click', ()=>{
    botonsound17.play()
    });

pauseBoton17.addEventListener('click', ()=>{
    botonsound17.pause()
});
pauseBotonClose17.addEventListener('click', ()=>{
    botonsound17.pause()
});

let botonsound18 = new Audio("./SOUND/KITCHEN/PIECES/TRIPLEX.mp3");

playBoton18.addEventListener('click', ()=>{
    botonsound18.play()
    });

pauseBoton18.addEventListener('click', ()=>{
    botonsound18.pause()
});
pauseBotonClose18.addEventListener('click', ()=>{
    botonsound18.pause()
});

let botonsound19 = new Audio("./SOUND/KITCHEN/PIECES/SCREWS-SQUADS.mp3");

playBoton19.addEventListener('click', ()=>{
    botonsound19.play()
    });

pauseBoton19.addEventListener('click', ()=>{
    botonsound19.pause()
});
pauseBotonClose19.addEventListener('click', ()=>{
    botonsound19.pause()
});

let botonsound20 = new Audio("./SOUND/KITCHEN/PIECES/DOORS.mp3");

playBoton20.addEventListener('click', ()=>{
    botonsound20.play()
    });

pauseBoton20.addEventListener('click', ()=>{
    botonsound20.pause()
});
pauseBotonClose20.addEventListener('click', ()=>{
    botonsound20.pause()
});

let botonsound21 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/RIGHT-SIDE.mp3");

playBoton21.addEventListener('click', ()=>{
    botonsound21.play()
    });

pauseBoton21.addEventListener('click', ()=>{
    botonsound21.pause()
});
pauseBotonClose21.addEventListener('click', ()=>{
    botonsound21.pause()
});


let botonsound22 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/LEFT-SIDE.mp3");

playBoton22.addEventListener('click', ()=>{
    botonsound22.play()
    });

pauseBoton22.addEventListener('click', ()=>{
    botonsound22.pause()
});
pauseBotonClose22.addEventListener('click', ()=>{
    botonsound22.pause()
});

let botonsound23 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/LOW-SIDE.mp3");

playBoton23.addEventListener('click', ()=>{
    botonsound23.play()
    });

pauseBoton23.addEventListener('click', ()=>{
    botonsound23.pause()
});
pauseBotonClose23.addEventListener('click', ()=>{
    botonsound23.pause()
});

let botonsound24 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/DIVISION-HORIZONTAL-EXTREME-LEFT.mp3");

playBoton24.addEventListener('click', ()=>{
    botonsound24.play()
    });

pauseBoton24.addEventListener('click', ()=>{
    botonsound24.pause()
});
pauseBotonClose24.addEventListener('click', ()=>{
    botonsound24.pause()
});

let botonsound25 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/DIVISION-HORIZONTAL-INTERNAL-RIGHT.mp3");

playBoton25.addEventListener('click', ()=>{
    botonsound25.play()
    });

pauseBoton25.addEventListener('click', ()=>{
    botonsound25.pause()
});
pauseBotonClose25.addEventListener('click', ()=>{
    botonsound25.pause()
});

let botonsound26 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/DIVISION-HORIZONTAL-EXTREME-RIGHT.mp3");

playBoton26.addEventListener('click', ()=>{
    botonsound26.play()
    });

pauseBoton26.addEventListener('click', ()=>{
    botonsound26.pause()
});
pauseBotonClose26.addEventListener('click', ()=>{
    botonsound26.pause()
});

let botonsound27 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/DIVISION-HORIZONTAL-INTERNAL-LEFT.mp3");

playBoton27.addEventListener('click', ()=>{
    botonsound27.play()
    });

pauseBoton27.addEventListener('click', ()=>{
    botonsound27.pause()
});
pauseBotonClose27.addEventListener('click', ()=>{
    botonsound27.pause()
});

let botonsound28 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/TOP-SIDE.mp3");

playBoton28.addEventListener('click', ()=>{
    botonsound28.play()
    });

pauseBoton28.addEventListener('click', ()=>{
    botonsound28.pause()
});
pauseBotonClose28.addEventListener('click', ()=>{
    botonsound28.pause()
});

let botonsound29 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/SCREWS-SUPPORTS.mp3");

playBoton29.addEventListener('click', ()=>{
    botonsound29.play()
    });

pauseBoton29.addEventListener('click', ()=>{
    botonsound29.pause()
});
pauseBotonClose29.addEventListener('click', ()=>{
    botonsound29.pause()
});

let botonsound30 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/SCREWS-SUPPORTS.mp3");

playBoton30.addEventListener('click', ()=>{
    botonsound30.play()
    });

pauseBoton30.addEventListener('click', ()=>{
    botonsound30.pause()
});
pauseBotonClose30.addEventListener('click', ()=>{
    botonsound30.pause()
});

let botonsound31 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/SCREWS-SUPPORTS.mp3");

playBoton31.addEventListener('click', ()=>{
    botonsound31.play()
    });

pauseBoton31.addEventListener('click', ()=>{
    botonsound31.pause()
});
pauseBotonClose31.addEventListener('click', ()=>{
    botonsound31.pause()
});

let botonsound32 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/SCREWS-SUPPORTS.mp3");

playBoton32.addEventListener('click', ()=>{
    botonsound32.play()
    });

pauseBoton32.addEventListener('click', ()=>{
    botonsound32.pause()
});
pauseBotonClose32.addEventListener('click', ()=>{
    botonsound32.pause()
});

let botonsound33 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/VERTICAL-DIVISION-LEFT.mp3");

playBoton33.addEventListener('click', ()=>{
    botonsound33.play()
    });

pauseBoton33.addEventListener('click', ()=>{
    botonsound33.pause()
});
pauseBotonClose33.addEventListener('click', ()=>{
    botonsound33.pause()
});

let botonsound34 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/VERTICAL-DIVISION-CENTER.mp3");

playBoton34.addEventListener('click', ()=>{
    botonsound34.play()
    });

pauseBoton34.addEventListener('click', ()=>{
    botonsound34.pause()
});
pauseBotonClose34.addEventListener('click', ()=>{
    botonsound34.pause()
});

let botonsound35 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/VERTICAL-DIVISION-RIGHT.mp3");

playBoton35.addEventListener('click', ()=>{
    botonsound35.play()
    });

pauseBoton35.addEventListener('click', ()=>{
    botonsound35.pause()
});
pauseBotonClose35.addEventListener('click', ()=>{
    botonsound35.pause()
});

let botonsound36 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/REINFORCEMENT-SQUADS.mp3");

playBoton36.addEventListener('click', ()=>{
    botonsound36.play()
    });

pauseBoton36.addEventListener('click', ()=>{
    botonsound36.pause()
});
pauseBotonClose36.addEventListener('click', ()=>{
    botonsound36.pause()
});

let botonsound37 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/BOARD-FRONTAL.mp3");

playBoton37.addEventListener('click', ()=>{
    botonsound37.play()
    });

pauseBoton37.addEventListener('click', ()=>{
    botonsound37.pause()
});
pauseBotonClose37.addEventListener('click', ()=>{
    botonsound37.pause()
});

let botonsound38 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/BOARD-BACK-RIGHT.mp3");

playBoton38.addEventListener('click', ()=>{
    botonsound38.play()
    });

pauseBoton38.addEventListener('click', ()=>{
    botonsound38.pause()
});
pauseBotonClose38.addEventListener('click', ()=>{
    botonsound38.pause()
});

let botonsound39 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/BOARD-BACK-RIGHT.mp3");

playBoton39.addEventListener('click', ()=>{
    botonsound39.play()
    });

pauseBoton39.addEventListener('click', ()=>{
    botonsound39.pause()
});
pauseBotonClose39.addEventListener('click', ()=>{
    botonsound39.pause()
});

let botonsound40 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/SCREWS-STRUCTURE.mp3");

playBoton40.addEventListener('click', ()=>{
    botonsound40.play()
    });

pauseBoton40.addEventListener('click', ()=>{
    botonsound40.pause()
});
pauseBotonClose40.addEventListener('click', ()=>{
    botonsound40.pause()
});

let botonsound41 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/SCREWS-STRUCTURE.mp3");

playBoton41.addEventListener('click', ()=>{
    botonsound41.play()
    });

pauseBoton41.addEventListener('click', ()=>{
    botonsound41.pause()
});
pauseBotonClose41.addEventListener('click', ()=>{
    botonsound41.pause()
});

let botonsound42 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/SCREW-FRONTAL-BOARD.mp3");

playBoton42.addEventListener('click', ()=>{
    botonsound42.play()
    });

pauseBoton42.addEventListener('click', ()=>{
    botonsound42.pause()
});
pauseBotonClose42.addEventListener('click', ()=>{
    botonsound42.pause()
});

let botonsound43 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/SCREW-BACK-BOARD.mp3");

playBoton43.addEventListener('click', ()=>{
    botonsound43.play()
    });

pauseBoton43.addEventListener('click', ()=>{
    botonsound43.pause()
});
pauseBotonClose43.addEventListener('click', ()=>{
    botonsound43.pause()
});

let botonsound44 = new Audio("./SOUND/KITCHEN/STRUCTURE-ASSEMBLY/SCREW-BACK-BOARD.mp3");

playBoton44.addEventListener('click', ()=>{
    botonsound44.play()
    });

pauseBoton44.addEventListener('click', ()=>{
    botonsound44.pause()
});
pauseBotonClose44.addEventListener('click', ()=>{
    botonsound44.pause()
});

let botonsound45 = new Audio("./SOUND/KITCHEN/SECCION-PUERTAS/FRONTAL-BOARD-HOLES.mp3");

playBoton45.addEventListener('click', ()=>{
    botonsound45.play()
    });

pauseBoton45.addEventListener('click', ()=>{
    botonsound45.pause()
});
pauseBotonClose45.addEventListener('click', ()=>{
    botonsound45.pause()
});

let botonsound46 = new Audio("./SOUND/KITCHEN/SECCION-PUERTAS/EXTREME-LEFT-DOOR.mp3");

playBoton46.addEventListener('click', ()=>{
    botonsound46.play()
    });

pauseBoton46.addEventListener('click', ()=>{
    botonsound46.pause()
});
pauseBotonClose46.addEventListener('click', ()=>{
    botonsound46.pause()
});

let botonsound47 = new Audio("./SOUND/KITCHEN/SECCION-PUERTAS/EXTREME-RIGHT-DOOR.mp3");

playBoton47.addEventListener('click', ()=>{
    botonsound47.play()
    });

pauseBoton47.addEventListener('click', ()=>{
    botonsound47.pause()
});
pauseBotonClose47.addEventListener('click', ()=>{
    botonsound47.pause()
});

let botonsound48 = new Audio("./SOUND/KITCHEN/SECCION-PUERTAS/INTERNAL-RIGHT-DOOR.mp3");

playBoton48.addEventListener('click', ()=>{
    botonsound48.play()
    });

pauseBoton48.addEventListener('click', ()=>{
    botonsound48.pause()
});
pauseBotonClose48.addEventListener('click', ()=>{
    botonsound48.pause()
});

let botonsound49 = new Audio("./SOUND/KITCHEN/SECCION-PUERTAS/INTERNAL-LEFT-DOOR.mp3");

playBoton49.addEventListener('click', ()=>{
    botonsound49.play()
    });

pauseBoton49.addEventListener('click', ()=>{
    botonsound49.pause()
});
pauseBotonClose49.addEventListener('click', ()=>{
    botonsound49.pause()
});

let botonsound50 = new Audio("./SOUND/KITCHEN/SECCION-PUERTAS/HINGUE-PATCH.mp3");

playBoton50.addEventListener('click', ()=>{
    botonsound50.play()
    });

pauseBoton50.addEventListener('click', ()=>{
    botonsound50.pause()
});
pauseBotonClose50.addEventListener('click', ()=>{
    botonsound50.pause()
});

let botonsound51 = new Audio("./SOUND/KITCHEN/SECCION-PUERTAS/KNOBS.mp3");

playBoton51.addEventListener('click', ()=>{
    botonsound51.play()
    });

pauseBoton51.addEventListener('click', ()=>{
    botonsound51.pause()
});
pauseBotonClose51.addEventListener('click', ()=>{
    botonsound51.pause()
});

let botonsound52 = new Audio("./SOUND/KITCHEN/SECCION-BACK/BACK-BOARD.mp3");

playBoton52.addEventListener('click', ()=>{
    botonsound52.play()
    });

pauseBoton52.addEventListener('click', ()=>{
    botonsound52.pause()
});
pauseBotonClose52.addEventListener('click', ()=>{
    botonsound52.pause()
});

let botonsound53 = new Audio("./SOUND/KITCHEN/SECCION-BACK/NAIL.mp3");

playBoton53.addEventListener('click', ()=>{
    botonsound53.play()
    });

pauseBoton53.addEventListener('click', ()=>{
    botonsound53.pause()
});
pauseBotonClose53.addEventListener('click', ()=>{
    botonsound53.pause()
});

let botonsound54 = new Audio("./SOUND/KITCHEN/SECCION-BACK/SUPPORT-FORNITURE.mp3");

playBoton54.addEventListener('click', ()=>{
    botonsound54.play()
    });

pauseBoton54.addEventListener('click', ()=>{
    botonsound54.pause()
});
pauseBotonClose54.addEventListener('click', ()=>{
    botonsound54.pause()
});

let botonsound55 = new Audio("./SOUND/KITCHEN/SECCION-BACK/SUPPORT-WALL.mp3");

playBoton55.addEventListener('click', ()=>{
    botonsound55.play()
    });

pauseBoton55.addEventListener('click', ()=>{
    botonsound55.pause()
});
pauseBotonClose55.addEventListener('click', ()=>{
    botonsound55.pause()
});

let botonsound56 = new Audio("./SOUND/KITCHEN/SECCION-BACK/PROCESS-SUPPORT FORNITURE.mp3");

playBoton56.addEventListener('click', ()=>{
    botonsound56.play()
    });

pauseBoton56.addEventListener('click', ()=>{
    botonsound56.pause()
});
pauseBotonClose56.addEventListener('click', ()=>{
    botonsound56.pause()
});

let botonsound57 = new Audio("./SOUND/KITCHEN/SECCION-BACK/PROCESS-NAILS.mp3");

playBoton57.addEventListener('click', ()=>{
    botonsound57.play()
    });

pauseBoton57.addEventListener('click', ()=>{
    botonsound57.pause()
});
pauseBotonClose57.addEventListener('click', ()=>{
    botonsound57.pause()
});

let botonsound58 = new Audio("./SOUND/KITCHEN/SECCION-BACK/PROCESS-SUPPORT-WALL.mp3");

playBoton58.addEventListener('click', ()=>{
    botonsound58.play()
    });

pauseBoton58.addEventListener('click', ()=>{
    botonsound58.pause()
});
pauseBotonClose58.addEventListener('click', ()=>{
    botonsound58.pause()
});

let botonsound59 = new Audio("./SOUND/KITCHEN/SECCION-BACK/TRIPLEX.mp3");

playBoton59.addEventListener('click', ()=>{
    botonsound59.play()
    });

pauseBoton59.addEventListener('click', ()=>{
    botonsound59.pause()
});
pauseBotonClose59.addEventListener('click', ()=>{
    botonsound59.pause()
});















