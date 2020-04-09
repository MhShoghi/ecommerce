<?php

use App\Controllers\IndexController;

$router = new AltoRouter;

$router->map('GET','/','App\Controllers\IndexController@show','home');

//admin routes
$router->map('GET', '/dashboard', 'App\Controllers\Admin\DashboardController@show','dashboard');
