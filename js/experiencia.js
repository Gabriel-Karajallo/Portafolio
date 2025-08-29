document.addEventListener('DOMContentLoaded', (event) => {
    function toggleButtonText(btn) {
        // Obtenemos el texto actual del botón
        const currentText = btn.textContent.trim();

        // Cambiamos el texto del botón instantáneamente
        if (currentText === 'Leer más') {
            btn.textContent = 'Leer menos';
        } else {
            btn.textContent = 'Leer más';
        }
    }
    
    // Exporta la función para que esté disponible globalmente
    window.toggleButtonText = toggleButtonText;
});