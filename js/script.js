//Faccio in modo che quando inserisco nell'input qualcosa premo invio e si aggiunge alla lista

$('#addElement').keydown(function(e) {
    //Controllo la pressione del tasto invio
    if ( e.which == 13 ) {
        //attribuisco ad una variabile il testo inserito prima dell'invio
        var elemento = $(this).val();
        //Controllo che il campo sia diverso da una stringa vuota
        if ( elemento != '' ) {
            //Clono il template
            var lista = $('.template').clone();
            //Aggiungo il link con il mio testo
            lista.find('li').prepend(elemento);
            //Appendo il mio template al DOM
            $('.list').append(lista.find('li'));
            //Svuoto il campo
            elemento = $(this).val('');
        }
    }
});