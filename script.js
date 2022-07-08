// Fecha

const dia_numero = document.getElementById('dia_numero');
const mes = document.getElementById('mes');
const año = document.getElementById('año');
const hora = document.getElementById ('hora');
const dia_texto = document.getElementById('dia_texto');

// Contenedor de tareas
const contenedor_tareas = document.getElementById('contenedor_tareas');

const setDate = () => {
    const date = new Date();
    dia_numero.textContent = date.toLocaleString('es',{ day: 'numeric'});
    mes.textContent = date.toLocaleString('es',{ month: 'short'});
    año.textContent = date.toLocaleString('es',{ year: 'numeric'});
    hora.textContent = date.toLocaleString('es', {hour: 'numeric', minute: 'numeric'});
    dia_texto.textContent = date.toLocaleString('es',{ weekday: 'long'});

};

// Evento para que el usuario añada nueva tarea

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.nueva_tarea;
    const task = document.createElement('div');
    task.classList.add('tarea');
    task.addEventListener('click', cambiar_estado_tarea)
    task.textContent = value;
    contenedor_tareas.prepend(task);
    event.target.reset();
    
};

// Ordenar las tareas

const cambiar_estado_tarea = event => {
    event.target.classList.toggle('hecho');
};

const ordenar = () => {
    const hecho = [];
    const hacer = [];
    contenedor_tareas.childNodes.forEach( elemento => {
        elemento.classList.contains('hecho') ? hecho.push(elemento) : hacer.push(elemento)
    })
    return [...hacer, ...hecho];
}

const ordenar_tareas = () => {
    ordenar().forEach(elemento => contenedor_tareas.appendChild(elemento) )
}

setDate();
