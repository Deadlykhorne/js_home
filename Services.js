var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function() {
        var total = 0;
        for (var service in this) {
            if (typeof this[service] === 'string') {
                total += parseInt(this[service]);
            }
        }
        return total;
    },
    minPrice: function() {
        var min = Infinity;
        for (var service in this) {
            if (typeof this[service] === 'string') {
                min = Math.min(min, parseInt(this[service]));
            }
        }
        return min;
    },
    maxPrice: function() {
        var max = -Infinity;
        for (var service in this) {
            if (typeof this[service] === 'string') {
                max = Math.max(max, parseInt(this[service]));
            }
        }
        return max;
    }
};

services['Манікюр'] = "300 грн";
console.log("Загальна вартість послуг:", services.price() + " грн");
console.log("Мінімальна вартість послуг:", services.minPrice() + " грн");
console.log("Максимальна вартість послуг:", services.maxPrice() + " грн");