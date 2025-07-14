// Typing effect for headings
document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.pixel-title, .pixel-section h2');
    
    titles.forEach(title => {
        const text = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    });
    
    // Glitch effect on hover for portfolio items
    const items = document.querySelectorAll('.pixel-item');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.animation = 'glitch 0.3s linear';
        });
        item.addEventListener('animationend', () => {
            item.style.animation = '';
        });
    });
});
