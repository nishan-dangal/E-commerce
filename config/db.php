<?php
$host= 'localhost';
$user='root';
$password= '';
$dbname='projectdatabase';

//set database source name
$dsn ='mysql:host=' .$host .'; dbname=' .$dbname;
try{
    //create a PDO instance
    $pdo= new PDO ($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   // echo" This is Connected Successfully";

} catch (PDOException $e) {
    echo" Connection failed!:" . $e->getMessage();
}

?>