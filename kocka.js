class Kocka {
    static next = "X"

    #allapot
    #status
    constructor(allapot, SZULOELEM) {
        this.#allapot = allapot
        this.#status = ""
        SZULOELEM.append('<div class="gameField"></div>')
        this.elem = SZULOELEM.children("div:last-child")
        
        this.elem.on("click", () => {
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
        let clickEvent = new CustomEvent("clickElem")
        window.dispatchEvent(clickEvent)
    }
}

export default Kocka