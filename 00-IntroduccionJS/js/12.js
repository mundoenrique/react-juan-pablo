const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'TypeScript'];
console.table(tecnologias);

// for
for (let i = 0; i < tecnologias.length; i++) {
  console.log(i, tecnologias[i]);
}

// forEach
tecnologias.forEach(function (tech, index) {
  console.log(index, tech);
  return tech;
});

// map
const arrayMap = tecnologias.map(function (tech) {
  console.log(tech);
  return tech;
});

console.table(arrayMap);

// for ... of
for (let tech of tecnologias) {
  console.log(tech);
}

// for ... in
for (let tech in tecnologias) {
  console.log(tech);
}
