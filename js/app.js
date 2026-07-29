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
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarT();
    mostarLT();
});