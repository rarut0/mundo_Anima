<%-- 
    Document   : productoDescripcion
    Created on : 26-may-2016, 11:36:02
    Author     : Dawn_
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>Producto</title>
<link href="style.css" rel="stylesheet" type="text/css" media="screen" />
</head>
  <body>
    <div id="wrapper">
	
	<%@include file="header.jsp" %>
	<%@include file="menu.jsp" %>
    <div id="page">
		<div id="page-bgtop">
			<div> <!-- end #content -->
              <table id="pagina" > 
               <tr>
                <td valign="top" >
                   <%@include file="menuLateral.jsp" %>
                
                </td>
                <td rowspan="3">
                 <div id="producto">
                   <table id ="producto-flitros" >
         			 <tr>
                      	<td>
                        <br>
                        <h2>
                        	&nbsp;&nbsp;Contacto
                        </h2>
                        <hr size="2px" width="90%" noshade="noshade" align="center" />
                        <p  id="contacto">
                        <br>Por teléfono:
                        <br>
                        <br>
                                    Puedes contactarnos por teléfono en el 00000 gratuito desde fijo y en el 00000 desde móvil. El horario de 				                                    atención telefónica es de lunes a jueves de 09:30 a 19:30 y viernes de 10:00 a 18:00.
                                    <br>

                        </p>
                        
                        </td>
						</tr>
                     
                     <tr> </tr>
                       

          	  </table>
                 <tr>
                 
                    <td  style="width: 200px;height :100%">
                        <img src="images/paypal.png" width="155" height="85" alt=""/>
                    
                    </td>
               
                </tr>
              </table>
              </div>
				<!-- end #sidebar -->
			  <div style="clear: both;">
              <br>
              <br>
              </div>
		  </div>
		</div>
  </div>                   
<%@include file="footer.jsp" %>

</body>
</html>
