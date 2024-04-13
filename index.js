// script.js
document.addEventListener('DOMContentLoaded', () => {
    const pacientesLista = document.getElementById('pacientes-lista');
    const medicosLista=document.getElementById('medicos-lista');
    fetch('api.json') // Aqui estamos carregando o arquivo JSON localmente
        .then(response => {
            if (!response.ok) {
                throw new Error('Não foi possível obter os dados dos pacientes');
            }
            return response.json();
        })
        .then(data => {
            data.pacientes.forEach(paciente => { // Assumindo que o arquivo JSON tem um objeto com a propriedade "pacientes"
                const listItem = document.createElement('li');
                listItem.textContent = `Nome: ${paciente.nome}, Idade: ${paciente.idade}, Sexo: ${paciente.sexo}`;
                pacientesLista.appendChild(listItem);
            });
           data.medicos.forEach(medico=>{
            const listItem=document.createElement('li');
            listItem.textContent = `Nome: ${medico.nome}, Idade: ${medico.idade}, Sexo: ${medico.sexo}`;
                medicosLista.appendChild(listItem);
           })
        
        })
        .catch(error => {
            console.error('Erro:', error);
            pacientesLista.textContent = 'Ocorreu um erro ao carregar os dados dos pacientes.';
        });
});
