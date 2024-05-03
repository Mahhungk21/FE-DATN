const autoButton = document.querySelector(".home .mode .auto-button");
const manualButton = document.querySelector(".home .mode .manual-button");
const listControl = document.querySelector(".home .list-control");

//click vào nút "Tự động"
autoButton.addEventListener("click", function () {
    // Hiển thị phần tử div
    listControl.style.display = "block"; // Hiển thị phần tử
});
// click vào nút "Thủ công"
manualButton.addEventListener("click", function () {
    // Ẩn đi phần tử div
    listControl.style.display = "none"; // Ẩn đi phần tử
});
