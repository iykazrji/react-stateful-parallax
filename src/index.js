// Import App's environment configuration...
import env_config from 'env_config';
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
// Import file's dependent components
import App from './components/app';
//Import Redux stuff...
import store from './store/store';
import { Provider } from 'react-redux';
//End Imports
console.log(store);
ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, document.querySelector('.container'));
