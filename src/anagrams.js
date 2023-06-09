import {isEqual} from 'lodash'
import { getLetterCount } from "./letter-count"

export const isAnagram = (string1, string2) => {
    const stringLower1 = string1.toLowerCase()
    const stringLower2 = string2.toLowerCase()
    const stringLetterCount1 = getLetterCount(stringLower1.replace(/\s/g, ''))
    const stringLetterCount2 = getLetterCount(stringLower2.replace(/\s/g, '') )
    
    return isEqual(stringLetterCount1, stringLetterCount2)

}