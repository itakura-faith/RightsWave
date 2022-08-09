
//マウスストーカー用のdivタグを作成
const div = document.createElement('div');  //divタグを作成
div.id = 'stalker';                         //IDを付与
document.body.appendChild(div);             //bodyの最後に挿入

//マウスストーカー用のdivを取得
const stalker = document.getElementById('stalker');

var flg = false;
var dispinit = () =>{
    stalker.classList.add('is__show');
    flg = true;
}

//aタグにホバー中かどうかの判別フラグ
let hovFlag = false;
let ct = 0;
//マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
document.addEventListener('mousemove', function(e){
    (ct == 0)? ct = 1: ct = 0;
    if(!flg) dispinit();
    if(ct == 1){
        if (!hovFlag) {
            stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
        }
    }
});

//リンクへ吸い付く処理
const linkElem = document.querySelectorAll('a,button,input');//a:not(.no_stick_)
for (let i = 0; i < linkElem.length; i++) {
    //マウスホバー時
    linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;

        //マウスストーカーにクラスをつける
        stalker.classList.add('is__hov');

        //マウスストーカーの位置をリンクの中心に固定
        let rect = e.target.getBoundingClientRect();
        let posX = rect.left + (rect.width / 2);
        let posY = rect.top + (rect.height / 2);

        stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px) scale(0)';

    });
    //マウスホバー解除時
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('is__hov');
    });
}
