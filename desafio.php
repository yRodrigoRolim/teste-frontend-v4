<?php include "components/head.php"; ?>

</head>

<body class="bg-gray-100">
    <div class="flex h-screen p-4 sm:flex-row flex-col">
        <!-- Sidebar -->
        <?php include "components/sidebar.php"; ?>


        <!-- Main content -->
        <main class="sm:ml-4 ml-0 w-full rounded-lg w-64 border-r shadow-md shadow-xs border-gray-200 flex flex-col">
            <div class="relative bg-white py-4 px-4">
                <h1 class="text-4xl my-4 text-aiko-purple">Dashboard</h1>
                <hr>


                <?php
                include "components/table.php";
                ?>
            </div>
            <div class="relative bg-white py-4 px-4 mt-4 sm:h-full h-[300px]">
                <?php
                include "components/map.php";
                ?>
            </div>
            <!-- Modal -->
            <div id="estadoModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999] hidden">
                <div class="bg-white rounded-lg p-6 sm:w-full w-[90%] max-w-lg shadow-lg relative">
                    <button onclick="fecharModal()" class="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                        &times;
                    </button>
                    <h2 class="text-xl font-bold mb-4" id="title-modal">Histórico do Equipamento</h2>
                    <div id="modalContent" class="space-y-2 overflow-auto max-h-[500px] p-4">
                        <!-- Os dados serão injetados aqui -->
                    </div>
                </div>
            </div>
        </main>

    </div>

    <script src="assets/scripts/dados.js" defer></script>
    <script src="assets/scripts/sidebard.js" defer></script>
    <script src="assets/scripts/table.js"></script>

</body>

</html>