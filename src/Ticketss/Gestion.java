
package Ticketss;
import java.io.*;

public class Gestion {
    FileInputStream entrada;
    FileOutputStream salida;
    File archivo;
    
    
    public Gestion (){
        
    }
    
    public String AbrirTexto(File archivo){
        
        String contenido="";
        try {
            entrada=new FileInputStream(archivo);
            int ascci;
            while ((ascci=entrada.read())!=-1){
                char caracter=(char)ascci;
                contenido+=caracter;
            }
        }catch (Exception e){
            
        }
        return contenido;
    }
        
    public String GuaradarATexto (File archivo ,String contenido ){
        String respuesta =null;
        try{
            salida =new FileOutputStream(archivo);
            byte []byteText = contenido.getBytes();
            salida.write(byteText);
            respuesta= "Se guardo el archivo";
        }catch (Exception e){
            
        }
        return respuesta;
    }
    
    
    
    
}
