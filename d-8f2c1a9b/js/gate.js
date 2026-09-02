(function(){
  var KEY='n7q4m2';
  var q=new URLSearchParams(location.search).get('k');
  var stored=null;
  try{stored=sessionStorage.getItem('kc-draft-k');}catch(e){}
  if(q===KEY){
    try{sessionStorage.setItem('kc-draft-k',KEY);}catch(e){}
    document.querySelectorAll('a[href$=".html"]').forEach(function(a){
      try{
        var u=new URL(a.getAttribute('href'), location.href);
        u.searchParams.set('k', KEY);
        a.setAttribute('href', u.pathname.split('/').pop() + u.search);
      }catch(e){}
    });
    return;
  }
  if(stored===KEY){
    document.querySelectorAll('a[href$=".html"]').forEach(function(a){
      try{
        var u=new URL(a.getAttribute('href'), location.href);
        u.searchParams.set('k', KEY);
        a.setAttribute('href', u.pathname.split('/').pop() + u.search);
      }catch(e){}
    });
    return;
  }
  document.documentElement.innerHTML='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><title>Draft</title></head><body style="font-family:system-ui;background:#FBF6EE;color:#2C1810;padding:3rem;max-width:32rem"><p>This draft is private. You need the link you were sent.</p></body></html>';
})();
