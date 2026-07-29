function agregar() {
        const input = document.getElementById("n-tarea");
        const valor = input.value;
        const tarea = cargarTarea();
        const valorLimpio = valor.trim();

        if (valorLimpio.length !== 0) {
            tarea.push({
            id: valor,
            completada: false
            });
            mostrarMensaje(`Tarea agregada con exito.`);
        } else {
            mostrarMensaje(`NO se puede agregar una tarea vacia.`);
        }
        guardarTarea(tarea);

        mostarLT();
        mostrarT();
}

function eliminar(id) {
    let tarea = cargarTarea();
    tarea = tarea.filter(tarea => tarea.id !== id);
    guardarTarea(tarea);
    mostrarMensaje(`Tarea eliminada con exito.`);
    mostarLT();
}

function marca(id, estaCompleta) {  
    let tareas = cargarTarea();
    tareas = tareas.map(tarea => {
    if (tarea.id === id) {
        tarea.completada = estaCompleta;
        
    }
    if (estaCompleta) {
            mostrarMensaje(`Tarea ${tarea.id} fue completada.`);
        }
    return tarea;
    });

    guardarTarea(tareas)
    mostarLT();
}

function mostrarMensaje(texto) {
    const mensaje = document.getElementById("mensaje-flotante");
    mensaje.textContent = texto;
    mensaje.classList.add("mensaje-flotante-visible");
    setTimeout(() => {
    mensaje.classList.remove("mensaje-flotante-visible");
    }, 1500);
}