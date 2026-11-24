const members = {
    zulfan: {
        name: "ZULFAN FIRDAUS",
        initial: "ZF",
        username: "zeyynouzenn",
        password: "gtwmlspgnbltruck",
        destination: "https://shadowwzeyy-ctrl.github.io/MAIN-PAGE/"
    },

    reiki: {
        name: "REIKI PUTRA HIDAYAT",
        initial: "RP",
        username: "rmngts",
        password: "archierawr",
        destination: "https://reikiputrahidayat.github.io/reyindie/"
    },

    akif: {
        name: "AKIF RIFKI LITARDO",
        initial: "AR",
        username: "umrbdg",
        password: "umrjkrta",
        destination: "https://shadowwzeyy-ctrl.github.io/mainpagekif/"
    },

    gavin: {
        name: "GAVIN ANDRIAN WIRASANA",
        initial: "GA",
        username: "jnsakai",
        password: "sebabdanakibat",
        destination: "https://gavin-clux.github.io/mainpagevin/"
    },

    isna: {
        name: "ISNA YAKUTA SUNGKAR",
        initial: "IY",
        username: "pnksmatter",
        password: "sehidupsekopi",
        destination: "https://sungkar-jpg.github.io/Website-isna-yakuta-s/"
    },

    syalwa: {
        name: "SYALWA KHUMAIRA",
        initial: "SK",
        username: "awahehei",
        password: "goodayes",
        destination: "https://syalwakhumaira1-svg.github.io/portofolio-syalwa-/"
    }
};


// Ambil identitas anggota dari URL
const params = new URLSearchParams(window.location.search);
const memberId = params.get("member");

// Ambil elemen HTML
const memberName = document.getElementById("memberName");
const initial = document.getElementById("initial");
const loginForm = document.getElementById("loginForm");
const unavailable = document.getElementById("unavailable");
const message = document.getElementById("message");

// Cari data anggota
const member = members[memberId];

// Periksa apakah anggota tersedia
if (!member) {
    memberName.textContent = "MEMBER NOT FOUND";
    initial.textContent = "??";

    loginForm.hidden = true;
    unavailable.hidden = false;

    unavailable.querySelector("h3").textContent =
        "MEMBER NOT FOUND";

    unavailable.querySelector("p").textContent =
        "Anggota tidak ditemukan. Silakan kembali ke directory.";

} else {
    memberName.textContent = member.name;
    initial.textContent = member.initial;

    if (member.unavailable) {
        loginForm.hidden = true;
        unavailable.hidden = false;
    }
}


// Proses login
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!member || member.unavailable) return;

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (
        username === member.username &&
        password === member.password
    ) {
        message.textContent = "ACCESS GRANTED. REDIRECTING...";

        window.location.href = member.destination;

    } else {
        message.textContent = "INVALID USERNAME OR PASSWORD.";
    }
});
