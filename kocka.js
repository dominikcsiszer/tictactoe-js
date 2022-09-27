class Kocka {
    static next = "X"

    #allapot
    #status
    #index;
    constructor(index, allapot, SZULOELEM) {
        this.#allapot = allapot;
        this.#index = index;
        this.#status = ""

        
        SZULOELEM.append('<div class="gameField"></div>')
        this.elem = SZULOELEM.children("div:last-child")
        
        this.elem.on("click", () => {
            /* console.log(this); */
            this.setAllapot()
            this.click()
        })
    }

    setAllapot() {
        if(this.#allapot){
            this.winningAllapot()
            this.elem.html(Kocka.next)
            this.nextStep()
        }
    }
    winningAllapot() {
        this.#allapot = false
        this.elem.addClass("active")
    }

    nextStep() {
        if(Kocka.next == "X") {
            Kocka.next = "O"
            this.#status = "X"
        }
        else {
            Kocka.next = "X"
            this.#status = "O"
        }
    }

    getStatus() {
        return this.#status
    }
    getAllapot() {
        return this.#allapot
    }

    click() {
        let clickEvent = new CustomEvent("clickElem",{detail:this.#index})
        window.dispatchEvent(clickEvent)
    }
}

export default Kocka