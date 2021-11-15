<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Site Ux Martin</title>
    <link rel="stylesheet" href="{{asset("css/style.css")}}">
    <script src="https://kit.fontawesome.com/6434cb6a94.js" crossorigin="anonymous"></script>
</head>
<body>
    @include('partial/navbar')
    @include('pages/home')
    @include('pages/about')
    @include('pages/service')
    @include('pages/white')
    @include('pages/contact')

    <script src="{{asset("js/main.js")}}"></script>
</body>
</html>