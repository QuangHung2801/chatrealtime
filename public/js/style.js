// Gọi các file HTML vào phần tương ứng
document.addEventListener("DOMContentLoaded", function () {
    includeHTML("modalContainer", "modals.html", setupModals);
    includeHTML("settingPopupContainer", "setting-popup.html", setupSettingPopup);
});

// Hàm nạp HTML vào container
function includeHTML(id, url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback(); // Gọi callback sau khi nạp xong
        })
        .catch(error => console.error("Lỗi khi tải file:", error));
}

// Cấu hình modal nếu cần
function setupModals() {
    console.log("Modals đã được tải!");
}

// Cấu hình setting popup
function setupSettingPopup() {
    let settingIcon = document.getElementById("settingIcon");
    let settingPopup = document.getElementById("settingPopup");

    if (!settingIcon || !settingPopup) {
        console.warn("⚠ settingIcon hoặc settingPopup chưa được tải!");
        return;
    }

    // Sự kiện mở/đóng settingPopup
    settingIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        settingPopup.style.display = (settingPopup.style.display === "block") ? "none" : "block";
    });

    // Ẩn khi click ra ngoài
    document.addEventListener("click", function (event) {
        if (!settingIcon.contains(event.target) && !settingPopup.contains(event.target)) {
            settingPopup.style.display = "none";
        }
    });

    console.log("✅ Setting Popup đã được thiết lập!");
}

//chế độ bật sáng tối
function setupSettingPopup() {
    let settingIcon = document.getElementById("settingIcon");
    let settingPopup = document.getElementById("settingPopup");
    let themeToggle = document.getElementById("themeToggle");

    if (!settingIcon || !settingPopup || !themeToggle) {
        console.warn("⚠ settingIcon hoặc settingPopup chưa được tải!");
        return;
    }

    // Load trạng thái từ localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        themeToggle.checked = true;
    }

    // Sự kiện click icon mở setting
    settingIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        settingPopup.style.display = (settingPopup.style.display === "block") ? "none" : "block";
    });

    // Click ngoài để đóng
    document.addEventListener("click", function (event) {
        if (!settingIcon.contains(event.target) && !settingPopup.contains(event.target)) {
            settingPopup.style.display = "none";
        }
    });

    // Chuyển đổi chế độ sáng/tối
    themeToggle.addEventListener("change", function () {
        if (themeToggle.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });

    console.log("✅ Setting Popup & Dark Mode đã được thiết lập!");
}






