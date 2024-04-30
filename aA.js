const regex = /^(?!.*[Aa]).{6,}$/;
const words = ["league", "of", "Legends", "Is", "a", "cringe", "game"];

words.forEach(word => {
    if (regex.test(word)) {
        console.log(`Рядок "${word}" відповідає умовам`);
    } else {
        console.log(`Рядок "${word}" не відповідає умовам`);
    }
});
