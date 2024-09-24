document.addEventListener('DOMContentLoaded', () => {
    const adminButton = document.getElementById('adminLogin');
    const customerButton = document.getElementById('customerLogin');

    adminButton.addEventListener('click', () => {
        window.location.href = '../manager .html'; // Adjusted path if `admin.html` is outside the `register` folder
    });

    customerButton.addEventListener('click', () => {
        window.location.href = '../coustomer.html'; // Adjusted path if `customer.html` is outside the `register` folder
    });
});
