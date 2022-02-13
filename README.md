# pruebaFeelTourist

Linux
-------------

<li><h4>Comando para cambiar a superusuario (root):</h4></li>
“sudo” o “sudo -s” si quieres mantener los privilegios de super usuario hasta que cierres la ventana del terminal
<li><h4>Comando para listar un directorio: </h4></li>
“ls” te lista las carpetas y archivos en donde estas, o “ll” que te la lista en vertical y dando más detalles.
<li><h4>Comando para instalar una aplicación desde el repositorio predeterminado:</h4></li>
Depende de la aplicacion, las .deb con “dpkg”, “apt-get”, y a veces me veo usando “sudo make install”. apt-get busca online y resulta sencillo. La diferencias de lo que hace por detras dpkg y make install no las tengo tan claras, pero por lo general lo que me voy a instalar lo busco en google primero.
<li><h4>Comando para ver la configuración de red: </h4></li>
“ifconfig”.
<li><h4>Comando para ver los procesos ejecutándose actualmente: </h4></li>
“ps”.
<li><h4>Comando para matar un proceso: </h4></li>
“kill ps” y el id del proceso.
<li><h4>Comando para reiniciar el sistema:</h4></li>
“reboot”.


MySQL
-------------
Teniendo las siguientes tablas:
* "alumnos" (dni,nombre,direccion,codigo_postal,telefono)
* "asignaturas" (id_asignatura,nombre,carrera)
* "alumnos_asignaturas" (id_relacion,dni,id_asignatura)
-----

<li><h4>1.- Obtener los datos de los alumnos que cursan la carrera de "Historia" y son del municipio de
Firgas</h4></li>

SELECT * FROM alumnos_asignaturas INNER JOIN alumnos on alumnos.dni = alumnos_asignaturas.dni INNER JOIN asignaturas on alumnos_asignaturas.id_asignatura = asignaturas.id_asignatura WHERE asignaturas.carrera = 'Historia' AND alumnos.codigo_postal IN ("35430", "35431" , "35432", "35435")

<li><h4>2.- Obtener los datos de los alumnos que están matriculados en la asignatura "Física" y son de
la provincia de Las Palmas</h4></li>

SELECT * FROM alumnos_asignaturas
INNER JOIN alumnos on alumnos.dni = alumnos_asignaturas.dni
INNER JOIN asignaturas on alumnos_asignaturas.id_asignatura = asignaturas.id_asignatura
WHERE asignaturas.nombre = 'Física' AND alumnos.direccion LIKE '%Las Palmas%';

<li><h4>3.- Obtener la cantidad de alumnos que están matriculados en cada asignatura ordenado
descendente</h4></li>

SELECT COUNT(dni) AS cantidad_alumnos, id_asignatura FROM alumnos_asignaturas GROUP BY id_asignatura ORDER BY cantidad_alumnos DESC

<li><h4>4.- Eliminar del teléfono de todos los alumnos el prefijo "034"</h4></li>

UPDATE alumnos
SET
    telefono = REPLACE(telefono,
        "034",
        "")



