interface person {
    name:string;
    age?:number;
    kids:number;
    calcpets:()=>number;
    makeyounger:(years:number)=>void;
    greet:(msg:string)=>string;
}

var p:person={
    name:"jhon",
    age:40,
    kids:4,
    calcpets:function(){
        return this.kids*2;
    },
    makeyounger:function (years:number) {
        this.age-=years;

        },
        greet:function (msg:string) {
        return msg+" "+this.name;

        }
};

var pets = p.calcpets();
console.log(pets);
p.makeyounger(15);
var newage = p.age;
console.log(newage);
var msg = p.greet("good day to you");
console.log(msg);