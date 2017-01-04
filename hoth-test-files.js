/* eslint-disable */
module.exports =  Object.assign({
files : [
  './src/js/components/BasicReactDataGrid.js',
  './src/js/__tests__/BasicReactData.spec.js',
 
],
preprocessors: {
  './src/js/components/BasicReactDataGrid.js': ['browserify'],  
  './src/js/__tests__/BasicReactData.spec.js': ['browserify'],  
},
excludes : []
});