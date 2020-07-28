import assert from 'assert';
import { handRanks } from "../src/util.js";

const fullHand_STRAIGHT_FLUSH2 = [
    {
        "value": "ACE",
        "suit": "CLUBS",
        "code": "AC"
    },
    {
        "value": "2",
        "suit": "CLUBS",
        "code": "2C"
    },
    {
        "value": "3",
        "suit": "CLUBS",
        "code": "3C"
    },
    {
        "value": "4",
        "suit": "CLUBS",
        "code": "4C"
    },
    {
        "value": "5",
        "suit": "CLUBS",
        "code": "5C"
    }
]
const fullHand_STRAIGHT_FLUSH1 = [
    {
        "value": "10",
        "suit": "CLUBS",
        "code": "10C"
    },
    {
        "value": "JACK",
        "suit": "CLUBS",
        "code": "JC"
    },
    {
        "value": "QUEEN",
        "suit": "CLUBS",
        "code": "QC"
    },
    {
        "value": "KING",
        "suit": "CLUBS",
        "code": "KC"
    },
    {
        "value": "ACE",
        "suit": "CLUBS",
        "code": "AC"
    }
]
const fullHand_STRAIGHT_FLUSH = [
    {
        "value": "2",
        "suit": "CLUBS",
        "code": "2C"
    },
    {
        "value": "3",
        "suit": "CLUBS",
        "code": "3C"
    },
    {
        "value": "4",
        "suit": "CLUBS",
        "code": "4C"
    },
    {
        "value": "5",
        "suit": "CLUBS",
        "code": "5C"
    },
    {
        "value": "6",
        "suit": "CLUBS",
        "code": "6C"
    }
]

const fullHand_FLUSH =

    [

        {
            "value": "3",
            "suit": "CLUBS",
            "code": "3C"
        },
        {
            "value": "4",
            "suit": "CLUBS",
            "code": "4C"
        },
        {
            "value": "5",
            "suit": "CLUBS",
            "code": "5C"
        },
        {
            "value": "6",
            "suit": "SPCLUBSADES",
            "code": "6C"
        },
        {
            "value": "9",
            "suit": "CLUBS",
            "code": "9C"
        },

    ]

const fullHand_STRAIGHT =

    [
        {
            "value": "2",
            "suit": "CLUBS",
            "code": "2C"
        },
        {
            "value": "3",
            "suit": "SPADE",
            "code": "3S"
        },
        {
            "value": "4",
            "suit": "HEARTS",
            "code": "4H"
        },
        {
            "value": "5",
            "suit": "CLUBS",
            "code": "5C"
        },
        {
            "value": "6",
            "suit": "SPADES",
            "code": "6S"
        }

    ]

describe('checking a stringht_flush', function () {
    it('should return false just for a strainght', function () {
        let isFlush = handRanks.straight_Flush(fullHand_STRAIGHT)

        assert.equal(isFlush, false);
    });

    it('should return false just for flush', function () {
        let isFlush = handRanks.straight_Flush(fullHand_FLUSH)

        assert.equal(isFlush, false);
    });

    it('should return true for straight_flush', function () {
        let isFlush = handRanks.straight_Flush(fullHand_STRAIGHT_FLUSH)

        assert.equal(isFlush, true);
    });

    it('should return true for straight_flush1', function () {
        let isFlush = handRanks.straight_Flush(fullHand_STRAIGHT_FLUSH1)

        assert.equal(isFlush, true);
    });

    // checking when  if Ace hace a value of 1
    it('should return true for straight_flush2', function () {
        let isFlush = handRanks.straight_Flush(fullHand_STRAIGHT_FLUSH2, 1)
        assert.equal(isFlush, true);
    });


});


