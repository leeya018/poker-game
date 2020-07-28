import assert from 'assert';
import { handRanks } from "../src/util.js";

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
let fullHand_NOT_FOUR_KIND =

    [
        {
            "value": "2",
            "suit": "DIAMOND",
            "code": "2K"
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
            "value": "KING",
            "suit": "CLUBS",
            "code": "kC"
        },
        {
            "value": "ACE",
            "suit": "SPADES",
            "code": "AS"
        }

    ]
let fullHand_FOUR_KIND =

    [
        {
            "value": "6",
            "suit": "SPADES",
            "code": "6S"
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
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
        },
        {
            "value": "KING",
            "suit": "CLUBS",
            "code": "KC"
        }

    ]
let fullHand_FOUR_KIND_1 =

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
            "value": "KING",
            "suit": "CLUBS",
            "code": "KC"
        },
        {
            "value": "ACE",
            "suit": "SPADES",
            "code": "AS"
        }

    ]
describe('checking a four of a kind', function () {
    it('should return true for the 4 KINGS', function () {
        let isFlush = handRanks.four_of_a_kind(fullHand_FOUR_KIND)
        assert.equal(isFlush, true);
        isFlush = handRanks.four_of_a_kind(fullHand_FOUR_KIND_1)
        assert.equal(isFlush, true);

    });
    it('should return false because there are not 4 of the same', function () {
        let isFlush = handRanks.four_of_a_kind(fullHand_NOT_FOUR_KIND)
        assert.equal(isFlush, false);

    });


});


