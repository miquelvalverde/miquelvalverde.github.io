<?php

$_name = $_POST['_name'];
$_email = $_POST['_email'];
$_msg = $_POST['_msg'];

$_to = "pianoman9000@gmail.com";
$_sbj = "FROM PORTFOLIO!";

mail($_to, $_sbj, $_msg, "From: " . $_name);
echo "Message sent succesfully!!!";

?>