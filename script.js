document.addEventListener('DOMContentLoaded', () => {

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

});
