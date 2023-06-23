      const ListaCertificados = ["2021-15236987999-98","2021-15236987999-97","2021-15236987999-96"];
      let SerialNumberProcurado;

      function validarCertificado() {

        SerialNumberProcurado = document.forms['ValidacaoCertificados']['SerialNumber'].value;
        
       for (let i = 0; i < ListaCertificados.length; i++) {
        //alert("iteração  " + i)
          if (SerialNumberProcurado == ListaCertificados[i]) {
            alert('Certificado Válido');
            break;
          } else if((i+1) == ListaCertificados.length){
          alert("certificado Não encontrado");    
        }
        
      }
      }