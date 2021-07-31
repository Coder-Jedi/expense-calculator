export const itemsArray = [
    {
        id: 1,
        type: 'income',
        amount: 1000,
        description: 'Monthly Salary',
    }
];

export function addItemsArray(newItem) {
    itemsArray.push(newItem);
}

export function deleteItemsArray(itemId) {
    itemsArray.splice(itemsArray.findIndex(item => (item.id===itemId)), 1);
}

export function filteredArray(type) {
    return itemsArray.filter(item => (item.type===type));
}