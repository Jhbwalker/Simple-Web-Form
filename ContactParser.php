<?php
/**
 * Created by PhpStorm.
 * User: Jarrell H. Walker
 * Date: 9/1/2016
 * Time: 4:45 PM
 */
if( isset($_POST['n']) && isset($_POST['e']) && isset($_POST['m'])){
    $n = $_POST['n'];
    $e = $_POST['e'];
    $m = nl2br($_POST['m']);
    $to = "j.h.b.walker@hotmail.com";
    $from = $e;
    $subject = "A message from " .$n.".";
    $message = '<b>Name:</b> '.$n.' <br><b>Email:</b> '.$e.' <p>'.$m.'</p>';
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";
    if(mail($to, $subject, $message, $headers)){
        echo "Success!";
    }else{
        echo "The server failed to send the message. Please try again later.";
    }
}
?>