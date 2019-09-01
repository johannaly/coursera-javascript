function billingFunction() {
    var checkbox = document.getElementById("same");
    var billingName = document.getElementById("billingName");
    var billingZip = document.getElementById("billingZip");

    if (checkbox.checked == true) {
        billingName.value = document.getElementById("shippingName").value;
        billingZip.value = document.getElementById("shippingZip").value;
    } else {
        billingName.value = "";
        billingZip.value = "";
    }
}