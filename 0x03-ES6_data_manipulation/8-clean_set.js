function cleanSet(set, startString){
    let result = [];
    if (startString == ''){
        return ''
    }
    set.forEach(element => {
        if(element.startsWith(startString)){
            result.push(element.substring(startString.length));
        }
    });
    return result.join('-');
}
export default cleanSet;
