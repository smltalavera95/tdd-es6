import {expect} from "chai";
import {isAnagram} from './anagrams'

describe('Check if is an anagram', ()=>{
    //listen and silent
    //'elbow' and 'below'
    it('Returns true when two anagrams are passed in' , ()=>{
        const expected = true
        const actual = isAnagram('listen', 'silent')

        expect(actual).to.equal(expected)
    })

    //'elbows' and 'below' are not anagrams
    it('Returns false when are in different order' , ()=>{
        const expected = false
        const actual = isAnagram('elbows', 'below')

        expect(actual).to.equal(expected)

        const actual2 = isAnagram('below', 'elbows')

        expect(actual2).to.equal(expected)
    })
    //'listens' and 'silent' are not anagrams
    it('Returns false when have more letters' , ()=>{
        const expected = false
        const actual = isAnagram('silent', 'listens')

        expect(actual).to.equal(expected)
    })

    //'conversation' and 'voices rant on' are anagrams
    it('Returns true if have the same letters and length' , ()=>{
        const expected = true
        const actual = isAnagram('conversation', 'voices rant on')

        expect(actual).to.equal(expected)
    })
    //'STATE' and 'taste' are anagrams
    it('Returns true if even one is uppercase' , ()=>{
        const expected = true
        const actual = isAnagram('STATE', 'taste')

        expect(actual).to.equal(expected)
    })
})





