
var nome = "";
var cpf = "";
var dataNascimento;
var sexo = "";
var email = "";
var telefone = "";
var password = "";
let i = 0;
let arrayUsuarioNome = [];
let arrayUsuarioCpf = [];
let arrayUsuarioPassword = [];
let arrayUsuarioDataNascimento = [];
let arrayUsuarioSexo = [];
let arrayUsuarioEmail = [];
let arrayUsuarioTelefone = [];


nome = document.forms['Cadastro']['nome'].value;    
cpf = document.forms['Cadastro']['cpf'].value;    
dataNascimento = document.forms['Cadastro']['dataNascimento'].value;
sexo = document.forms['Cadastro']['sexo'].value;
email = document.forms['Cadastro']['email'].value;
telefone = document.forms['Cadastro']['telefone'].value;
password = document.forms['Cadastro']['senha'].value;

function cadastrar() {

   

    validarNomeCadastro();
    validarCpfCadastro();
    validarEmailCadastro();
    validarPasswordCadastro();
    alert(validarCpfCadastro.value);
    alert(validarEmailCadastro.value);
    
    if (validarNomeCadastro.value == true) {
        arrayUsuarioNome.push(nome);
        alert(arrayUsuarioNome[i]);
        arrayUsuarioCpf.push(cpf);
        //alert(arrayUsuarioCpf[i]);
        arrayUsuarioPassword.push(password);
        //alert(arrayUsuarioPassword[i]);
        arrayUsuarioDataNascimento.push(dataNascimento);
        // alert(arrayUsuarioDataNascimento[i]);
        arrayUsuarioSexo.push(sexo);
        //alert(arrayUsuarioSexo[i]);
        arrayUsuarioEmail.push(email);
        //alert(arrayUsuarioEmail[i]);
        arrayUsuarioTelefone.push(telefone);
        //alert(arrayUsuarioTelefone[i]);    
        alert("Cadastro Efetuado com SUCESSO");
    } else {
        alert("Não foi possível cadastrar");
    }
    i++
}
function validarNomeCadastro() {
    if (nome == "") {
        alert('Por favor, preencha seu NOME');
        return false;
    } else {
        return true;
    }
}

function validarCpfCadastro() {
    if (cpf == "") {
        alert('Por favor, preencha seu CPF')
        return false;
    } else {
        alert("validação de cpf");
        return true;
    }
}

function validarEmailCadastro() {
    if (email == "") {
        alert('Por favor, preencha seu Email')
        return false;
    } else {
        alert("validação de Email");
        return true;
    }
}

function validarPasswordCadastro() {
    if (password == "") {
        alert('Por favor, preencha sua Senha')
        false;
    } else {
        alert("validação de Password");
        return true;
    }
}