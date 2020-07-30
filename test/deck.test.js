// import assert from 'assert';
// import { d } from "../src/util.js";
// var expect = require('chai').expect
var chai = require('chai')
let expect = chai.expect
import 'regenerator-runtime/runtime'
import Deck from "../src/deck.js";
import { getVal } from '../src/util.js';




describe('check if Deck Object get initiated properly', function () {
    let deck
    before("create a deck Object",async function () {
        deck = new Deck()
        await deck.init()
        
    })


    it('should return true for all the properties check', async function () {

        expect(deck).to.be.an('object')
        expect(deck.remaining).to.equal(52)
        expect(deck.deck_id).to.be.a('string')
    });

    
    it('should return 1 for splitCards(1)', async function () {

        expect((await deck.splitCards()).length).to.equal(2)
        expect((await deck.topCard()).length).to.equal(1)

    });


    

});


