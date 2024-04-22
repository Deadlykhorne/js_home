const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, company) {
    if (company.name === companyName) {
        return company;
    }
    
    // Пошук серед клієнтів компанії
    if (company.clients) {
        for (let client of company.clients) {
            const foundClient = findValueByKey(companyName, client);
            if (foundClient) {
                return foundClient;
            }
            // Пошук серед партнерів клієнтів
            if (client.partners) {
                for (let partner of client.partners) {
                    const foundPartner = findValueByKey(companyName, partner);
                    if (foundPartner) {
                        return foundPartner;
                    }
                    // Пошук серед партнерів партнерів клієнтів
                    if (partner.partners) {
                        for (let subPartner of partner.partners) {
                            const foundSubPartner = findValueByKey(companyName, subPartner);
                            if (foundSubPartner) {
                                return foundSubPartner;
                            }
                        }
                    }
                }
            }
        }
    }

    return null;
}

const foundCompany = findValueByKey('Клієнт 1.2.3', company);
console.log(foundCompany ? foundCompany : 'Компанія не знайдена');
