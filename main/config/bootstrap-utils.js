/**
 * bootstrap-utils.js
 * Initializes interactive framework components across tutorial layouts
 */

// Wait for the complete DOM (page layout) to finish loading before running utilities
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Initialize Standard Bootstrap Tooltips
    // Useful for showing helper text when hovering over inventory items
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // 2. Initialize Standard Bootstrap Popovers
    // Useful for clicking an item to open a small descriptive info bubble
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

});
