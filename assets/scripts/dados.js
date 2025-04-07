// Definir objetos globais com os valores do json
const dataStore = {
    equipamentos: [],
    modelos: [],
    historicos: [],
    estados: [],
    posicoes: [],
    historicoMap: {},
    estadoMap: {}
};

// Carregar o json
function carregarJSON(caminho, chave, callback) {
    fetch(caminho)
        .then(res => res.json())
        .then(data => {
            dataStore[chave] = data;
            callback();
        })
        .catch(err => console.error(`Erro ao carregar ${chave}:`, err));
}

function start() {
    carregarJSON('assets/data/equipment.json', 'equipamentos', () => {
        carregarJSON('assets/data/equipmentModel.json', 'modelos', () => {
            carregarJSON('assets/data/equipmentStateHistory.json', 'historicos', () => {
                carregarJSON('assets/data/equipmentPositionHistory.json', 'posicoes', () => {
                    carregarJSON('assets/data/equipmentState.json', 'estados', () => {
                        carregarDadosTabela();
                    });
                });
            });
        });
    });
}
// Criar uma tabela com os dados
function carregarDadosTabela() {
    const tbody = document.getElementById('equipmentTableBody');
    tbody.innerHTML = '';

    dataStore.equipamentos.forEach(equipamento => {
        const modelo = dataStore.modelos.find(m => m.id === equipamento.equipmentModelId);
        const historico = dataStore.historicos.find(h => h.equipmentId === equipamento.id);
        const estadoMaisRecente = obterMaisRecente(historico.states);
        const estado = dataStore.estados.find(s => s.id === estadoMaisRecente?.equipmentStateId);

        dataStore.historicoMap[equipamento.id] = historico;
        dataStore.estadoMap[equipamento.id] = estado;

        const position_Historic = dataStore.posicoes.find(h => h.equipmentId === equipamento.id);
        const postionMaisRecent = obterMaisRecente(position_Historic.positions);

        const linha = criarLinhaTabela(equipamento, modelo, estado, postionMaisRecent);

        tbody.appendChild(linha);
    });
}

// Adicionar linha na tabela com os dados
function criarLinhaTabela(equipamento, modelo, estado, postionMaisRecent) {
    const row = document.createElement('tr');
    row.className = "bg-white border-b border-gray-200";

    row.innerHTML = `
    <td class="px-6 py-4 whitespace-nowrap">${equipamento.name}</td>
    <th scope="row" class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 whitespace-nowrap">${modelo?.name || 'Desconhecido'}</th>
    <td class="flex px-6 py-4">
      ${estado ? `
        <div class="relative group flex cursor-pointer hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5 text-[${estado.color}]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div stye="margin-bottom: 20px !important" class="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-gray-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 w-64 hover:!opacity-0 text-center">
            Veja o histórico do estado de ${modelo?.name || 'Desconhecido'}
            <div class="absolute bottom-[-2px] left-1/2 w-2 h-2 bg-gray-500 rotate-45"></div>
          </div>
          <button onclick='modalEstado("${equipamento.id}")'>${estado.name}</button>
        </div>
      ` : 'Sem estado'}
    </td>
  `;
  // processarLotesDeLocalizacao(postionMaisRecent.lat, postionMaisRecent.lon, modelo.name)
  let textLocal = `<p class="!m-0"><b>Código:</b> ${equipamento.name}</p><p class="!m-0 !mt-2"><b>Equipamento:</b> ${modelo.name}</p><p class="!m-0 !mt-2 text-[${estado.color}]"><b>Status:</b> ${estado.name}</p>`
  // Pegar cidade e marcar no mapa
    marcarNoMapa(postionMaisRecent.lat, postionMaisRecent.lon, textLocal, modelo.name);

    salvarCidadeEstado(postionMaisRecent.lat, postionMaisRecent.lon).then(endereco => {
        row.innerHTML += `
          <td class="px-6 py-4 whitespace-nowrap"><p>${endereco}</p></td>
         
        `;
      });
      

    return row;
}

function criarDetails() {
    const details = document.createElement('tr');
    details.className = "details-row hidden bg-gray-100";

    details.innerHTML = `
    <td colspan="5" class="px-6 py-4">
      <strong>Detalhes:</strong> esse dispositivo já esteve em 
    </td>
  `;
    return details;
}

function obterMaisRecente(lista) {
    return lista.reduce((maisRecente, atual) => {
        return new Date(atual.date) > new Date(maisRecente.date) ? atual : maisRecente;
    });
}


function modalEstado(id) {
    const historico = dataStore.historicoMap[id];
    const estados = dataStore.estados
    const modelo = dataStore.modelos
    const equipamento = dataStore.equipamentos
    const titlemodal = document.getElementById("title-modal");
    equipamentoAtual = equipamento.find(m => m.id === id)
    modeloAtual = modelo.find(m => m.id === equipamentoAtual.equipmentModelId)
    titlemodal.textContent = `Histórico do Equipamento ${modeloAtual.name}`

    const modal = document.getElementById('estadoModal');
    const content = document.getElementById('modalContent');
    content.innerHTML = '';

    historico.states.forEach(state => {
        const div = document.createElement('div');
        estadoAtual = estados.find(m => m.id === state.equipmentStateId)
        div.className = `p-2 border rounded bg-gray-50 border-[${estadoAtual.color}]`;
        div.innerHTML = `<p><b>Data:</b> ${new Date(state.date).toLocaleDateString()} <br> <b>Horário:</b> ${new Date(state.date).toLocaleTimeString()} <br> <b>Status:</b> ${estadoAtual.name}</p>`;
        content.appendChild(div);
    });

    modal.classList.remove('hidden');
}

function fecharModal() {
    document.getElementById('estadoModal').classList.add('hidden');
}

function toggleDetails(button) {
    const row = button.closest('tr').nextElementSibling;
    row.classList.toggle('hidden');
}
async function salvarCidadeEstado(lat, lon) {
    const chave = `cidade_estado_${lat}_${lon}`;
  
    // 1. Verifica cache
    const cache = localStorage.getItem(chave);
    if (cache) {
      return cache;
    }
  
    // 2. Faz requisição se não houver cache
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`;
  
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'local-app',
          'Accept-Language': 'pt-BR'
        }
      });
  
      if (!response.ok) throw new Error("Erro na requisição");
  
      const data = await response.json();
      const address = data.address;
  
      const cidade =
        address.city ||
        address.town ||
        address.village ||
        address.municipality ||
        "Cidade desconhecida";
  
      const estado = address.state || "Estado desconhecido";
  
      const resultado = `${cidade} - ${estado}`;
  
      // 3. Salva no cache
      localStorage.setItem(chave, resultado);
  
      return resultado;
    } catch (error) {
      console.error("Erro ao buscar dados de localização:", error);
      return "Local desconhecido";
    }
  }
  
  

start();

