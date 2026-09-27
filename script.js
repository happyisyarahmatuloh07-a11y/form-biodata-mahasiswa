// Array untuk menyimpan beberapa data biodata mahasiswa
const daftarMahasiswa = [];

// Mengambil referensi elemen
const btnSimpan = document.getElementById("btnSimpan");
const btnBersihkan = document.getElementById("btnBersihkan");
const tabelBody = document.getElementById("tabelBody");


// Fungsi untuk mengosongkan input form
function bersihkanForm() {
    document.getElementById("nama").value = "";
    document.getElementById("nim").value = "";
    document.getElementById("prodi").value = "";
    document.getElementById("semester").value = "";
    document.getElementById("email").value = "";
}


// Fungsi untuk menampilkan seluruh data mahasiswa ke dalam tabel
function renderTabel() {
    // Jika belum ada data
    if (daftarMahasiswa.length === 0) {
        tabelBody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center">Belum ada data mahasiswa yang tersimpan.</td>
            </tr>
        `;
        return;
    }

    // Membuat baris-baris data dari array
    let isiTabel = "";
    daftarMahasiswa.forEach(function(mhs, index) {
        isiTabel += `
            <tr>
                <td class="text-center">${index + 1}</td>
                <td>${mhs.nim}</td>
                <td>${mhs.nama}</td>
                <td>${mhs.prodi}</td>
                <td class="text-center">${mhs.semester}</td>
                <td>${mhs.email}</td>
            </tr>
        `;
    });

    tabelBody.innerHTML = isiTabel;
}


// EVENT TOMBOL SIMPAN
btnSimpan.addEventListener("click", function() {

    // Mengambil data dari input
    const nama = document.getElementById("nama").value.trim();
    const nim = document.getElementById("nim").value.trim();
    const prodi = document.getElementById("prodi").value.trim();
    const semester = document.getElementById("semester").value.trim();
    const email = document.getElementById("email").value.trim();


    // VALIDASI NAMA
    if (nama === "") {
        alert("Nama wajib diisi!");
        return;
    }


    // VALIDASI NIM
    if (nim === "") {
        alert("NIM wajib diisi!");
        return;
    }

    if (!/^\d+$/.test(nim)) {
        alert("NIM hanya boleh berisi angka!");
        return;
    }


    // VALIDASI PROGRAM STUDI
    if (prodi === "") {
        alert("Program studi wajib diisi!");
        return;
    }


    // VALIDASI SEMESTER
    if (semester === "") {
        alert("Semester wajib diisi!");
        return;
    }

    const semesterNumber = Number(semester);

    if (semesterNumber < 1 || semesterNumber > 14) {
        alert("Semester harus berada di antara 1 sampai 14!");
        return;
    }


    // VALIDASI EMAIL
    if (email === "") {
        alert("Email wajib diisi!");
        return;
    }

    if (!email.includes("@")) {
        alert("Format email tidak valid!");
        return;
    }


    // SIMPAN DATA KE DALAM ARRAY
    const dataBaru = {
        nama: nama,
        nim: nim,
        prodi: prodi,
        semester: semester,
        email: email
    };

    daftarMahasiswa.push(dataBaru);

    // Tampilkan data ke tabel
    renderTabel();

    // Kosongkan form setelah berhasil disimpan
    bersihkanForm();

    alert("Data mahasiswa berhasil disimpan!");
});


// EVENT TOMBOL BERSIHKAN
// Hanya mengosongkan input form, tidak menghapus data pada tabel
btnBersihkan.addEventListener("click", function() {
    bersihkanForm();
});