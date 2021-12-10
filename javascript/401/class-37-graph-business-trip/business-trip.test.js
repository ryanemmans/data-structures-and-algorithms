'use strict';

const Graph = require('./graph.js');
const businessTrip = require('./business-trip.js');

describe('Testing our Business Trip function.', () => {
  let graph = new Graph();

  let Pandora = graph.addVertex('Pandora');
  let Metroville = graph.addVertex('Metroville');
  let Arendelle = graph.addVertex('Arendelle');
  let Naboo = graph.addVertex('Naboo');
  let Narnia = graph.addVertex('Narnia');
  let Monstropolis = graph.addVertex('Monstropolis');

  graph.addEdge(Pandora, Arendelle, 150);
  graph.addEdge(Pandora, Metroville, 82);

  graph.addEdge(Arendelle, Pandora, 150);
  graph.addEdge(Arendelle, Metroville, 99);
  graph.addEdge(Arendelle, Monstropolis, 42);

  graph.addEdge(Metroville, Pandora, 82);
  graph.addEdge(Metroville, Arendelle, 99);
  graph.addEdge(Metroville, Monstropolis, 105);
  graph.addEdge(Metroville, Naboo, 26);
  graph.addEdge(Metroville, Narnia, 37);

  graph.addEdge(Monstropolis, Arendelle, 42);
  graph.addEdge(Monstropolis, Metroville, 105);
  graph.addEdge(Monstropolis, Naboo, 73);

  graph.addEdge(Narnia, Metroville, 37);
  graph.addEdge(Narnia, Naboo, 250);

  graph.addEdge(Naboo, Narnia, 250);
  graph.addEdge(Naboo, Metroville, 126);
  graph.addEdge(Naboo, Monstropolis, 73);

  let arr1 = ['Metroville', 'Pandora'];
  let arr2 = ['Arendelle', 'Monstropolis', 'Naboo'];
  let arr3 = ['Naboo', 'Pandora'];
  let arr4 = ['Narnia', 'Arendelle', 'Naboo'];

  it('Determines if trip is possible with direct flights, as well as cost. Returns True.', () => {
    let trip1 = businessTrip(graph, arr1);

    expect(trip1).toStrictEqual('True, $82');
  });

  it('Can successfully return total cost for a trip with multiple routes.', () => {
    let trip2 = businessTrip(graph, arr2);

    expect(trip2).toStrictEqual('True, $115');
  });

  it('Returns False with a cost of $0 if trip is not possible.', () => {
    let trip3 = businessTrip(graph, arr3);
    let trip4 = businessTrip(graph, arr4);

    expect(trip3).toStrictEqual('False, $0');
    expect(trip4).toStrictEqual('False, $0');
  });
});