export const lightTheme = {
  colors: {
    background: '#ffffff',
    text: '#000000',
    explanation: {
      background: '#e9ffe9',
      border: '#4CAF50'
    },
    critical: {
      background: '#f09797'
    },
    snippet: {
      background: '#eeeeee'
    },
    section: {
      background: '#f0f0f0'
    }
  },
  spacing: {
    small: '6px',
    medium: '12px', 
    large: '20px'
  },
  borderRadius: {
    small: '4px',
    medium: '6px'
  }
};

export const darkTheme = {
  colors: {
    background: '#121212',
    text: '#e0e0e0',
    explanation: {
      background: '#263825',
      border: '#66bb6a'
    },
    critical: {
      background: '#a54242'
    },
    snippet: {
      background: '#222222'
    },
    section: {
      background: '#1e1e1e'
    }
  },
  spacing: {
    small: '6px',
    medium: '12px',
    large: '20px'
  },
  borderRadius: {
    small: '4px',
    medium: '6px'
  }
};

export type Theme = typeof darkTheme;