import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  fullHD: {
    name: 'fullHD - 1920',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  HDV: {
    name: 'HDV - 1440',
    styles: {
      width: '1440px',
      height: '1080px',
    },
  },
  '720p': {
    name: '720p - 1280',
    styles: {
      width: '1280px',
      height: '720px',
    },
  },
};


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
  },

  layout: 'fullscreen',

  backgrounds: {
    default: 'gray',
    values: [
      { name: 'twitter', value: '#00aced' },
      { name: 'facebook', value: '#3b5998' },
      { name: 'gray', value: '#999999' },
    ],
    grid: true,
    // grid: {
    //   cellSize: 20,
    //   opacity: 0.5,
    //   cellAmount: 5,
    //   offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    //   offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    // },
  }
}
