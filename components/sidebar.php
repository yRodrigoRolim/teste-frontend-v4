<aside id="sidebar-container"
    class="rounded-lg sm:w-64 w-full mb-4 sm:mb-0 bg-white border-r shadow-md shadow-xs border-gray-200 flex flex-col transition-all duration-300">
    <!-- Header with logo -->
    <div class="px-4 py-3 flex items-center border-b border-gray-200">
        <div class="flex items-center">
            <div class="w-16 h-12 rounded-md flex items-center justify-center text-white disable-sidebar"
                id="disable-sidebar-logo">
                <img src="assets/img/aiko.png" alt="logo aiko">
            </div>
        </div>
        <button class="ml-auto text-blue-500 select-none outline-none" id="sidebard-config">
            <i class="fas fa-chevron-left"></i>
        </button>
    </div>

    <div class="flex-1 h-ful">
        <nav class="py-2 flex sm:flex-col flex-row justify-around">

            <a href="index.php" title="Como funciona o desafio?" class="flex items-center px-4 py-2 text-aiko-purple sidebar-item">
                <i class="fas fa-home w-5"></i>
                <span class="ml-2 text-gray-500 disable-sidebar">Desafio</span>
            </a>

            <a href="desafio.php" title="Parte do desafio" class="flex items-center px-4 py-2 text-aiko-purple sidebar-item relative">
                <i class="fas fa-tasks w-5"></i>
                <span class="ml-2 text-gray-500 disable-sidebar">Dashboard</span>

            </a>

            <a href="#" class="flex items-center px-4 py-2 text-aiko-purple sidebar-item">
                <i class="fas fa-chart-line w-5"></i>
                <span class="ml-2 text-gray-500 disable-sidebar">Activity</span>
            </a>

            <a href="#" class="flex items-center px-4 py-2 text-aiko-purple sidebar-item">
                <i class="fas fa-users w-5"></i>
                <span class="ml-2 text-gray-500 disable-sidebar">Users</span>
            </a>

            <a href="#" class="flex items-center px-4 py-2 text-aiko-purple sidebar-item relative">
                <i class="fas fa-bell w-5"></i>
                <span class="ml-2 text-gray-500 disable-sidebar">Notification</span>
                <span
                    class="ml-auto bg-aiko-purple text-white text-xs rounded-full px-1.5 py-0.5 disable-sidebar">18</span>
            </a>

            <a href="#" class="flex items-center px-4 py-2 text-aiko-purple sidebar-item">
                <i class="fas fa-cog w-5"></i>
                <span class="ml-2 text-gray-500 disable-sidebar">Setting</span>
            </a>

            <a href="#" class="flex items-center px-4 py-2 text-aiko-purple sidebar-item">
                <i class="fas fa-question-circle w-5"></i>
                <span class="ml-2 text-gray-500 disable-sidebar">Support</span>
            </a>
        </nav>


    </div>
</aside>