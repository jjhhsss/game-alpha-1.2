
let right = false;
let left = false;
let up = false;
let down = false;
let jumpz = false;

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
        if (up == false && jumpz == false) {
            jump()
            up = true
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
    } 
		else if (event.key === 'w') {
        // keysRemove('w');
        up = false;
    }

})

let keysPressed = {
    'd': false,
    'a': false,
}

function keysAdd(button) {
    keysPressed[button] = true;
    move(button)
}
function keysRemove(button) {
    keysPressed[button] = false;
}
let inprocess = false;

function move(button) {
    if (button == 'd') {
      let player = document.querySelector('.player');
      var id = setInterval(frame, 20);
      function frame() {
          if (keysPressed['d'] == false) {
              clearInterval(id);
							console.log('end')
              return;
          } else {
              player.style.left = player.offsetLeft + 4 + 'px';
          }
      }
			return;
    }
    if (keysPressed['a'] == true) {
        let player = document.querySelector('.player');
        var id = setInterval(frame, 20);
        function frame() {
            if (keysPressed['a'] == false) {
                clearInterval(id);
                return;
            } else {
                player.style.left = player.offsetLeft - 4 + 'px';
            }
        }
    }

}
function jump() {
	jumpz = true;
	// go up
	let player = document.querySelector('.player');
	var id = setInterval(frame, 20);
	let counter = 0;
	let speed = 15; 
	function frame() {
	    if (counter == 30) {
	        clearInterval(id);
					counter = 0;
					speed = 1;
					downz()
	        return;
	    } else {
	        player.style.top = player.offsetTop - speed + 'px';
					counter++;
					if (counter % 2 == 0) {
						speed--;
					}
	    }
	}

}
function downz() {
	let player = document.querySelector('.player');
	var id = setInterval(frame, 20);
	let counter = 0;
	let speed = 1; 
	function frame() {
	    if (counter == 30) {
	        clearInterval(id);
					counter = 0;
					speed = 15;
					inprocess = false;
					jumpz = false;

	        return;
	    } else {
	        player.style.top = player.offsetTop + speed + 'px';
					counter++;
					if (counter % 2 == 0) {
						speed++;
					}
	    }
	}
}