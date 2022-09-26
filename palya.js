import Kocka from "./kocka.js"

class Palya {
    #winningChance = [
        [0, 1, 2],
        [0, 3, 6],
        [2, 5, 8],
        [6, 7, 8],
        [3, 4, 5],
        [1, 4, 7],
        [0, 4, 8],
        [2, 4, 6]
    ] 

    #lista = []

    constructor() {
        const SZULOELEM = $(".game")
        for (let i = 0; i < 9; i++) {
            const elem = new Kocka(i, true, SZULOELEM)
            this.#lista.push(elem)
        }

        $(window).on("clickElem", (event) => {
            /* console.log(event.detail); */
            this.winChecker(event.detail);
        });
    }

    winChecker(elem) {
       /*  console.log(elem); */
        for(let i of this.#winningChance) {
            let [elem1, elem2, elem3] = [
                this.#lista[i[0]].getStatus(),
                this.#lista[i[1]].getStatus(),
                this.#lista[i[2]].getStatus()
            ]

            if(elem1 != "" && elem2 != "" && elem3 != ""){
                if(elem1 == elem2 && elem2  == elem3) {
                    /* console.log(elem1); */
                    this.getWinner(elem1)
                    this.#lista.forEach(element => {
                        element.winningAllapot()
                    })
                    
                    let winEvent = new CustomEvent("winEvent",{detail:elem1});
                    window.dispatchEvent(winEvent);
                }
            }
            
                
        }
    }
    getWinner(winner) {
        /* console.log(winner); */
        return winner;
    }
}

export default Palya;