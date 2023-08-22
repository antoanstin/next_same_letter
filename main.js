var input="abaannnjjjj";
var go="";
for(i=0;i<input.length;i=i+count){
    var count=1;
    for(j=i+1;j<input.length;j++){
        if(input[i]==input[j]){
            count++;
        }
        else{
            break;
        }
    }
    go+=input[i]+count
}
console.log(go);