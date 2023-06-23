let MatriculasJs = 0;
let LimiteMatriculasJs = 10;
var cpfStudentJsVariable = "";
var nameStudentJsVariable = "";
var emailStudentJsVariable = "";
var vagasJs = LimiteMatriculasJs - MatriculasJs;
var alunosMatriculadosJs = [];

function MatricularCursoJs() {
    cpfStudentJsVariable = document.forms['matricularJs']['cpfStudentJsInput'].value;
    nameStudentJsVariable = document.forms['matricularJs']['nameStudentJsInput'].value;
    emailStudentJsVariable = document.forms['matricularJs']['emailStudentJsInput'].value;


    validarNomeJs();
    validarCpfJs();    
    validarEmailJs();

if(validarCpfJs() === true && validarEmailJs() === true && validarNomeJs() === true && MatriculasJs < LimiteMatriculasJs) {
    MatriculasJs++;
    vagasJs = LimiteMatriculasJs - MatriculasJs
    document.getElementById("qtdAlunosJs").innerHTML = (vagasJs + "/" + MatriculasJs) ;
    alert("matricula Efetuada");
    alunosMatriculadosJs.push(nameStudentJsVariable);
    document.getElementById("listaAlunosMatriculadosJs").innerHTML = alunosMatriculadosJs.toString();
}
else if (MatriculasJs == LimiteMatriculasJs){
    alert("Vagas Esgostadas")
} else{

}
}


function qtdAlunosJs() {
    document.getElementById("qtdAlunosJs").innerHTML = (vagasJs + "/" + MatriculasJs) ;
}

function validarNomeJs() {
    
    if (nameStudentJsVariable==""){
         alert("Prencha o nome");
        } else{
            return true;
        }
    }


function validarCpfJs() {
       if (cpfStudentJsVariable=="") {
        alert("Prencha o CPF");
    }
        else{ 
            return true;
    }

}

function validarEmailJs() {
    if (emailStudentJsVariable == "") {
        alert("Prencha o email");
    }
    else {
        return true;
    }
}
