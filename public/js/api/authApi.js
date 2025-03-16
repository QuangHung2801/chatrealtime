document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();  

        const formData = new FormData(registerForm);
        const data = {
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
            confirmPassword: formData.get("confirmPassword")
        };

        fetch("http://localhost:3000/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert("Đăng ký thành công!");
            window.location.href = "login.html"; 
        })
        .catch(error => console.error("Lỗi khi gửi request:", error));
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();  
        console.log("Form submit event triggered!");

        const formData = new FormData(loginForm);
        const data = {
            username: formData.get("username"),
            password: formData.get("password")
        };

        fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Đăng nhập thành công!");
                window.location.href = "chat.html"; 
            } else {
                alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
            }
        })
        .catch(error => console.error("Lỗi khi gửi request:", error));
    });
});
