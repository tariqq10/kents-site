function validateForm() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('Phone').value;
    let review = document.getElementById('review').value;

    if (name.trim() === "") {
        alert("Name must be filled out");
        return false;
    }
    
    if (phone.trim() === "") {
        alert("Phone must be filled out");
        return false;
    }

    if (review.trim() === "") {
        alert("Review must be filled out");
        return false;
    }

    alert("Form Submitted!");
    return true; 
}
