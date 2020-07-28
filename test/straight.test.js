import assert from 'assert';
import { handRanks } from "../src/util.js";

let fullHand_STRAIGHT_NUM =

    [
        {
            "value": "2",
            "suit": "HEARTS",
            "code": "2H"
        },
        {
            "value": "3",
            "suit": "HEARTS",
            "code": "3H"
        },
        {
            "value": "4",
            "suit": "HEARTS",
            "code": "4H"
        },
        {
            "value": "5",
            "suit": "HEARTS",
            "code": "5H"
        },
        {
            "value": "6",
            "suit": "HEARTS",
            "code": "6H"
        },

    ]

let fullHand_STRAIGHT_NUM_ROAYAL =

    [
        {
            "value": "8",
            "suit": "SPADE",
            "code": "8S"
        },
        {
            "value": "9",
            "suit": "HEARTS",
            "code": "9H"
        },
        {
            "value": "10",
            "suit": "HEARTS",
            "code": "10H"
        },
        {
            "value": "JACK",
            "suit": "HEARTS",
            "code": "JH"
        },
        {
            "value": "QUEEN",
            "suit": "HEARTS",
            "code": "QH"
        },


    ]
let fullHand_STRAIGHT_ROYAL =

    [

        {
            "value": "10",
            "suit": "HEARTS",
            "code": "10H"
        },
        {
            "value": "JACK",
            "suit": "HEARTS",
            "code": "JH"
        },
        {
            "value": "QUEEN",
            "suit": "HEARTS",
            "code": "QH"
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
let fullHand_NOT_STRAIGHT_ROYAL =

    [

        {
            "value": "10",
            "suit": "HEARTS",
            "code": "10H"
        },
        {
            "value": "JACK",
            "suit": "HEARTS",
            "code": "JH"
        },
        {
            "value": "JACK",
            "suit": "HEARTS",
            "code": "JH"
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
let fullHand_STRAIGHT_ROYAL_ACE_FIRST =

    [
        {
            "value": "ACE",
            "suit": "HEARTS",
            "code": "AH"
        },
        {
            "value": "2",
            "suit": "HEARTS",
            "code": "2H"
        },
        {
            "value": "3",
            "suit": "HEARTS",
            "code": "3H"
        },
        {
            "value": "4",
            "suit": "HEARTS",
            "code": "4H"
        },
        {
            "value": "5",
            "suit": "SPADE",
            "code": "5S"
        }

    ]


let fullHand_NOT_STRAIGHT_NUM_ROYAL =

    [

        {
            "value": "10",
            "suit": "HEARTS",
            "code": "10H"
        },
        {
            "value": "8",
            "suit": "HEARTS",
            "code": "JH"
        },
        {
            "value": "QUEEN",
            "suit": "HEARTS",
            "code": "QH"
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
describe('checking a straight', function () {
    it('should return true for a straight of numbers', function () {
        let isStaight = handRanks.straight(fullHand_STRAIGHT_NUM)
        assert.equal(isStaight, true);

    });
    it('should return true for a straight of numbers and royal', function () {
        let isStaight = handRanks.straight(fullHand_STRAIGHT_NUM_ROAYAL)
        assert.equal(isStaight, true);

    });
    it('check ACE in the end', function () {
        let isStaight = handRanks.straight(fullHand_STRAIGHT_ROYAL)
        assert.equal(isStaight, true);
        isStaight = handRanks.straight(fullHand_STRAIGHT_ROYAL, 1)
        assert.equal(isStaight, false);

    });
    it('check ACE in the begining', function () {
        let isStaight = handRanks.straight(fullHand_STRAIGHT_ROYAL_ACE_FIRST, 1)
        assert.equal(isStaight, true);

        isStaight = handRanks.straight(fullHand_STRAIGHT_ROYAL_ACE_FIRST)
        assert.equal(isStaight, false);

    });

    it('should return false for a not a straight', function () {
        let isStaight = handRanks.straight(fullHand_NOT_STRAIGHT_NUM_ROYAL)
        assert.equal(isStaight, false);

    });


});


