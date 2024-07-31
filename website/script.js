document.addEventListener('DOMContentLoaded', function () {
    const profiles = document.querySelectorAll('.profile');
    const hopInBtn = document.getElementById('hopInBtn');

    profiles.forEach(profile => {
        profile.addEventListener('click', function () {
            profiles.forEach(p => p.classList.remove('selected')); // Deselect all profiles
            profile.classList.add('selected'); // Select the clicked profile
            hopInBtn.style.display = 'block'; // Show the "Hop In" button
        });
    });

    hopInBtn.addEventListener('click', function () {
        // Replace 'your-page.html' with the URL you want to redirect to
        window.location.href = 'flower.html';
    });
});
