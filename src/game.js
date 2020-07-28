import Deck from "./deck.js"
import Player from "./player";
import TableCards from "./tableCards.js";
import { handRanks, getVal, getHand, getTableHand, printFullHand,arrangeHand } from "./util.js";



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


  myInit() {
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
    debugger
    this.checkHand()

  }

  checkHand() {
    // let fullHand = this.arrangeHand()
    let fullHand = arrangeHand(1)

    // printFullHand(fullHand)
    // let isIt = handRanks.straight_Flush(fullHand, 1)
    // console.log(isIt)

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
