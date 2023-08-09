function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;

    if (name == "" || email == "" || phone == "" || subject == "" || message == "") {
        return alert("Form tidak boleh kosong");
    }

    let konfirmasi = confirm("Apakah data yang anda isi sudah benar?");
    if (konfirmasi == true) {} else {
        return;
    }

    let emailReceiver = "rezafadilah337@gmail.com";

    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}, silakan kontak saya pada nomor ${phone}`;
    a.click();

    let data = {name, email, phone, subject, message};
    console.log(data);
}