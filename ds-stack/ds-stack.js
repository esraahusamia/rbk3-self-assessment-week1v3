var Stack = function() {
	
	this._storage = [];
	this.counter = 0;

	this.add = function(value){

		this._storage[0]=value;

	};

	this.remove = function() {

		this._storage.slice(this._storage.length-1, 1);

	};

};