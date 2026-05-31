function makeTea() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("☕ Tea is ready");
        }, 3000);
    });
}
async function serveTea() {
    console.log("Making tea...");
    const result = await makeTea();
    console.log(result);
    console.log("Serve the tea.");
}
serveTea();