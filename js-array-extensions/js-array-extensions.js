// your code here

var Array = function() {
	
	this.array = []
	
};

Array.prototype.first = function(value){

	return this.array[0]

};

Array.prototype.last = function() {

	return this.array[array.length-1];
};



// function Array_Extention(array){


// 	var arr= {}
// 	arr.array = array
// 	arr.first= first
// 	arr.last = last 

// 	return arr ;
// }
// function first(){

// 	return this.array[0]
// }

// function last (){
	
// 	return this.array[this.array.length-1]

// }