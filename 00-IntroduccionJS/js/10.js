const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];

const tecnologias1 = tecnologias.filter(function (tech) {
  if (tech !== 'HTML') {
    return tech;
  }
});

const tecnologias2 = tecnologias.map(function (tech) {
  if (tech === 'Node.js') {
    return 'Nest.js';
  } else {
    return tech;
  }
});

console.log(tecnologias1);
console.log(tecnologias2);
