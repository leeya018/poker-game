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

//for now check only 1 hand
function arrangeHand(playerHand, tableCards, ace = 0) {
    //   debugger
    let fullHand = [...playerHand, ...tableCards]
    return fullHand.sort((c1, c2) => getVal(c1, ace) - getVal(c2, ace))

}

// ATTENTION !!!
// before getting into those functions , hand have to be sorted
// some of those  functino maybe call twice because val of ACE can change 
let handRanks = {
    straight_Flush: function (hand, ace = 0) {
        // debugger
        let suit = hand[0].suit
        for (let i = 0; i < hand.length; i++) {
            if (hand[i].suit !== suit) return false
            if (i < hand.length - 1) {
                if (getVal(hand[i + 1], ace) - getVal(hand[i], ace) !== 1) return false

            }
        }
        return true
    },
    four_of_a_kind: function (hand) {
        let ind_start = (hand[0].value === hand[1].value) ? 0 : 1
        let first_val = hand[ind_start].value
        for (let i = ind_start + 1; i < (3 + ind_start + 1); i++) {
            if (hand[i].value !== first_val) return false

        }
        return true
    },
    full_house: function (hand) {
        let ind_start = (hand[1].value !== hand[2].value) ? 1 : 2
        let first_val = hand[0].value
        let i
        for (i = 1; i <= ind_start; i++) {
            if (hand[i].value !== first_val) return false

        }
        // debugger
        let second_val = hand[i].value
        for (i; i < hand.length; i++) {
            if (hand[i].value !== second_val) return false

        }
        return true
        // [1,1,3,3,3]
        // [1,1,1,3,3]

    },
    flush: function (hand) {
        let first_suit = hand[0].suit
        for (const c of hand) {
            if (c.suit !== first_suit) return false
        }
        return true
    },
    straight: function (hand, ace) {
        for (let i = 0; i < hand.length - 1; i++) {
            if (getVal(hand[i + 1], ace) - getVal(hand[i], ace) !== 1) return false
        }
        return true
    },
    three_of_a_kind: function (hand) {
        let item = hand.shift()
        return three_of_a_kind_helper(hand, item, 1)
    }
}

function three_of_a_kind_helper(hand, item, counter) {
    if (hand.length >= 0 && counter == 3) return true
    if (hand.length === 0 && counter < 3) return false
    if (item.value === hand[0].value) {
        counter++
    } else {
        counter = 1
    }
    item = hand.shift()
    return three_of_a_kind_helper(hand, item, counter)
}

const cardVal = {
    "2": [2, 2],
    "3": [3, 3],
    "4": [4, 4],
    "5": [5, 5],
    "6": [6, 6],
    "7": [7, 7],
    "8": [8, 8],
    "9": [9, 9],
    "10": [10, 10],
    "JACK": [11, 11],
    "QUEEN": [12, 12],
    "KING": [13, 13],
    "ACE": [14, 1],


}

function getVal(c, place = 0) {
    return cardVal[c.value][place]
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


export { getDeckData, splitCards, handRanks, getVal, getTableHand, getHand, printFullHand, arrangeHand }

