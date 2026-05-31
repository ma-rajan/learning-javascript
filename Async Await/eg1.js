function Nepal() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Nepal's national animal is cow . ");
        }, 2000);
    });
}
async function about() {
    console.log("Nepal is beautiful country lies between india and china");  
    const result = await Nepal();
    console.log(result);
}1
about();