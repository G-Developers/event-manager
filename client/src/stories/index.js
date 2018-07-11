import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './../containers/App/App';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import { withInfo } from '@storybook/addon-info';

const store = configureStore();
storiesOf('Authentication', module).add(
	'App',
	withInfo(`
      App component: This is main appication component

      ~~~js
      <App/>
      ~~~
    
    `)(() => (
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	))
); // Generating Error

/*
storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
*/
