let axios = require("axios")

// By using https://deckofcardsapi.com/ API I can get all packs of cards
// no need to create the server data from scretch 
async function initDeck() {
    let res = await axios.get("https://deckofcardsapi.com/api/deck/sum9nabsrmpf/shuffle/?deck_count=1")
    let deckId = res.data.deck_id
     res = await axios.get("https://deckofcardsapi.com/api/deck/sum9nabsrmpf/draw/?count=4")
    console.log(res.data)
    console.log("===================================")

    res = await axios.get("https://deckofcardsapi.com/api/deck/sum9nabsrmpf/draw/?count=4")
    console.log(res.data)

}
let a =  initDeck()

export default initDeck

