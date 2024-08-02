const ON = 'on', OFF = 'off';

const states = {
    [OFF]: { title: 'Scroll down', badge: '', image: '/images/off.png', script: '/content/contentStop.js' },
    [ON]: { title: 'Stop scrolling', badge: 'on', image: '/images/on.png', script: '/content/contentRun.js' }
};

export function setOff() {
    setState(states[OFF]);
}

async function getNextStateByTabBadge(tabId) {
    const tabBadge = await chrome.action.getBadgeText({ tabId });
    return Object.values(states).find(o => tabBadge !== o.badge);
}

function setState(state, tabId) {
    const { title, image, script, badge, func } = state;

    if (tabId)
        chrome.scripting.executeScript({
            target: { tabId },
            files: [script]
        });

    chrome.action.setIcon({ tabId, path: image });
    chrome.action.setTitle({ tabId, title });
    chrome.action.setBadgeText({ tabId, text: badge });
}

export async function setNextState(tabId) {
    const nextState = await getNextStateByTabBadge(tabId);
    setState(nextState, tabId);
}