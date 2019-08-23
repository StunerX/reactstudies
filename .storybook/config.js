import { configure } from '@kadira/storybook';

const req = require.context('../src/components', true, /\.storybook.js/)


function loadStories() {
  req.keys().forEach(file => {
    req(file)
  });
}

configure(loadStories, module);
