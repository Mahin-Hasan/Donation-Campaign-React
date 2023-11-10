const getStoredDonatedCategory = () => {
    const storedJobApplication = localStorage.getItem('donated-items');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveDonatedItem = id => {
    const storeDonatedItems = getStoredDonatedCategory();
    const exists = storeDonatedItems.find(donationId => donationId === id);
    if (!exists) {
        storeDonatedItems.push(id);
        localStorage.setItem('donated-items', JSON.stringify(storeDonatedItems))
    }
}

export { getStoredDonatedCategory, saveDonatedItem }