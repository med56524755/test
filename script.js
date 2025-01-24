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

    // Messenger Order Buttons - NO COUPON CODE
    function initializeMessengerOrderButtons() {
        const giftCards = document.querySelectorAll('.gift-card');

        giftCards.forEach(card => {
            const messengerButton = card.querySelector('.messenger-button');
            const giftCardTitle = card.querySelector('h3').textContent;

            if (messengerButton) {
                messengerButton.addEventListener('click', (event) => {
                    event.preventDefault();

                    const facebookPageUsername = "GiftHubTN";
                    const prefilledMessage = `Hello,%20I%20would%20like%20to%20order%20the%20gift_card:%20${encodeURIComponent(giftCardTitle)}%20from%20Gift_Hub_website.`;

                    const messengerURL = `https://m.me/${facebookPageUsername}?text=${prefilledMessage}`;

                    window.open(messengerURL, '_blank');
                });
            } else {
                console.warn("Messenger Button not found in Gift Card:", giftCardTitle); // Simplified warning
            }
        });
    }

    initializeMessengerOrderButtons();

