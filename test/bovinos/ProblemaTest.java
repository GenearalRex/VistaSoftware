
package bovinos;
import Ticketss.Exportar;
import Ticketss.Problema;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ProblemaTest {

    private Problema problema;
     private Exportar exportarMock;

    @BeforeEach
    public void setUp() {
         problema = new Problema();
        exportarMock = mock(Exportar.class);
        problema.Obj = exportarMock;
    }

    @AfterEach
    public void tearDown() {
        problema = null;
    }

    

     @Test
    public void testExportarExcel() {
        // Simula el comportamiento de exportarExcel para evitar excepciones
        doNothing().when(exportarMock).exportarExcel(problema.tablarregistro);

        try {
            problema.btnexportar.doClick(); // Simula el evento de hacer clic en el botón exportar
            // Verifica que exportarExcel se haya llamado
            verify(exportarMock).exportarExcel(problema.tablarregistro);
        } catch (Exception ex) {
            fail("Se lanzó una excepción inesperada: " + ex.getMessage());
        }
    }

    private Object verify(Exportar exportarMock) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    private Object doNothing() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    private Exportar mock(Class<Exportar> aClass) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
}