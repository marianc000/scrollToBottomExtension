var scrollExtensionRunning = true;

if (!scrollExtensionRunTimes)
    var scrollExtensionRunTimes = 0;

async function scroll(docHeightPrev) {
    if (!scrollExtensionRunning) return;

    const html = document.scrollingElement;
    const docHeight = html.scrollHeight;

    function continueScroll() {
        scroll(docHeight);
    }
    
    if (docHeight > docHeightPrev) {
        scrollExtensionRunTimes++;
        if (scrollExtensionRunning)
            await chrome.runtime.sendMessage({ n: scrollExtensionRunTimes });
    }

    if (docHeight > html.scrollTop) {
        html.scrollTop += window.innerHeight / 10;
        requestAnimationFrame(continueScroll);
    } else {
        setTimeout(continueScroll, 1000);
    }
}

scroll();