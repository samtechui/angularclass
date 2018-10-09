/*function echo(arg:any):any{
    return arg;
}

var echoitem:string = echo(1);

console.log(typeof(echo(1)));*/


function  echo<A>(arg:A):A {
    return arg;
}
var echoitem:number = echo(1);

