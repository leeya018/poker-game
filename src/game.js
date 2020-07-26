import Deck from "./deck.js"
import Player from "./player";
import TableCards from "./tableCards.js";
import { handRanks, getVal, getHand, getTableHand ,printFullHand} from "./util.js";



class Game {
  constructor() {
    this.deck
    this.players
    this.tableCards
  }

  async init() {
    this.deck = new Deck()
    this.tableCards = new TableCards()
    await this.deck.init()
    this.players = [new Player("Lee"), new Player("Dana")]
  }
  print() {
    this.deck.print()
    this.tableCards.print()
    for (let p of this.players) {
      p.print()
    }
  }

  async flop() {
    let card = (await this.deck.topCard())[0]
    this.tableCards.push(card)
  }
  async turn() {
    await this.flop()
  }
  async river() {
    await this.flop()
  }

  //for now check only 1 hand
  arrangeHand(){
    let fullHand = [... this.players[0].hand, ...this.tableCards.cards]
    return fullHand.sort((c1,c2)=>getVal(c1)-getVal(c2))
  }

  myInit(){
    this.players[0].hand = getHand()
    this.tableCards.cards = getTableHand()

  }
  ///====================
  async startGame() {
    await this.init()
    // for (let p of this.players) {
    //   p.hand = await this.deck.splitCards()
    // }
    // await this.flop()
    // await this.turn()
    // await this.river()

    this.myInit()
    let fullHand = this.arrangeHand()
    // printFullHand(fullHand)
    let isIt = handRanks.straight_Flush(fullHand)
    console.log(isIt)
  }

  //=============

}


(async () => {
  let game = new Game()
  await game.startGame()

  game.print()

})()

// export default function handler(req, res) {
//   // Get data from your database
//   res.status(200).json(game)
// }



//hand_name 
//get_val 
