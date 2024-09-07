function toggleSkills() {
    var hardSkills = document.getElementById('hard-skills');
    var softSkills = document.getElementById('soft-skills');
    var toggleButton = document.querySelector('.toggle-button');
    if (!hardSkills || !softSkills || !toggleButton) {
        return; // Exit if any of the elements are missing
    }
    var showingSoftSkills = softSkills.style.display === 'block';
    if (showingSoftSkills) {
        softSkills.style.display = 'none';
        hardSkills.style.display = 'block';
        toggleButton.textContent = 'Show Soft Skills';
    }
    else {
        softSkills.style.display = 'block';
        hardSkills.style.display = 'none';
        toggleButton.textContent = 'Show Hard Skills';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.querySelector('.toggle-button');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleSkills);
    }
});
