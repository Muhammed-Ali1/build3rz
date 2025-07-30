// This file provides utility functions for wallet operations
// The actual wallet connection is handled by the Sequence Connect hooks in components

export async function initSequence() {
  // No initialization needed with @0xsequence/connect
  // The SequenceConnect provider in index.tsx handles initialization
  console.log('Sequence initialized via SequenceConnect provider')
}

// Helper function to check if wallet is connected
export function isWalletConnected(): boolean {
  // This would need to be called from within a component that has access to useAccount
  return false // Placeholder - actual check should be done in components
}

// Note: The actual wallet connection logic should be handled in React components
// using the Sequence Connect hooks from @0xsequence/connect






