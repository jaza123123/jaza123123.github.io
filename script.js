// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('logForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const type = document.getElementById('type').value;
      const details = document.getElementById('details').value;

      const workout = {
        date: new Date().toLocaleString(),
        type,
        details
      };

      // Save to localStorage
      let logs = JSON.parse(localStorage.getItem('logs')) || [];
      logs.push(workout);
      localStorage.setItem('logs', JSON.stringify(logs));

      document.getElementById('message').textContent = "Workout logged!";
      form.reset();
    });
  }
});
