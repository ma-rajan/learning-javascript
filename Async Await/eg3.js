function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function countdown() {
    for (let i = 5; i >= 1; i--) {
        console.log(i);
        await wait(1000);
    }
    console.log("🚀 Launch!");
}
countdown();