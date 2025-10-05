// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Add glitch effect to header on load
    const header = document.querySelector('.header');
    header.addEventListener('mouseenter', function() {
        this.style.animation = 'glitch 0.3s infinite';
    });
    
    header.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });
    
    // Add CSS for glitch if needed
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
    `;
    document.head.appendChild(style);
    
    // Animate skill items on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    document.querySelectorAll('.skill-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
    
    // Project card click to log (placeholder for future links)
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            console.log('Project clicked:', this.querySelector('h3').textContent);
            // Could open modal or link here
        });
    });
});
