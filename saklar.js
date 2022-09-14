// SELURUH RUANGAN KELUARGA START
function saklarRuangKeluarga() {
    let ruang1 = document.getElementById("ruangKeluarga");

    let keluarga1 = document.getElementById("lampuKeluarga1");
    let keluarga2 = document.getElementById("lampuKeluarga2");
    let keluarga3 = document.getElementById("lampuKeluarga3");

    if (ruang1.checked) {
        keluarga1.src = "assets/images/on.gif";
        keluarga2.src = "assets/images/on.gif";
        keluarga3.src = "assets/images/on.gif";
    } else {
        keluarga1.src = "assets/images/off.gif";
        keluarga2.src = "assets/images/off.gif";
        keluarga3.src = "assets/images/off.gif";
    }

}

    // RUANG KELUARGA PER LAMPU
    function saklarKeluarga() {
        let toggleUtamaKeluarga = document.getElementById("default-toggle-size-keluarga");
        let toggleKeluarga1 = document.getElementById("small-toggle-keluarga1");
        let toggleKeluarga2 = document.getElementById("small-toggle-keluarga2");
        let toggleKeluarga3 = document.getElementById("small-toggle-keluarga3");
        let keluarga1 = document.getElementById("keluarga1");
        let keluarga2 = document.getElementById("keluarga2");
        let keluarga3 = document.getElementById("keluarga3");

        if (toggleUtamaKeluarga.checked) {
            toggleKeluarga1.checked = true;
            keluarga1.src = "assets/images/on.gif";
            toggleKeluarga2.checked = true;
            keluarga2.src = "assets/images/on.gif";
            toggleKeluarga3.checked = true;
            keluarga3.src = "assets/images/on.gif";
        } else {
            toggleKeluarga1.checked = false;
            keluarga1.src = "assets/images/off.gif";
            toggleKeluarga2.checked = false;
            keluarga2.src = "assets/images/off.gif";
            toggleKeluarga3.checked = false;
            keluarga3.src = "assets/images/off.gif";
        }
    }
// SELURUH RUANGAN KELUARGA FINIS
