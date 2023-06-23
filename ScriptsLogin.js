
let nome;
    let cpf;
    let dataNascimento;
    let sexo;
    let email;
    let telefone;
    let password;
    let i = 0
    arrayUsuarioNome=[];
    arrayUsuariocpf=[];
    arrayUsuarioPassword=[];

function cadastrar(){
    
    
    nome = document.forms['Cadastro']['nome'].value;
    arrayUsuarioNome.push(nome);
    alert(arrayUsuarioNome[i]);
    
    i++
}