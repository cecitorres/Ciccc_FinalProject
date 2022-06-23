const calculateTotalNights = (date1, date2) => {
    let difference = date1.getTime() - date2.getTime();
    let days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
};

module.exports = {
  calculateTotalNights
}