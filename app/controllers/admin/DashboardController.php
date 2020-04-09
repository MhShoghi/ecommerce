<?php
namespace App\Controllers\Admin;

use App\Classes\Session;
use App\Controllers\BaseController;

class DashboardController extends BaseController{

    public function show(){
        

        $session = Session::add('auth', '1234');

        return view('admin/dashboard', ['session' => $session]);
    }
}