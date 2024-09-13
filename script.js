// scripts.js

function checkAddress() {
    const addressInput = document.getElementById('addressSearch').value;
    const resultDiv = document.getElementById('addressResult');
    
    // Simulate address check
    if (addressInput) {
        resultDiv.textContent = 'Address is in the delivery network!';
        resultDiv.className = 'text-success';
    } else {
        resultDiv.textContent = 'Please enter a valid address.';
        resultDiv.className = 'text-danger';
    }
}
