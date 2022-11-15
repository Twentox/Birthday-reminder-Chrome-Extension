"use strict"

const birthdays = [
    { name: "", date: "", year: "" },
    { name: "", date: "", year: "" },
    { name: "", date: "", year: "" },
    { name: "", date: "", year: "" },
    { name: "", date: "", year: "" },
]

const dayElement = document.querySelector(".day")
const hourElement = document.querySelector(".hour")
const minuteElement = document.querySelector(".minute")
const secondElement = document.querySelector(".second")

let elementArr = [dayElement, hourElement, minuteElement, secondElement]
function pickNearbyBirthday() {
    let cur = Infinity
    let index = null
    const IsZero = (item) => item.innerText <= "0"
    const check = elementArr.every(IsZero)
    if (check) AddOneYear()
    for (let i = 0; i < birthdays.length; i++) {
        let getDate = new Date(`${birthdays[i].date} ${birthdays[i].year}`).getTime()
        let now = new Date().getTime()
        let gap = getDate - now
        if (gap < cur) {
            cur = gap
            index = i
        }

    }
    document.getElementById("outputName").innerText = `${birthdays[index].name}, ${birthdays[index].date} ${birthdays[index].year}`
    return `${birthdays[index].date} ${birthdays[index].year}`

}
let reset = setInterval(countdown, 1000);

function countdown() {
    let countDate = new Date(pickNearbyBirthday()).getTime()
    let now = new Date().getTime()
    let gap = countDate - now
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinutes = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)
    dayElement.innerText = textDay
    hourElement.innerText = textHour
    minuteElement.innerText = textMinutes
    secondElement.innerText = textSecond


}

function AddOneYear() {
    for (let i = 0; i < birthdays.length; i++) {
        let getDate = new Date(`${birthdays[i].date} ${birthdays[i].year}`).getTime()
        let now = new Date().getTime()
        if (now > getDate) {
            let toNum = parseInt(birthdays[i].year)
            toNum = toNum + 1
            birthdays[i].year = toNum + ""

        }
    }
}





