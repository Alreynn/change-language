function changeLangID() {
    const headings = document.querySelectorAll("h1");
    const paragraph = document.querySelectorAll("p");
        headings[0].innerHTML = "Bahasa Relatif"
        headings[1].innerHTML = "Selamat datang di Website Bahasa Relatif";
        paragraph[0].innerHTML = "Disini aku akan mempertunjukkan kalian teknik merubah bahasa ke Bahasa Inggris menggunakan JavaScript."
        headings[2].innerHTML = 'Kalian bisa menekan tombol "English" pada bagian ata';
        paragraph[1].innerHTML = "Ini akan merubah bahasa ke Bahasa Inggris. Cobalah!";
        
        headings[3].innerHTML = "Sekedar pengingat!";
        paragraph[2].innerHTML = "Ini hanya berupa eksperimen untuk mempelajari JavaScript secara simpel untuk merubah teks dalam file HTML. Untuk tatacara merubah bahasa dengan baik dan tepat di pemrograman web, Anda dapat melihat tatacaranya di YouTube."
}

console.log("changeLangID sedang berjalan...");