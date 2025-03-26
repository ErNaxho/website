function changeLanguage() {
    const select = document.getElementById('languageSelect');
    const selectedLanguage = select.value;
    window.location.href = selectedLanguage;
}

// Set the correct option based on current page
document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('languageSelect');
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage) {
        select.value = currentPage;
    }
});