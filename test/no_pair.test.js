import assert from 'assert';
import { handRanks } from "../src/util.js";


let fullHand_NOT_PAIR =
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


describe('checking no pair', function () {
    it('should return true because of no pair', function () {
        let isPair = handRanks.no_pair(fullHand_NOT_PAIR)
        assert.equal(isPair, true);
    });
   



});


