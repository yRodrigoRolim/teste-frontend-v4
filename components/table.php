<div class="mb-4 w-64 mt-4">
  <input type="text" id="searchInput" placeholder="Pesquisar..." 
         class="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none">
</div>
<!-- Cabeçalho fixo, corpo com scroll -->
<div class="overflow-y-auto" style="max-height: 300px; min-height: 300px">
  <table class="w-full text-sm text-left rtl:text-right text-gray-500">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0 z-10">
      <tr>
        <th class="px-6 py-3">Code</th>
        <th class="px-6 py-3">Product name</th>
        <th class="px-6 py-3">State</th>
        <th class="px-6 py-3 w-72">Localização</th>
        <th class="px-6 py-3 w-8"></th>
      </tr>
    </thead>
    <tbody id="equipmentTableBody">
  

    </tbody>
  </table>
</div>


<script>
  document.getElementById("searchInput").addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll("#equipmentTableBody tr");

    rows.forEach(row => {
      const rowText = row.textContent.toLowerCase();
      row.style.display = rowText.includes(filter) ? "" : "none";
    });
  });
</script>
