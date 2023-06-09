//Cat -> {C: 1, A: 1, T: 1}
//Better -> {B: 1, E: 2, T: 2, R:1}

export const getLetterCount = string => {
    const letters = string.split('')
    const lettersCount = {}

    letters.forEach(letter => {
        if(!lettersCount[letter]) {
            lettersCount[letter] = 1
        }else {
            lettersCount[letter] += 1
        }
    })

    return lettersCount
};