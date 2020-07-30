
var chai = require('chai')
let expect = chai.expect
import 'regenerator-runtime/runtime'
import Game from "../src/game.js";


describe.only('check Game class', function () {
    let game
    before("create a game Object", async function () {
        game = new Game()
        await game.init()
    })


    describe('check Game class properties', function () {

        it('should return true for all the properties check', async function () {
            expect(game.deck).to.be.an('object')
            expect(game.players.length).to.equal(2)
            for (const p of game.players) {
                expect(p.name).to.be.a('string')
            }
        });

    });

    describe('check Game class functionality', function () {

        it('should see that flop function return only 1 card',  async ()=> {
            await game.flop()
            // debugger
            expect(game.tableCards).to.be.an("object")
            expect(game.tableCards.cards).to.be.an("array")
            expect(game.tableCards.cards.length).to.equal(1)
            expect(game.tableCards.cards[0]).to.have.property('image')
            expect(game.tableCards.cards[0]).to.have.property('value')
            expect(game.tableCards.cards[0]).to.have.property('suit')
            expect(game.tableCards.cards[0]).to.have.property('code')

        });
        it('should see that river functions return 2 card',  async ()=> {
            await game.river()
            // debugger
            expect(game.tableCards).to.be.an("object")
            expect(game.tableCards.cards).to.be.an("array")
            expect(game.tableCards.cards.length).to.equal(2)
            expect(game.tableCards.cards[1]).to.have.property('image')
            expect(game.tableCards.cards[1]).to.have.property('value')
            expect(game.tableCards.cards[1]).to.have.property('suit')
            expect(game.tableCards.cards[1]).to.have.property('code')

        });
        it('should see that turn functions return 3 card',  async ()=> {
            await game.turn()
            // debugger
            expect(game.tableCards).to.be.an("object")
            expect(game.tableCards.cards).to.be.an("array")
            expect(game.tableCards.cards.length).to.equal(3)
            expect(game.tableCards.cards[2]).to.have.property('image')
            expect(game.tableCards.cards[2]).to.have.property('value')
            expect(game.tableCards.cards[2]).to.have.property('suit')
            expect(game.tableCards.cards[2]).to.have.property('code')

        });

    });





});


