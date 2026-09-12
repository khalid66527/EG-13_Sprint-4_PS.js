

// 02. Word Pattern

var wordPattern = function(pattern, s) {

    let words = s.split(" ");

    if (pattern.length !== words.length) return false;

    let mapPW = {};
    let mapWP = {};

    for (let i = 0; i < pattern.length; i++) {

        let char = pattern[i];
        let word = words[i];

        if (mapPW[char] && mapPW[char] !== word) {
            return false;
        }

        if (mapWP[word] && mapWP[word] !== char) {
            return false;
        }

        mapPW[char] = word;
        mapWP[word] = char;

    }

    return true;
};






// 01. Isomorphic Strings
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let mapST = {};
    let mapTS = {};

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        if (mapST[charS] && mapST[charS] !== charT) {
            return false;
        }

        if (mapTS[charT] && mapTS[charT] !== charS) {
            return false;
        }

        mapST[charS] = charT;
        mapTS[charT] = charS;
    }

    return true;
};


