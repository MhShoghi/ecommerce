<?php 

/**
 * Start session if not already started
 */

use App\Classes\Database;
use App\RouteDispatcher;

if(!isset($_SESSION)) session_start();


/**
 * Load environment variables
 */
require_once __DIR__ .'/../app/config/_env.php';


// instantiate database class
new Database();



require_once __DIR__ .'/../app/routing/routes.php';


new RouteDispatcher($router);