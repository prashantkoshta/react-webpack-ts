import * as React from 'react';
import * as ReactDOM from 'react-dom';

//require("./../style/css/app.scss");
import * as main from "./../assets/css/main.css";
import * as app from "./../assets/css/app.scss";


import { Hello } from "./component/Hello";


ReactDOM.render(<Hello compiler="TypeScript" framework="React"  />, document.getElementById('root'));

