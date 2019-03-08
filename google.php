<?php
$content = file_get_contents('https://drive.google.com/embeddedfolderview?id=1QAAgBX7lhURj3RN0Tc47hNBvXJuadVNH#list');
$content = str_replace('</title>','</title><base href="https://www.google.com/calendar/" />', $content);
$content = str_replace('</head>','<link rel="stylesheet" href="macos.css" /></head>', $content);
echo $content;
?>