'use strict';

function businessTrip(graph, arr) {
  let cost = 0;
  let vertices = graph.getVertices();

  for (let i = 0; i < arr.length; i++) {
    let current = vertices.filter(city => city.value === arr[i])[0];

    let edge = graph.getNeighbors(current);
    let neighbor = edge.filter(city => city.vertex.value === arr[i + 1])[0];

    if (neighbor) {
      cost = (cost + neighbor.weight);
    } else if (i === arr.length - 1) {
      return `True, $${cost}`;
    } else {
      return `False, $${cost}`;
    }
  }
}

module.exports = businessTrip;