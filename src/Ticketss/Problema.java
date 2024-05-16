package Ticketss;

import java.util.ArrayList;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableColumnModel;
import javax.swing.table.DefaultTableModel;
import java.io.IOException;

public class Problema extends javax.swing.JFrame {

    Exportar Obj;

    DefaultTableModel regis = new DefaultTableModel();
    ArrayList<Registro> registrob = new ArrayList<Registro>();

    public Problema() {
        initComponents();
       
        setVisible(true);
        this.setTitle("REGISTRO COMPRAS");
        this.setLocationRelativeTo(null);
        regis.addColumn("FOLIO");
        regis.addColumn("PESO");
        regis.addColumn("PRECIO KG");
        regis.addColumn("PAGO");
        regis.addColumn("FECHA");
        regis.addColumn("HORA");
        regis.addColumn("VENDEDOR");
        regis.addColumn("COMPRADOR");
        regis.addColumn("DESCRIPCIÓN");
        refres();
        
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel1 = new javax.swing.JLabel();
        folio = new javax.swing.JTextField();
        jLabel2 = new javax.swing.JLabel();
        pesob = new javax.swing.JTextField();
        jLabel3 = new javax.swing.JLabel();
        preciokg = new javax.swing.JTextField();
        jLabel4 = new javax.swing.JLabel();
        totalpago = new javax.swing.JTextField();
        jLabel5 = new javax.swing.JLabel();
        fecha = new javax.swing.JTextField();
        jLabel6 = new javax.swing.JLabel();
        hora = new javax.swing.JTextField();
        jLabel7 = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        descripcion = new javax.swing.JTextArea();
        jLabel8 = new javax.swing.JLabel();
        preciopa = new javax.swing.JTextField();
        jLabel9 = new javax.swing.JLabel();
        precioven = new javax.swing.JTextField();
        jLabel10 = new javax.swing.JLabel();
        resultado = new javax.swing.JTextField();
        jScrollPane2 = new javax.swing.JScrollPane();
        tablarregistro = new javax.swing.JTable();
        jLabel14 = new javax.swing.JLabel();
        agregar = new javax.swing.JButton();
        jButton2 = new javax.swing.JButton();
        borrar = new javax.swing.JButton();
        btnexportar = new javax.swing.JButton();
        jLabel12 = new javax.swing.JLabel();
        nombrevendedor = new javax.swing.JTextField();
        jLabel13 = new javax.swing.JLabel();
        nombrecomprador = new javax.swing.JTextField();
        jButton1 = new javax.swing.JButton();
        jLabel11 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel1.setBackground(new java.awt.Color(255, 255, 255));
        jLabel1.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(0, 0, 0));
        jLabel1.setText("Folio");
        jLabel1.setOpaque(true);
        getContentPane().add(jLabel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 40, 37, -1));
        getContentPane().add(folio, new org.netbeans.lib.awtextra.AbsoluteConstraints(140, 40, 110, -1));

        jLabel2.setBackground(new java.awt.Color(255, 255, 255));
        jLabel2.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(0, 0, 0));
        jLabel2.setText("Peso ");
        jLabel2.setOpaque(true);
        getContentPane().add(jLabel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 80, 100, -1));
        getContentPane().add(pesob, new org.netbeans.lib.awtextra.AbsoluteConstraints(140, 80, 110, -1));

        jLabel3.setBackground(new java.awt.Color(255, 255, 255));
        jLabel3.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        jLabel3.setForeground(new java.awt.Color(0, 0, 0));
        jLabel3.setText("Precio por Kg");
        jLabel3.setOpaque(true);
        getContentPane().add(jLabel3, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 110, 100, -1));
        getContentPane().add(preciokg, new org.netbeans.lib.awtextra.AbsoluteConstraints(140, 110, 110, -1));

        jLabel4.setBackground(new java.awt.Color(255, 255, 255));
        jLabel4.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        jLabel4.setForeground(new java.awt.Color(0, 0, 0));
        jLabel4.setText("Total a pagar");
        jLabel4.setOpaque(true);
        getContentPane().add(jLabel4, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 150, 100, -1));
        getContentPane().add(totalpago, new org.netbeans.lib.awtextra.AbsoluteConstraints(140, 150, 110, -1));

        jLabel5.setBackground(new java.awt.Color(255, 255, 255));
        jLabel5.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        jLabel5.setForeground(new java.awt.Color(0, 0, 0));
        jLabel5.setText("Fecha");
        jLabel5.setOpaque(true);
        getContentPane().add(jLabel5, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 190, 100, -1));

        fecha.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                fechaActionPerformed(evt);
            }
        });
        getContentPane().add(fecha, new org.netbeans.lib.awtextra.AbsoluteConstraints(140, 190, 110, -1));

        jLabel6.setBackground(new java.awt.Color(255, 255, 255));
        jLabel6.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        jLabel6.setForeground(new java.awt.Color(0, 0, 0));
        jLabel6.setText("Hora");
        jLabel6.setOpaque(true);
        getContentPane().add(jLabel6, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 220, 100, -1));
        getContentPane().add(hora, new org.netbeans.lib.awtextra.AbsoluteConstraints(140, 220, 110, -1));

        jLabel7.setBackground(new java.awt.Color(255, 255, 255));
        jLabel7.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        jLabel7.setForeground(new java.awt.Color(0, 0, 0));
        jLabel7.setText("Descripción ");
        jLabel7.setOpaque(true);
        getContentPane().add(jLabel7, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 340, 100, -1));

        descripcion.setColumns(20);
        descripcion.setRows(5);
        jScrollPane1.setViewportView(descripcion);

        getContentPane().add(jScrollPane1, new org.netbeans.lib.awtextra.AbsoluteConstraints(120, 340, -1, -1));

        jLabel8.setBackground(new java.awt.Color(255, 255, 255));
        jLabel8.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        jLabel8.setForeground(new java.awt.Color(0, 0, 0));
        jLabel8.setText("Peso ");
        jLabel8.setOpaque(true);
        getContentPane().add(jLabel8, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 510, 100, -1));
        getContentPane().add(preciopa, new org.netbeans.lib.awtextra.AbsoluteConstraints(120, 510, 110, -1));

        jLabel9.setBackground(new java.awt.Color(255, 255, 255));
        jLabel9.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        jLabel9.setForeground(new java.awt.Color(0, 0, 0));
        jLabel9.setText("Precio por Kg");
        jLabel9.setOpaque(true);
        getContentPane().add(jLabel9, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 510, 100, -1));
        getContentPane().add(precioven, new org.netbeans.lib.awtextra.AbsoluteConstraints(370, 510, 110, -1));

        jLabel10.setBackground(new java.awt.Color(255, 255, 255));
        jLabel10.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        jLabel10.setForeground(new java.awt.Color(0, 0, 0));
        jLabel10.setText("Resultado");
        jLabel10.setOpaque(true);
        getContentPane().add(jLabel10, new org.netbeans.lib.awtextra.AbsoluteConstraints(590, 510, 100, -1));
        getContentPane().add(resultado, new org.netbeans.lib.awtextra.AbsoluteConstraints(700, 510, 249, -1));

        tablarregistro.setBackground(new java.awt.Color(255, 204, 153));
        tablarregistro.setForeground(new java.awt.Color(0, 0, 0));
        tablarregistro.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null}
            },
            new String [] {
                "Title 1", "Title 2", "Title 3", "Title 4"
            }
        ));
        jScrollPane2.setViewportView(tablarregistro);

        getContentPane().add(jScrollPane2, new org.netbeans.lib.awtextra.AbsoluteConstraints(370, 20, 690, -1));

        jLabel14.setBackground(new java.awt.Color(255, 153, 0));
        jLabel14.setOpaque(true);
        getContentPane().add(jLabel14, new org.netbeans.lib.awtextra.AbsoluteConstraints(980, 10, 130, 580));

        agregar.setBackground(new java.awt.Color(0, 153, 255));
        agregar.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        agregar.setForeground(new java.awt.Color(0, 0, 0));
        agregar.setText("Agregar ");
        agregar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                agregarActionPerformed(evt);
            }
        });
        getContentPane().add(agregar, new org.netbeans.lib.awtextra.AbsoluteConstraints(40, 440, -1, -1));

        jButton2.setBackground(new java.awt.Color(0, 153, 255));
        jButton2.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        jButton2.setForeground(new java.awt.Color(0, 0, 0));
        jButton2.setText("Calcular");
        jButton2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton2ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton2, new org.netbeans.lib.awtextra.AbsoluteConstraints(500, 510, -1, -1));

        borrar.setBackground(new java.awt.Color(0, 153, 255));
        borrar.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        borrar.setForeground(new java.awt.Color(0, 0, 0));
        borrar.setText("Borrar");
        borrar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                borrarActionPerformed(evt);
            }
        });
        getContentPane().add(borrar, new org.netbeans.lib.awtextra.AbsoluteConstraints(270, 440, -1, -1));

        btnexportar.setBackground(new java.awt.Color(0, 153, 255));
        btnexportar.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        btnexportar.setForeground(new java.awt.Color(0, 0, 0));
        btnexportar.setText("Exportar Datos a Excel ");
        btnexportar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnexportarActionPerformed(evt);
            }
        });
        getContentPane().add(btnexportar, new org.netbeans.lib.awtextra.AbsoluteConstraints(121, 550, -1, -1));

        jLabel12.setBackground(new java.awt.Color(255, 255, 255));
        jLabel12.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        jLabel12.setForeground(new java.awt.Color(0, 0, 0));
        jLabel12.setText("Vendedor ");
        jLabel12.setOpaque(true);
        getContentPane().add(jLabel12, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 260, 100, -1));
        getContentPane().add(nombrevendedor, new org.netbeans.lib.awtextra.AbsoluteConstraints(140, 260, 110, -1));

        jLabel13.setBackground(new java.awt.Color(255, 255, 255));
        jLabel13.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        jLabel13.setForeground(new java.awt.Color(0, 0, 0));
        jLabel13.setText("Comprador ");
        jLabel13.setOpaque(true);
        getContentPane().add(jLabel13, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 300, 100, -1));
        getContentPane().add(nombrecomprador, new org.netbeans.lib.awtextra.AbsoluteConstraints(140, 300, 110, -1));

        jButton1.setBackground(new java.awt.Color(0, 102, 255));
        jButton1.setFont(new java.awt.Font("Segoe UI", 2, 14)); // NOI18N
        jButton1.setForeground(new java.awt.Color(0, 0, 0));
        jButton1.setText("Exportar Datos a word");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton1, new org.netbeans.lib.awtextra.AbsoluteConstraints(330, 550, -1, -1));

        jLabel11.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Ticketss/Captura de pantalla 2023-11-21 221401.png"))); // NOI18N
        getContentPane().add(jLabel11, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 10, 1110, 580));

        pack();
    }// </editor-fold>//GEN-END:initComponents

    public void refres() {
        while (regis.getRowCount() > 0) {
            regis.removeRow(0);
        }
        for (Registro x : registrob) {
            Object a[] = new Object[9];
            a[0] = x.getFolio();
            a[1] = x.getPesobovino();
            a[2] = x.getPreciokg();
            a[3] = x.getTotal();
            a[4] = x.getFecha();
            a[5] = x.getHora();
            a[6] = x.getNombrevendedor();
            a[7] = x.getNombrecomprador();
            a[8] = x.getDescripcion();

            regis.addRow(a);
        }

        tablarregistro.setModel(regis);
    }
    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed
        double n1 = Double.parseDouble(preciopa.getText());
        double n2 = Double.parseDouble(precioven.getText());
        double multi = n1 * n2;
        resultado.setText("Su pago es " + multi);

    }//GEN-LAST:event_jButton2ActionPerformed

    private void agregarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_agregarActionPerformed
        try {
            String folioText = folio.getText();
            String pesoBovinoText = pesob.getText();
            String precioKgText = preciokg.getText();
            String totalPagoText = totalpago.getText();
            String fechaText = fecha.getText();
            String horaText = hora.getText();
            String descripcionText = descripcion.getText();
            String nombrevendedorText = nombrevendedor.getText();
            String nombrecompradorText = nombrecomprador.getText();

            
            if (folioText.isEmpty() || pesoBovinoText.isEmpty() || precioKgText.isEmpty()
                    || totalPagoText.isEmpty() || fechaText.isEmpty() || horaText.isEmpty()
                    || descripcionText.isEmpty() || nombrevendedorText.isEmpty() || nombrecompradorText.isEmpty()) {
                JOptionPane.showMessageDialog(this, "Todos los campos se tienen que llenar.");
            } else {

                Registro x = new Registro();
                x.setFolio(folio.getText());
                x.setPesobovino(pesob.getText());
                x.setPreciokg(preciokg.getText());
                x.setTotal(totalpago.getText());
                x.setFecha(fecha.getText());
                x.setHora(hora.getText());
                x.setNombrecomprador(nombrecomprador.getText());
                x.setNombrevendedor(nombrevendedor.getText());
                x.setDescripcion(descripcion.getText());
                registrob.add(x);
                refres();
            }
        } catch (Exception e) {
            JOptionPane.showMessageDialog(this, "Error al agregar alumno");
        }

    }//GEN-LAST:event_agregarActionPerformed

    private void borrarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_borrarActionPerformed
        folio.setText("");
        pesob.setText("");
        preciokg.setText("");
        totalpago.setText("");
        fecha.setText("");
        hora.setText("");
        descripcion.setText("");
        preciopa.setText("");
        precioven.setText("");
        resultado.setText("");
        nombrecomprador.setText("");
        nombrevendedor.setText("");
    }//GEN-LAST:event_borrarActionPerformed

    private void btnexportarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnexportarActionPerformed
        try {
            Obj = new Exportar();
            Obj.exportarExcel(tablarregistro);
        } catch (Exception ex) {

        }
    }//GEN-LAST:event_btnexportarActionPerformed

    private void fechaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_fechaActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_fechaActionPerformed

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        Paraword datos =new Paraword();
        datos.setVisible(true);
        
        dispose();
        
        Paraword.vista1.setText(folio.getText());
        Paraword.vista2.setText(pesob.getText());
        Paraword.vista3.setText(preciokg.getText());
        Paraword.vista4.setText(totalpago.getText());
        Paraword.vista5.setText(fecha.getText());
        Paraword.vista6.setText(hora.getText());
        Paraword.vista7.setText(nombrecomprador.getText());
        Paraword.vista8.setText(nombrevendedor.getText());
        Paraword.vista9.setText(descripcion.getText());
        
        
        
    }//GEN-LAST:event_jButton1ActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(Problema.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Problema.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Problema.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Problema.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Problema().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton agregar;
    private javax.swing.JButton borrar;
    private javax.swing.JButton btnexportar;
    private javax.swing.JTextArea descripcion;
    private javax.swing.JTextField fecha;
    private javax.swing.JTextField folio;
    private javax.swing.JTextField hora;
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton2;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel11;
    private javax.swing.JLabel jLabel12;
    private javax.swing.JLabel jLabel13;
    private javax.swing.JLabel jLabel14;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jScrollPane2;
    private javax.swing.JTextField nombrecomprador;
    private javax.swing.JTextField nombrevendedor;
    private javax.swing.JTextField pesob;
    private javax.swing.JTextField preciokg;
    private javax.swing.JTextField preciopa;
    private javax.swing.JTextField precioven;
    private javax.swing.JTextField resultado;
    private javax.swing.JTable tablarregistro;
    private javax.swing.JTextField totalpago;
    // End of variables declaration//GEN-END:variables

    double registrobovinos(double d, double d0) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
}