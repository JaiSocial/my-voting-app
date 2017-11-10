import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import App from './App';
import myApp from './reducers';
import registerServiceWorker from './registerServiceWorker';
import Results from './components/results';

let store = createStore(myApp);

function render() {
	ReactDOM.render(
		<div className="container">
			<App store={store} />
			<hr />
			<Results store={store} />
		</div>
			, 
		document.getElementById('root')
	);
	registerServiceWorker();
};

store.subscribe(render);

render();