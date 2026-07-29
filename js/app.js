function mostrarT() {
    const t = document.getElementById("t");
    t.innerHTML = "";
    const tar = document.createElement("div");
    tar.classList.add("tarea");
    tar.innerHTML = `
    <input name="nueva-tarea" id="n-tarea"></input> 
    <button type="submit" id="agregar">Agregar</button>
    `
    t.appendChild(tar);

    const boton = tar.querySelector("#agregar");
    boton.addEventListener('click', () => agregar());
}

function agregar() {
        const input = document.getElementById("n-tarea");
        const valor = input.value;
        console.log(valor);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarT();
});