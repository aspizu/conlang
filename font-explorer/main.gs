costumes "font/font-*.png";

def background color {
    goto 0, 0;
    setpensize 600;
    setpencolor @color;
    pendown;
    penup;
}

def render {
    whitespace = false;
    hide;
    background "#000000";
    sety 174;
    repeat 360 / 12 {
        setx -235;
        repeat 480 / 9 {
            repeat random(0, 10) {
                nextcostume;
            }
            if (whitespace = true) | (!random(0, 10) = 0) {
                stamp;
                whitespace = false;
            } else {
                whitespace = true;
            }
            changex 9;
        }
        changey -12;
    }
}

onflag {
    render;
}
