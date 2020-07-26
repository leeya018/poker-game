export default class Player{
    constructor(name){
        this.name = name
        this.hand = []
    }
    print(){
        console.log("=====PLAYER=====")
        console.log("name :" +this.name)
        for(let card of this.hand){
            let {value,suit,code} = card
            console.log(`${value} : ${suit} : ${code} `)
        }

    }
}