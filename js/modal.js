/*モーダル開閉*/

const modalSet = (option) => {

    let modal = new Object;

    modal = {
        base: {
            name: (typeof(option) == 'string') ? option : option.target
        }
    }

    modal.base.elm = document.getElementById(modal.base.name);
    modal.body = modal.base.elm ? modal.base.elm.querySelector('.modal-body') : null;
    modal.closebt = modal.base.elm ? modal.base.elm.querySelectorAll('.modal-closeBt') : null;
    
    var st = window.pageYOffset;
    var i;

    var setScroll = function() {

        if(modal.base.elm.clientHeight - 30 < modal.body.clientHeight){

            modal.base.elm.classList.add('type__scroll');

        }else{

            modal.base.elm.classList.remove('type__scroll');

        }

    }

    if(!modal.base || !modal.body) return;

    setScroll();

    /*スクロールバーチェック*/
    var scrollbarWidth = window.innerWidth - document.body.clientWidth;

    if (scrollbarWidth) {
        document.body.classList.add("_scrolllocked");
        document.body.style.setProperty("--sc-bar-w", scrollbarWidth + "px");
    } else {
        document.body.classList.add("_scrolllocked");
        document.body.style.setProperty("--sc-bar-w", 0);
    }

    /*モーダル表示*/
    modal.base.elm.classList.add("is__show");

    /*モーダル背景クリック*/
    modal.base.elm.addEventListener("click", modal_close);

    modal.body.addEventListener("click", function(e) {
        e.stopPropagation();
    });

    /*クローズボタンクリック*/
    if (modal.closebt) {
        for (i = 0; i < modal.closebt.length; i++) {
            modal.closebt[i].addEventListener("click", modal_close);
        }
    }

    function modal_close() {
        modal.base.elm.classList.remove("is__show");
        modal.base.elm.removeEventListener("click", modal_close);
        if (modal.closebt) {
            for (i = 0; i < modal.closebt.length; i++) {
                modal.closebt[i].removeEventListener("click", modal_close);
            }
        }
        (modal.base.elm = ""), (modal.body = ""), (modal.closebt = "");
        setTimeout(function() {
            if (scrollbarWidth) {
                document.body.classList.remove("_scrolllocked");
                document.body.style.setProperty("--sc-bar-w", 0);
            } else {
                document.body.classList.remove("_scrolllocked");
                document.body.style.setProperty("--sc-bar-w", 0);
            }
        }, 500);
    }
};
