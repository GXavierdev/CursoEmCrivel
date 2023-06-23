let MatriculasJava = 0;
let LimiteMatriculasJava = 10;
var cpfStudentJavaVariable = "";
var nameStudentJavaVariable = "";
var emailStudentJavaVariable = "";
var vagasJava = LimiteMatriculasJava - MatriculasJava;
var alunosMatriculadosJava = [];

function MatricularCursoJava() {
    cpfStudentJavaVariable = document.forms['matricularJava']['cpfStudentJavaInput'].value;
    nameStudentJavaVariable = document.forms['matricularJava']['nameStudentJavaInput'].value;
    emailStudentJavaVariable = document.forms['matricularJava']['emailStudentJavaInput'].value;


    validarNomeJava();
    validarCpfJava();    
    validarEmailJava();

if(validarCpfJava() === true && validarEmailJava() === true && validarNomeJava() === true && MatriculasJava < LimiteMatriculasJava) {
    MatriculasJava++;
    vagasJava = LimiteMatriculasJava - MatriculasJava
    document.getElementById("qtdAlunosJava").innerHTML = (vagasJava + "/" + MatriculasJava) ;
    alert("matricula Efetuada");
    alunosMatriculadosJava.push(nameStudentJavaVariable);
    document.getElementById("listaAlunosMatriculadosJava").innerHTML = alunosMatriculadosJava.toString();
}
else if (MatriculasJava == LimiteMatriculasJava){
    alert("Vagas Esgostadas")
} else{

}
}


function qtdAlunosJava() {
    document.getElementById("qtdAlunosJava").innerHTML = (vagasJava + "/" + MatriculasJava) ;
}

function validarNomeJava() {
    
    if (nameStudentJavaVariable==""){
         alert("Prencha o nome");
        } else{
            return true;
        }
    }


function validarCpfJava() {
       if (cpfStudentJavaVariable=="") {
        alert("Prencha o CPF");
    }
        else{ 
            return true;
    }

}

function validarEmailJava() {
    if (emailStudentJavaVariable == "") {
        alert("Prencha o email");
    }
    else {
        return true;
    }
}
