
class Card {
    
    constructor(rank, suite, url) {
        this.rank = rank
        this.suite = suite
        this.faceUp = false
        this.url = url

    }
    compareTo(other) {
        return this.rank > other.rank

    }

}
let card1 = new Card(4)
let card2 = new Card(2)

console.log(card1.compareTo(card2))
