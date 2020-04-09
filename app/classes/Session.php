<?php

namespace App\Classes;

use Exception;

class Session
{

    /**
     * Create a session
     * 
     * @param $name $value
     * @return mixed new created session
     * 
     */
    public static function add($name, $value)
    {
        if ($name != '' && !empty($name) && $value != '' && !empty($value)) {
            return $_SESSION[$name] = $value;
        }

        throw new Exception('Name and value required!');
    }

    // Get a value from session

    public static function get($name)
    {
        return $_SESSION[$name];
    }

    // Check is session exists
    public static function has($name)
    {
        if ($name != '' && !empty($name)) {
            return (isset($_SESSION[$name])) ? true : false;
        }

        throw new Exception('Name is required!');
    }

    // Remove session
    public static function remove($name){
        if(self::has($name)){
            unset($_SESSION[$name]);
        }
    }

}
