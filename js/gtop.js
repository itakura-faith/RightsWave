const bg = document.getElementById('globaltop-bg');

const bgSet = () => {
  var disp = {
    w: document.body.clientWidth,
    h: document.documentElement.clientHeight
  }
  if(disp.w * 0.5625 > disp.h ){
    bg.classList.remove('is_inset');
  }else{
    bg.classList.add('is_inset');
    bganime();
  }
}

var init = () =>{
  const el = document.getElementById('bgimage');
  const cloneEl = el.cloneNode(true);
  cloneEl.id = 'bgimage-clone';
  document.getElementById('globaltop-bg').appendChild(cloneEl);
  init = false;
}

const bganime = () => {
  init();
}

var timer;
window.addEventListener('resize',()=>{
  clearTimeout(timer);
  timer = setTimeout(bgSet,200);
});
window.addEventListener('load',()=>{
  bgSet();
  setTimeout(()=>{document.body.classList.add('is_show')},500);
});