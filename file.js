
        function isEven(value) {
        return value % 2 === 0;
        }
       /* alert(isEven(3))*/

    
        /*arr=[3, 6, 2, 56, 32, 5, 89, 32,100];*/
        function getMax(arr){
        let large=arr[0];
        for(let i=0; i<arr.length; i++){
        if(large <arr[i]){
            large=arr[i];
        
        }
        } 

        return large;

        }

       /* alert(getMax(arr))*/
        
        
       /* let s1= "football"
        let s2="foo"*/
        function stringContains(s1, s2) {
        return s1.includes(s2);
        }

       /* function stringContains(s1,s2){
            if(s1.includes(s2)){
                return true;
        }else{
            return false;
        }
        }*/
        /*console.log(stringContains(s1,s2));*/
        

        /*let str= "i love programming"*/
        function capitalizeWords(c){
            let arr=c.split(" ");
        for (let i=0;i<arr.length;i++){
            arr[i]=arr[i][0].toUpperCase()+arr[i].substring(1);
            
            
        }return arr.join(" ");
 
        }

       /* console.log(capitalizeWords(str));*/

        
        /*let arr1=[0,1,2,9];
        let arr2=[0,1,2,88,9];*/
        function arrayContains(arr1,arr2){
        let counter=0;
        for(let i=0; i<arr2.length; i++){
            if(arr1.includes(arr2[i])){
            counter++;
        }
                
        }return counter==arr2.length;
        }
        /*console.log(arrayContains(arr1,arr2));*/



        /*let a=-5;*/
        function getSequence(a){
            let result=[];
        if(a>0){
        for(let i=0;i<=a ;i++){
            result.push(i);
        }return result;
        
        }else if(a<0){
        for(let i=0;i>=a;i--){
                result.push(i);
        }return result;
        
        }
            
        }  
    

       /* console.log(getSequence(a));*/

        
        /*let b="I love JS";*/
           function getSlug(b){
	   let lower=b.toLowerCase();
           return lower.split(' ').join('-');

        }

       /* console.log(getSlug(b));*/



	const message = 'hello';
foo();

function foo() {
	alert(message);
}
//it shows the message hello , because const in a globel scope.

const message = 'hello';
foo();
function foo() {
	let message = 'hi'
	alert(message);
}
//it shows hi message, cause it declared and call inside block. it has local scope.

foo();
const message = 'hello';
function foo() {
	alert(message);
}

//it gives error caues message doesnot declare inside block , it is in the globel scope.

foo();
function foo() {
	alert(message);
}

var message = 'hello';
//it gives undifine cause it reachs the globel scope and doesnot find iteration of the var message.

if (true) {
	let message = 'hello';
}

alert(message);
//it gives error cause message define inside block and calls out side it, must call in the same block(anything define inside block visible only inside that block).

if (true) {
	var message = 'hello';
}

alert(message);

//it prints the message hello,var has a global scope.

{
	let message = 'hello';
	message = 'hi';
}

alert(message);
//gives error,anything define inside block visible only inside that block.


let message = 'hello';

{
	message = 'hi';
}

alert(message);
//it prints message hi cause it rechange to let message="hi".




foo();

function foo() {
	{
		const message = 'hello';
	}
	
	alert(message);
}
// it give error , anything define inside block visible only inside that block. the alert must be inside the block so it works.

foo();

function foo() {
	{
		var message = 'hello';
	}
	
	alert(message);
}
//it prints the message hello, cause var has function scope.


foo();

function foo() {
	{
		var message = 'hello';
	}
}

alert(message);
// it gives error, cause var doesnot has block scope and var message inside block, it doesnot recoginze it.

