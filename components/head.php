<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Aiko Teste
    </title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="shortcut icon" href="assets/img/aiko.png" type="image/x-icon">
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }

        .sidebar-item:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }

        #sidebar-container a span {
            display: none;
        }
        @media (min-width: 640px) {
            #sidebar-container a span {
            display: block;
        }
        }
    </style>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        "aiko-purple": "#003184",
                        "aiko-green": "#02E002",
                    }
                }
            }
        }
    </script>