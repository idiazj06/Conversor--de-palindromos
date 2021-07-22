function recogerDatos() {

    function conversorPalindromo(datos = document.getElementById('frase').value) {
        datos = datos.normalize("NFD").replace(/[\W_]/g, "").toUpperCase();

        for (var i= 0, x=datos.length -1; i<x/2; i++){
            if(datos[i] !== datos[x-i]){
                swal(`${datos}`, 'no es un palindromo', 'error');
            }else{
                swal(`${datos}`, ' Si es un palindromo', 'success');
            }

        }
    }
    conversorPalindromo();
}
    
