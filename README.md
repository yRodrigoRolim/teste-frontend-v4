# 🌲 Aiko Frontend Challenge – Rodrigo Rolim

Bem-vindo ao repositório do meu teste técnico frontend para a **Aiko**. A aplicação foi desenvolvida para exibir, de forma interativa, os dados de **equipamentos utilizados em operações florestais**, permitindo aos gestores visualizar sua **localização**, **estado atual** e **histórico completo** de uso.

---

## 🚀 Tecnologias Utilizadas

- **HTML5 + CSS (Tailwind)**
- **JavaScript Puro (Vanilla JS)**
- **Leaflet.js** para visualização de mapas
- **OpenStreetMap + Nominatim API** para geolocalização reversa
- **Font Awesome** para ícones

---

## 🎯 Funcionalidades

✅ Exibir os equipamentos no **mapa com marcadores** personalizados por modelo  
✅ Mostrar o **estado atual** de cada equipamento com ícone e legenda de cor  
✅ Permitir **busca geral e filtros por modelo/estado**  
✅ Exibir dados em uma **tabela interativa** com expansão de detalhes  
✅ Abrir **modal com o histórico de estados** ao clicar em um equipamento  
✅ Converter **lat/lon em cidade e estado**, cacheando os dados  
✅ Totalmente **responsiva** para mobile e desktop  

---

## 📁 Estrutura dos Dados

Os arquivos JSON utilizados estão na pasta `assets/data/`, e incluem:

- `equipment.json`: Dados dos equipamentos
- `equipmentModel.json`: Modelos com valores por hora
- `equipmentState.json`: Estados possíveis (Operando, Parado, Manutenção)
- `equipmentPositionHistory.json`: Histórico de coordenadas (GPS)
- `equipmentStateHistory.json`: Histórico de estados por equipamento

---

## 🧠 Decisões Técnicas

- Uso de **Tailwind** para agilidade, responsividade e leveza no CSS
- Dados carregados de forma **assíncrona**, processados antes de renderizar
- **Separação de responsabilidades** em arquivos JS (dados.js, sidebar.js, table.js)
- Aplicação **modular**, escalável e pronta para migrar para frameworks (Vue, React)

---

## 📹 Demonstração em Vídeo

**▶️ Link do vídeo explicativo**: [Clique aqui para assistir](https://www.youtube.com/watch?v=SEU-LINK-AQUI)  
(No vídeo eu explico o funcionamento da aplicação, arquitetura, desafios e decisões tomadas)

---

## 🧪 Possíveis Expansões Futuras

- Cálculo de **produtividade diária** (tempo "Operando" / total)
- Cálculo de **ganho financeiro** por equipamento com base nos modelos
- **Histórico de trajetos** dos equipamentos no mapa
- **Testes unitários e E2E**
- Exportação da tabela para **CSV**
- Adição de **gráficos e dashboards visuais**

---

## 🧭 Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/aiko-teste.git
