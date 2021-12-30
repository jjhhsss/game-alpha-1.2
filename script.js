
let right = false;
let left = false;
let up = false;
let down = false;

document.addEventListener('keydown', function (event) {
    if (event.key === 'd') { // check if right
        if (right == false) {
            keysAdd('d');
            right = true;
        }
    } else if (event.key === 'a') { //check if left
        if (left == false) {
            keysAdd('a')
            left = true
        }
    }  else if (event.key === 'w') { //check if up
        if (up == false) {
            keysAdd('w')
            up = true
        }
    } else if (event.key === 's') { //check if down
        if (down == false) {
            keysAdd('s')
            down = true
        }
    }
})
document.addEventListener('keyup', function (event) {
    if (event.key === 'd') {
        keysRemove('d');
        right = false;
    } else if (event.key === 'a') {
        keysRemove('a');
        left = false;
    } else if (event.key === 'w') {
        keysRemove('w');
        up = false;
    } else if (event.key === 's') {
        keysRemove('s');
        down = false;
    }
})

let keysPressed = {
    'd': false,
    'a': false,
		'w': false,
		's': false,
}

function keysAdd(button) {
    keysPressed[button] = true;
    move(button)
}
function keysRemove(button) {
    keysPressed[button] = false;
}

function move(button) {
    if (button == 'd') {
        let player = document.querySelector('.player');
        var id = setInterval(frame, 20);
        function frame() {
            if (keysPressed['d'] == false) {
                clearInterval(id);

                return;
            } else {
                player.style.left = player.offsetLeft + 2 + 'px';
            }
        }
    }
    if (button == 'a') {
        let player = document.querySelector('.player');
        var id = setInterval(frame, 20);
        function frame() {
            if (keysPressed['a'] == false) {
                clearInterval(id);
                return;
            } else {
                player.style.left = player.offsetLeft - 2 + 'px';
            }
        }
    }
    if (button == 'w') {
        let player = document.querySelector('.player');
        var id = setInterval(frame, 20);
        function frame() {
            if (keysPressed['w'] == false) {
                clearInterval(id);
                return;
            } else {
                player.style.top = player.offsetTop - 2 + 'px';
            }
        }
    }
    if (button == 's') {
        let player = document.querySelector('.player');
        var id = setInterval(frame, 20);
        function frame() {
            if (keysPressed['s'] == false) {
                clearInterval(id);
                return;
            } else {
                player.style.top = player.offsetTop + 2 + 'px';
            }
        }
    }
		
}













// // Don't touch, works

// let d = false;
// let a = false;

// document.addEventListener('keydown', function(event) {
// 	//check if its right
// 	if (event.key == 'd') {
// 		if (d == false) {
// 			move('right')
// 			d = true
// 		} else {
// 			d = false
// 		}
// 	}
// 	//check if its left
// 	if (event.key == 'a') {
// 		if (a == false) {
// 			move('left')
// 			a = true
// 		} else {
// 			d = false
// 		}
// 	}
// })

// let keys = {
// 	'd' : false,
// 	'a' : false
// }

// document.addEventListener('keyup', function (event) {
// 	// check if its right
// 	if (event.key == 'd') {
// 		right = false;
// 	}
// 	//check if its left
// 	if (event.key == 'a') {
// 		left = false;
// 	}
// })

// function move(dir) {
// 	if (dir == 'right') {
// 		console.log(dir)
// 		let player = document.querySelector('.player');
// 		var id = setInterval(frame, 20);
// 		function frame() {
// 			if (right == false) {
// 				clearInterval(id);
// 				return;
// 			} else {
// 				player.style.left = player.offsetLeft + 2 + 'px';
// 			}
// 		}
// 	}
// 	if (dir == 'left') {
// 		console.log(dir)
// 		let player = document.querySelector('.player');
// 		var id = setInterval(frame, 20);
// 		function frame() {
// 			if (left == false) {
// 				clearInterval(id);
// 				return;
// 			} else {
// 				player.style.left = player.offsetLeft - 2 + 'px';
// 			}
// 		}
// 	}
// }


