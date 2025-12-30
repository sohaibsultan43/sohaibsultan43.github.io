// Tab navigation functionality
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// Mobile menu functionality
var sidemenu = document.getElementById('sidemenu');
function openmenu() {
    sidemenu.style.right = '0px';
}
function closemenu() {
    sidemenu.style.right = '-200px';
}

// Contact form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbyZpFw2fWF5D5QskP48r-OE37JVzbpIyEDjr9XfqSxdCreYCekJWVlRhyJ7CImbDcBr/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully!";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

// View More functionality
document.addEventListener('DOMContentLoaded', function() {
    const viewMoreBtn = document.getElementById('view-more-btn');
    const hiddenWorks = document.querySelectorAll('.hidden-work');
    let visibleCount = 0; // Track how many hidden items are currently visible

    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();

            if (visibleCount < hiddenWorks.length) {
                // Show the next 3 hidden works
                for (let i = visibleCount; i < visibleCount + 3 && i < hiddenWorks.length; i++) {
                    hiddenWorks[i].classList.add('visible');
                }
                visibleCount += 3;

                // Update button text to "View Less" when all items are visible
                if (visibleCount >= hiddenWorks.length) {
                    viewMoreBtn.textContent = 'View Less';
                    viewMoreBtn.classList.add('active');
                }
            } else {
                // Hide all hidden works and reset
                hiddenWorks.forEach(work => {
                    work.classList.remove('visible');
                });
                visibleCount = 0;
                viewMoreBtn.textContent = 'View More';
                viewMoreBtn.classList.remove('active');
            }
        });
    }
    }
});

// Testimonial Scroll (Optional: Auto-scroll or simple touch drag is handled by CSS snap, this could add auto-play)
const container = document.getElementById('testimonial-container');
let scrollAmount = 0;
const scrollMax = container ? container.scrollWidth - container.clientWidth : 0;

if (container && scrollMax > 0) {
    // Simple auto-scroll interval (can be removed if users find it annoying)
    // setInterval(() => {
    //     container.scrollBy({ left: 300, behavior: 'smooth' });
    //     if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
    //         container.scrollTo({ left: 0, behavior: 'smooth' });
    //     }
    // }, 5000);
}