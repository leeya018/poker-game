import axios from "axios"

// By using https://deckofcardsapi.com/ API I can get all packs of cards
// no need to create the server data from scretch 
async function getDeckData() {
    let res = await axios.get("https://deckofcardsapi.com/api/deck/sum9nabsrmpf/shuffle/?deck_count=1")
    let deckId = res.data.deck_id
    return res.data

    // res = await axios.get("https://deckofcardsapi.com/api/deck/sum9nabsrmpf/draw/?count=4")
    // console.log(res.data)

}

async function splitCards(deckId, numOfCards) {
    let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numOfCards}`)
    return res.data
}

function compareCards(card1, card2) {

}

let handRanks = {
    straight_Flush: function (hand) {
        let val = hand[0].suit
        for (let i = 0; i < hand.length; i++) {
            if (hand[i].value !== val) return false
            if (i < hand.length - 1) {
                if (hand[i + 1].value - hand[i].value !== 1) return false
            }
        }
        return true
    }
}

const cardVal = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "JACK": 11,
    "QUEEN": 12,
    "KING": 13,
    "ACE": 14,


}

function getVal(c) {
    return cardVal[c.value]
}

function getHand() {
    return [
        {
            "value": "8",
            "suit": "CLUBS",
            "code": "8C"
        },
        {
            "value": "6",
            "suit": "SPADE",
            "code": "6S"
        }
    ]
}

function getTableHand() {
    return [
        {
            "value": "2",
            "suit": "CLUBS",
            "code": "2C"
        },
        {
            "value": "ACE",
            "suit": "SPADES",
            "code": "AS"
        },
        {
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
        },
    ]
}

function printFullHand(fullHand) {
    console.log("======FULL_HAND========")
    for (let c of fullHand) {
        let { value, suit, code } = c
        console.log(`${value} : ${suit} : ${code} `)

    }
}
// let a =  initDeck()

export { getDeckData, splitCards, handRanks, getVal, getTableHand, getHand, printFullHand }

