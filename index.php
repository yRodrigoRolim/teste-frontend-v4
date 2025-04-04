<?php include "components/head.php"; ?>
</head>

<body class="bg-gray-100">
    <div class="flex h-screen p-4 sm:flex-row flex-col">
        <!-- Sidebar -->
        <?php include "components/sidebar.php"; ?>
        

        <!-- Main content -->
        <main
            class="sm:ml-4 ml-0 w-full rounded-lg w-64 border-r shadow-md shadow-xs border-gray-200 flex flex-col">
            <div class="p-4 bg-white">
            <h1 class="text-4xl my-4 text-aiko-purple">🚀 O Desafio</h1>
            <hr>
            <p class="mt-4 lg:max-w-[80%]">
                Você é o desenvolvedor frontend de uma empresa que coleta dados de equipamentos utilizados em uma
                operação
                florestal. Dentre esses dados estão o histórico de posições e estados desses equipamentos. O estado de
                um
                equipamento é utilizado para saber o que o equipamento estava fazendo em um determinado momento, seja
                Operando, Parado ou em Manutenção. O estado é alterado de acordo com o uso do equipamento na operação,
                já a
                posição do equipamento é coletada através do GPS e é enviada e armazenada de tempo em tempo pela
                aplicação.
            </p>

            <p class="mt-4 lg:max-w-[80%] max-w-100">
                Seu objetivo é, de posse desses dados, desenvolver o frontend de aplicação web que trate e exibida essas
                informações para os gestores da operação.
            </p>
            <h2 class="text-3xl my-4 mt-6 text-aiko-purple ">🎯 Requisitos</h2>
            <hr>
            <p class="mt-4 lg:max-w-[80%] max-w-100">Esses requisitos são obrigatórios e devem ser desenvolvidos para a entrega do
                teste.</p>

            <ul class="mt-4 list-disc lg:max-w-[60%] px-4 max-w-100">
                <li class="mt-2"><strong>Posições dos equipamentos:</strong> Exibir no mapa os equipamentos nas suas
                    posições mais
                    recentes.</li>
                <li class="mt-2"><strong>Estado atual do equipamento:</strong> Visualizar o estado mais recente dos
                    equipamentos.Exemplo: mostrandono mapa,como um pop-up, mouse hover sobre o equipamento, etc.
                <li class="mt-2"><strong>Histórico de estados do equipamento:</strong> Permitir a visualização do
                    histórico de estados de um equipamentoespecífico ao clicar sobre o equipamento.
                </li>

            </ul>
            </div>
    </main>

    </div>

    <script src="assets/scripts/sidebard.js" defer></script>
   

</body>

</html>