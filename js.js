const quotes = [{
    quote: `"The road to hell is paved with works in progress."`,
    writer: `– Pholip roth  `
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    writer: `– Albert Einstein`
}, {
    quote: `"Life is a journey,not a destination."`,
    writer: `– Ralph waldo emerson`
}, {
    quote: `"Your time is limited, so don’t waste it living someone else’s life."`,
    writer: `– Steve Jobs`
}, {
    quote: `"To again your own voice,you have to forget about having it heard"`,
    writer: `– Allen ginsbero`
}, {
    quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
    writer: `– Soren Kierkegaard`
}, {
    quote: `"The unexamined life is not worth living."`,
    writer: `– Socrates`
}, {
    quote: `"There is only one plot things are not what they seem "`,
    writer: `– Jim thompson  `
}, {
    quote: `"The purpose of our lives is to be happy."`,
    writer: `- Dalai Lama`
}, {
    quote: `"Live for each second without hesitation."`,
    writer: `- Elton John`
}, ]




let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);


    quote.innerHTML = quotes[random].quote;


    writer.innerHTML = quotes[random].writer;
})