<?php
	ob_start();
	session_start();
	
	define("host", "localhost");
	define("user", "danoitec_david");
	define("password", "davidadokuru123");
	define("dbase", "danoitec_smartbox");

	$conx = mysqli_connect(host, user, password, dbase);
	if (!$conx) {
		echo "Database connection not found";
	}
?>