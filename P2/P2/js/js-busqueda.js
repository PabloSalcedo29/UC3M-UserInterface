
function busqueda(){
    //alert("aaaaa")
    let resultado=false;
    //alert("aaaaa")
    input_busqueda=document.getElementById("buscador").value;
    //alert("aaaaa")
    entrada=input_busqueda.toLowerCase();
    
    var contenedor=document.getElementsByClassName("item");
    //alert(contenedor.length)
    var experiencia=document.getElementsByClassName("item-text");
    //alert(experiencia.length)
    
    

    for(i=0;i<experiencia.length;i++){
      h3=experiencia[i].getElementsByTagName("h3")[0];
      title=h3.textContent || h3.innerText;
      p=experiencia[i].getElementsByTagName("p")[0];
      text=p.textContent || p.innerText;
      if(title.toLowerCase().indexOf(entrada)>-1 || text.toLowerCase().indexOf(entrada)>-1 ){
        contenedor[i].style.display="";
        resultado=true;

      }else{
        contenedor[i].style.display="none";
      }
  
    }
    if(resultado==false){
      alert("No se encuentra su busqueda")
    }
  
  }
 