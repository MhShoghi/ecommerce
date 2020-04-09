<?php 

use Philo\Blade\Blade;


function view($path, array $data = []){
    
    $view = __DIR__ .'/../../resources/views';
    $cache = __DIR__ .'/../../bootstrap/cache';
    
    $blade = new Blade($view, $cache);

    echo $blade->view()->make($path, $data)->render();
}

function make($filename, $data){

    extract($data);


    // turn on output buffering
    ob_start();

    // include templates
    include __DIR__ .'/../../resources/views/'.$filename.'.php';

    $content = ob_get_contents();

    // Erase and turn off output buffering
    ob_end_clean();

    return $content;

}