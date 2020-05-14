let tik = document.getElementById('tik');
let rock = document.getElementById('rock');


rock.onmouseout = function() {
    rock.style.backgroundColor = 'white';
}

rock.onmouseover = function() {
    rock.style.backgroundColor = 'red';
}

tik.onmouseout = function() {
    tik.style.backgroundColor = 'white';
}

tik.onmouseover = function() {
    tik.style.backgroundColor = 'red';
}

rock.onmousedown = function() {
    rock.style.backgroundColor = 'orange';
}

rock.onmouseup = function() {
    rock.style.backgroundColor = 'red';
}

tik.onmousedown = function() {
    tik.style.backgroundColor = 'orange';
}

tik.onmouseup = function() {
    tik.style.backgroundColor = 'red';
}