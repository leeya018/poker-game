// import assert from 'assert';
import { arrangeHand } from "../src/util.js";
// var expect = require('chai').expect
var chai = require('chai')
let expect = chai.expect

const fullHand_ACE_end_expected = [

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

const fullHand_ACE_expected = [
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
        "value": "ACE",
        "suit": "CLUBS",
        "code": "AC"
    }
]


const tableHand_ACE = [{
    "value": "4",
    "suit": "CLUBS",
    "code": "4C"
},
{
    "value": "ACE",
    "suit": "CLUBS",
    "code": "AC"
},
{
    "value": "5",
    "suit": "CLUBS",
    "code": "5C"
}
]
const fullHand_expected = [
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
        "value": "7",
        "suit": "CLUBS",
        "code": "7C"
    }
]


const playerHand = [
    {
        "value": "3",
        "suit": "CLUBS",
        "code": "3C"
    },
    {
        "value": "2",
        "suit": "CLUBS",
        "code": "2C"
    }

]
const tableHand = [{
    "value": "4",
    "suit": "CLUBS",
    "code": "4C"
},
{
    "value": "7",
    "suit": "CLUBS",
    "code": "7C"
},
{
    "value": "5",
    "suit": "CLUBS",
    "code": "5C"
}
]
describe('checking if sorting is working', function () {
    it('shoud sort all numbers', function () {
        let sortedHand = arrangeHand(playerHand, tableHand)
        expect(sortedHand).to.eql(fullHand_expected);
    });

        it('shoud sort all numbers ACE at end', function () {
        let sortedHand = arrangeHand(playerHand, tableHand_ACE)
        expect(sortedHand).to.eql(fullHand_ACE_expected);

         sortedHand = arrangeHand(playerHand, tableHand_ACE,1)
        expect(sortedHand).to.eql(fullHand_ACE_end_expected);
    });


});


