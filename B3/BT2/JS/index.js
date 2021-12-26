import Couter from "./module.js";

const c1 = new Couter.Couter('c1');
const c2 = new Couter.Couter('c2')

const btnStopAll = new Couter.stopAll('btnStopAll')
const btnStartAll = new Couter.startAll('btnStartAll')
let container = document.getElementById('container')
container.append(c1.render(),c2.render(),btnStopAll.render(),btnStartAll.render())
