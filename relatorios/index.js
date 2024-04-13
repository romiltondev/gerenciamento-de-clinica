document.addEventListener('DOMContentLoaded',()=>{
    const relatoriopaciente=document.getElementById('relatorios');
    fetch('relatorio.json')
    .then(response=>{
        return response.json();
    })
    .then(data=>{
    const relatorios=data.relatorio_pacientes;
    relatorios.forEach(relatorio=>{
        const name=document.createElement('h6');
        name.textContent=`Nome: ${relatorio.nome}, Idade: ${relatorio.idade},sexo: ${relatorio.sexo}, Diagnóstico: ${relatorio.diagnostico}, ultima consulta: ${relatorio.ultima_consulta}`;
        relatoriopaciente.appendChild(name)
    })
    })
})