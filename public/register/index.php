<!DOCTYPE html>
<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <meta http-equiv="Expires" content="0">
<meta http-equiv="Last-Modified" content="0">
<meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
<meta http-equiv="Pragma" content="no-cache">
            <link rel="stylesheet" href="style.css">
            <link rel="icon" type="image/png"  href="imagenes/favicon.png">
            <script src="jquery-3.4.1.min.js"></script>
            <script src="code.js"></script>
            <title>Sign In</title>
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
                    <div id="registro">
                        <h1>Registrate en <label id="task">Task</label><label id="cloud">Cloud</label></h1>
                    </div>
                    <div id="ingresa">
                        <h2>¿Ya estas registrado?</h2>
                        <p>Ingresa en tu <label id="task">Task</label><label id="cloud">Cloud   </label><a href="../login/index.php"> Aquí</a></p>
                        <img src="imagenes/favicon.png" width="300px">
                    </div>
                    <div id="datosRegistros">
                    <div id="datos">
                        <form>
                            <div class="area">
                                <label for="nombre">Nombre:</label>
                            </div>
                            <input type="text" id="nombre" name="nombre" class="texto" placeholder="Ingresa tu nombre"><br>
                            <div class="area">
                                <label for="nombre">Apellido:</label>
                            </div>
                            <input type="text" id="apellido" name="apellido" class="texto" placeholder="Ingresa tu apellido"><br>
                            <div class="area">
                                <label for="nombre">Nombre de usuario:</label>
                            </div>
                            <input type="text" id="username" name="username" class="texto" placeholder="Ingresa tu nombre de usuario"><br>
                            <div class="area">
                                <label for="correo">Correo:</label>
                            </div>
                            <input type="email"  id="correo" name="correo" class="texto" placeholder="Ingresa tu correo electrónico"><br>        
                            <div class="area">
                                <label for="contraseña">Contraseña:</label>
                            </div>
                            <input type="password" id="contraseña" name="contraseña" class="texto" placeholder="Ingresa tu contraseña"><br>
                            <div id="cajaBoton">
                                <input type="button" name="boton" id="boton" value="Enviar">
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
    <script src="index.js"></script>
</body>
</html>