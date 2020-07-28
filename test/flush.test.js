import assert from 'assert';
import { handRanks } from "../src/util.js";

let fullHand_FLUSH =

    [
        {
            "value": "3",
            "suit": "HEARTS",
            "code": "3H"
        },
        {
            "value": "5",
            "suit": "HEARTS",
            "code": "5H"
        },
        {
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
        },
        {
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
        },
        {
            "value": "ACE",
            "suit": "HEARTS",
            "code": "AH"
        },

    ]

    let fullHand_NOT_FLUSH =

    [
        {
            "value": "3",
            "suit": "HEARTS",
            "code": "3H"
        },
        {
            "value": "5",
            "suit": "SPADE",
            "code": "5S"
        },
        {
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
        },
        {
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
        },
        {
            "value": "ACE",
            "suit": "HEARTS",
            "code": "AH"
        },

    ]
describe('checking a flush', function () {
    it('should return true for 5 hearts', function () {
        let isFlush = handRanks.flush(fullHand_FLUSH)
        assert.equal(isFlush, true);
    });
    it('should return false for 4 hearts and 1 spade', function () {
        let isFlush = handRanks.flush(fullHand_NOT_FLUSH)
        assert.equal(isFlush, false);
    });
});


