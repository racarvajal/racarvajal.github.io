// Google tag (gtag.js) - Google Analytics
(function() {
  const scriptGA = document.createElement('script');
  scriptGA.async = true;
  scriptGA.src = 'https://www.googletagmanager.com/gtag/js?id=G-PGR4HECZPZ';
  document.head.appendChild(scriptGA);

  scriptGA.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-PGR4HECZPZ');
  };
})();