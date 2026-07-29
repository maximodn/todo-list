function mostrarT() {
    const t = document.getElementById("t");
    t.innerHTML = "";
    const tart = document.createElement("div");
    tart.classList.add("tarea");
    tart.innerHTML = `
    <input name="nueva-tarea" id="n-tarea"></input> 
    <button type="submit" id="agregar">Agregar</button>
    `
    t.appendChild(tart);

    const botonAdd = tart.querySelector("#agregar");
    botonAdd.addEventListener('click', () => agregar());

}

function mostarLT() {
    const tareas = cargarTarea();
    const lt = document.getElementById("lt");
    lt.innerHTML = "";
    const tarlt = document.createElement("div");
    tarlt.classList.add("ltarea");
    tareas.forEach(tarea => {
        const estaTildado = tarea.completada ? "checked" : "";
        const claseTachada = tarea.completada ? "tachado" : "";
        tarlt.innerHTML += `
        <input type="checkbox" name="marcar-tarea" class="m-tarea" ${estaTildado}>
        <span class="${claseTachada}">${tarea.id}</span>
        <button class="eliminar">ELIMINAR</button>
        `
    });

    const botonDel = tarlt.querySelectorAll(".eliminar");
    botonDel.forEach((boton, indice) => {
        boton.addEventListener('click', () => {
            eliminar(tareas[indice].id);
        });
    });

    const checkb = tarlt.querySelectorAll(".m-tarea");
    checkb.forEach((check, indice) => {
        check.addEventListener("change", (e) => marca(tareas[indice].id, e.target.checked));
    });

    lt.appendChild(tarlt);

}

document.addEventListener("DOMContentLoaded", () => {
    mostarLT();
    mostrarT();
});