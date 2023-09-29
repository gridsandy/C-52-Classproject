var myswitch = false;
document.getElementById('switch').onclick = function() {
    if (!myswitch) {
        document.getElementById('trex').style.display = 'block';
        myswitch = true;
    } else {
        document.getElementById('trex').style.display = 'none';
        myswitch = false;
    }
}