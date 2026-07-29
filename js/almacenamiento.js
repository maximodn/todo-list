const CLAVE_TAREA = "tarea";

function guardarTarea(tarea) { 
    localStorage.setItem(CLAVE_TAREA, JSON.stringify(tarea));
};

function cargarTarea() {
    const tareaGuardado = localStorage.getItem(CLAVE_TAREA);

    if (tareaGuardado) {
        return JSON.parse(tareaGuardado);
    }
    return [];
};