document.addEventListener('DOMContentLoaded', () => {
    const gamesContainer = document.getElementById('games-container');
    const addGameBtn = document.getElementById('add-game-btn');

    addGameBtn.addEventListener('click', () => {
        const gameUrl = document.getElementById('game-url').value.trim();
        const gameTitle = document.getElementById('game-title').value.trim();

        if (gameUrl && gameTitle) {
            addGame(gameTitle, gameUrl);
            document.getElementById('game-url').value = '';
            document.getElementById('game-title').value = '';
        } else {
            alert('Please enter both a title and a URL for the game.');
        }
    });

    function addGame(title, url) {
        const gameDiv = document.createElement('div');
        gameDiv.className = 'game';

        const gameLink = document.createElement('a');
        gameLink.href = url;
        gameLink.target = '_blank'; // open in new tab
        gameLink.textContent = title;
        gameLink.style.textDecoration = 'none'; // Remove underline from links
        gameLink.style.color = '#000'; // Set text color

        gameDiv.appendChild(gameLink);
        gamesContainer.appendChild(gameDiv);
    }
});
