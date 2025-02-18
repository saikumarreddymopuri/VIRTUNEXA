document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("userForm");
    const userNameInput = document.getElementById("userName");
    const userErrorMessage = document.getElementById("userErrorMessage");

    const noteForm = document.getElementById("noteForm");
    const noteInput = document.getElementById("noteInput");
    const notesList = document.getElementById("notesList");
    const errorMessage = document.getElementById("errorMessage");

    const userSection = document.getElementById("userSection");
    const noteSection = document.getElementById("noteSection");

    let currentUser = "";

    userForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const userName = userNameInput.value.trim();

        if (!userName) {
            userErrorMessage.classList.remove("hidden");
            return;
        }

        userErrorMessage.classList.add("hidden");
        currentUser = userName;

        userSection.classList.add("hidden");
        noteSection.classList.remove("hidden");
    });

    noteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const note = noteInput.value.trim();

        if (!note) {
            errorMessage.classList.remove("hidden");
            return;
        }

        errorMessage.classList.add("hidden");

        const li = document.createElement("li");
        li.textContent = `${currentUser}: ${note}`;
        notesList.appendChild(li);

        noteInput.value = "";
        currentUser = "";

        noteSection.classList.add("hidden");
        userSection.classList.remove("hidden");
        userNameInput.value = "";
    });
});
