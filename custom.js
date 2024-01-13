var  dataHoraFinalString = "2024-01-19 00:00:00"; 

const dataInput = document.getElementById('data');

// dataInput.addEventListener("change", (event) => {
//     var  dataHoraFinalString = dataInput.value.replace('T', '-');
    
//     console.log(dataHoraFinalString);
    
    
    const partesDataHora  = dataHoraFinalString.split(/[\s:-]+/)
    // console.log(partesDataHora);

    const dataHoraFinal = new Date(partesDataHora[0], partesDataHora[1] -1, partesDataHora[2],
    partesDataHora[3], partesDataHora[4], partesDataHora[5] || 0)
    console.log(partesDataHora[1] -1);
    // console.log(dataHoraFinal);

    const interValo = setInterval(() => {
        const horaAtualSP = new Date(new Date().toLocaleString('en-US',{
            timeZone: 'America/Sao_Paulo'
        }));
        // console.log(horaAtualSP);

        const diferenca = dataHoraFinal - horaAtualSP;
        // console.log(diferenca);

        if (diferenca <= 0) {
            clearInterval(interValo);

            document.getElementById("dias").innerHTML = 0;
            document.getElementById("horas").innerHTML = 0;
            document.getElementById("minutos").innerHTML = 0;
            document.getElementById("segundos").innerHTML = 0;
            return false;
        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / (1000));
        
        document.getElementById("dias").innerHTML = `${dias}d`;
        document.getElementById("horas").innerHTML = `${horas}h`;
        document.getElementById("minutos").innerHTML = `${minutos}m`;
        document.getElementById("segundos").innerHTML = `${segundos}s`;

    }, 1000);
// });
