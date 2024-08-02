import { onInstalled } from './listeners/installed.js';
import { onClicked } from './listeners/action.js';
import { onMessage } from './listeners/message.js';

chrome.runtime.onInstalled.addListener(onInstalled);
chrome.action.onClicked.addListener(onClicked);
chrome.runtime.onMessage.addListener(onMessage);