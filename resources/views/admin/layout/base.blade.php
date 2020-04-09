<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin panel - @yield('title')</title>


    <link rel="stylesheet" href="/css/all.css" />

    
</head>
<body>
    <div class="off-canvas position-left reveal-for-large" id="offCanvas11" data-off-canvas>

      
    
        <!-- Side bar -->
        <ul class="vertical menu">
          <li><a href="#">Foundation</a></li>
          <li><a href="#">Dot</a></li>
          <li><a href="#">ZURB</a></li>
          <li><a href="#">Com</a></li>
          <li><a href="#">Slash</a></li>
          <li><a href="#">Sites</a></li>
        </ul>
         <!-- End Side bar -->
    
      </div>
    
      <div class="off-canvas-content" data-off-canvas-content>
        <!-- Your page content lives here -->

        <div class="title-bar">
            <div class="title-bar-left">
              <button class="menu-icon hide-for-large" type="button" data-toggle="offCanvas11" ></button>
              <span class="title-bar-title">{{ getenv('APP_NAME') }}</span>
            </div>
        
          </div>


        @yield('content')
      </div>

    <script src="/js/all.js" ></script>



</body>
</html>