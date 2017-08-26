var Array=function(array){
    this.array=array;
    this.first=first
    this.last=last

}
var first=function(){
    return  this.array[0]
  };
var last=  function(){
    return  this.array[ this.array.length]
  };



  var myarray= new Array([1,2,3,4,5,6])
  console.log(myarray.first())