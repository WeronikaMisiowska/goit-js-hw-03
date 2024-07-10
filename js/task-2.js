function makeArray (firstArray, secondArray, maxLength) {
    const queueArrays = firstArray.concat(secondArray);

    return queueArrays.slice(0, maxLength)
}