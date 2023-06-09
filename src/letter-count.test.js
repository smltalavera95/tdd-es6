import {expect} from "chai";
import {getLetterCount} from './letter-count'

describe('getLetterCount - Basic function', ()=>{
    it('Returns a empty object if a empty string has been passed', ()=>{
        const expected = {}
        const actual = getLetterCount('')

        expect(actual).to.deep.equal(expected)
    })

    it('Returns the correct counting of letter when is only one letter of each', ()=>{
        const expected = {c:1, a:1, t:1}
        const actual = getLetterCount('cat')

        expect(actual).to.deep.equal(expected)
    })
    it('Return the correct counting of letter when is more of 1 letter', ()=>{
        const expected = {b:1, e:2, t:2, r:1}
        const actual = getLetterCount('better')

        expect(actual).to.deep.equal(expected)
    })
})