package Ticketss;

public class Registro {

    String folio;
    String pesobovino;
    String preciokg;
    String total;
    String fecha;
    String hora;
    String descripcion;
    String nombrevendedor;
   String nombrecomprador;

    public Registro() {
    }

    public String getFolio() {
        return folio;
    }

    public void setFolio(String folio) {
        this.folio = folio;
    }

    public String getPesobovino() {
        return pesobovino;
    }

    public void setPesobovino(String pesobovino) {
        this.pesobovino = pesobovino;
    }

    public String getPreciokg() {
        return preciokg;
    }

    public void setPreciokg(String preciokg) {
        this.preciokg = preciokg;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getHora() {
        return hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getNombrevendedor() {
        return nombrevendedor;
    }

    public void setNombrevendedor(String nombrevendedor) {
        this.nombrevendedor = nombrevendedor;
    }

    public String getNombrecomprador() {
        return nombrecomprador;
    }

    public void setNombrecomprador(String nombrecomprador) {
        this.nombrecomprador = nombrecomprador;
    }

    public Registro(String folio, String pesobovino, String preciokg, String total, String fecha, String hora, String descripcion, String nombrevendedor, String nombrecomprador) {
        this.folio = folio;
        this.pesobovino = pesobovino;
        this.preciokg = preciokg;
        this.total = total;
        this.fecha = fecha;
        this.hora = hora;
        this.descripcion = descripcion;
        this.nombrevendedor = nombrevendedor;
        this.nombrecomprador = nombrecomprador;
    }

    @Override
    public String toString() {
        return "Registro{" + "folio=" + folio + ", pesobovino=" + pesobovino + ", preciokg=" + preciokg + ", total=" + total + ", fecha=" + fecha + ", hora=" + hora + ", descripcion=" + descripcion + ", nombrevendedor=" + nombrevendedor + ", nombrecomprador=" + nombrecomprador + '}';
    }


}
