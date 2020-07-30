import { getDeckData, splitCards } from './util.js'


export default class Deck {

    constructor() {
        this.deck_id
        this.remaining

    }


    async init() {
        let deckData = await getDeckData()
        this.deck_id = deckData.deck_id
        this.remaining = deckData.remaining

    }

    async splitCards() {
        return (await splitCards(this.deck_id, 2)).cards
    }
    async topCard() {
        return (await splitCards(this.deck_id, 1)).cards

    }
    reset() {

    }
    deal() {

    }
    print() {
        console.log("=====DECK=====")
        console.log("deck_id: " + this.deck_id)
        console.log("remaining :" + this.remaining)

    }

}

