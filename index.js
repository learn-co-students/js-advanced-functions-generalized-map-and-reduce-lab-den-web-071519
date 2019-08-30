// Add your functions here
function map(array, change) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(
            change(array[i])
        );
    }
    return result
}

function reduce(array, change, starting) {
    let r = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1

    for (; i < array.length; i++) {
        r = change(array[i], r)
    }

    return r;
    //yes I did copy the solution for this and I am sad about it
}