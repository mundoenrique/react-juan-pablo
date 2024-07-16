const tecnologias1 = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];
tecnologias1.push('Express.js');
const tecnologias2 = [...tecnologias1, 'Vue.js'];

const tecnologias3 = tecnologias2.filter(function (tech) {
  if (tech !== 'HTML') {
    return tech;
  }
});

const tecnologias4 = tecnologias2.map(function (tech) {
  if (tech === 'Node.js') {
    return 'Nest.js';
  } else {
    return tech;
  }
});

console.table(tecnologias1);
console.table(tecnologias2);
console.table(tecnologias3);
console.table(tecnologias4);
