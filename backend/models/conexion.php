<?php

class Conexion{

	public function conectar(){

		$link = new PDO("mysql:host=localhost;dbname=cms","root","neme23sis");
		return $link;

	}

}