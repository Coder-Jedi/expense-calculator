export const itemsArray = [
  {
    id: 1,
    type: 'income',
    amount: 1000,
    description: 'Monthly Salary',
  },
];

const logObject = {
  count: 2,
};

export function addItemsArray(newItem) {
  itemsArray.push({ id: logObject.count, ...newItem });
  logObject.count++;
}

export function deleteItemsArray(itemId) {
  itemsArray.splice(
    itemsArray.findIndex((item) => item.id === itemId),
    1
  );
}

export function filteredArray(type) {
  return itemsArray.filter((item) => item.type === type);
}
