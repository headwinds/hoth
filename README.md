![Alt text](hoth.jpg?raw=true)  

# HOTH

This is my morning experimental project and log. Although it's personal, I hope it might be part of some discourse at some point if I can come with something worthwhile.

This project is split between two main folders:

### Poles

A Python service app that mines twitter once a month pulling tweets near our western poles.

```
cd poles
python poles.py

```

### Echobase

A React/Redux UI app that visualizes these tweets and fronts my blog providing a menu of logs.  

```
cd echobase
npm install
npm start
```

### Contributing

I don't expect any forks and certainly no pull requests at this point since this is primarily a solo project but I would be happy to discuss any ideas. I encourage you to create your own.

### Personal Reporting

I want to get back to open, personal research and blogging an emphasis on the LOG. I like the concept of a Ship Captain's log where instead of writing an entire article, the captain would capture what happened that day or over a brief peroid of time. The entries would add to a post with an over arching themes along with a few tangents.  

[My Morning Routine](http://www.treehugger.com/culture/my-morning-routine-offers-glimpse-how-other-people-start-their-days.html). MMR means something entirely different to any fans of [Starcraft MMR](http://us.battle.net/sc2/en/blog/20308080/patch-37-separate-mmr-per-race-9-29-2016).   

On Jan 1st/2017, I started using [Reporter](http://www.reporter-app.com/) to help track my personal data with the plan to visualize it; possibly quarterly depending on what it looks like by then. But after a few weeks, I had stopped using Reporter daily and now want to explore why.

I believe it's missing some fun; a few distrations. Why do I open Twitter everyday and not Reporter? If Reporter asked a questons intermixed with interesting tweets, would it be more compelling?  What if I was forced to report before using Twitter? There doesn't appear to be any way to automatically launch an i0S app on start up.

### React & Redux

I'm going to use my last post of 2016, [Redux Table](http://headwinds.net/2016/04/redux-data-table/), as a starting point for this new design.

For this project, I also want to use python to mine any data and use a standard apache server instead of relying on a nodejs.
[Cabin Quest](http://cabinquest-50966.onmodulus.net/#!/) is my separate NodeJS, Express, and MongoDB project that feeds [Porthole](https://chrome.google.com/webstore/detail/porthole/dilfffpckfhcpgidnmgaeoidgekcjlln?hl=en), a chrome extension. While my node project is hosted on Modulus, my blog is hosted on the cheapest GoDaddy account I could find and doesn't support Node. This is all about having interesting and educational side proejcts that don't break the bank.

It's also nice to have a project that doesn't try to do everthing so that I can focus on learning new approaches. In this project, I would like to concentrate on improving a few things:

### Goals

#### Life

* attempt to learn something new everyday
* attempt to contribute something more meaningful that spotlights environmental concerns
* expose/measure/compare what people closest to the problem are actually saying about it

#### Design

* a compelling visualization of polar tweets
* get inspired by ancient sea-fairing explorers and sci-fi captain's log (Captain's Log, Stardate 41263.3 vs Captain's Log Supplemental)
* pick a nice colour palette, fonts, and design the flat iconography
* make it fun/challenging

#### Tech

* how to load scss from the same directory as my component (also investigate the advantages of postCSS/linting CSS)
* how I can setup eslint to visually lint while I code
* get better at unit testing with Karma & Jasmine
* how do I add (HMR) Hot Module Replacement so that I can see my results without refreshing the browser
* learn the new approaches in D3 v4
* implement complex table interactions with redux hooks
* explore how python can mine twitter and process tweets with NLP
* explore the ELK stack starting with elastic search; possibly [use logstash without kibana](https://github.com/nomiddlename/log4js-node)


### Inspiration
* [rawgraphs.io](http://rawgraphs.io/)     
* [shrdlurn.sidaw.xyz](https://worksheets.codalab.org/worksheets/0x9fe4d080bac944e9a6bd58478cb05e5e/)
* [topic models](http://blog.rolffredheim.com/2013/11/visualising-structure-in-topic-models.html)  
* [conditional-probability](http://setosa.io/ev/conditional-probability/)

### Antartica
* [super hi res map](https://earther.gizmodo.com/new-super-high-resolution-map-shows-antarctica-in-unpre-1828881343)
* [troll station](https://en.wikipedia.org/wiki/Troll_(research_station))    

### Tech Articles
* [create-react-app postCSS](https://github.com/DavidWells/PostCSS-tutorial)    
* [adding scss to create-react-app](https://medium.com/@Connorelsea/using-sass-with-create-react-app-7125d691376)       

### Github Repos
* [awesome dataviz](https://github.com/fasouto/awesome-dataviz)          
* [awesome python](https://github.com/vinta/awesome-python)  
* [deep-text-correcter](http://atpaino.com/2017/01/03/deep-text-correcter.html)   

### Github Referencing Star Wars  
* [dagoba](https://github.com/dxnn/dagoba)     

### Other D3-like Data Viz Libraries
* [vega](https://vega.github.io/)     
* [altair](https://github.com/altair-viz/altair)
* [plotly](https://plot.ly/)     
* [bokeh](http://bokeh.pydata.org/en/latest/)     

![Alt text](leia_peptalk.jpg?raw=true)  
