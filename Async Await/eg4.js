function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function trafficLight() {
    while (true) {
        console.log("🔴 Red");
        await wait(2000);
        console.log("🟡 Yellow");
        await wait(1000);
        console.log("🟢 Green");
        await wait(3000);
    }
}
trafficLight();