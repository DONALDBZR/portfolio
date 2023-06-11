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
    case '/Projects':
        $Router->get($Router->getRoute(), "/Views/Projects.php");
        break;
    case '/Archive':
        $Router->get($Router->getRoute(), "/Views/Archive.php");
        break;
}