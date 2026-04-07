function ativarSom() {
    const song = document.getElementById('song');
    song.play();

    const btn = document.getElementById('unmute-btn');
    btn.textContent = '🔊 Som ativado';
    btn.classList.remove('bg-orange-500', 'hover:bg-orange-400', 'animate-bounce');
    btn.classList.add('bg-green-600', 'hover:bg-green-500', 'cursor-default');
    btn.onclick = null;

    // Esconde o botão após 2 segundos
    setTimeout(() => {
        btn.style.opacity = '0';
        btn.style.transform = 'scale(0.8)';
        btn.style.transition = 'all 0.5s ease';
        setTimeout(() => btn.remove(), 500);
    }, 2000);
}