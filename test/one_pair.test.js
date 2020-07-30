import assert from 'assert';
import { handRanks } from "../src/util.js";


let fullHand_ONE_PAIR_start =
    [

        {
            "value": "2",
            "suit": "HEARTS",
            "code": "2H"
        },
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
            "value": "7",
            "suit": "CLUB",
            "code": "7C"
        },
        {
            "value": "KING",
            "suit": "SPADE",
            "code": "KS"
        }
    ]



let fullHand_ONE_PAIR_end =
    [

        {
            "value": "2",
            "suit": "HEARTS",
            "code": "2H"
        },
        {
            "value": "3",
            "suit": "SPADE",
            "code": "3S"
        },
        {
            "value": "5",
            "suit": "HEARTS",
            "code": "5H"
        },
        {
            "value": "KING",
            "suit": "CLUB",
            "code": "KC"
        },
        {
            "value": "KING",
            "suit": "SPADE",
            "code": "KS"
        }
    ]

let fullHand_NOT_ONE_PAIR =
    [
        {
            "value": "2",
            "suit": "HEARTS",
            "code": "2H"
        },
        {
            "value": "3",
            "suit": "SPADE",
            "code": "3S"
        },
        {
            "value": "5",
            "suit": "HEARTS",
            "code": "5H"
        },
        {
            "value": "KING",
            "suit": "CLUB",
            "code": "KC"
        },
        {
            "value": "ACE",
            "suit": "SPADE",
            "code": "AS"
        }
    ]


describe('checking 1 pair', function () {
    it('should return true because of 1 pair start', function () {
        let isPair = handRanks.one_pair(fullHand_ONE_PAIR_start)
        assert.equal(isPair, true);
    });
    it('should return true because of 1 pair end', function () {
        let isPair = handRanks.one_pair(fullHand_ONE_PAIR_end)
        assert.equal(isPair, true);
    });
    it('should return false because there is no pair ', function () {
        let isPair = handRanks.one_pair(fullHand_NOT_ONE_PAIR)
        assert.equal(isPair, false);
    });



});


