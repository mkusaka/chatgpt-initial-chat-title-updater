// Chat history navigation element
const chatHistoryNav = document.querySelector('[aria-label="Chat history"]') as HTMLElement | null;

// Function to handle mutation events (text content changes)
function handleMutations(mutationsList: MutationRecord[]) {
  for (const mutation of mutationsList) {
    if (
      mutation.type === 'characterData' &&
      mutation.target.parentNode?.parentNode?.parentNode &&
      (mutation.target.parentNode.parentNode.parentNode as HTMLElement).classList.contains('bg-token-sidebar-surface-secondary')
    ) {
      // Get the updated text content and update the title
      const selectedText = (mutation.target as CharacterData).data.trim();
      document.title = selectedText;
    }
  }
}

// Setup observer to monitor text content changes in the selected element
if (chatHistoryNav) {
  const observer = new MutationObserver(handleMutations);

  // Watch for changes in text content within chatHistoryNav
  observer.observe(chatHistoryNav, {
    subtree: true,       // Watch all child elements of chatHistoryNav
    characterData: true  // Watch for text changes
  });
}
