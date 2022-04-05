// most of the work here will be done with logic and a little math
// what's the usual measurement of a progress bar? you'll need to measure the same way here
// use that measurement to update the style of your inner fill element as you scroll

// const scroll = document.getElementById("test");

window.onscroll = function() {
    scrollTest()
};

function scrollTest() {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let amountScrolled = (scroll/height) * 100;
    document.getElementById("test").style.width = amountScrolled + "%";
}


