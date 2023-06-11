<?php
require_once "{$_SERVER['DOCUMENT_ROOT']}/Models/Router.php";
$Router = new Router($_SERVER['REQUEST_URI']);
switch ($Router->getRoute()) {
    case '/':
        $Router->get($Router->getRoute(), "/Views/Homepage.php");
        break;
    case '/About':
        $Router->get($Router->getRoute(), "/Views/About.php");
        break;
    case '/Experience':
        $Router->get($Router->getRoute(), "/Views/Experience.php");
        break;
}