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

export function getItem(itemID) {
  return itemsArray.find((item) => item.id === itemID);
}

export function setItem(updatedItem) {
  const index = itemsArray.findIndex((item) => item.id === updatedItem.id);
  itemsArray[index] = updatedItem;
}
