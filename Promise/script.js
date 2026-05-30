function orderFood() {
    return new Promise((resolve, reject) => {
        console.log("Ordering food... 🍔");
        let food = true; 
        setTimeout(() => {
            if (food) {
                resolve("Food is ready! Enjoy 🍕");
            } else {
                reject("Sorry, food is not available ❌");
            }
        }, 1000);
    });
}