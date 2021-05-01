
        function isEven(a){
            if(a%2==0){
            return true;
        }else{
            return false;
        }
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
        function stringContains(s1,s2){
            if(s1.includes(s2)){
                return true;
        }else{
            return false;
        }
        }
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
            return b.split(' ').join('-');

        }

       /* console.log(getSlug(b));*/
