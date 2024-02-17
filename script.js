function addItem() {
    var itemName = document.getElementById('itemName').value;
    var itemQuantity = document.getElementById('itemQuantity').value;

    if (itemName && itemQuantity) {
        var inventoryList = document.getElementById('inventoryList');
        var listItem = document.createElement('li');
        listItem.innerHTML = `<span>${itemName}</span><span>${itemQuantity}</span>`;
        inventoryList.appendChild(listItem);

        // Effacer les champs du formulaire après l'ajout
        document.getElementById('itemName').value = '';
        document.getElementById('itemQuantity').value = '';
    }
}