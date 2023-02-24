function save() {
    var name = document.getElementById('fname').value;
    var password = document.getElementById('password').value;
    var data = {
        "ten": name,
        "password": password,
    }
    var json1 = JSON.stringify(data);
    console.log(json1)
    localStorage.setItem(data.ten, JSON.stringfy)
}
