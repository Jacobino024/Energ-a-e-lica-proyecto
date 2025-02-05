const button = document.getElementById('enviar');
    button.addEventListener('click', () => {
        const consumoM = parseFloat(document.getElementById('consUsuaMensual').value);
        main();
        console.log(valorArchivo);
        let consuTW = (consumoM /1000000)*12;
        let consumoT = (consuTw*100) / valorArchivo;
        document.getElementById('resultado').innerHTML = consumoT;
    });
    