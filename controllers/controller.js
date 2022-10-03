import Palya from "../models/palya.js"

class Controller {
    constructor() {
        const startBtn = $(".btn"),
        xField = $("#xname"),
        oField = $("#oname")

        startBtn.on("click", function() {
            if(xField.val() == "" || oField.val() == "") {
                this.info("alert", "Meg kell adni a játékos neveket!")
            } else {
                new Palya()
                startBtn.addClass("disabled")
            }
        })

        $(window).on("winEvent", (event)=> {
            /* console.log(event.detail); */
            this.info("success", `A nyertes: `+event.detail)
        })
    }

    info(type, text) {
        const infoBox = $(".infoBox")
        infoBox.css("opacity", 1)
        infoBox.html(text)
        infoBox.addClass(type)
        // setInterval(() => {
        //     infoBox.css("opacity", 0)
        // }, 3000)
    }
}

export default Controller