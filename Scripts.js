let MatriculasHtml = 0;
let LimiteMatriculasHtml = 10;
var cpfStudentHtmlVariable = "";
var nameStudentHtmlVariable = "";
var emailStudentHtmlVariable = "";
var vagasHtml = LimiteMatriculasHtml - MatriculasHtml;
var alunosMatriculadosHtml = [];

function MatricularCursoHtml() {
    cpfStudentHtmlVariable = document.forms['matricularHtml']['cpfStudentHtmlInput'].value;
    nameStudentHtmlVariable = document.forms['matricularHtml']['nameStudentHtmlInput'].value;
    emailStudentHtmlVariable = document.forms['matricularHtml']['emailStudentHtmlInput'].value;


    validarNomeHtml();
    validarCpfHtml();    
    validarEmailHtml();

if(validarCpfHtml() === true && validarEmailHtml() === true && validarNomeHtml() === true && MatriculasHtml < LimiteMatriculasHtml) {
    MatriculasHtml++;
    vagasHtml = LimiteMatriculasHtml - MatriculasHtml
    document.getElementById("qtdAlunosHtml").innerHTML = (vagasHtml + "/" + MatriculasHtml) ;
    alert("matricula Efetuada");
    alunosMatriculadosHtml.push(nameStudentHtmlVariable);
    document.getElementById("listaAlunosMatriculadosHtml").innerHTML = alunosMatriculadosHtml.toString();
}
else if (MatriculasHtml == LimiteMatriculasHtml){
    alert("Vagas Esgostadas")
} else{

}
}


function qtdAlunosHtml() {
    document.getElementById("qtdAlunosHtml").innerHTML = (vagasHtml + "/" + MatriculasHtml) ;
}

function validarNomeHtml() {
    
    if (nameStudentHtmlVariable==""){
         alert("Prencha o nome");
        } else{
            return true;
        }
    }


function validarCpfHtml() {
       if (cpfStudentHtmlVariable=="") {
        alert("Prencha o CPF");
    }
        else{ 
            return true;
    }

}

function validarEmailHtml() {
    if (emailStudentHtmlVariable == "") {
        alert("Prencha o email");
    }
    else {
        return true;
    }
}
