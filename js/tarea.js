function agregar() {
        const input = document.getElementById("n-tarea");
        const valor = input.value;
        console.log(valor);

        const tarea = cargarTarea();
        tarea.push(valor);
        guardarTarea(tarea);
}