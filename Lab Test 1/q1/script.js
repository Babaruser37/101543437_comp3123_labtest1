function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("Input must be an array");
            return;
        }
        const result = arr
            .filter(element => typeof element === "string")
            .map(word => word.toLowerCase());
        resolve(result);
    });
}

lowerCaseWords(["HelLo", 12, ["TEMP"], "APPLE", false])
    .then(words => console.log(words))
    .catch(err => console.error(err));

lowerCaseWords("not an array")
    .then(words => console.log(words))
    .catch(err => console.error(err));
