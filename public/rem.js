(function rem() {
  let fonts = document.documentElement.clientWidth / 120
  //我们获取到document.documentElement.clientWidth 即当前浏览器宽度 等分为120份
  // 一份的大小 在1440屏幕下 为12px， 在1920屏幕下 为16px
  if (fonts <= 12) {
    fonts = 12;
    document.documentElement.style.fontSize = fonts + "px"
    //当字体小于12 即1440 屏幕以下  我们让其为12
    document.documentElement.style.minWidth = '1440px'
    //同时设置屏幕的最小宽度为1440px
  } else if (fonts > 12 && fonts <= 16) {
    //如果在12--16之间  我们认为 此时屏幕宽度为 1440-1920之间  就可以使用
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 120 + 'px';
  }
  window.onresize = rem;
  //window的窗口发生变化时  执行rem 函数 
  // 想必您已经知道了  我们在设置css 的单位时   将使用 rem
  // 比如  设计图  1920下 为100px   那么此时的单位应该为 6.25rem
  

})()
document.addEventListener('DOMContentLoaded', function (event) {
  //chrome浏览器
  document.body.style.zoom = 'reset';
  document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey === true || e.metaKey === true) &&
          (e.which === 61 || e.which === 107 || e.which === 173 || e.which === 109
              || e.which === 187 || e.which === 189)) {
          e.preventDefault();
      }
  }, false);
  document.addEventListener('mousewhell DOMMouseScroll', function (e) {
      if (e.ctrlKey === true || e.metaKey === true) {
          e.preventDefault();
      }
  }, false);
}, false);

