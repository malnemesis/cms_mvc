<?php

require_once "../../controller/gestorMensajes.php";
require_once "../../models/gestorMensajes.php";

#CLASE Y MÉTODOS
#-------------------------------------------------------------

class Ajax{

    #REVISAR MENSAJES
    #-------------------------------------------------------------

    public $revisionMensajes;

    public function gestorRevisionMensajesAjax(){

        $datos = $this->revisionMensajes;   

        $respuesta = MensajesController::mensajesRevisadosController($datos);

        echo $respuesta;

    }

}

#OBJETOS
#-------------------------------------------------------------
if (isset($_POST["revisionMensajes"])) {
    
    $a = new Ajax();
    $a -> revisionMensajes = $_POST["revisionMesanjes"];
    $a -> gestorRevisionMensajesAjax();

}