function findDuplicates(arr) {
    const uniqueElements = new Set(arr);
    const filteredElements = arry.filter(item => {
        if (uniqueElements.has(item)) {
            uniqueElements.delete(item);
        } else {
            return item;
        }
    });

    return [...new Set(uniqueElements)]
}

const arr = [1,1,2,3,3,4,5,6,6];
const duplicateElements = findDuplicates(arr);
console.log(duplicateElements);