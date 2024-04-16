function cleanSet(set, startString){
    const string = [];
    let flag = 0;
    if (startString === '')
        return '';
    set.forEach(element => {
        if(element.startsWith(startString)){
            string.push(element.slice(startString.length));
            flag = 1;
        }
    });
    return string.join('-');
}
export default cleanSet;