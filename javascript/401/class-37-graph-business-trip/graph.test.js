'use strict';

const Graph = require('./graph.js');

describe('Testing the Graph.', () => {
  it('Vertex can be successfully added to the graph', () => {
    let graph = new Graph();

    let A = graph.addVertex('A');
    let B = graph.addVertex('B');
    let C = graph.addVertex('C');
    let D = graph.addVertex('D');

    graph.addEdge(A, B);
    graph.addEdge(A, C);
    graph.addEdge(B, C);
    graph.addEdge(B, D);
    graph.addEdge(D, A);

    expect(graph.size()).toEqual(4);
    expect(graph.breadthFirst(A).has(A)).toBe(true);
  });

  it('An edge can be successfully added to the graph.', () => {
    let graph = new Graph();

    let A = graph.addVertex('A');
    let B = graph.addVertex('B');

    graph.addEdge(A, B);

    let output = [{ 'vertex': { 'value': 'B' }, 'weight': 0 }];
    expect(graph.adjacencyList.get(A)).toEqual(output);
  });

  it('A collection of all vertices can be properly retrieved from the graph.', () => {
    let graph = new Graph();

    let A = graph.addVertex('A');
    let B = graph.addVertex('B');
    let C = graph.addVertex('C');
    let D = graph.addVertex('D');

    graph.addEdge(A, B);
    graph.addEdge(A, C);
    graph.addEdge(B, C);
    graph.addEdge(B, D);
    graph.addEdge(D, A);

    expect(graph.getVertices()).toEqual([{ 'value': 'A' }, { 'value': 'B' }, { 'value': 'C' }, { 'value': 'D' }]);
  });

  it('All appropriate neighbors can be retrieved from the graph.', () => {
    let graph = new Graph();

    let A = graph.addVertex('A');
    let B = graph.addVertex('B');
    let C = graph.addVertex('C');
    let D = graph.addVertex('D');

    graph.addEdge(A, B);
    graph.addEdge(A, C);
    graph.addEdge(B, C);
    graph.addEdge(B, D);
    graph.addEdge(D, A);

    expect(graph.getNeighbors(A)).toEqual([{ 'vertex': { 'value': 'B' }, 'weight': 0 }, { 'vertex': { 'value': 'C' }, 'weight': 0 }]);
  });

  it('Neighbors are returned with the weight between vertices included.', () => {
    let graph = new Graph();

    let A = graph.addVertex('A');
    let B = graph.addVertex('B');
    let C = graph.addVertex('C');
    let D = graph.addVertex('D');

    graph.addEdge(A, B);
    graph.addEdge(A, C);
    graph.addEdge(B, C);
    graph.addEdge(B, D);
    graph.addEdge(D, A);

    let neighbors = graph.getNeighbors(B);
    expect(neighbors[0].weight).toBe(0);
  });

  it('The proper size is returned, representing the number of vertices in the graph.', () => {
    let graph = new Graph();

    let A = graph.addVertex('A');
    let B = graph.addVertex('B');
    let C = graph.addVertex('C');
    let D = graph.addVertex('D');

    graph.addEdge(A, B);
    graph.addEdge(A, C);
    graph.addEdge(B, C);
    graph.addEdge(B, D);
    graph.addEdge(D, A);

    expect(graph.size()).toEqual(4);
  });

  it('A graph with only one vertex and edge can be properly returned.', () => {
    let graph = new Graph();

    let A = graph.addVertex('A');

    graph.addEdge(A, A);

    expect(graph.getVertices()[0]).toEqual({'value': 'A'});
  });

  it('An empty graph properly returns null', () => {
    let graph = new Graph();

    expect(graph.getVertices()).toEqual(null);
  });

  it('A graph can be successfully traversed using a breadth first method.', () => {
    let graph = new Graph();

    let A = graph.addVertex('Pandora');
    let B = graph.addVertex('Arendelle');
    let C = graph.addVertex('Metroville');
    let D = graph.addVertex('Monstropolis');
    let E = graph.addVertex('Narnia');
    let F = graph.addVertex('Naboo');


    graph.addEdge(A, B);
    graph.addEdge(A, C);
    graph.addEdge(A, D);
    graph.addEdge(A, E);
    graph.addEdge(A, F);

    expect(graph.vertices).toEqual(graph.breadthFirst(A));
  });
});
