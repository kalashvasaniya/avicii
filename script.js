function showContent() {
    var hiddenContent = document.querySelector('.hideSeven');
    hiddenContent.style.display = 'block';
}
setTimeout(hideContent, 2500);

function hideContent() {
    var hiddenContent = document.querySelector('.showSeven');
    hiddenContent.style.display = 'none';
}
setTimeout(showContent, 3000);