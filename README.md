# ChatGPT Initial Chat Title Updater

## Description

This Chrome extension is designed specifically for use with ChatGPT and updates the document title based on the title of the initially selected chat when you first open ChatGPT. Since it only tracks the title of the chat that’s initially loaded, it’s ideal for users who need a quick, at-a-glance reference to the active chat topic without continuous tracking across sessions or multiple chats.

## Features

1. **One-Time Title Update**: Sets the document title based on the initially loaded chat title in ChatGPT's chat history navigation.
2. **Selective Monitoring**: Tracks text content changes only within the first selected chat item, marked by the `.bg-token-sidebar-surface-secondary` class, to avoid unnecessary monitoring as you navigate between chats.
3. **Focused Functionality**: The extension only updates the title when you first open ChatGPT, ensuring it won’t interfere with subsequent chats.

### Technical Overview

- **MutationObserver**: Listens for character data mutations (text content changes) within the initially selected chat in the chat history navigation.
- **Selective Execution**: Only activates on the first-loaded chat title marked with `.bg-token-sidebar-surface-secondary`, and stops once the initial title is set.
- **Title Update Logic**: Sets `document.title` to the initial chat title, creating a quick reference for the active chat upon opening ChatGPT.

## Usage

1. Install the extension in Chrome by selecting **Load unpacked** from `chrome://extensions`.
2. Open ChatGPT in a new tab.
3. Upon loading, the document title will automatically update to reflect the initially selected chat's title.
4. The extension will only apply the update once, ensuring it doesn’t interfere with further navigation between chats.

This one-time update functionality makes it a focused and lightweight solution for enhancing ChatGPT’s initial usability.
