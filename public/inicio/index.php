<!DOCTYPE html>
<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="style.css">
            <link rel="icon" type="image/png"  href="imagenes/favicon.png">
            <script src="jquery-3.4.1.min.js"></script>
            <script src="code.js"></script>
            <title>Inicio</title>
        </head>
<body>
    <header>
        <div id="contenedor">
            <div id="logo">
                <img src="imagenes/logo.png" width="180px">
            </div>
            <nav class="menu">
                <ul>
                    <li><a href="../inicio/index.php" id="botonInicio">Inicio</a></li>
                    <?php
                    ini_set("display_errors", 0);
                    session_start();
                    $organizer = "../organizador/index.html";
                    $about_us = "../about_us/index.html";
                    if($_SESSION["id"]){
                      echo ("<li><a href=$organizer>Organizador</a></li>");
                    }else{
                      echo "<li><a href=$about_us>Acerca de nosotros</a></li>";
                    }
                    ?>
                    <li><a href="../login/index.php" id="botonFinal">Log In</a></li>
                </ul>
            </nav>
        </div>
    </header>
        <div id="contenedor">
            <div id="vacio">
                <div id="panelPrincipal">
                    <div id="imagen1">
                        <img src="imagenes/organizar.png" width="300">
                    </div>
                    <div id="bienvenida">
                        <p>Bienvenido a <label id="task">Task</label><label id="cloud">Cloud</label></p>
                        <p id="letra1">Tu organizador de tareas online</p>
                    </div>
                    <div id="registrate">
                        <p>registrate <a href="../register/index.html">Aquí</a></p>
                    </div>
                    <div id="informacion">
                        <hr>
                        <div id="imagen2">
                            <img src="imagenes/libro.png" width="400px">
                        </div>
                        <div id="letra2">
                            <h1>Organiza en un solo sitio tus:</h1>
                            <p>-  Tareas</p>
                            <p>-  Evaluaciones</p>
                            <p>- Eventos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>