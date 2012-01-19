<?php
require_once('lib/Util.class.php');
$ua = Utilities::get_browser_info($_SERVER['HTTP_USER_AGENT']);
$browser = (!empty($ua['class_name'])) ? $ua['class_name'] : "";
?>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>purlative</title>
  <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon">
  <link rel="stylesheet" href="http://yui.yahooapis.com/3.4.1/build/cssreset/cssreset.css" type="text/css">
  <link rel="stylesheet" type="text/css" href="/css/global.css">
  <link rel="stylesheet" type="text/css" href="/css/content.css">
  <link rel="stylesheet" type="text/css" href="/css/resume.css">
	<script type='text/javascript'>(function () { var a = ['header', 'nav', 'section', 'article', 'aside', 'footer', 'time']; for(var i=0,l=a.length;i<l;i++){ document.createElement(a[i]); } })()</script>
</head>
<body class="<?php echo($browser)?>">  
<header>
  <img src="/img/logo_45x45.png">
  <h1>Purlative</h1>
  <h2>smarter, not harder.</h2>
  <ul>
    <li><a href="#/resume">resume</a></li>
    <li><a href="#/">overview</a></li>
    <li><a href="https://github.com/tjtrapp/purlative" target="_blank" alt="purlative on github">sourcecode_on_github</a></li>
  </ul>
</header>
<section class='content'>
  <div class="content-item">
    <time>
      <span class="post-time">09:10 am</span>
      <span class="month">January</span>
      <span class="day">19</span>
    </time>
    <article class="post">
      <p class="caption">
        Added php code to inspect the ua string to determine the client browser and then added that string to the body tag as a class.          This approach allows me to do easy conditional styling! w00t :) I was concerned that I would need to fix a few things here and there based on the clients browser.  <br /><br />
        I have so much to do today that I can't do more work on this site till later this evening... 
      </p>
    </article>
  </div>

  <div class="content-item">
    <time>
      <span class="post-time">05:15 pm</span>
      <span class="month">January</span>
      <span class="day">18</span>
    </time>
    <article class="post">
      <p class="caption">
        I hooked up <a target="_blank" href="http://documentcloud.github.com/backbone/" alt="backbone website">backbone</a>, yay! this means i added a lot of javascript code :) <br /> <br />
        you can now toggle between the two views without refreshing the page.  I created 5 views, a model and a collection.  I created a method in my contentitems collection named initWithSelector, it creates the collection based on the data on the page (aside: i miss objective-c... i think thats why i named the method so objective-c-ishly).  This approach allows me to continue adding posts manually until the next steps where I hook up a database, create an api and make things really "appy".  <br /> <br />
        I really wanted to use something like mongodb but im hosting on godaddy and cannot use it, im stuck with mysql.  oh well.  ill probably do something simple since I only need to create one routine to parse into my content items collection.
      </p>
      <div class="action-item">ok, next up:
        <ol>
          <li>add a database</li>
          <li>add a page to create posts</li>
          <li>make this page completely data driven</li>
        </ol>
      </div>
    </article>
  </div>

  <div class="content-item">
    <time>
      <span class="post-time">11:30 am</span>
      <span class="month">January</span>
      <span class="day">18</span>
    </time>
    <article class="post">
      <p class="caption">
        Completed basic css for the content items.  tested this code in chrome, safari and ff... no ie since i dont have it on my mac.
        Now that the basics are up, I'll push this to git and tweet it out.  
      </p>
      <div class="action-item">next steps after that are:
        <ol>
          <li class='done'>break 4 housework :/</li>
          <li class='done'>start writing js code to flip b/t views</li>
          <li>add some data storage mechanism</li>
        </ol>
      </div>
    </article>
  </div>

  <div class="content-item">
    <time>
      <span class="post-time">10:30 am</span>
      <span class="month">January</span>
      <span class="day">18</span>
    </time>
    <article class="post">
      <p class="caption">Now that the initial code is up on git, its time to make the css for the content items.</p>
    </article>
  </div>
  <div class="content-item">
    <time>
      <span class="post-time">10:20 am</span>
      <span class="month">January</span>
      <span class="day">18</span>      
    </time>
    <article class="post">
      <p class="caption">
        Pushed my initial code for this site to Git for the world to see...
      </p>
      <p class="action-item">goto https://github.com/tjtrapp/purlative and check out my code!</p>
    </article>
  </div>
  <div class="content-item">
    <time>
      <span class="post-time">10:00 am</span>
      <span class="month">January</span>
      <span class="day">18</span>
    </time>
    <article class="post">
      <p class="caption">
        I've completed the initial shell of the site.  I've added the header and styles, a reset from yui and a couple menu items.        
      </p>      
    </article>
  </div>
  <div class="content-item">
    <time>
      <span class="post-time">09:21 am</span>
      <span class="month">January</span>
      <span class="day">18</span>
    </time>
    <article class="post">
      <p class="caption">hi.  im currently coding the site.  hit refresh, who knows ya know :)</p>
    </article>
  </div>
</section>

<!-- get the min jquery bc i dont plan on stepping thru that code but get the dev bb and underscore -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="/js/fxs/underscore-1.3.0.js"></script>
<script type="text/javascript" src="/js/fxs/backbone-0.5.3.js"></script>
<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="/js/router.js"></script>
<script type="text/javascript" src="/js/models/contentitem.model.js"></script>
<script type="text/javascript" src="/js/models/contentitems.collection.js"></script>
<script type="text/javascript" src="/js/views/posttime.view.js"></script>
<script type="text/javascript" src="/js/views/post.view.js"></script>
<script type="text/javascript" src="/js/views/contentitem.view.js"></script>
<script type="text/javascript" src="/js/views/overview.view.js"></script>
<script type="text/javascript" src="/js/views/resume.view.js"></script>
<script type="text/javascript" src="/js/application.js"></script>

<script type="text/javascript">
$(function () {
  var p = window._PURLATIVE; // ready
  new p.app.PurlativeApplication().render(); // set, go
});
</script>

</body>
</html>
