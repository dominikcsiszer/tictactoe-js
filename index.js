import Palya from "../palya.js"

var palya

const startBtn = $(".btn"),
xField = $("#xname"),
oField = $("#oname")



startBtn.on("click", function() {
    if(xField.val() == "" || oField.val() == "") {
        info("alert", "Meg kell adni a játékos neveket!")
    } else {
        palya = new Palya()
        startBtn.addClass("disabled")
    }
})

function info(type, text) {
    const infoBox = $(".infoBox")
    infoBox.css("opacity", 1)
    infoBox.html(text)
    infoBox.addClass(type)
    setInterval(() => {
        infoBox.css("opacity", 0)
    }, 3000)
}
$(window).on("winEvent", (event)=> {
    /* console.log(event.detail); */
    info("success", `A nyertes: `+event.detail)
})

