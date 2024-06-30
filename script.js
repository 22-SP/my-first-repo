/**
 * start game function ater chosing the number of players
 */

document.getElementById('start-game').addEventListener('click', () => {
    const numPlayers = parseInt(document.getElementById('num-players').value, 10);
    const cheeseHoldersContainer = document.querySelector('.cheese-holders');
    cheeseHoldersContainer.innerHTML = ''; // Clear existing holders

    const colors = ['yellow', 'green', 'blue', 'red', 'purple', 'orange'];

    /**
     * Selecting a colored chees/placeholder to compete in the game
     */

    for (let i = 0; i < numPlayers; i++) {
        const cheeseHolder = document.createElement('div');
        cheeseHolder.classList.add('cheese-holder', colors[i]);
        cheeseHolder.style.left = '50%';
        cheeseHolder.style.top = '50%';
        cheeseHolder.style.transform = 'translate(-50%, -50%)'; // Center the holders
        cheeseHoldersContainer.appendChild(cheeseHolder);
/**
 * Placeholder syntax for dragging the pice around the board
 */
        cheeseHolder.addEventListener('mousedown', (e) => {
            let isDragging = false;
            let offsetX, offsetY;
            const onMouseMove = (e) => {
                if (isDragging) {
                    cheeseHolder.style.left = `${e.clientX - offsetX}px`;
                    cheeseHolder.style.top = `${e.clientY - offsetY}px`;
                }
            };
            const onMouseUp = () => {
                isDragging = false;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            };
            isDragging = true;
            offsetX = e.clientX - cheeseHolder.offsetLeft;
            offsetY = e.clientY - cheeseHolder.offsetTop;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    }
});

const dice = document.getElementById('dice');
const rollDiceButton = document.getElementById('roll-dice');
/**
 * 
 * 
 * dice animation with event listener
 */
rollDiceButton.addEventListener('click', () => {
    dice.classList.add('roll');
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        dice.textContent = randomNumber;
        dice.classList.remove('roll');
    }, 1000); // 
});
