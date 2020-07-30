
var chai = require('chai')
let expect = chai.expect
import 'regenerator-runtime/runtime'
import Player from "../src/player.js";


describe('check Player class functionality', function () {
    let player
    before("create a Player Object", async function () {
        player = new Player("Lee")

    })


    it('should return true for all the properties check', async function () {

        expect(player).to.be.an('object')
        expect(player.hand).to.be.an('array')
        expect(player.hand.length).to.equal(0)
        expect(player.hand).to.be.empty
        expect(player.name).to.equal('Lee')


    });






});


