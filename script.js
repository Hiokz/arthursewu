document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    if (navItems.length > 0) {
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Custom Dropdown Logic
    const dropdownGroups = document.querySelectorAll('.custom-dropdown');

    dropdownGroups.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        const selectedText = dropdown.querySelector('.dropdown-selected');
        const hiddenInput = dropdown.querySelector('input[type="hidden"]');
        const options = dropdown.querySelectorAll('.dropdown-option');

        // Toggle dropdown open/close
        trigger.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent document click from closing immediately

            // Close all other dropdowns first
            document.querySelectorAll('.custom-dropdown').forEach(d => {
                if (d !== dropdown) d.classList.remove('open');
            });

            dropdown.classList.toggle('open');
        });

        // Handle option selection
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();

                // Remove selected class from all options
                options.forEach(opt => opt.classList.remove('selected'));

                // Add selected class to chosen option
                option.classList.add('selected');

                // Update text and hidden input
                const value = option.getAttribute('data-value');
                selectedText.textContent = option.textContent;
                selectedText.style.color = 'var(--text-color)'; // Give it solid solid text color once selected
                hiddenInput.value = value;

                // Close dropdown
                dropdown.classList.remove('open');
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.custom-dropdown').forEach(d => {
            d.classList.remove('open');
        });
    });

    // Lite YouTube — click thumbnail to load iframe
    const videoThumbnail = document.getElementById('video-thumbnail');
    if (videoThumbnail) {
        videoThumbnail.addEventListener('click', () => {
            const wrapper = document.getElementById('video-wrapper');
            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/yGFCkl2uDOw?rel=0&modestbranding=1&autoplay=1';
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            iframe.setAttribute('allowfullscreen', '');
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.borderRadius = '16px';
            wrapper.appendChild(iframe);
            videoThumbnail.style.display = 'none';
        });
    }
});
