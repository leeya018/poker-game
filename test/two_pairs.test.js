import assert from 'assert';
import { handRanks } from "../src/util.js";

let fullHand_TWO_PAIRS_1_1_0 =

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
            "value": "JACK",
            "suit": "CLUB",
            "code": "JC"
        },
        {
            "value": "JACK",
            "suit": "SPADE",
            "code": "JS"
        },
        {
            "value": "ACE",
            "suit": "HEARTS",
            "code": "AH"
        }
    ]
    let fullHand_TWO_PAIRS_1_0_1 =
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
            "value": "10",
            "suit": "HEARTS",
            "code": "10H"
        },
        {
            "value": "JACK",
            "suit": "CLUB",
            "code": "JC"
        },
        {
            "value": "JACK",
            "suit": "SPADE",
            "code": "JS"
        }
    ]

    let fullHand_TWO_PAIRS_0_1_1 =

    [

        {
            "value": "2",
            "suit": "HEARTS",
            "code": "2H"
        },
        {
            "value": "10",
            "suit": "SPADE",
            "code": "10S"
        },
        {
            "value": "10",
            "suit": "HEARTS",
            "code": "10H"
        },
        {
            "value": "JACK",
            "suit": "CLUB",
            "code": "JC"
        },
        {
            "value": "JACK",
            "suit": "SPADE",
            "code": "JS"
        }
    ]

    let fullHand_NOT_TWO_PAIRS_1_0_0 =

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
            "value": "10",
            "suit": "HEARTS",
            "code": "10H"
        },
        {
            "value": "JACK",
            "suit": "CLUB",
            "code": "JC"
        },
        {
            "value": "KING",
            "suit": "SPADE",
            "code": "KS"
        }
    ]

    

describe('checking 2 pairs', function () {
    it('should return true because of 2 pairs-1_1_0', function () {
        let isTwoPairs = handRanks.two_pairs(fullHand_TWO_PAIRS_1_1_0)
        assert.equal(isTwoPairs, true);
    });
    it('should return true because of 2 pairs-1_0_1', function () {
        let isTwoPairs = handRanks.two_pairs(fullHand_TWO_PAIRS_1_0_1)
        assert.equal(isTwoPairs, true);
    });
    it('should return true because of 2 pairs-0_1_1', function () {
        let isTwoPairs = handRanks.two_pairs(fullHand_TWO_PAIRS_0_1_1)
        assert.equal(isTwoPairs, true);
    });
    it('should return false because only 1 pair', function () {
        let isTwoPairs = handRanks.two_pairs(fullHand_NOT_TWO_PAIRS_1_0_0)
        assert.equal(isTwoPairs, false);
    });


});


