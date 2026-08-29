//=====================buttons===============================================
/**
 * Navigation utility functions for multi-part tutorial sequences.
 * Presumes a flat naming convention (e.g., tut1.html, tut2.html, tut3.html).
 */

// Helper function to extract the current file's numeric sequence ID
function getCurrentTutorialNumber() {
    // Extracts the filename from the current browser URL path
    const currentPath = window.location.pathname;
    const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    // Uses regex to pull the digits out of names like 'tut1.html' or 'tut12.html'
    const match = filename.match(/tut(\d+)\.html/);
    
    // Returns the numeric index, or default baseline of 1 if unparsed
    return match ? parseInt(match[1], 10) : 1;
}

/**
 * Directs the browser workspace forward to the subsequent tutorial page.
 * @param {number} maxTutorials - The total sequence cap of your current portfolio series.
 */
function navigateToNextTutorial(maxTutorials) {
    const currentNum = getCurrentTutorialNumber();
    
    if (currentNum < maxTutorials) {
        const nextNum = currentNum + 1;
        window.location.href = `tut${nextNum}.html`;
    } else {
        // Optional loop behavior: wrap backward to tutorial 1 if capping out
        window.location.href = 'tut1.html';
    }
}

/**
 * Directs the browser workspace backward to the preceding tutorial page.
 * @param {number} maxTutorials - The total sequence cap to fallback on if looping back.
 */
function navigateToPreviousTutorial(maxTutorials) {
    const currentNum = getCurrentTutorialNumber();
    
    if (currentNum > 1) {
        const prevNum = currentNum - 1;
        window.location.href = `tut${prevNum}.html`;
    } else {
        // Optional loop behavior: wrap forward to the maximum index if backing out of page 1
        window.location.href = `tut${maxTutorials}.html`;
    }
}

//====================================buttons==================================================
