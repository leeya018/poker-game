export default class TableCards {
    constructor() {
        this.cards = []
    }
    push(card){
        this.cards.push(card)
    }
    print() {
        console.log("======TABLE_CARDS========")
        for (let c of this.cards) {
            let { value, suit, code } = c
            console.log(`${value} : ${suit} : ${code} `)

        }
    }

}