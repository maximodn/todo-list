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

    const boton = tart.querySelector("#agregar");
    boton.addEventListener('click', () => agregar());
}

function mostarLT() {
    const tarea = cargarTarea();
    const lt = document.getElementById("lt");
    lt.innerHTML = "";
    const tarlt = document.createElement("div");
    tarlt.classList.add("ltarea");
    tarea.forEach(tarea => {
        tarlt.innerHTML += `
        <input type="checkbox" name="marcar-tarea" id="m-tarea">
        ${tarea.id}
        <button id="eliminar">ELIMINAR</button>
        `
    });

    lt.appendChild(tarlt);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarT();
    mostarLT();
});