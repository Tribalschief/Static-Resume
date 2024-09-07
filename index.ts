function toggleSkills() {
    const hardSkills = document.getElementById('hard-skills');
    const softSkills = document.getElementById('soft-skills');
    const toggleButton = document.querySelector('.toggle-button');
  
    if (!hardSkills || !softSkills || !toggleButton) {
      return; // Exit if any of the elements are missing
    }
  
    const showingSoftSkills = softSkills.style.display === 'block';
  
    if (showingSoftSkills) {
      softSkills.style.display = 'none';
      hardSkills.style.display = 'block';
      toggleButton.textContent = 'Show Soft Skills';
    } else {
      softSkills.style.display = 'block';
      hardSkills.style.display = 'none';
      toggleButton.textContent = 'Show Hard Skills';
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button') as HTMLButtonElement;
  
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleSkills);
    }
  });