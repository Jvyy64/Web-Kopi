// Best seller products data
const bestSellerProducts = [
  {
    name: "Americano",
    description:
      "Espresso dengan air panas atau es, menyajikan rasa yang segar",
    price: 20000,
    image:
      "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kopi Susu Gula Aren",
    description: "Kopi dengan campuran susu yang fresh dipadukan gula aren",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Latte",
    description: "Espresso dengan lebih banyak susu steamed",
    price: 24000,
    image:
      "https://images.unsplash.com/photo-1559001724-fbad036dbc9e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Matcha Latte",
    description: "Minuman matcha dengan susu steamed yang segar",
    price: 23000,
    image:
      "https://images.unsplash.com/photo-1548983811-31048d472093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Waffle",
    description: "Makanan manis dengan selai yang mengenyangkan",
    price: 20000,
    image:
      "https://i.pinimg.com/736x/f1/5b/6f/f15b6ff556ea92b597c950bca32d5560.jpg",
  },
  {
    name: "Croissant",
    description: "Roti croissant renyah dan lebut di dalam membuat ketagihan",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1620146344904-097a0002d797?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

// Data produk kopi
const produk = [
  {
    id: 1,
    nama: "Espresso",
    kategori: "Kopi",
    deskripsi: "Kopi murni dengan rasa kuat dan kental",
    harga: 18000,
    gambar:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    nama: "Cappuccino",
    kategori: "Kopi",
    deskripsi: "Espresso dengan susu steamed dan foam",
    harga: 22000,
    gambar:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    nama: "Latte",
    kategori: "Kopi",
    deskripsi: "Espresso dengan lebih banyak susu steamed",
    harga: 24000,
    gambar:
      "https://images.unsplash.com/photo-1559001724-fbad036dbc9e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    nama: "Americano",
    kategori: "Kopi",
    deskripsi: "Espresso dengan air panas",
    harga: 20000,
    gambar:
      "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    nama: "Mocha",
    kategori: "Kopi",
    deskripsi: "Espresso dengan coklat dan susu steamed",
    harga: 25000,
    gambar:
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    nama: "Matcha Latte",
    kategori: "Non Kopi",
    deskripsi: "Minuman matcha dengan susu steamed yang segar",
    harga: 23000,
    gambar:
      "https://images.unsplash.com/photo-1548983811-31048d472093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    nama: "Red Velvet",
    kategori: "Non Kopi",
    deskripsi: "Minuman rasa red velvet yang segar dan manis",
    harga: 20000,
    gambar:
      "https://i.pinimg.com/736x/79/32/df/7932dfbef93d100f08f0b495b6b0f565.jpg",
  },
  {
    id: 8,
    nama: "Croissant",
    kategori: "Snack",
    deskripsi: "Roti croissant renyah dan lebut di dalam membuat ketagihan",
    harga: 15000,
    gambar:
      "https://images.unsplash.com/photo-1620146344904-097a0002d797?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    nama: "Kopi Tubruk",
    kategori: "Kopi",
    deskripsi: "Kopi tradisional Indonesia",
    harga: 15000,
    gambar:
      "https://i.pinimg.com/736x/5d/40/51/5d40516849a3f90d90d34c9e1d13d731.jpg",
  },
  {
    id: 10,
    nama: "Kopi Aceh Gayo",
    kategori: "Kopi",
    deskripsi: "Kopi spesial dari Aceh",
    harga: 30000,
    gambar:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    nama: "Kopi Toraja",
    kategori: "Kopi",
    deskripsi: "Kopi khas Sulawesi Selatan",
    harga: 28000,
    gambar:
      "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    nama: "Kopi Susu Gula Aren",
    kategori: "Kopi",
    deskripsi: "Kopi dengan campuran susu yang fresh dipadukan gula aren",
    harga: 25000,
    gambar:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 13,
    nama: "Kentang Goreng",
    kategori: "Snack",
    deskripsi: "Kentang goreng renyah dengan saus 3 rasa",
    harga: 15000,
    gambar:
      "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    nama: "Strawberry Jam",
    kategori: "Non Kopi",
    deskripsi: "Minuman dengan selai strawberry dan susu full cream",
    harga: 25000,
    gambar:
      "https://i.pinimg.com/736x/14/52/3f/14523fe99071e246845548cdb1ab6f79.jpg",
  },
  {
    id: 15,
    nama: "Cookies and Cream",
    kategori: "Non Kopi",
    deskripsi: "Minuman dengan rasa cookies and cream yang segar",
    harga: 25000,
    gambar:
      "https://i.pinimg.com/736x/17/39/a8/1739a845d50f56a720e305954ec29b3b.jpg",
  },
  {
    id: 16,
    nama: "Corn Ribs",
    kategori: "Snack",
    deskripsi: "Jagung goreng dengan bumbu yang gurih dan sehat",
    harga: 15000,
    gambar:
      "https://i.pinimg.com/736x/0b/f3/a8/0bf3a88e7772a2e9d88fdd1fbb2496c7.jpg",
  },
  {
    id: 17,
    nama: "Waffle",
    kategori: "Snack",
    deskripsi: "Makanan manis dengan selai yang mengenyangkan",
    harga: 20000,
    gambar:
      "https://i.pinimg.com/736x/f1/5b/6f/f15b6ff556ea92b597c950bca32d5560.jpg",
  },
  {
    id: 18,
    nama: "Cookies",
    kategori: "Snack",
    deskripsi: "Makanan yang dapat mengganjal lapar di perut sementara",
    harga: 9000,
    gambar:
      "https://i.pinimg.com/736x/0a/5f/cc/0a5fcc371b21a50decbad94e20ad52d5.jpg",
  },
];

// Data testimoni
let testimoni = [
  {
    id: 1,
    nama: "Raihan Wahyu",
    rating: 5,
    pesan:
      "Kopinya enak banget, rasanya autentik dan harganya terjangkau. Pelayanannya juga cepat dan ramah.",
  },
  {
    id: 2,
    nama: "Sarah Fitriani",
    rating: 4,
    pesan:
      "Tempatnya cozy banget, cocok untuk nongkrong atau kerja. Cappuccino-nya recommended!",
  },
  {
    id: 3,
    nama: "Budi Santoso",
    rating: 5,
    pesan:
      "Kopi Toraja-nya bikin ketagihan! Sudah berkali-kali beli dan rasanya selalu konsisten.",
  },
];

// Data pengguna
let users = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" },
];

// Variabel global
let currentUser = null;
let keranjang = [];
let currentSlide = 0;

// DOM Elements
const authMenu = document.getElementById("authMenu");
const userInfo = document.getElementById("userInfo");
const usernameDisplay = document.getElementById("usernameDisplay");
const mainNav = document.getElementById("mainNav");
const daftarProduk = document.getElementById("daftarProduk");
const daftarKeranjang = document.getElementById("daftarKeranjang");
const totalPembayaran = document.getElementById("totalPembayaran");
const daftarTestimoni = document.getElementById("daftarTestimoni");
const searchInput = document.getElementById("searchInput");
const filterKategori = document.getElementById("filterKategori");
const sortHarga = document.getElementById("sortHarga");

// Inisialisasi aplikasi
function initApp() {
  // Cek jika ada user yang sudah login dari localStorage
  const storedUser = localStorage.getItem("currentUser");
  if (storedUser) {
    currentUser = JSON.parse(storedUser);
  }

  // Cek jika ada keranjang dari localStorage
  const storedKeranjang = localStorage.getItem("keranjang");
  if (storedKeranjang) {
    keranjang = JSON.parse(storedKeranjang);
  }

  // Update UI
  updateAuthUI();

  // Render navigasi
  renderNavigation();

  // Render produk
  renderProduk();

  // Render testimoni
  renderTestimoni();

  // Inisialisasi carousel
  initCarousel();

  // Tampilkan section beranda pertama kali
  tampilkan("beranda");
}

// Render navigasi
function renderNavigation() {
  const navItems = [
    { id: "beranda", icon: "fa-home", text: "Beranda" },
    { id: "keranjang", icon: "fa-shopping-cart", text: "Keranjang" },
    { id: "tentang", icon: "fa-info-circle", text: "Tentang Kami" },
    { id: "testimoni", icon: "fa-comment-alt", text: "Testimoni" },
    { id: "kontak", icon: "fa-phone-alt", text: "Kontak" },
  ];

  mainNav.innerHTML = navItems
    .map(
      (item) => `
    <button onclick="tampilkan('${item.id}')">
      <i class="fas ${item.icon}"></i> ${item.text}
    </button>
  `
    )
    .join("");
}

// Render produk dengan filter dan sorting
function renderProduk() {
  let filteredProduk = [...produk];

  // Filter berdasarkan pencarian
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filteredProduk = filteredProduk.filter(
      (p) =>
        p.nama.toLowerCase().includes(searchTerm) ||
        p.deskripsi.toLowerCase().includes(searchTerm)
    );
  }

  // Filter berdasarkan kategori
  const kategori = filterKategori.value;
  if (kategori) {
    filteredProduk = filteredProduk.filter((p) => p.kategori === kategori);
  }

  // Sort berdasarkan harga
  const sort = sortHarga.value;
  if (sort === "asc") {
    filteredProduk.sort((a, b) => a.harga - b.harga);
  } else if (sort === "desc") {
    filteredProduk.sort((a, b) => b.harga - a.harga);
  }

  // Render produk
  daftarProduk.innerHTML = filteredProduk
    .map(
      (p) => `
    <div class="product-card">
      <div class="product-image-container">
        <img src="${p.gambar}" alt="${p.nama}" class="product-image">
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.nama}</h3>
        <p class="product-category">${p.kategori}</p>
        <p class="product-description">${p.deskripsi}</p>
        <p class="product-price">Rp ${p.harga.toLocaleString("id-ID")}</p>
        <button onclick="tambahKeKeranjang(${p.id})" class="add-to-cart-btn">
          <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
        </button>
      </div>
    </div>
  `
    )
    .join("");
}

// Render keranjang
function renderKeranjang() {
  if (keranjang.length === 0) {
    daftarKeranjang.innerHTML = `
      <div class="cart-empty">
        <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty cart">
        <h3>Keranjang Anda Kosong</h3>
        <p>Tambahkan produk ke keranjang untuk memulai belanja</p>
        <button onclick="tampilkan('beranda')">Jelajahi Produk</button>
      </div>
    `;
    totalPembayaran.textContent = "Rp 0";
    return;
  }

  daftarKeranjang.innerHTML = keranjang
    .map((item) => {
      const produkItem = produk.find((p) => p.id === item.id);
      return `
      <div class="cart-item">
        <img src="${produkItem.gambar}" alt="${
        produkItem.nama
      }" class="cart-item-image">
        <div class="cart-item-info">
          <h4 class="cart-item-name">${produkItem.nama}</h4>
          <p class="cart-item-price">Rp ${produkItem.harga.toLocaleString(
            "id-ID"
          )}</p>
        </div>
        <div class="cart-item-quantity">
          <button onclick="ubahJumlah(${item.id}, -1)">-</button>
          <span>${item.jumlah}</span>
          <button onclick="ubahJumlah(${item.id}, 1)">+</button>
        </div>
        <div class="cart-item-subtotal">
          <p>Rp ${(produkItem.harga * item.jumlah).toLocaleString("id-ID")}</p>
        </div>
        <button onclick="hapusDariKeranjang(${
          item.id
        })" class="remove-item-btn">
          <i class="fas fa-trash"></i> Hapus
        </button>
      </div>
    `;
    })
    .join("");

  // Hitung total pembayaran
  const total = keranjang.reduce((sum, item) => {
    const produkItem = produk.find((p) => p.id === item.id);
    return sum + produkItem.harga * item.jumlah;
  }, 0);

  totalPembayaran.textContent = `Rp ${total.toLocaleString("id-ID")}`;
}

// Render testimoni
function renderTestimoni() {
  daftarTestimoni.innerHTML = testimoni
    .map(
      (t) => `
    <div class="testimoni-item">
      <div class="testimoni-header">
        <h4>${t.nama}</h4>
        <div class="testimoni-rating">
          ${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}
        </div>
      </div>
      <p class="testimoni-pesan">"${t.pesan}"</p>
      <div class="testimoni-date">${new Date().toLocaleDateString(
        "id-ID"
      )}</div>
    </div>
  `
    )
    .join("");
}

// Tampilkan section tertentu
function tampilkan(sectionId) {
  // Sembunyikan semua section
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("visible");
  });

  // Tampilkan section yang dipilih
  document.getElementById(sectionId).classList.add("visible");

  // Jika section keranjang, render keranjang
  if (sectionId === "keranjang") {
    renderKeranjang();
  }
}

// Fungsi untuk login
function login(event) {
  event.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // Validasi input
  if (!username || !password) {
    showNotification("error", "Username dan password harus diisi");
    return;
  }

  // Cari user
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    currentUser = { username };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    updateAuthUI();
    showNotification("success", "Login berhasil");
    document.getElementById("loginForm").reset();
    tampilkan("beranda");
  } else {
    showNotification("error", "Username atau password salah");
  }
}

// Fungsi untuk register
function register(event) {
  event.preventDefault();
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  // Validasi input
  if (!username || !password) {
    showNotification("error", "Username dan password harus diisi");
    return;
  }

  // Cek jika username sudah ada
  const userExists = users.some((u) => u.username === username);
  if (userExists) {
    showNotification("error", "Username sudah digunakan");
    return;
  }

  // Tambahkan user baru
  users.push({ username, password });
  currentUser = { username };
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  updateAuthUI();
  showNotification("success", "Registrasi berhasil");
  document.getElementById("registerForm").reset();
  tampilkan("beranda");
}

// Fungsi untuk logout
function logout() {
  currentUser = null;
  localStorage.removeItem("currentUser");
  updateAuthUI();
  showNotification("success", "Logout berhasil");
  tampilkan("beranda");
}

// Update UI setelah login/logout
function updateAuthUI() {
  if (currentUser) {
    authMenu.classList.add("hidden");
    userInfo.classList.remove("hidden");
    usernameDisplay.textContent = currentUser.username;
  } else {
    authMenu.classList.remove("hidden");
    userInfo.classList.add("hidden");
  }
}

// Tampilkan form login
function showLogin() {
  tampilkan("loginSection");
}

// Tampilkan form register
function showRegister() {
  tampilkan("registerSection");
}

// Tambahkan produk ke keranjang
function tambahKeKeranjang(produkId) {
  const existingItem = keranjang.find((item) => item.id === produkId);

  if (existingItem) {
    existingItem.jumlah += 1;
  } else {
    keranjang.push({ id: produkId, jumlah: 1 });
  }

  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  showNotification("success", "Produk ditambahkan ke keranjang");
  renderProduk();
}

// Ubah jumlah produk di keranjang
function ubahJumlah(produkId, delta) {
  const item = keranjang.find((item) => item.id === produkId);
  if (!item) return;

  item.jumlah += delta;

  if (item.jumlah <= 0) {
    hapusDariKeranjang(produkId);
    return;
  }

  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  renderKeranjang();
}

// Hapus produk dari keranjang
function hapusDariKeranjang(produkId) {
  keranjang = keranjang.filter((item) => item.id !== produkId);
  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  showNotification("success", "Produk dihapus dari keranjang");
  renderKeranjang();
}

// Proses checkout
// Proses checkout
function prosesCheckout() {
  if (keranjang.length === 0) {
    showNotification("error", "Keranjang belanja kosong");
    return;
  }

  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;
  const metodePembayaran = document.getElementById("metodePembayaran").value;

  if (!nama || !metodePembayaran) {
    showNotification("error", "Nama pembeli dan metode pembayaran harus diisi");
    return;
  }

  // Create order data
  const orderData = {
    customer: nama,
    address: alamat || "Tidak diisi",
    items: keranjang.map((item) => {
      const produkItem = produk.find((p) => p.id === item.id);
      return {
        product: produkItem.nama,
        quantity: item.jumlah,
        price: produkItem.harga,
      };
    }),
    total: calculateTotal(),
    paymentMethod: metodePembayaran,
    date: new Date().toISOString(),
  };

  if (metodePembayaran === "QRIS") {
    showQRISPayment(orderData);
  } else {
    processCashPayment(orderData);
  }
}

// Show QRIS payment modal
function showQRISPayment(orderData) {
  const total = orderData.total;
  const modal = document.getElementById("qrisModal");
  const modalBody = modal.querySelector(".modal-body");

  modalBody.innerHTML = `
    <h3>Pembayaran QRIS</h3>
    <p class="payment-total"><strong>Total Pembayaran: Rp ${total.toLocaleString(
      "id-ID"
    )}</strong></p>
    <div class="qris-code">
      <img src="Qris.jpg" alt="QRIS Code">
    </div>
    <div class="payment-instructions">
      <p>Silakan scan QR code di atas menggunakan aplikasi pembayaran digital Anda</p>
    </div>
    <div class="payment-buttons">
      <button class="cancel-btn" onclick="cancelQRISPayment()">
        <i class="fas fa-times"></i> Batal
      </button>
      <button class="confirm-btn" id="confirmQRISBtn" disabled>
        <i class="fas fa-spinner fa-spin"></i> Menunggu Pembayaran...
      </button>
    </div>
  `;

  modal.classList.remove("hidden");

  // Simulate payment processing
  const confirmBtn = document.getElementById("confirmQRISBtn");
  setTimeout(() => {
    confirmBtn.disabled = false;
    confirmBtn.innerHTML =
      '<i class="fas fa-check-circle"></i> Pembayaran Selesai';
    confirmBtn.onclick = () => completeQRISPayment(orderData);
  }, 5000);
}

// Complete QRIS payment
function completeQRISPayment(orderData) {
  document.getElementById("qrisModal").classList.add("hidden");

  processQRISPayment()
    .then(() => {
      saveOrderToHistory(orderData);
      clearCart();
      showOrderConfirmation(orderData);
      showNotification("success", "Pembayaran QRIS berhasil diproses!");
    })
    .catch((error) => {
      showNotification("error", "Gagal memproses pembayaran: " + error.message);
    });
}

// Cancel QRIS payment
function cancelQRISPayment() {
  document.getElementById("qrisModal").classList.add("hidden");
  showNotification("info", "Pembayaran QRIS dibatalkan");
}

// Process cash payment
async function processCashPayment(orderData) {
  try {
    showNotification(
      "success",
      "Pesanan berhasil dibuat! Memproses pembayaran cash..."
    );

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const confirmed = await showCashConfirmation(orderData.total);

    if (confirmed) {
      saveOrderToHistory(orderData);
      clearCart();
      showOrderConfirmation(orderData);
      showNotification("success", "Silakan lakukan pembayaran cash di kasir");
    } else {
      showNotification("info", "Pembayaran cash dibatalkan");
    }
  } catch (error) {
    console.error("Error processing cash payment:", error);
    showNotification("error", "Terjadi kesalahan saat memproses pembayaran");
  }
}

// Show cash payment confirmation dialog
function showCashConfirmation(totalAmount) {
  return new Promise((resolve) => {
    const dialog = document.createElement("div");
    dialog.className = "cash-confirmation";
    dialog.innerHTML = `
      <div class="confirmation-box">
        <div class="cash-icon">
          <i class="fas fa-money-bill-wave"></i>
        </div>
        <div class="confirmation-title">Konfirmasi Pembayaran</div>
        <div class="confirmation-amount">Rp ${totalAmount.toLocaleString(
          "id-ID"
        )}</div>
        <div class="confirmation-method">
          <i class="fas fa-info-circle"></i> Anda memilih pembayaran Cash
        </div>
        <div class="confirmation-buttons">
          <button class="cancel-btn">Batal</button>
          <button class="confirm-btn">Lanjutkan</button>
        </div>
      </div>
    `;

    document.body.appendChild(dialog);

    setTimeout(() => dialog.classList.add("active"), 10);

    dialog.querySelector(".confirm-btn").addEventListener("click", () => {
      dialog.classList.remove("active");
      setTimeout(() => dialog.remove(), 300);
      resolve(true);
    });

    dialog.querySelector(".cancel-btn").addEventListener("click", () => {
      dialog.classList.remove("active");
      setTimeout(() => dialog.remove(), 300);
      resolve(false);
    });
  });
}

// Calculate total payment amount
function calculateTotal() {
  return keranjang.reduce((sum, item) => {
    const produkItem = produk.find((p) => p.id === item.id);
    return sum + produkItem.harga * item.jumlah;
  }, 0);
}

// Save order to history
function saveOrderToHistory(orderData) {
  let orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
  orderHistory.push(orderData);
  localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
}

// Show order confirmation
function showOrderConfirmation(orderData) {
  const confirmationHTML = `
    <div class="order-confirmation">
      <h2>Pesanan Berhasil Dibuat!</h2>
      <div class="confirmation-details">
        <p><strong>Nomor Pesanan:</strong> #${Math.floor(
          Math.random() * 1000000
        )}</p>
        <p><strong>Nama Pelanggan:</strong> ${orderData.customer}</p>
        <p><strong>Total Pembayaran:</strong> Rp ${orderData.total.toLocaleString(
          "id-ID"
        )}</p>
        <p><strong>Metode Pembayaran:</strong> ${orderData.paymentMethod}</p>
        <p><strong>Tanggal:</strong> ${new Date(orderData.date).toLocaleString(
          "id-ID"
        )}</p>
      </div>
      <button onclick="tampilkan('beranda')" class="back-to-home-btn">
        <i class="fas fa-home"></i> Kembali ke Beranda
      </button>
    </div>
  `;

  daftarKeranjang.innerHTML = confirmationHTML;
  totalPembayaran.textContent = "Rp 0";
}

// Clear cart function
function clearCart() {
  keranjang = [];
  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  updateCartCounter();
}

// Update cart counter
function updateCartCounter() {
  try {
    const cartCounter = document.getElementById("cart-counter");
    if (cartCounter) {
      cartCounter.textContent = keranjang.length;
    }
  } catch (error) {
    console.error("Error updating cart counter:", error);
  }
}

// Mock payment processing function
function processQRISPayment() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

// Mock payment validation function
function validateQRISPayment() {
  return true;
}

// Submit testimoni
function submitTestimoni(event) {
  event.preventDefault();

  const nama = document.getElementById("namaTesti").value;
  const rating = document.querySelector('input[name="rating"]:checked')?.value;
  const pesan = document.getElementById("pesanTesti").value;

  if (!nama || !rating || !pesan) {
    showNotification("error", "Semua field testimoni harus diisi");
    return;
  }

  // Tambahkan testimoni baru
  const newTestimoni = {
    id: testimoni.length + 1,
    nama,
    rating: parseInt(rating),
    pesan,
  };

  testimoni.unshift(newTestimoni); // Tambahkan di awal array
  document.getElementById("testimoniForm").reset();
  renderTestimoni();
  showNotification("success", "Testimoni berhasil dikirim");
}

// Tampilkan notifikasi
function showNotification(type, message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.className = `notification ${type} show`;

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

let carouselInterval;

// Initialize carousel
function initCarousel() {
  const carouselTrack = document.getElementById("carouselTrack");

  bestSellerProducts.forEach((product) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    slide.innerHTML = `
      <div class="best-seller-badge">Best Seller</div>
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>Rp ${product.price.toLocaleString("id-ID")}</strong></p>
      <button onclick="tambahKeKeranjang(${
        produk.find((p) => p.nama === product.name)?.id || 1
      })" class="add-to-cart-btn">
        <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
      </button>
    `;
    carouselTrack.appendChild(slide);
  });

  updateCarousel();
}

// Update carousel position
function updateCarousel() {
  const track = document.getElementById("carouselTrack");
  const slides = document.querySelectorAll(".carousel-slide");
  if (slides.length > 0) {
    const slideWidth = slides[0].offsetWidth + 8; // width + gap yang lebih kecil
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    // Disable/enable buttons
    document.querySelector(".carousel-button.prev").disabled =
      currentSlide === 0;
    document.querySelector(".carousel-button.next").disabled =
      currentSlide >= bestSellerProducts.length - 3;
  }
}

// Carousel navigation
function moveCarousel(direction) {
  const slides = document.querySelectorAll(".carousel-slide");
  const maxSlide = bestSellerProducts.length - 3;

  currentSlide += direction;

  // Boundary checks
  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide > maxSlide) currentSlide = maxSlide;

  updateCarousel();
}

// Inisialisasi aplikasi saat halaman dimuat
window.onload = initApp;
