var Stack = function() {
	
	this._storage = []
	
};

Stack.prototype.add = function(value){

	this._storage.push(value);

};

Stack.prototype.remove = function() {

	this._storage.pop();
};



var stack = new Stack ()
// var Stack = function() {
	
// 	var stack = {}
// 	stack._storage = [];
// 	stack.add=add
// 	stack.remove= remove

// 	return stack ;
// };
// function add (value){

// 	this._storage.push(value);

// };

// function remove () {

// 	this._storage.pop();
// };