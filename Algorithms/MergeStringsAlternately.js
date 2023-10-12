/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let a = word1.split("");
    let b = word2.split("");

    let mergedWord = "";

    for (let i  = 0; i < a.length || i < b.length; i ++) {
        if (i < a.length) {
            mergedWord += a[i];
        }
        if (i < b.length) {
            mergedWord += b[i];
        }
    }

    return mergedWord;
};