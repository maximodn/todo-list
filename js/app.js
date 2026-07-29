function mostrarT() {
    const t = document.getElementById("t");
    t.innerHTML = "";
    const tar = document.createElement("div");
    tar.classList.add("tarea");
    tar.innerHTML = `
    <textarea name="nueva-tarea" id="n-tarea"></textarea> 
    <button type="submit" id="agregar">Agregar</button>
    `
    t.appendChild(tar);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarT();
});