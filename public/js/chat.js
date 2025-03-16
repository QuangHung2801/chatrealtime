document.querySelectorAll(".attachment-icon, .camera-icon").forEach(icon => {
    icon.addEventListener("click", function () {
        document.getElementById("fileInput").click(); // Mở hộp thoại chọn tệp
    });
});

document.getElementById("fileInput").addEventListener("change", function () {
    let file = this.files[0]; 
    if (file) {
        let messageInput = document.getElementById("messageInput");
        let validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

        if (validImageTypes.includes(file.type)) {
            messageInput.value = `${file.name}`; // File ảnh
        } else {
            messageInput.value = `${file.name}`; // File đính kèm khác
        }
    }
});



//thông tin hội thoại 
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleContactInfo");
    const mainBoxChat = document.querySelector(".main-box-chat");

    toggleButton.addEventListener("click", function () {
        mainBoxChat.classList.toggle("box-contact-info-opened");
    });
});


// Emoji Picker
document.addEventListener("DOMContentLoaded", function () {
    const emojiIcon = document.getElementById('emoji-icon');
    const emojiContainer = document.getElementById('emoji-container');
    const emojiPicker = document.getElementById('emojiPicker');
    const messageInput = document.getElementById('messageInput');

    emojiIcon.addEventListener('click', function () {
        console.log("Bấm vào icon mặt cười!");

        // Hiển thị tạm để lấy chiều cao
        emojiContainer.style.display = 'block';
        emojiPicker.style.display = 'block';

        let iconRect = emojiIcon.getBoundingClientRect();
        let containerHeight = emojiContainer.offsetHeight;

        // Cập nhật vị trí hiển thị ngay phía trên icon
        emojiContainer.style.position = 'absolute';
        emojiContainer.style.left = iconRect.left + "px";
        emojiContainer.style.top = (iconRect.top - containerHeight - 5) + "px"; // Trừ bớt khoảng cách

        // Nếu nó đã mở thì đóng lại
        if (emojiContainer.dataset.open === "true") {
            emojiContainer.style.display = 'none';
            emojiContainer.dataset.open = "false";
        } else {
            emojiContainer.dataset.open = "true";
        }
    });

    // Xử lý khi chọn emoji
    emojiPicker.addEventListener('emoji-click', function (event) {
        console.log("Chọn emoji: ", event.detail.unicode);
        messageInput.value += event.detail.unicode; 
    });

    // Ẩn Emoji Picker khi click ra ngoài
    document.addEventListener('click', function (event) {
        if (!emojiContainer.contains(event.target) && !emojiIcon.contains(event.target)) {
            emojiContainer.style.display = 'none';
            emojiContainer.dataset.open = "false";
        }
    });
});



document.querySelectorAll(".emoji").forEach((emoji) => {
    emoji.addEventListener("click", function () {
        let message = this.closest(".box-message-received");
        let reactionBtn = message.querySelector(".reaction-btn");
        reactionBtn.innerText = this.innerText; // Hiển thị icon vừa chọn
    });
});

document.querySelectorAll(".emoji").forEach((emoji) => {
    emoji.addEventListener("click", function () {
        let message = this.closest(".box-message-send");
        let reactionBtn = message.querySelector(".reaction-btn");
        reactionBtn.innerText = this.innerText; // Hiển thị icon vừa chọn
    });
});

document.querySelectorAll('.reaction-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
        let menu = button.nextElementSibling;
        // Kiểm tra xem menu có đang mở không, nếu có thì đóng tất cả menu khác trước khi mở menu này
        document.querySelectorAll('.reaction-menu').forEach(m => {
            if (m !== menu) m.style.display = 'none';
        });
        menu.style.display = (menu.style.display === 'flex' ? 'none' : 'flex');
    });
});

// Khi click ra ngoài thì đóng tất cả các reaction menu
document.addEventListener('click', () => {
    document.querySelectorAll('.reaction-menu').forEach(menu => {
        menu.style.display = 'none';
    });
});

//tìm kiếm cuộc trò chuyện
document.getElementById("searchIcon").addEventListener("click", function() {
    let groupInfo = document.getElementById("groupInfo");
    let searchBox = document.getElementById("searchBox");

    if (searchBox.style.display === "none" || searchBox.style.display === "") {
        searchBox.style.display = "block";
        groupInfo.style.display = "none";
    } else {
        searchBox.style.display = "none";
        groupInfo.style.display = "block";
    }
});

document.getElementById("toggleContactInfo").addEventListener("click", function() {
    let groupInfo = document.getElementById("groupInfo");
    let searchBox = document.getElementById("searchBox");

    if (searchBox.style.display === "block") {
        searchBox.style.display = "none";
        groupInfo.style.display = "block";
    } else {
        groupInfo.style.display = (groupInfo.style.display === "none" || groupInfo.style.display === "") ? "block" : "none";
    }
});


//hội thoại
// document.addEventListener("DOMContentLoaded", function () {
//     const chatItems = document.querySelectorAll(".box-group");
//     const groupInfoHeader = document.querySelector(".box-contact-info-header");
//     const memberInfoHeader = document.querySelector(".box-contact-info-header-member");
//     const groupInfoBody = document.querySelector(".box-contact-info-body");
//     const memberInfoBody = document.querySelector(".box-contact-info-body-member");

//     chatItems.forEach(item => {
//         item.addEventListener("click", function () {
//             let isGroup = this.dataset.chat && this.dataset.chat.includes("group");

//             // Ẩn tất cả trước khi hiển thị nội dung tương ứng
//             groupInfoHeader.style.display = "none";
//             memberInfoHeader.style.display = "none";
//             groupInfoBody.style.display = "none";
//             memberInfoBody.style.display = "none";

//             // Hiển thị nội dung tương ứng
//             if (isGroup) {
//                 groupInfoHeader.style.display = "block";
//                 groupInfoBody.style.display = "block";
//             } else {
//                 memberInfoHeader.style.display = "block";
//                 memberInfoBody.style.display = "block";
//             }
//         });
//     });
// });

//khung chat mở khi ẩn
document.querySelectorAll(".box-group").forEach(function(element) {
    element.addEventListener("click", function() {
        var chatBox = document.getElementById("chat-vchat");
        if (chatBox.style.display === "none" || chatBox.style.display === "") {
            chatBox.style.display = "block";
        }
    });
});






//setting
document.addEventListener("DOMContentLoaded", function() {
    let settingIcon = document.getElementById("settingIcon");
    let settingPopup = document.getElementById("settingPopup");

    if (settingIcon && settingPopup) {
        settingIcon.addEventListener("click", function(event) {
            event.stopPropagation();
            settingPopup.style.display = (settingPopup.style.display === "block") ? "none" : "block";
        });

        document.addEventListener("click", function(event) {
            if (!settingIcon.contains(event.target) && !settingPopup.contains(event.target)) {
                settingPopup.style.display = "none";
            }
        });
    }
});

//sự kiện khi click box-group
document.addEventListener("DOMContentLoaded", function () {
    const chatItems = document.querySelectorAll(".box-group");

    chatItems.forEach(item => {
        item.addEventListener("click", function () {
            // Xóa class active khỏi tất cả các tin nhắn
            chatItems.forEach(el => el.classList.remove("active"));
            
            // Thêm class active vào tin nhắn được chọn
            this.classList.add("active");
        });
    });
});

//avatar khung chat
document.addEventListener("DOMContentLoaded", function () {
    var avatarContainer = document.querySelector(".box-avatar-1");
    var avatars = avatarContainer.querySelectorAll("img");
    var extraAvatar = avatarContainer.querySelector(".extra-avatar-1"); // Chọn phần tử có sẵn

    if (avatars.length > 3) {
        for (var i = 3; i < avatars.length; i++) {
            avatars[i].style.display = "none";
        }

        var extraCount = avatars.length - 3;
        extraAvatar.innerText = `+${extraCount}`;
        extraAvatar.style.display = "flex";

        // Đưa extra-avatar-1 vào đúng vị trí sau ảnh thứ ba
        avatarContainer.insertBefore(extraAvatar, avatars[3]);
    } else {
        extraAvatar.style.display = "none"; // Ẩn nếu không có ảnh bị ẩn
    }
});

//tìm kiếm tin nhắn 
document.getElementById("searchInput").addEventListener("focus", function() {
    document.getElementById("allMessages").style.display = "none"; // Ẩn danh sách tin nhắn
    document.getElementById("recentSearches").style.display = "block"; // Hiển thị danh sách tìm kiếm gần đây
});

document.getElementById("searchInput").addEventListener("blur", function() {
    setTimeout(() => {
        document.getElementById("allMessages").style.display = "block"; // Hiển thị lại danh sách tin nhắn
        document.getElementById("recentSearches").style.display = "none"; // Ẩn danh sách tìm kiếm gần đây
    }, 200); // Chờ một chút để tránh sự kiện blur xảy ra khi click vào danh sách gần đây
});


//menu tin nhắn ba chấm
document.addEventListener("DOMContentLoaded", function () {
    const chatBoxes = document.querySelectorAll(".box-group");

    chatBoxes.forEach(box => {
        const dot = box.querySelector(".dots");
        const menu = box.querySelector(".menu");

        if (!dot || !menu) return;

        // Khi rê chuột vào hộp chat, hiển thị dấu ba chấm
        box.addEventListener("mouseenter", function () {
            dot.style.display = "inline-block";
        });

        // Khi rời chuột, ẩn dấu ba chấm nếu menu chưa mở
        box.addEventListener("mouseleave", function () {
            if (!menu.style.display || menu.style.display === "none") {
                dot.style.display = "none";
            }
        });

        // Khi bấm vào dấu ba chấm, hiển thị menu
        dot.addEventListener("click", function (event) {
            event.stopPropagation();

            // Đóng tất cả menu khác trước khi mở menu này
            document.querySelectorAll(".menu").forEach(m => {
                if (m !== menu) {
                    m.style.display = "none";
                }
            });

            // Hiển thị hoặc ẩn menu
            menu.style.display = menu.style.display === "block" ? "none" : "block";
        });
    });

    // Ẩn menu khi click ra ngoài
    document.addEventListener("click", function () {
        document.querySelectorAll(".menu").forEach(menu => {
            menu.style.display = "none";
        });

        // Ẩn dấu ba chấm nếu menu không mở
        document.querySelectorAll(".dots").forEach(dot => {
            if (!dot.nextElementSibling.style.display || dot.nextElementSibling.style.display === "none") {
                dot.style.display = "none";
            }
        });
    });
});

// Ghim hội thoại
document.addEventListener("DOMContentLoaded", function () {
    const chatList = document.getElementById("chat-list");
    const maxPinned = 5;

    document.querySelectorAll(".pin").forEach(pinButton => {
        pinButton.addEventListener("click", function (event) {
            const chatBox = event.target.closest(".box-group");

            if (!chatBox) return;

            const pinnedChats = document.querySelectorAll(".box-group.pinned");

            if (chatBox.classList.contains("pinned")) {
                // Bỏ ghim nếu đã ghim trước đó
                chatBox.classList.remove("pinned");
                chatBox.querySelector(".pin-icon").style.display = "none";
            } else {
                if (pinnedChats.length >= maxPinned) {
                    // Nếu đã đạt 5 ghim, bỏ ghim tin nhắn cũ nhất
                    pinnedChats[0].classList.remove("pinned");
                    pinnedChats[0].querySelector(".pin-icon").style.display = "none";
                }

                // Thêm ghim mới
                chatBox.classList.add("pinned");
                chatBox.querySelector(".pin-icon").style.display = "inline";
            }

            updateChatOrder();
        });
    });

    function updateChatOrder() {
        const allChats = Array.from(document.querySelectorAll(".box-group"));
        const pinnedChats = allChats.filter(chat => chat.classList.contains("pinned"));
        const normalChats = allChats.filter(chat => !chat.classList.contains("pinned"));

        // Sắp xếp lại danh sách chat
        chatList.innerHTML = "";
        [...pinnedChats, ...normalChats].forEach(chat => {
            chatList.appendChild(chat.closest("li"));
        });
    }
});


//user-avatar
document.querySelectorAll('.user-avatar').forEach(avatar => {
    let images = avatar.querySelectorAll('img');
    let hiddenCount = avatar.querySelector('.hidden-count');

    if (images.length > 2) { 
        images.forEach((img, index) => {
            if (index > 1) img.style.display = 'none'; // Ẩn ảnh nếu nhiều hơn 2
        });
    }
});
  

//khung menu thành viên ở hộp thoại
window.onload = function () {
    console.log("HTML đã tải xong, bắt đầu chạy JavaScript!");

    document.addEventListener("click", function (event) {
        console.log("Sự kiện click xảy ra:", event.target);
        let target = event.target;

        // Xử lý click vào dấu ba chấm
        if (target.closest(".mdi-dots-vertical")) {
            event.stopPropagation();

            let memberActions = target.closest(".member-actions");
            let menu = memberActions ? memberActions.querySelector(".action-menu") : null;

            if (!menu) {
                console.warn("Không tìm thấy menu!");
                return;
            }

            console.log("Click vào menu:", menu);

            // Ẩn tất cả menu trước khi mở menu được chọn
            document.querySelectorAll(".action-menu").forEach(m => {
                if (m !== menu) m.style.display = "none";
            });

            // Toggle menu
            menu.style.display = (menu.style.display === "block") ? "none" : "block";
            return;
        }

        // Ẩn menu khi click ra ngoài
        document.querySelectorAll(".action-menu").forEach(menu => {
            menu.style.display = "none";
        });

        // Xử lý sự kiện xóa thành viên
        if (target.closest(".btn-remove-member")) {
            event.stopPropagation();

            let memberItem = target.closest(".single-avatar");
            let memberName = memberItem.querySelector("span").textContent.trim();

            if (confirm(`Bạn có chắc chắn muốn xóa ${memberName} khỏi nhóm không?`)) {
                console.log(`Xóa thành viên: ${memberName}`);
                memberItem.remove();
            }
        }
    });
};



























