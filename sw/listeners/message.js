export function onMessage({ n }, { tab: { id: tabId } }) {
    return chrome.action.setBadgeText({ tabId, text: '' + n });
}