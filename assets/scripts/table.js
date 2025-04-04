  function toggleDetails(button) {
    const row = button.closest('tr');
    const nextRow = row.nextElementSibling;
    nextRow.classList.toggle('hidden');
    
    // Alterna o ícone também
    const icon = button.querySelector('i');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
  }
