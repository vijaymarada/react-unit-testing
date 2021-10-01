import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import calculatorReducers from './Reducer/calculatorReducers'
import Layout from "./Components/Layout";

const app = document.getElementById('root')

const store = createStore(calculatorReducers)

ReactDOM.render(
	<Provider store={store}>
		<Layout/>
	</Provider>
	, app);

