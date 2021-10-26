# Implementation: Linked List Insertions

## Problem Domain

Node: Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

Linked List: Create a Linked List class. Within your Linked List class, include a head property. Upon instantiation, an empty Linked List should be created.

The class should contain the following methods:

- `append`
  - arguments: new value
  - adds a new node with the given `value` to the end of the list
- `insert before`
  - arguments: value, new value
  - adds a new node with the given new value immediately before the first node that has the value specified
- `insert after`
  - arguments: value, new value
  - adds a new node with the given new value immediately after the first node that has the value specified

## Inputs / Outputs

- ### Append

| Initial List                   	| Method Args 	| Resulting List                          	|
|--------------------------------	|-------------	|-----------------------------------------	|
| `head -> [1] -> [3] -> [2] -> X` 	| `5`         	| `head -> [1] -> [3] -> [2] -> [5] -> X` 	|
| `head -> X`                    	| `1`         	| `head -> [1] -> X`                      	|-

- ### Insert Before

| Initial List                     	| Method Args 	| Resulting List                          	|
|----------------------------------	|-------------	|-----------------------------------------	|
| `head -> [1] -> [3] -> [2] -> X` 	| `3, 5`      	| `head -> [1] -> [3] -> [2] -> [5] -> X` 	|
| `head -> [1] -> [3] -> [2] -> X` 	| `1, 5`      	| `head -> [5] -> [1] -> [3] -> [2] -> X` 	|
| `head -> [1] -> [3] -> [2] -> X` 	| `2, 5`      	| `head -> [1] -> [5] -> [2] -> [2] -> X` 	|
| `head -> [1] -> [3] -> [2] -> X` 	| `4, 5`      	| No change, method exception             	|

- ### Insert After

| Initial List                     	| Method Args 	| Resulting List                          	|
|----------------------------------	|-------------	|-----------------------------------------	|
| `head -> [1] -> [3] -> [2] -> X` 	| `3, 5`      	| `head -> [1] -> [3] -> [5] -> [2] -> X` 	|
| `head -> [1] -> [3] -> [2] -> X` 	| `2, 5`      	| `head -> [1] -> [3] -> [2] -> [5] -> X` 	|
| `head -> [1] -> [3] -> [2] -> X` 	| `2, 5`      	| `head -> [1] -> [2] -> [5] -> [2] -> X` 	|
| `head -> [1] -> [3] -> [2] -> X` 	| `4, 5`      	| No change, method exception             	|

## Whiteboard Process

Coming Soon...

## Algorithm

Create a Node class with a constructor with properties for the value and next.

Create a LinkedList class with a constructor with a property for the head. Create the following methods:

Append:

Insert Before:

Insert After:

## Pseudocode

```plaintext
Coming Soon...
```

## Code

Coming soon...

[back](../README.md)
