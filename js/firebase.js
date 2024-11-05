const firebaseConfig = {
  apiKey: "AIzaSyBn0Biy-XAcwvfVQiDk5ttn0O5ARuzfEnI",
  authDomain: "weddinglam.firebaseapp.com",
  projectId: "weddinglam",
  storageBucket: "weddinglam.firebasestorage.app",
  messagingSenderId: "13922865916",
  appId: "1:13922865916:web:180c61a1020b2ad881bd79",
  measurementId: "G-Q9N9V68WVB",
};
// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Hàm gửi dữ liệu
const submitForm = (event) => {
  event.preventDefault(); // Ngăn chặn reload trang

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  const newRef = database.ref("wish_wedding").push(); 
  newRef
    .set(data)
    .then(() => {
      console.log("Dữ liệu đã được lưu!");
      event.target.reset(); // Đặt lại form
    })
    .catch((error) => {
      console.error("Có lỗi xảy ra: ", error);
    });
};

// Hàm lấy dữ liệu
const getData = () => {
  const ref = database.ref("wish_wedding"); // Thay 'users' bằng tên collection của bạn

  ref.on(
    "value",
    (snapshot) => {
      const data = snapshot.val();
      displayData(data);
    },
    (error) => {
      console.error("Lỗi khi lấy dữ liệu: ", error);
    }
  );
};

// Hàm hiển thị dữ liệu
const displayData = (data) => {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = ''; // Xóa nội dung cũ

    if (data) {
        // Chuyển dữ liệu thành mảng để dễ dàng sắp xếp
        const itemsArray = Object.entries(data).map(([key, value]) => ({ id: key, ...value })).reverse();

        // Sắp xếp mảng theo thứ tự mới nhất (ID thường là timestamp nếu bạn sử dụng push())
        // itemsArray.sort((a, b) => b.id.localeCompare(a.id));

        // Hiển thị dữ liệu
        itemsArray.forEach(item => {
            outputElement.innerHTML += `<div class='wish_content'><p class='wish_name'>${item.name}✍</p><p class='wish_body'> ${item.wish}</p></div>`;
        });
    } else {
        outputElement.innerHTML = '<p>Chưa có dữ liệu nào.</p>';
    }
};


// Thêm sự kiện submit vào form
document.getElementById("dataForm").addEventListener("submit", submitForm);

// Gọi hàm getData để bắt đầu lấy dữ liệu
getData();
