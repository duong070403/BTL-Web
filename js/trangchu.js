function validateForm() {
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;

    if (startDate === "" || endDate === "") {
        alert("Vui lòng nhập đầy đủ ngày đi và ngày về.");
        return false;
    }

    if (startDate >= endDate) {
        alert("Ngày về phải lớn hơn ngày đi.");
        return false;
    }

    // Nếu điều kiện hợp lệ, có thể thực hiện các xử lý tiếp theo ở đây (ví dụ: gửi form)
    return true;
}
