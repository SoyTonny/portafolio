let manuVisible = false;
// Funcion que oculata o muestra el menu
function mostrarOcultarMenu (){
    if(menuVisual){
        document.getElementById("nav").classList="";
        manuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        manuVisible =true;
    }
}