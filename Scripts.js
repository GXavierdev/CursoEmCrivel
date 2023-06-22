let MatriculasHtml = 0;
let LimiteMatriculasHtml = 10;
let  cpfStudentHtmlVariable ;
let nameStudentHtmlVariable ;
let emailStudentHtmlVariable;


function MatricularCursoHtml() {

    validarCpfHtml();
    validarNomeHtml();
    validarEmailHtml()
    MatriculasHtml++;
    document.getElementById("qtdAlunosHtml").innerHTML = LimiteMatriculasHtml - MatriculasHtml;
    alert("matricula Efetuada. Qtd Matrículas");
}


function qtdAlunosHtml() {
    document.getElementById("qtdAlunosHtml").innerHTML = LimiteMatriculasHtml;
}

function validarNomeHtml() {
    
    if (document.getElementById("nameStudentHtmlInput").innerHTML == "") {

        alert("Prencha o nome");
    }

}

function validarEmailHtml() {
    
    if (document.getElementById("emailStudentHtmlInput").innerHTML == "") {

        alert("Prencha o email");
    }
 }

function validarCpfHtml() {
   
    if (document.getElementById("CpfAlunoHtmlInput").innerHTML == "") {

        alert("Prencha o CPF");
    }

}