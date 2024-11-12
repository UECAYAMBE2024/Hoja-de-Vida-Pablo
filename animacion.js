document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        
        content.classList.toggle('show');
        
        if (content.classList.contains('show')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = "0";
        }
    });
});
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.style.transform = "scale(1.15)";
        setTimeout(() => icon.style.transform = "scale(1)", 150);
    });
});
