<?php   
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $tema = $_POST['subject'];
    $mensaje = $_POST['message'];
    
    //Definir correo de destino
    $dest = 'enrique@ingeniaperu.com';

    //Cabeceras para evitar que el correo sea spam
    $headers = "From: $nombre <$email>\r\n";
    $headers .= "X-Mailer: PHP5\n";
    $headers .= "MIME-Version: 1.0" . "\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";

    //Aqui definimos el asunto y armamos el mensaje
    $asunto = 'Contacto';
    $cuerpo = 'Nombre: '.$nombre.'<br>';
    $cuerpo .= 'Email: '.$email.'<br>';
    $cuerpo .= 'Tema: '.$tema.'<br>';
    $cuerpo .= 'Mensaje: '.$mensaje;

    if($nombre != '' && $email != '' && $mensaje != ''){
        mail($dest, $asunto, $cuerpo, $headers);
        echo "éxito";
    }
?>