<?php
session_start();
/**
 * The router that will route all the requests to the application.
 */
class Router
{
    /**
     * The request address
     * @var string $route
     */
    private string $route;
    /**
     * The server on which the application is being hosted
     * @var string $root
     */
    private string $root;
    /**
     * The path of the response
     * @var string $path
     */
    private string $path;
    /**
     * Creating the object which takes two parameters to verify the request method and session
     * @param   string  $route  The url of the view or controller
     */
    public function __construct(string $route)
    {
        $this->setRoot($_SERVER['DOCUMENT_ROOT']);
        $this->setRoute($route);
    }
    public function getRoute(): string
    {
        return $this->route;
    }
    public function setRoute(string $route): void
    {
        $this->route = $route;
    }
    public function getPath(): string
    {
        return $this->path;
    }
    public function setPath(string $path): void
    {
        $this->path = $path;
    }
    public function getRoot(): string
    {
        return $this->root;
    }
    public function setRoot(string $root): void
    {
        $this->root = $root;
    }
    /**
     * Selecting data from the server
     * @param   string  $route  The url of the view or controller
     * @param   string  $path   The path of the view or controller
     * @return  void
     */
    public function get(string $route, string $path)
    {
        $this->setPath($path);
        if ($route != "/404") {
            require_once "{$this->getRoot()}{$this->getPath()}";
            http_response_code(200);
            exit();
        } else {
            require_once "{$this->getRoot()}/Views/HTTP404.php";
            http_response_code(404);
            exit();
        }
    }
    /**
     * Inserting data in the server
     * @param   string  $route  The url of the view or controller
     * @param   string  $path   The path of the view or controller
     * @return  void
     */
    public function post(string $route, string $path)
    {
        $this->setPath($path);
        if ($route != "/404") {
            $_POST[$route] = (object) json_decode(file_get_contents("php://input"));
            require_once "{$this->getRoot()}{$this->getPath()}";
            http_response_code(200);
            exit();
        } else {
            http_response_code(404);
            exit();
        }
    }
}