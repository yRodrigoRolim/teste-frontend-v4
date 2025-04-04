<!-- Container do mapa com altura de 200px -->
<div id="map" class="w-100 h-full"></div>

<!-- Leaflet JS e CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"></script>

<script>
  
  // Inicializa o mapa com foco centralizado no Brasil
  const map = L.map('map').setView([-15.7939, -47.8828], 4);

  // Camada base do OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Função para marcar o local com popup de endereço
  async function marcarLocalMapa(lat, lon, nameproduct) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'MeuAppWeb/1.0 (email@exemplo.com)'
        }
      });
      const data = await response.json();
      const endereco = data.display_name;

      const address = data.address;
      const cidade = address.city || address.town || address.village || address.municipality || '';
      const estado = address.state || '';

      console.log(data)
      L.marker([lat, lon])
        .addTo(map)
        .bindPopup(`<div class="flex flex-col"><h3 class="font-semibold">${nameproduct}</h3><p class="!m-0 !mt-2">${cidade} - ${estado}</p></div>`);
    } catch (err) {
      console.error("Erro ao buscar endereço:", err);
    }
  }

  // locais.forEach(loc => {
  //   marcarLocalMapa(loc.lat, loc.lon);
  // });
</script>