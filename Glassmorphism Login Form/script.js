// // script.js

// document.addEventListener("DOMContentLoaded", function () {
//   // Seleksi formulir login
//   var loginForm = document.querySelector("form");

//   // Tambahkan event listener untuk menangani submit formulir
//   loginForm.addEventListener("submit", function (event) {
//     event.preventDefault(); // Mencegah pengiriman formulir secara default

//     // Dapatkan nilai dari input
//     var email = document.querySelector('input[name="email"]').value;
//     var password = document.querySelector('input[name="password"]').value;

//     // Tampilkan data di console (dalam aplikasi nyata, Anda akan mengirim data ini ke server)
//     console.log("Email:", email);
//     console.log("Password:", password);

//     // Reset formulir atau lakukan tindakan lain sesuai kebutuhan
//     // loginForm.reset();
//   });
// });

// script.js

document.addEventListener('DOMContentLoaded', function() {
    var registerForm = document.getElementById('registerForm');
    var loginForm = document.getElementById('loginForm');

    // Tambahkan event listener untuk formulir registrasi
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir secara default

        // Dapatkan nilai dari input registrasi
        var fullname = document.querySelector('#registerForm input[name="fullname"]').value;
        var email = document.querySelector('#registerForm input[name="email"]').value;
        var password = document.querySelector('#registerForm input[name="password"]').value;

        // Tampilkan data di console (dalam aplikasi nyata, Anda akan mengirim data ini ke server)

        // Reset formulir atau lakukan tindakan lain sesuai kebutuhan
        registerForm.reset();

        // Sembunyikan formulir registrasi dan tampilkan formulir login
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Tambahkan event listener untuk formulir login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir secara default

        // Dapatkan nilai dari input login
        var email = document.querySelector('#loginForm input[name="email"]').value;
        var password = document.querySelector('#loginForm input[name="password"]').value;

        // Tampilkan data di console (dalam aplikasi nyata, Anda akan mengirim data ini ke server)

        // Reset formulir atau lakukan tindakan lain sesuai kebutuhan
        loginForm.reset();

        // Sembunyikan formulir login dan tampilkan formulir registrasi
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });
});
