let tag = document.getElementById('tag');

let tag1 = document.getElementById('tag1');
let tag2 = document.getElementById('tag2');

let i = '';
tag.onclick = () =>{

if(i == 0){
    tag.style.animation = 'tagPress 1s linear forwards';
    menuDiv.style.animation = 'menuShow 1s linear forwards';
    menuDiv.style.display = 'block';
    menuUl.style.animation = 'ulShow 1s linear forwards';
    menuUl.style.display = 'block';
    tag1.style.animation = 'tag1 1s linear forwards';
    tag2.style.animation = 'tag2 1s linear forwards';
    tag.style.zIndex = '12';
    tag1.style.zIndex = '11';
    tag2.style.zIndex = '11';
    
    i = 1;
} else{
    tag.style.animation = 'tagBack 1s linear forwards';
    menuDiv.style.animation = 'menuHide 1s linear forwards';
    menuUl.style.animation = 'ulHide 1s linear forwards';
    tag1.style.animation = 'tag1Reverse 1s linear forwards';
    tag2.style.animation = 'tag2Reverse 1s linear forwards';
    i = 0;
}
}


// page into view functions

let menuCloseUp = () =>{

    if(i==1){
    tag.style.animation = 'tagBack 1s linear forwards';
    menuDiv.style.animation = 'menuHide 1s linear forwards';
    menuUl.style.animation = 'ulHide 1s linear forwards';
    tag1.style.animation = 'tag1Reverse 1s linear forwards';
    tag2.style.animation = 'tag2Reverse 1s linear forwards';
    i = 0;
    }
}


