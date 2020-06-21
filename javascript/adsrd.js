function wads() {
  var ancestor = document.getElementById('ads'),
  descendents = ancestor.getElementsByTagName('*');
  // gets all descendent of ancestor
  var i, e, d;
  for (i = 0; i < descendents.length; ++i) {if (window.CP.shouldStopExecution(0)) break;
    e = descendents[i];
    var div = "<div class='d-inline-block'>" + e.innerHTML + "<b>advertisement</b></div>";
    e.innerHTML = div;
  }window.CP.exitedLoop(0);
}
(function () {
  wads();
});
function doscript(src) {
  var element = document.createElement("script");
  element.src = src;
  document.body.appendChild(element);
}

//this function will work cross-browser for loading scripts asynchronously//this function will work cross-brows 
function getscript(src, callback)
{
  var s,
  r,
  t;
  r = false;
  s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = src;
  s.onload = s.onreadystatechange = function () {
    //console.log( this.readyState ); //uncomment this line to see which ready states are called.
    if (!r && (!this.readyState || this.readyState == 'complete'))
    {
      r = true;
      callback();
    }
  };
  t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
}
//*** event attaching ***//
var ads_js = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
if (window.addEventListener) {
  window.addEventListener("load", function () {
    if (getscript(ads_js) === false) {
      doscript(ads_js);
    }
  }, false);
} else
if (window.attachEvent) {
  window.attachEvent("onload", function () {
    if (getscript(ads_js) === false) {
      doscript(ads_js);
    }
  });
} else
{
  window.onload = function () {
    if (getscript(ads_js) === false) {
      doscript(ads_js);
    }
  };
}

function repeat(func, times) {
  func();
  --times && repeat(func, times);
}
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
