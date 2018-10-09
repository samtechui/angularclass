class parentclass{
    firstName:string;
    lastName:string;
     greet(){
        console.log("hey am from parent");
    }
}
class childclass extends parentclass{
/*
greet(){
    console.log("am from child");
}


    childmethod(){
        super.greet();
    }*/
}
var obj = new childclass();
obj.greet();
/*obj.childmethod();*/
