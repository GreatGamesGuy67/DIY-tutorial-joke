//=====================buttons===============================================
/**
 * functions.js
 * Dynamic navigation routines using bootstrap.json configuration
 */

let siteConfig = null;

/**
 * Loads bootstrap.json and caches the configuration
 */
async function loadSiteConfig() {
    if (siteConfig) return siteConfig; // Return cached config
    
    try {
        const response = await fetch('./config/bootstrap.json');
        siteConfig = await response.json();
        return siteConfig;
    } catch (error) {
        console.error('Failed to load bootstrap.json:', error);
        return { tutorials: [] };
    }
}

/**
 * Gets the total number of tutorials from bootstrap.json
 */
async function getTotalTutorials() {
    const config = await loadSiteConfig();
    return config.tutorials ? config.tutorials.length : 4; // Fallback to 4
}

function getCurrentTutorialNumber() {
    const currentPath = window.location.pathname;
    const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    const match = filename.match(/tut(\d+)\.html/);
    
    // Correctly parses the captured numeric group from the regex array
    return match ? parseInt(match[1], 10) : 1;
}

/**
 * Directs the browser forward to the next tutorial page based on bootstrap.json
 */
async function navigateToNextTutorial() {
    const currentNum = getCurrentTutorialNumber();
    const totalCap = await getTotalTutorials();
    
    if (currentNum < totalCap) {
        window.location.href = `tut${currentNum + 1}.html`;
    } else {
        window.location.href = 'tut1.html'; // Loop back to start
    }
}

/**
 * Directs the browser backward to the previous tutorial page based on bootstrap.json
 */
async function navigateToPreviousTutorial() {
    const currentNum = getCurrentTutorialNumber();
    const totalCap = await getTotalTutorials();
    
    if (currentNum > 1) {
        window.location.href = `tut${currentNum - 1}.html`;
    } else {
        window.location.href = `tut${totalCap}.html`; // Loop forward to end
    }
}

//====================================buttons==================================================
