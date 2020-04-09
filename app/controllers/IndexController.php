<?php 

namespace App\Controllers;

use App\Classes\Mail;

class IndexController extends BaseController

{
    public function show(){
        echo "Inside Home page from controller class";


        $mail = new Mail();


        $data = [
            'to' => 'mhshoghi97@gmail.com',
            'subject' => 'Welcome to mhsh store',
            'view' => 'welcome',
            'name' => 'John Doe',
            'body' => 'Testing Email'
        ];

        if($mail->send($data)){
                echo "Email sent successfully";
        }else{
            echo "Email sending failed!";
        }
    }
    
}