
function capital(word){
    for(let i=0; i<word.length; i++){
        if(i == 0 && word[i] != ' '){
            word = word[0].toUpperCase() + word.slice(1)
        }
        else if(word[i-1] == ' ')
        {
            word = word.slice(0,i) + word.charAt(i).toUpperCase() + word.slice(i+1);
           
        }  
    }    
     return word;
}

console.log(capital('the quick brown fox'));


function max(a, b, c){
    let mx = a;
    if(b> mx)
        mx = b
    if(c> mx){
        mx = c
    }
    return mx

}

console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));


function right(str){
    return  str.substring(str.length-3)+ str.substring(0, str.length-3)
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));


function angle_Type(num){
    if( num < 90 && num > 0)
        return "Acute angle"
    else if(num == 90 )
        return "Right angle"
    else if(num > 90 && num < 180)
        return "Obtuse angle"
    else if(num == 180)
        return "Straight angle"
    else
        return "Invalid input"

}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))


function array_max_sum(arr, n){
    mx = -1000;
    for(let i = 0; i < arr.length-n+1; i++){
        let sm = 0;
        for(let j = i; j < i+n; j++){
            sm += arr[j];
        }
        if(sm >  mx){
            mx = sm
        }
       
    }
    return mx;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))
