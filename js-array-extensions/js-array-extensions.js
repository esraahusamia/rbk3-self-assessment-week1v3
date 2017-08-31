// your code here


function Array_Extention(array){


	var arr= {}
	arr.array = array
	arr.first= first
	arr.last = last 

	return arr ;
}
function first(){

	return this.array[0]
}

function last (){
	
	return this.array[this.array.length-1]

}