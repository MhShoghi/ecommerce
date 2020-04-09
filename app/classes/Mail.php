<?php 

namespace App\Classes;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


class Mail{


    protected $mail;
    public function __construct()
    {
        $this->mail = new PHPMailer(true);
        $this->setUp();
    }

    public function setUp(){

        
            //Server settings
            $this->mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
            $this->mail->isSMTP();                                            // Send using SMTP
            $this->mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
            $this->mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $this->mail->Username   = 'hoseinshoghi@gmail.com';                     // SMTP username
            $this->mail->Password   = 'H2231221c@@';                               // SMTP password
            $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $this->mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
        
            //Recipients
            $this->mail->setFrom('from@example.com', 'Mailer');              // Name is optional
            $this->mail->addReplyTo('info@example.com', 'Information');
            $this->mail->addCC('cc@example.com');
            $this->mail->addBCC('bcc@example.com');
        
            // // Attachments
            // $this->mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
            // $this->mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
        
            // Content
            $this->mail->isHTML(true);                                  // Set email format to HTML
        
        
      
    }

    public function send($data){


        $this->mail->addAddress($data['to'], $data['name']);

        $this->mail->Subject = $data['subject'];

        $this->mail->Body = make($data['view'], array($data['body']));

        $this->mail->send();

    }
}