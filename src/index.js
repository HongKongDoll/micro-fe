import "../public/systemjs";

import "regenerator-runtime/runtime";

window.___MICRO_FE___ = true;

import { start } from "single-spa";
import loadApp from "./helper/loadApp";

Promise.all([
  loadApp("app1", "/", "http://localhost:9001/app1.js"),
  loadApp("app2", "/app2", "http://localhost:9002/app2.js"),
]).then(start);
