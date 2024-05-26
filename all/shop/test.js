function sizeCheck(clickedSize) {
    // Remove the "selected" class from all size boxes
    var sizeBoxes = document.querySelectorAll('.size-box');
    sizeBoxes.forEach(function(box) {
        box.classList.remove('selected');
    });

    // Add the "selected" class to the clicked size box
    clickedSize.classList.add('selected');
}