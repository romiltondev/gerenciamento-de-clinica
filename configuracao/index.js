const currentpassword=document.getElementById('current-password');
const newpassword=document.getElementById('new-password');
document.getElementById('change-password-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja submetido normalmente

    // Coleta os dados do formulário
    const formData = new FormData(this);
    // Cria um objeto com os dados de alteração de senha
    const passwordData = {};
    formData.forEach((value, key) => {
        passwordData[key] = value;
    });
    // Envia os dados para a API (simulado)
    console.log('Dados de alteração de senha:', passwordData);
    const atual=currentpassword.value;
    const nova=currentpassword.value;
    const confirmar=currentpassword.value;
   if(nova===confirmar){
    console.log(nova);
   }
   //Aqui você pode enviar os dados para a API para realizar a alteração de senha
});