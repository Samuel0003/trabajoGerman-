 var contraseña1= prompt("ingrese su contraseña");

 let contador=0;

 do{
     let contraseña2= prompt("ingrese nuevamente su contraseña");
     if( contraseña1 !=contraseña2){
         console.log("ingrese una contraseña correcta");
     }else{
         console.log("Bienvenido");
         break;
     }
     contador++;

 }while(contador <3 );