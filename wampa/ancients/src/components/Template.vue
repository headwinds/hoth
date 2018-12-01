 /* eslint-disable */
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="viewport"></div>
  </div>
</template>

<script>

import * as d3 from 'd3';

const stuff = () => {

}

export default {
  name: 'Template',
  props: {
    msg: String
  },
  mounted() {
    // stuff()
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

path {
  fill: none;
  stroke: #76BF8A;
  stroke-width: 3px;
}

</style>
