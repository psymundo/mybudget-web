<?php
	$user = json_decode(file_get_contents('php://input'));
	echo($user);
?>