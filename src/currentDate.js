function currentDate() {
    const today = new Date();
    return new Date (today.getFullYear(), today.getMonth(), today.getDate())
}

export {currentDate};