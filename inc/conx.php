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
		define("host1", "localhost");
		define("user1", "root");
		define("password1", "");
		define("dbase1", "danoitec_smartbox");
		$conx1 = mysqli_connect(host1, user1, password1, dbase1);
		if (!$conx1) {
		echo "Database connection not found";
		}
	}
?>