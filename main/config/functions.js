//=====================buttons===============================================
/**
 * functions.js
 * Dynamic navigation routines using global configuration variables
 */

function getCurrentTutorialNumber() {
    const currentPath = window.location.pathname;
    const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    const match = filename.match(/tut(\d+)\.html/);
    
    // Correctly parses the captured numeric group from the regex array
    return match ? parseInt(match[1], 10) : 1;
}

/**
 * Directs the browser forward to the next tutorial page based on global vars.
 */
function navigateToNextTutorial() {
    const currentNum = getCurrentTutorialNumber();
    // Safely reads the values directly from the global SiteConfig object
    const totalCap = SiteConfig ? SiteConfig.maxTutorials : 5;
    
    if (currentNum < totalCap) {
        window.location.href = `tut${currentNum + 1}.html`;
    } else {
        window.location.href = 'tut1.html'; // Loop back to start
    }
}

/**
 * Directs the browser backward to the previous tutorial page based on global vars.
 */
function navigateToPreviousTutorial() {
    const currentNum = getCurrentTutorialNumber();
    const totalCap = SiteConfig ? SiteConfig.maxTutorials : 5;
    
    if (currentNum > 1) {
        window.location.href = `tut${currentNum - 1}.html`;
    } else {
        window.location.href = `tut${totalCap}.html`; // Loop forward to end
    }
}

//====================================buttons==================================================
