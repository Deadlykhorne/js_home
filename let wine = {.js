let wine = {
    type: 'біле напівсолодке',
    year: 1977,
    country: 'Франція',
    getInfo: function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
};

wine.getInfo(); // Виводить всі властивості об'єкта

// Нова властивість об'єкта
wine.grapeVariety = 'Шардоне';

wine.getInfo(); // Виводить всі властивості об'єкта з новою властивістю