console.log("It's still working!");

let themeButtons = document.getElementsByClassName('theme-button');

for(var i=0; i < themeButtons.length; i++){

    themeButtons[i].addEventListener('click', function(){
        let style = this.dataset.style;
        console.log('Theme ' + style + ' button clicked!');

        setThemeStyle(style);
    })
}

function setThemeStyle(style){

    document.getElementById('theme-setting').href = style + ".css";
    
}

