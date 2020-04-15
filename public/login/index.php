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
                    <div id="ingreso">
                        <h1>Ingresa en <label id="task">Task</label><label id="cloud">Cloud</label></h1>
                    </div>
                    <div id="ingresa">
                        <h2>no te has registrado?</h2>
                        <p>Crea una cuenta de <label id="task">Task</label><label id="cloud">Cloud   </label><a href="../register/index.php"> Aquí</a></p>
                        <img src="imagenes/favicon.png" width="300px">
                    </div>
                    <div id="datosIngreso">
                    <div id="datos">
                        <form action="" method="POST">
                            <div class="area">
                                <label for="correo">Correo:</label>
                            </div>
                            <input type="email"  id="correo" name="correo" class="texto" placeholder="Ingresa tu correo electrónico"><br>        
                            <div class="area">
                                <label for="contraseña">Contraseña:</label>
                            </div>
                            <input type="password" id="contraseña" name="contraseña" class="texto" placeholder="Ingresa tu contraseña"><br>
                            <div id="cajaBoton">
                                <input type="button" name="boton" id="boton" value="Ingresar">
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