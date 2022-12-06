import doTheThing from '@ZenTwipped/webpack-esm-component-root';

function blah() {
  return doTheThing();
}

function doSomethingElse() { }

module.exports = {
  __esModule: true,
  default: blah,
  doSomethingElse
};
