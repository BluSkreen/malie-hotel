export const getStorageDates = () => {
    if (localStorage.getItem("datesArr")) {
        localStorage.getItem("saved_books")
    }

    return savedBookIds;
};

export const putStorageDates = (datesArr) => {
    if (bookIdArr.length) {
        localStorage.setItem("saved_books", JSON.stringify(bookIdArr));
    } else {
        localStorage.removeItem("saved_books");
    }
};

