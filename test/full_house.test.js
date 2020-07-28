import assert from 'assert';
import { handRanks } from "../src/util.js";

let fullHand_FULL_HOUSE_2_3 =

    [
        {
            "value": "KING",
            "suit": "DIAMOND",
            "code": "KD"
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
        },
        {
            "value": "ACE",
            "suit": "CLUBS",
            "code": "AC"
        },
        {
            "value": "ACE",
            "suit": "SPADES",
            "code": "AS"
        }

    ]

let fullHand_FULL_HOUSE_3_2 =

    [
        {
            "value": "KING",
            "suit": "DIAMOND",
            "code": "KD"
        },
        {
            "value": "KING",
            "suit": "SPADE",
            "code": "KS"
        },
        {
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
        },
        {
            "value": "ACE",
            "suit": "CLUBS",
            "code": "AC"
        },
        {
            "value": "ACE",
            "suit": "SPADES",
            "code": "AS"
        }

    ]

let fullHand_NOT_FULL_HOUSE_2_1_2 =

    [
        {
            "value": "3",
            "suit": "HEARTS",
            "code": "3H"
        },
        {
            "value": "3",
            "suit": "CLUBS",
            "code": "3C"
        },
        {
            "value": "4",
            "suit": "SPADES",
            "code": "4S"
        },
        {
            "value": "KING",
            "suit": "DIAMOND",
            "code": "KD"
        },
        {
            "value": "KING",
            "suit": "SPADE",
            "code": "KS"
        },

    ]

let fullHand_NOT_FULL_HOUSE_2_2_1 =

    [
        {
            "value": "3",
            "suit": "HEARTS",
            "code": "3H"
        },
        {
            "value": "3",
            "suit": "CLUBS",
            "code": "3C"
        },
        {
            "value": "KING",
            "suit": "DIAMOND",
            "code": "KD"
        },
        {
            "value": "KING",
            "suit": "SPADE",
            "code": "KS"
        },
        {
            "value": "ACE",
            "suit": "SPADES",
            "code": "AS"
        },

    ]
describe('checking a full house', function () {
    it('should return true for 3 kings and 2 aces', function () {
        let isFlush = handRanks.full_house(fullHand_FULL_HOUSE_3_2)
        assert.equal(isFlush, true);
    });
    it('should return true for 2 kings and 3 aces', function () {
        let isFlush = handRanks.full_house(fullHand_FULL_HOUSE_2_3)
        assert.equal(isFlush, true);
    });

    it('should return false for 2 kings and 2 threes', function () {
        let isFlush = handRanks.full_house(fullHand_NOT_FULL_HOUSE_2_1_2)
        assert.equal(isFlush, false);
    });
    it('should return false for 2 kings and 2 threes', function () {
        let isFlush = handRanks.full_house(fullHand_NOT_FULL_HOUSE_2_2_1)
        assert.equal(isFlush, false);
    });

});


