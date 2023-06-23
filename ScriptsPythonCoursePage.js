let MatriculasPython = 0;
let LimiteMatriculasPython = 10;
var cpfStudentPythonVariable = "";
var nameStudentPythonVariable = "";
var emailStudentPythonVariable = "";
var vagasPython = LimiteMatriculasPython - MatriculasPython;
var alunosMatriculadosPython = [];

function MatricularCursoPython() {
    cpfStudentPythonVariable = document.forms['matricularPython']['cpfStudentPythonInput'].value;
    nameStudentPythonVariable = document.forms['matricularPython']['nameStudentPythonInput'].value;
    emailStudentPythonVariable = document.forms['matricularPython']['emailStudentPythonInput'].value;


    validarNomePython();
    validarCpfPython();    
    validarEmailPython();

if(validarCpfPython() === true && validarEmailPython() === true && validarNomePython() === true && MatriculasPython < LimiteMatriculasPython) {
    MatriculasPython++;
    vagasPython = LimiteMatriculasPython - MatriculasPython
    document.getElementById("qtdAlunosPython").innerHTML = (vagasPython + "/" + MatriculasPython) ;
    alert("matricula Efetuada");
    alunosMatriculadosPython.push(nameStudentPythonVariable);
    document.getElementById("listaAlunosMatriculadosPython").innerHTML = alunosMatriculadosPython.toString();
}
else if (MatriculasPython == LimiteMatriculasPython){
    alert("Vagas Esgostadas")
} else{

}
}


function qtdAlunosPython() {
    document.getElementById("qtdAlunosPython").innerHTML = (vagasPython + "/" + MatriculasPython) ;
}

function validarNomePython() {
    
    if (nameStudentPythonVariable==""){
         alert("Prencha o nome");
        } else{
            return true;
        }
    }


function validarCpfPython() {
       if (cpfStudentPythonVariable=="") {
        alert("Prencha o CPF");
    }
        else{ 
            return true;
    }

}

function validarEmailPython() {
    if (emailStudentPythonVariable == "") {
        alert("Prencha o email");
    }
    else {
        return true;
    }
}
