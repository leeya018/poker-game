import assert from 'assert';
import { handRanks } from "../src/util.js";

let fullHand_THREE_OF_A_KIND_first =

    [

        {
            "value": "10",
            "suit": "HEARTS",
            "code": "10H"
        },
        {
            "value": "10",
            "suit": "SPADE",
            "code": "10S"
        },
        {
            "value": "10",
            "suit": "CLUB",
            "code": "10C"
        },
        {
            "value": "KING",
            "suit": "SPADE",
            "code": "KS"
        },
        {
            "value": "ACE",
            "suit": "HEARTS",
            "code": "AH"
        }
    ]

let fullHand_THREE_OF_A_KIND_middle =

    [

        {
            "value": "3",
            "suit": "SPADE",
            "code": "3S"
        },
        {
            "value": "10",
            "suit": "HEARTS",
            "code": "10H"
        },
        {
            "value": "10",
            "suit": "SPADE",
            "code": "10S"
        },
        {
            "value": "10",
            "suit": "CLUB",
            "code": "10C"
        },
        {
            "value": "ACE",
            "suit": "HEARTS",
            "code": "AH"
        }
    ]


let fullHand_THREE_OF_A_KIND_end =

    [

        {
            "value": "2",
            "suit": "SPADE",
            "code": "2S"
        },
        {
            "value": "5",
            "suit": "HEARTS",
            "code": "5H"
        },
        {
            "value": "10",
            "suit": "HEARTS",
            "code": "10H"
        },
        {
            "value": "10",
            "suit": "SPADE",
            "code": "10S"
        },
        {
            "value": "10",
            "suit": "CLUB",
            "code": "10C"
        },
    ]

    const fullHand_NOT_THREE_OF_A_KIND = [
        {
            "value": "2",
            "suit": "SPADE",
            "code": "2S"
        },
        {
            "value": "5",
            "suit": "HEARTS",
            "code": "5H"
        },
        {
            "value": "9",
            "suit": "HEARTS",
            "code": "9H"
        },
        {
            "value": "10",
            "suit": "SPADE",
            "code": "10S"
        },
        {
            "value": "10",
            "suit": "CLUB",
            "code": "10C"
        },
    ]

describe('checking a three of a kind', function () {
    it('should return true for because 3 of tens - first', function () {
        let isThreeOfAkind = handRanks.three_of_a_kind(fullHand_THREE_OF_A_KIND_first)
        assert.equal(isThreeOfAkind, true);
    });
    it('should return true for because 3 of tens - middle', function () {
        let isThreeOfAkind = handRanks.three_of_a_kind(fullHand_THREE_OF_A_KIND_middle)
        assert.equal(isThreeOfAkind, true);
    });
    it('should return true for because 3 of tens - end', function () {
        let isThreeOfAkind = handRanks.three_of_a_kind(fullHand_THREE_OF_A_KIND_end)
        assert.equal(isThreeOfAkind, true);
    });
    it('should return false for because 2 of tens - end', function () {
        let isThreeOfAkind = handRanks.three_of_a_kind(fullHand_NOT_THREE_OF_A_KIND)
        assert.equal(isThreeOfAkind, false);
    });

});


