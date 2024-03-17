function cargarEventos() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:2020/DeportiveClub_war_exploded/servlet', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('consulta','evento')
  xhr.onload = function() {
    if (xhr.status === 200) {
      const eventos = JSON.parse(xhr.responseText);

      mostrarEventos(eventos);
    } else {
      console.error('Error al cargar eventos:', xhr.statusText);
    }
  };

  xhr.onerror = function() {
    console.error('Error de red al cargar eventos.');
  };

  xhr.send();
}

function cargarDisciplinas() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:2020/DeportiveClub_war_exploded/servlet', true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function() {
    if (xhr.status === 200) {
      const disciplinas = JSON.parse(xhr.responseText);
      alert(disciplinas)
      mostrarDisciplinas(disciplinas);
    } else {
      console.error('Error al cargar disciplinas:', xhr.statusText);
    }
  };


  xhr.send();
}

function cargarAfiliados() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/afiliados', true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function() {
    if (xhr.status === 200) {
      const afiliados = JSON.parse(xhr.responseText);
      // Aqu� puedes manejar la respuesta del servidor y actualizar la interfaz
      mostrarAfiliados(afiliados); // Llama a una funci�n para mostrar los afiliados
    } else {
      console.error('Error al cargar afiliados:', xhr.statusText);
    }
  };



  xhr.send();
}

function mostrarEventos(eventos) {
  const listaEventos = document.getElementById('lista-eventos');
  listaEventos.innerHTML = ''; // Limpiar la lista de eventos

  eventos.forEach(evento => {
    const li = document.createElement('li');
    li.textContent = evento.nombre;
    listaEventos.appendChild(li);
  });
}

function mostrarDisciplinas(disciplinas) {
  const listaDisciplinas = document.getElementById('lista-disciplinas');
  listaDisciplinas.innerHTML = ''; // Limpiar la lista de disciplinas

  disciplinas.forEach(disciplina => {
    const li = document.createElement('li');
    li.textContent = disciplina.nombre;
    listaDisciplinas.appendChild(li);
  });
}

function mostrarAfiliados(afiliados) {
  const tablaAfiliados = document.getElementById('tabla-afiliados');
  tablaAfiliados.innerHTML = ''; // Limpiar la tabla de afiliados

  afiliados.forEach(afiliado => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${afiliado.nombre}</td><td>${afiliado.disciplina}</td><td>${afiliado.eventos.join(', ')}</td>`;
    tablaAfiliados.appendChild(tr);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  cargarEventos();
  cargarDisciplinas();
  cargarAfiliados();
});
