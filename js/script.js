document.getElementById('Agendamento').addEventListener('submit', function (e) {
    e.preventDefault();

    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    if (!data || !hora) {
        document.getElementById('resultado').textContent = 'Por favor, preencha todos os campos.';
    } else {
        const dataAgendada = new Date(data + ' ' + hora);
        const dataFormatada = dataAgendada.toLocaleString('pt-BR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });

        document.getElementById('resultado').textContent = `Seu agendamento foi realizado para: ${dataFormatada}`;
    }
});