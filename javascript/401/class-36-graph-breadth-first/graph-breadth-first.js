'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.vertices = new Set();
  }

  addVertex(value) {
    let payload = new Vertex(value)
    this.adjacencyList.set(payload, []);
    this.vertices.add(payload);

    return payload;
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex) && !this.adjacencyList.has(endVertex)) {
      throw new Error()
    }

    let neighbors = this.adjacencyList.get(startVertex);
    let newEdge = new Edge(endVertex, weight);
    neighbors.push(newEdge);
  }

  getVertices() {
    let vertices = [];
    this.adjacencyList.forEach((value, key) => {
      vertices.push(key);
    });

    if (vertices.length === 0) {
      return null;
    }
    return vertices;
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('GET NEIGHBOR ERROR :: Invalid vertex');
    }
    return [...this.adjacencyList.get(vertex)];
  }

  size() {
    return this.vertices.size;
  }

  breadthFirst(startVertex) {

    const queue = [];
    const visitedVertices = new Set();

    queue.push(startVertex);
    visitedVertices.add(startVertex);

    while (queue.length) {
      const current = queue.shift();

      let neighbors = this.getNeighbors(current);

      for (let edge of neighbors) {
        let neighbor = edge.vertex;

        if (!visitedVertices.has(neighbor)) {
          queue.push(neighbor);
          visitedVertices.add(neighbor);
        } else {
          continue;
        }
      }
    }
    return visitedVertices;
  }
}

module.exports = Graph;
