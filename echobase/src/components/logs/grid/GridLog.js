import React, { Component } from 'react';
import TweetEmbed from 'react-tweet-embed';
import styles from '../LogRead.css';

export default class GridLog extends Component {

	render(){
		return (
			<div className={styles.log}>
				<article className={styles.log_article}> 
					<div id="main" className={styles.log_title_container}>
						<h1 className={styles.log_title}>A Stab at a Redux Data Grid and the Github Spirit</h1>
						<h2 className={styles.log_date}>March 10, 2016</h2>	
					</div>
					<div className={styles.log_content}>
						<h3>Overview:tl;dr</h3><h2 className={styles.log_date}>Update Jan 15/2016</h2>
							<p>
							<span className={styles.tdlr}>If you need to present tabular data and require React (version 15+) following this <a href="http://redux.js.org/docs/advanced/ExampleRedditAPI.html" target="_blank">Redux pattern</a>, I would recommend <a href="https://sematext.com/blog/2016/12/07/reactjs-redux-table-sematable/" target="_blank">Sematable</a> as it best follows the connect() approach; it's highly configurable; and was fairly easy to integrate taking less than a half hour. While I'd recommend Sematable today, there is something compelling about the <a href="https://github.com/bencripps/react-redux-grid" target="_blank">react-redux-grid</a> repo. I can see its potential if it was upgraded with the connect pattern, and I know from pitching Ben that this in the works.</span> </p> 
							<h3>Tabular Data</h3>
							<h2 className={styles.log_date}>Dec 26/2016</h2>
							<p>As much as I love data visualization, not everyone wants to be dazzled exploring data weighted in color and charts. Some are quite at home with tabular data; they want cozy rows and columns not bars and bubbles. 
							</p>
							<p>About three weeks ago, I was tasked to build a new large enterprise app. Previously, I had been working on an analytics app for the last 3 years which has evolved and split between a desktop version, built on Backbone/Marionette and D3 v3, and then a mobile version, built on Angular 2 and Typescript. The mobile experience is tailored to the device and doesn't do everything that the desktop does; mainly it presents vital analytics that might spur a user to return to their desktop or give them peace of mind that it can wait.</p>
							<p>This new project presented the opportunity to use the latest web tech including Node, React/Redux, Immutable, Karma, Webpack and D3 v4 which I had been playing with over the year in my <a href="https://www.headwinds.net/works">fantasy side projects</a> and felt comfortable tackling a real project.</p> 
							<p>One of the major components of this new puzzle was an Excel-like spreadsheet possessing custom filters specific to the job of tagging massive datasets. After evaluating several <a href="http://jspreadsheets.com/" target="_blank">javascript-based spreadsheets</a>, I had narrowed the field down to 3 potential candidates: <a href="http://zippyui.com/react-datagrid/" target="_blank">Zippyui’s react-datagrid</a>, <a href="https://facebook.github.io/fixed-data-table/" target="_blank">Facebook’s fixed-data-table</a>, and <a href="http://redux.js.org/" target="_blank">Adazzle’s react-data-grid.</a> 
							</p>
							<p>
							If this wasn’t already a React-based project, I might have gone with <a href="http://redux.js.org/" target="_blank">Datatables</a>  which I used my last major project. I wanted a more modern, Virtual DOM approach so I went with react-data-grid. I selected it over the React grids since it seemed to be the most feature rich; had the best presentation website; and most contribution traffic on Github. 
							</p>
							<p>
							When evaluating a github project, I usually start with the README.md then I poke around the issues, pull requests, and review the pulse of the project searching for recent activity. If a repo hasn't been touched in over year that may not be a bad sign and may mean that it's feature complete and stable but anything older than 3-4 years may not be compatible with modern approaches which is sad since they usually can't be automatically upgraded. Where are our AI porters?! Still a human task.
							</p>
							<p>In the case of Facebook's table, it's README fails to mention that the project is <a href="https://github.com/facebook/fixed-data-table/issues/468">no longer maintained</a> and another drug company, <a href="https://www.schrodinger.com/">Schrödinger</a>, has taken up the project <a href="http://schrodinger.github.io/fixed-data-table-2/example-object-data.html">tripling the examples</a> and yet they still don't appeal to me since their examples feel less robust than the Adazzle ones. 
							</p>
							<p>
							The fact that none of the examples featured <a href="http://redux.js.org/docs/advanced/ExampleRedditAPI.html" target="_blank">Redux</a>, which has been my greatest sea change for 2016 in how I architect and develop web apps, did not put me off. It inspired me to attempt to contribute an example that did. So I've started to port some of Adazzle's examples tracking my progress, <a href="http://www.headwinds.net/lab/react-data-grid/">React Data Grid with es6 and Redux</a>.
							</p>
							<p>The first basic example was easy to port which gave me great confidence to skip ahead to examples 14 and 16 but now, I've run into a snag where I've either possibly discovered a bug deep within the ReactDataGrid module or there is something off with my implementation. It could possibly be due to my version of redux and how I've used "connect()" since the original examples do not exhibit any errors but they are based on ancient version of React 1.0 while mine are based on the latest React 15 (which will probably be ancient again by the time you read this...).
							</p>
							<p>
							In my <a href="http://www.headwinds.net/lab/react-data-grid/example14-all-features-immutable/index.html">redux version of example 14</a>, the component renders but the life cycle event componentDidMount doesn't file, only componentWillMount and thus it is not interactive; clicking Add Row does nothing. In <a href="http://www.headwinds.net/lab/react-data-grid/example16-filterable-sortable-grid/index.html" target="_blank">my redux example 16</a> I get all the proper life cycle events to fire and the interactive row sorting works, however, there are still missing required props warnings in the console that I'd like to eliminate. 
							</p>
							<p>
							Prior to this example, I had missed a crucial cornerstone of the React life cycle: <a href="http://buildwithreact.com/article/optimizing-with-shouldcomponentupdate">shouldComponentUpdate()</a>. Occasionally, after dispatching actions that fetch data, my components would enter these nasty endless-loop, death spirals and I was using hacks within didComponentUpdate to prevent future dispatches. While working on this <a href="http://codepen.io/headwinds/pen/eBboRz/">immutable tree pen</a>, I was introduced the importance of shouldComponentUpdate for managing rendering. 
							</p>
							<p>
							I'm at the point now where I'll attempt to lean on the Github community and ask for a review. I doubt I would have stayed on Github for this long had I always failed to contribute quality code. So far my success rate is perhaps 75%. I'd like to believe 3 of my 4 pull requests have bee accepted.  My last two, however, were rejected though. 
							</p>
							<p>
							I tried to add simple image loading to <a href="https://github.com/tsaiDavid/simple-redux-boilerplate/pull/23">simple-redux-boilerplate</a> which I guess was viewed as unneccessary. Who needs images?! And, then I was rejected attempting modernize this fantastic <a href="https://github.com/mewo2/terrain/pull/1#issuecomment-239428083">SVG terrain generator</a> repo. 
							</p>
							<h2 className={styles.log_date}>Update Dec 28/2017</h2>
							<p>
							So here I am, once again, with a modernization improvement but in this case they clearly have CONTRIBUTING.md file which outlines how I should proceed with this proposal. I've begun their recommended review process by <a href="https://github.com/adazzle/react-data-grid/issues/582">posting this issue</a> and now the wait begins. Since I'm posting over the Christmas holidays, I don't expect a response within 24-48 hours which is also a good sign of the health of the project; sometime next week would be reasonable. 
							</p>
							<p>
							While I wait, I now have this redux example project setup that could easily copy and paste and test against the other two candidates. I spent about a half hour looking at each and again no appeal. Then, I returned to Adazzle and thought I might be up for porting it to React 15 and redux myself. I could leverage all the tests and re-use a lot of the original files. It looks like it might take a few days to get the grid working with filtering and sorting.
							</p>
							<p>
							I decided to do another google search to see if anyone else is working on a "redux table" and... ah of course... suddenly I realized had completely missed this pattern which should have set off alarm bells since this hardly could be an original idea; other devs should have been publishing standard table examples.
							</p> 
							<h3>React Redux Tables</h3>
							<p>I had been focussing on finding a "react table" and now I've discovered that there are few more redux examples that I should review first before I re-invent the wheel. From this fruitful redux search, I have the following 4 promising candidates to dig into:   
							</p>
							<ul>
							<li><a href="https://github.com/alyssaq/react-redux-table-example" target="_blank">react-redux-table-example</a></li>
							<li><a href="https://sematext.com/blog/2016/12/07/reactjs-redux-table-sematable/" target="_blank">sematable</a></li>
							<li><a href="https://github.com/bencripps/react-redux-grid" target="_blank">react-redux-grid</a></li>
							<li><a href="https://reactabular.js.org/#/examples/crud-redux/" target="_blank">reactabular</a></li>
							</ul>
							<h2 className={styles.log_date}>Update Jan 5/2017</h2>
							<p>
							I've went through these four repos. While I like how Alyssaq claimed he built his table with a desire to also get back to data visualization, I've decided to pursue diving into the second and third repo as they offer the most examples. After a few hours experimenting with both libaries, I was able to make minor contributions to each guiding others tackling the libraries for the first time. In both cases, the library owners responded and accepted to my pull requests within 24 hours.
							</p>
							<p>
							Beside redux.org reddit example, I have two other favourite react/redux starter repos in 2016: <a href="https://github.com/erikras/react-redux-universal-hot-example">react-redux-universal-hot-example</a> and <a href="https://github.com/kriasoft/react-starter-kit/tree/feature/redux">react-starter-kit (redux feature branch)</a>. I liked the way he organized his SCSS within each component folder. I wanted to learn more about how he accomplished that trick and after some googling discovered this post, <a href="https://shellmonger.com/2016/01/19/adding-sass-support-to-webpack/">Adding Sass Support to Webpack</a>. I think <a href="https://github.com/adrianhall/grumpy-wizards/pull/6">this conversation</a> exemplifies the spirit of Github. I was able to voice my recommendation which I felt would help other developers, and Adrian took the time to answer my question and politely refuse to make the additional change offering further insight the future of the web and his work. My fork and the conversation itself is enough to inform/warn other developers anyways without having to update the site.    
							</p>
							<p>
							For the last 2 years, I had private github account costing peanuts; a very fair $7 a month. I recently closed it though because I hadn't invited any collaborators and I don't think I was growing a developer. I missed the interaction and voyeurism aspect of having other eyes on my work. Originally, I wanted a private account because I thought I might be able to monetize my RSS app but then I realized I really don't need the extra beer money - and I really didn't want to charge any price for it nor put in ads. Also, my current user base on Porthole is so small sitting at 20 (thank you if you use it) that it's definitely not a financially viable product. I simply enjoy making things and should release both the product and source for free.
							</p>
							<p>My blogging resolution for 2017 is this: I can post unfinished articles as "works-n-progress" if I design each one more like a log entry; emphasize the LOG in blog. Logs have a life. Technology changes so fast that each log can benefit readers more so than my desire as the writer to have something complete. As a reader, I realize I don't really care for the entire tech article anyways but simply sift and pan for the nuggets. Good design should surface the gold and so far this is lacking; that's why I've started a new github project codenamed <a href="https://github.com/headwinds/hoth">Hoth</a> to address and explore what personal logging means to me.</p>
								<TweetEmbed id='813843068734599169' />
					</div>
				</article>
			</div>		
  	);
	}
}

