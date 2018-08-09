<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Fresh Project with Puppeteer</title>
    </head>
    <body>
        <form accept-charset="utf-8" method="POST" action="{{route('test-script', ['url' => 'https://www.google.com'])}}">
            {{ csrf_field() }}
            <input type="submit" value="Test Screenshot Script">
        </form>
    </body>
</html>
