function guardarActividades() {
    var actividades = {
        lunes: document.getElementById('lunes').value,
        martes: document.getElementById('martes').value,
        miercoles: document.getElementById('miercoles').value,
        jueves: document.getElementById('jueves').value,
        viernes: document.getElementById('viernes').value,
        sabado: document.getElementById('sabado').value,
        domingo: document.getElementById('domingo').value
    };
    localStorage.setItem('actividades', JSON.stringify(actividades));
    alert('Actividades guardadas correctamente.');
}