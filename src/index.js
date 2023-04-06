'use strict';

const criarButton = cursos =>{

  const button = document.createElement('button')
  button.classList.add('buttonCurso')

  // const icone = document.createElement('img')
  // icone.src = cursos.icone
  // icone.alt = cursos.nome

  const name = document.createElement('span')
  name.classList.add('button_name')
  name.textContent = cursos

  button.append(name)

  return button
}
const carregarCursos = async() => {
  const url = `https://api-lion-school.onrender.com/v1/lion-school/cursos`;

  const response = await fetch(url);
  const data = await response.json();
  const cursos = await data.course

  // console.log(cursos)
  const container = document.getElementById('courses')
  const cardButton = cursos.map(criarButton)

  container.replaceChildren(...cardButton)
}
carregarCursos();

