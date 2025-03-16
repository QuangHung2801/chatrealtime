

function toggleSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
//phần hiển thị tìm kiếm
function searchContacts() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let contacts = document.querySelectorAll('.box-contact-detail-name');

    contacts.forEach(contact => {
        let name = contact.innerText.toLowerCase();
        let parent = contact.closest('.box-contact');

        if (name.includes(input)) {
            parent.style.display = "flex";
        } else {
            parent.style.display = "none";
        }
    });
}

function showSection(sectionId) {
    // Ẩn tất cả các phần nội dung bên phải
    document.querySelectorAll('.right-section, .main-box-contact').forEach(section => {
        section.style.display = 'none';
    });

    // Hiển thị phần được chọn
    document.getElementById(sectionId).style.display = 'block';
}

function showContactInfo(name, imgSrc, gender, birthday, phone, email, address) {
    const contentArea = document.getElementById("content-area");
    const contactDetail = document.getElementById("contact-detail");

    // Nếu contact-detail không tồn tại, tải lại nội dung từ file HTML
    if (!contactDetail) {
        fetch("component/contact/contact-detail.html") // Thay "path/to/contact-detail.html" bằng đường dẫn đúng
            .then(response => response.text())
            .then(data => {
                contentArea.innerHTML = data; // Thay thế nội dung content-area
                updateContactInfo(name, imgSrc, gender, birthday, phone, email, address);
            })
            .catch(error => console.error("Lỗi khi tải contact-detail.html:", error));
    } else {
        updateContactInfo(name, imgSrc, gender, birthday, phone, email, address);
    }
}

// Hàm cập nhật thông tin liên hệ
function updateContactInfo(name, imgSrc, gender, birthday, phone, email, address) {
    document.getElementById("contact-img").src = imgSrc;
    document.getElementById("contact-name").textContent = name;
    document.getElementById("contact-gender").textContent = gender;
    document.getElementById("contact-birthday").textContent = birthday;
    document.getElementById("contact-phone").textContent = phone;
    document.getElementById("contact-email").textContent = email;
    document.getElementById("contact-address").textContent = address;

    // Ẩn các phần khác nếu cần
    document.querySelectorAll('.right-section, .main-box-contact').forEach(section => {
        section.style.display = 'none';
    });

    // Hiển thị contact-detail sau khi tải xong
    document.getElementById("contact-detail").style.display = "block";
}

//sự kiện xem thêm ở lời mời
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".requests-section");

    sections.forEach(section => {
        const list = section.querySelector(".requests-list");
        const items = list.querySelectorAll(".request-card");
        const viewMoreBtn = section.querySelector(".view-more");

        if (items.length > 3) {
            items.forEach((item, index) => {
                if (index >= 3) {
                    item.style.display = "none";
                }
            });

            viewMoreBtn.style.display = "block";

            viewMoreBtn.addEventListener("click", function () {
                items.forEach(item => item.style.display = "block");
                viewMoreBtn.style.display = "none";
            });
        } else {
            viewMoreBtn.style.display = "none";
        }
    });
});

//khung xóa chặn bạn
function toggleMenu(event, element) {
    event.stopPropagation(); // Ngăn sự kiện lan ra ngoài

    let menu = element.nextElementSibling;

    document.querySelectorAll(".dropdown-menu").forEach(m => {
        if (m !== menu) {
            m.style.display = "none";
        }
    });

    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.style.display = "none";
    });
});

function removeFriend(name) {
    alert("Đã xóa bạn: " + name);
}

function blockFriend(name) {
    alert("Đã chặn: " + name);
}


//menu ở contact
document.addEventListener("DOMContentLoaded", function () {
    function loadContent(page) {
        fetch(`component/contact/${page}.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById("content-area").innerHTML = data;
            })
            .catch(error => console.error("Lỗi tải trang: ", error));
    }

    document.querySelectorAll(".box-left-menu li").forEach(item => {
        item.addEventListener("click", function () {
            let page = this.getAttribute("data-page");
            if (page) {
                loadContent(page);
            }
        });
    });
    loadContent("contact-detail");
});

//hình ảnh
document.querySelectorAll('.group-item').forEach(avatar => {
    let images = avatar.querySelectorAll('img');

    if (images.length > 2) {
        images.forEach((img, index) => {
            if (index > 1) img.style.display = 'none'; // Ẩn ảnh nếu nhiều hơn 2
        });

        // Tạo một thẻ span để hiển thị số ảnh bị ẩn
        let hiddenCount = document.createElement('span');
        hiddenCount.className = 'hidden-count';
        hiddenCount.innerText = `+${images.length - 2}`;
        
        // Chèn vào trước ảnh thứ 3
        avatar.querySelector('.avatars').appendChild(hiddenCount);
    }
});

//event khung xóa nhóm 
window.onload = function () {
    console.log("HTML đã tải xong, bắt đầu chạy JavaScript!");

    document.addEventListener("click", function (event) {
        let target = event.target;

        // Xử lý click vào dấu ba chấm
        if (target.closest(".group-options")) {
            event.stopPropagation(); // Ngăn sự kiện lan ra ngoài

            let menu = target.closest(".group-options").querySelector(".options-menu");
            if (!menu) return;

            console.log("Click vào menu:", menu);

            // Ẩn tất cả menu trước khi mở menu được chọn
            document.querySelectorAll(".options-menu").forEach(m => {
                if (m !== menu) m.style.display = "none";
            });

            // Toggle menu (hiện hoặc ẩn)
            menu.style.display = menu.style.display === "block" ? "none" : "block";
            return;
        }

        // Xử lý click ra ngoài để ẩn menu
        document.querySelectorAll(".options-menu").forEach(menu => {
            menu.style.display = "none";
        });

        // Xử lý sự kiện xóa nhóm
        if (target.closest(".delete-group")) {
            event.stopPropagation(); // Ngăn chặn lan ra ngoài

            let groupItem = target.closest(".group-item");
            if (confirm("Bạn có chắc chắn muốn xóa nhóm này không?")) {
                console.log("Xóa nhóm:", groupItem);
                groupItem.remove();
            }
        }
    });
};





