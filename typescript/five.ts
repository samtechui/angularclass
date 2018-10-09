window.onload = function () {
    var calc = new Calculator('x','y','output');
}
class Calculator {
    private x:HTMLInputElement;
    private y:HTMLInputElement;
    private ouput:HTMLSpanElement;
    constructor(xid:string,yid:string,outputid:string){
        this.x=<HTMLInputElement>document.getElementById('xid');
        console.log((this.x).value);
        this.y=<HTMLInputElement>document.getElementById('yid');
        this.ouput=<HTMLSpanElement>document.getElementById('outputid');

        this.wireEvents();
    }
    wireEvents(){
        document.getElementById('add').addEventListener('click',event=>{
            this.ouput.innerHTML=this.Add(parseInt((this.x).value),parseInt((this.y).value)).toString()
        });


    }
    Add(x:number,y:number){
        return x+y;
    }



}