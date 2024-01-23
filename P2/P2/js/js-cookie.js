function Cookie(){
    emailRegex= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; //Cambiar el regex
    let comprobacion_email = emailRegex.test(document.getElementById("email").value);
    contraseñaRegex = /^[a-zA-Z0-9]{1,8}$/;
    let comprobacion_contraseña = contraseñaRegex.test(document.getElementById("contraseña").value);
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;
    var usuario = document.getElementById("usuario").value;
    var nombre = document.getElementById("name").value;
    var campo_vacio = 0;
    if(email.length==0|| contraseña.length==0||usuario.length==0||nombre.length==0){
      campo_vacio=1;
    }else{
      campo_vacio=0;
    }
    if(comprobacion_contraseña== true && comprobacion_email==true && campo_vacio==0){
      var cadena={"usuario": usuario , "contraseña": contraseña, "nombre": nombre, "email":email  };
      var OJS = JSON.stringify(cadena);
      var d= new Date();
      d.setTime(d.getTime()+(30*24*60*60*1000));
      var expires="expires"+d.toUTCString();
      var mi = document.cookie= email+"="+OJS+";"+expires;
      alert(mi);
    }
    
  }
 /*function registerFormCookies(form) {


        setCookie("userName", form.fusername.value);
        setCookie("name", form.fname.value);
        setCookie("email", form.femail.value);

        alert("Registro correcto");
}
function Validar(form){
  //Validamos la contrasena, el primer campo sera el nombre del formulario, y el segundo será el campo a rellenar, en este caso el input de la password
  var cont=0;
  var username = form.fusername.value;
  var password = form.fpsw.value;
  var Name = form.fname.value ;
  var email = form.femail.value;


  //Si la contraseña tiene mas de 8 caracteres, devolvemos alerta
  if (password.length < 1 ) {
      alert("El campo Password debe tener 1 caracteres como minimo");
      var cont=1;
      return false;
  }
  if (password == "" ) {
      alert("Rellena el campo de la contraseña");
      var cont=1;
      return false;
  }
  var patpass = new RegExp ("^[A-Za-z0-9]+");

  if(!patpass.test(password)){
      alert("La contraseña no tiene el formato indicado");
      var cont=1;
      return false;
  }
  if (username == "" ) {
      alert("Rellena el campo del nombre de usuario");
      var cont=1;
      return false;
  }
  if (Name == "" ) {
      alert("Rellena el campo del nombre y apellidos");
      var cont=1;
      return false;
  }

  if (email == "" ) {
      alert("Rellena el campo del email");
      var cont=1;
      return false;
  }

  if (cont==0){
      registerFormCookies(form);
      return;
  }
}


function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue;
}
  */