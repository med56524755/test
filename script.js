    // Navigation Toggle for Mobile
    const navToggle = document.querySelector('.nav-toggle');
    const body = document.body;

    navToggle.addEventListener('click', () => {
        body.classList.toggle('nav-open');
    });

    // Scroll-Triggered Section Animations
    const sections = document.querySelectorAll('section');
    let slideDirection = 'left';

    function checkSlide() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const isVisible = sectionTop < window.innerHeight / 2;

            if (isVisible) {
                if (!section.classList.contains('slide-from-left') && !section.classList.contains('slide-from-right')) {
                    if (slideDirection === 'left') {
                        section.classList.add('slide-from-left');
                        slideDirection = 'right';
                    } else {
                        section.classList.add('slide-from-right');
                        slideDirection = 'left';
                    }
                }
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
    checkSlide();

    function initializeFacebookShareButtons() {
        const giftCards = document.querySelectorAll('.gift-card');

        giftCards.forEach(card => {
            const shareButton = card.querySelector('.facebook-share-button');
            const giftCardTitle = card.querySelector('h3').textContent; // Get gift card title

            if (shareButton) {
                const websiteURL = window.location.href.split('#')[0]; // Get current website URL (without hash)
                const shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteURL)}"e=${encodeURIComponent(`Check out this gift card: ${giftCardTitle} at Gift Hub!`)}`; // Construct Facebook Share URL

                shareButton.href = shareURL; // Set the href of the share button
            }
        });
    }

    initializeFacebookShareButtons(); // Call the function to initialize share buttons on page load