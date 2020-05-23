removeDuplicates('This is is test test string')

function removeDuplicates(str){

    const arr = str.split(' ');
    const set =  new Set(arr);
    const newString = [...set].join(' ');
    console.log(newString);
    return newString;
}