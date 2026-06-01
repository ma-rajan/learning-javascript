function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function downloadFile() {
    for (let i = 0; i <= 100; i += 24) {
        console.log(`Downloading... ${i}%`);
        await wait(1000);
    }
    console.log("✅ Download Complete!");
}
downloadFile();