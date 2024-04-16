function cleanSet(set, startString){
    const result = [];
    set.forEach(element => {
        if(startString != "" && element.startsWith(startString)){
            result.push(element.substring(startString.length));
        }
    });
    return result.join('-');
}
export default cleanSet;