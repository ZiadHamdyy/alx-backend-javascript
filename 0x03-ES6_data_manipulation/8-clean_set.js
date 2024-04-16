function cleanSet(set, startString){
    let result = "";
    set.forEach(element => {
        if(element.startsWith(startString)){
            result += element.slice(startString.length) + "-";
        }
    });
    result = result.slice(0, -1);
    return result;
}
export default cleanSet;