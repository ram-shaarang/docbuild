export const lightTheme = {
  colors: {
    background: '#ffffff',
    text: '#000000',
    codeBox: {
      background: '#0d1117',
      text: '#e6edf3',
      border: 'gray'
    },
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

export type Theme = typeof lightTheme;