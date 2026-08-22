let realTimeDate = false;
function currentDate() {
    if (realTimeDate === true) {
        const today = new Date();
        return new Date (today.getFullYear(), today.getMonth(), today.getDate())
    
    }
    else if (realTimeDate === false){
        const today = new Date(2026, 7, 22, 5, 0);
        return new Date (today.getFullYear(), today.getMonth(), today.getDate())
    }
}
export {currentDate};