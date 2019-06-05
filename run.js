// var netanos = require('netanos');
var netanos = require('./Netanos.js');
//var input = "Yo Steven Pardo, identificado con c.c. n° 1122334455 hace nueve años pisé una mina antipersonal en la finca de mis suegros. La explosión me levantó y caí de espaldas. Se me llenaron los ojos de tierra y cuando traté de pararme no pude porque mi pierna estaba mutilada. Me llevaron al hospital en donde estuve 15 días. Los médicos me evaluaron y el CICR me dio una prótesis especial para poder conducir mi camioneta y ganarme la vida transportando niños hacia el colegio donde estudian, en unas veredas del Putumayo.";
var input = "Hijo de Gabriel Eligio García y Luisa Santiaga Márquez Iguarán, nació en Aracataca, departamento del Magdalena, Colombia, «el domingo 6 de marzo de 1928 a las nueve de la mañana...», como refiere el propio escritor en sus memorias.9​ Cuando sus padres se enamoraron, el padre de Luisa, el coronel Nicolás Ricardo Márquez Mejía, se opuso a esa relación, pues Gabriel Eligio García, que había llegado a Aracataca como telegrafista, no era el hombre que consideraba más adecuado para su hija, por ser hijo de madre soltera, pertenecer al Partido Conservador Colombiano y ser un mujeriego lo confeso.";
var entities = {
    person: true,
    organization: true,
    currency: true,
    date: true,
    location: true,
    pronoun: true,
    numeric: true,
    other: true
};

netanos.anon(input, entities, function(output) {
    console.log(output);
});

netanos.ner(input, entities, function(output) {
    console.log(output);
});

console.log(netanos.noncontext(input));

netanos.combined(input, entities, function(output) {
    console.log(output);
});