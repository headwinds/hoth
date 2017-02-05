import React, {Component} from 'react';
import TweetEmbed from 'react-tweet-embed';
import HothHeader from '../../header/HothHeader';
import HothFooter from '../../footer/HothFooter';
import styles from '../Log.css';
import buffaloPlunker from "./buffaloPlunker.png";
import buffaloGems from "./buffaloGems.png";
import buffaloTabs from "./buffaloTabs.png";
import buffaloResources from "./buffaloResources.png";
import buffaloTemplates from "./buffaloTemplates.png";
import buffaloAppTemplate from "./buffaloAppTemplate.png";
import buffaloDino from "./buffaloDino.png";
import buffaloStardew from "./buffaloStardew.png";

export default class BuffaloLog extends Component {

	render(){

		const dinoStyle = {width:"300px", textAlign: "center"};

		return (
		<div id="page" >
			<HothHeader />
				<article className={styles.site_content}>
					<div id="main" className={styles.site_main}>
						<h1 className="entry-title">Pushing Codepen Angular2 and Typescript to Build Component Playgrounds</h1>
						<h2>March 10, 2016</h2>	
					</div>
					<div className="entry-content">
						<p>There are&nbsp;more than 30 different sites that offer code playgrounds where you can play with HTML, CSS, and Javascript and see the results. As of today, I believe there are really two worth pursuing for the designer/developer who wants to break up a large app into more manageable components.</p>
						<p>If I was giving out medals for code playgrounds capable of building complex components, I’d give out two silvers to <a href="http://codepen.io/headwinds/">Codepen</a> and <a href="http://plnkr.co/users/headwinds">Plunker</a>, and a bronze to <a href="https://jsfiddle.net/user/headwinds/">jsfiddle</a>. I believe gold is still up for grabs.  </p>
						<p>For the longest time, I preferred to do my tinkering in jsfiddle since it felt more flexible until last month when I started experimenting with Angular2 and playing with their example plunks. </p>
						<p>Plunker strength is its ability to create multiple files and begin simulate the complex file structure which one would encounter in a large app. It beats Codepen on this front, and I believe its currently easier to develop Angular2-based components because one can create classes and import them properly.  </p>
						<p><img src={buffaloPlunker} /></p>
						<p>I started an <a href="http://plnkr.co/edit/rXSepV1PpxaHNfBdwUEW">Observerables plunk</a> to experiment with this concept new to angular 2. Unlike promises, Oberservrables can emit multiple values over time and manage unidirectional data flow as described in this nice post, <a href="https://coryrylan.com/blog/angular-2-observable-data-services">Angular 2 Observable Data Services</a>. </p>
						<p>In my plunk, I wasn’t interested in listening to streams of data over time but I wanted to use an oberverable as a message bus which I could include in any class and have that class communicate with any other class through a pub/sub pattern. I also wanted to use named custom events which are more familiar to me than listening to data that simply changes and it allows me to apply filters on those names. As I grow my accustomed to this pattern, I’ll probably drop the named event training wheels.</p>
						<p>While experimenting with my crude, blocky art, I got inspired to build a tool that could create blocky illustrations, the type found in indie games like Fez, Sword &amp; Sworcery or Queen under the Mountain. </p>
						<p><img src={buffaloGems} /></p>
						<p>Plunker didn’t feel like the right tool to bang what I thought would initially require only 1 file of each html, css, and javascript. It was basically a coin flip between jsfiddle and codepen to build it, and heads it landed on Codepen. Subconsciously, I’m sure there were other factors that drew me to codepen over jsfiddle; many are outlined in this <a href="https://blog.codepen.io/2016/01/01/2015-year-end-review/">2015 blog post</a>. Codepen is doing more to promote community, celebrate their contributors and build the best code playground.</p>
						<p>When I landed on Codepn, instead of diving right into the code, I like how they curate a selection of pens. I went a through a number of them and noticed several seem to brag about being “pure css” and when I looked at their CSS, I thought they were either using some tool that I didn’t know about it or they were painstakingly tweaking the css by hand. I couldn’t believe their attention to detail if they in fact hand coded each line by tweaking numbers as demonstrated in this post on <a href="http://una.im/sass-pixel-art/#💁">creating art by building SCSS matrix</a>. By hand. Madness. Of course, this is something I do all the time. Beautiful madness. </p>
						<p>Back to my original plunk, I wanted put simple div-based art assets: tree, mountain, river, and buffalo in my scene. I didn’t want to tweak numbers. I want to design these assets by “painting” with blocks; similar to how minecraft paints with cubes but drag around 2d triangles and rectangles dropping them in place. </p>
						<p>How hard could it be to create this tool? I sketched out a three column grid design involving a toolbar 5%, sketch pad 70%, and code catcher 25%, and began building it one pen. I came up with Buffalo Builder, a simple tool to produce minimal illustrations that can be used in apps and games. This felt like a cool and dangerous side project as it ultimately could distract from other side projects which also begged for my attention. </p>
						<p>I spent about 2-3hrs on it every day for a week, and by fourth day it was starting to get both unwieldy and also pretty good. I was able to create crude animals, and I liked my proof concept but the code base was getting too large for a prototype. </p>
						<p>At this point, my account was still free, but after some googling about managing external resources in code pen, I had my go-for-pro moment when I discovered that pro accounts could create multiple pens and use them as a resources within one pen. I opted for the yearly subscription price $75 and plan to show my co-workers its value, and thus make something I could easily expense. After paying, I immediately flipped the pen from public to private. Like most artists, I do get a bit uncomfortable about having eyes on my work before its ready for public consumption.</p>
						<p>Once my monolithic pen reached a few hundred lines of code, I dismantled it and broke it up into six separate pens, one of each main component of the app including things like a tools, sketch, and image reference sections. I could open each component pen in a tab to work on them individually.</p>
						<p><img src={buffaloTabs.png} /></p>
						<p>I imported the CSS and JS into the master pen to assemble the app.</p>
						<p><img src={buffaloResources} /></p>
						<p>Then, I used the external pens as html templates. </p>
						<p><img src={buffaloTemplates} /></p>
						<p><a href="http://codepen.io/headwinds/pen/dMPgvz/">Buffalo Builder</a>, as an app pen, is a buggy disaster, but I’ll share it anyway so that you can see the structure, and mind the mess. Its neat how pro members can share a public pen comprised of many private pens. I believe you are probably more interested in the basic pattern so that you can start designing and developing your own tools. </p>
						<p>It’s basically vanilla javascript, a little jquery, and <a href="https://greensock.com/draggable">greensock’s draggable</a> since I first found the html5 drag/drop to be too awkward for what I wanted. Part of the fun of a code playground is instilling challenges on your work to improve your skills. It becomes a game; a puzzle to unlock with the reward being that eureka of solving something or the realization that some library isn’t worth pursuing. Being able to test-drive and make these quick, petri dish experiments outside of your large application, will save you considerable time in the long run and have significant impacts on your domain expertise. For this one, I added the side quest: how far could I get with plain javascript before I had to lean on a library.  </p>
						<p>After learning how I could use external resources with plain javascript, I wanted to see how I could apply this technique to Angular2 and Typescript. On Codepen, I did a search for Angular2 examples and browsed through many until I found one that I liked; this one by  <a href="http://codepen.io/mikkokam/pen/BjJPoX">Angular2 Template with TypeScript</a> by Mikko Kämäräinen which in turn is a fork of <a href="http://codepen.io/tine2k/pen/vLgMEb/">Martin Maier-MoessMartin pen </a>. You can see how Mikko had a nice splash of simple design to make his pen pop. It’s also well commented.  </p>
						<p><img src={buffaloAppTemplate} /></p>
						<p>Instead of a single file, I forked this pen four times to create a pen app leveraging two external asset pens: a <a href="http://codepen.io/headwinds/pen/vGGMYj">tools component pen</a> and <a href="http://codepen.io/headwinds/pen/PNNQEW">sketch component pen </a> to build the final <a href="http://codepen.io/headwinds/pen/dMMLyJ/">app pen.</a> My fourth template is a <a href="http://codepen.io/headwinds/pen/xVOzoo">tool component pen</a> which is supposed to be contained in the Tools component. When I add Tool to Tools, the brush will appear, however, if I then try to run to the app, it fails throwing an error: “EXCEPTION: Unexpected directive value ‘undefined’ on the View”. </p>
						<p>I had no problem creating deeply nested components in Plunker and this is obviously when the Angular team picked it to showcase their excellent intro to Angular2 <a href="https://angular.io/docs/ts/latest/tutorial/">Tour of Heroes</a> plunk. The file tree structure is clean, familiar, and easy to browse.</p>
						<p>Until I can figure out how to create deeply nested components, I can’t really recommend Codepen over Plunker for experimenting with Angular2 unless you’re only interested in developing one level deep, then it feels just right.   </p>
						<p>When I experiment, I personally don’t like creating To-Do list type demos but would rather work with elements from nature or pop culture. I had recently watched Revevant and really enjoy frontier stories involving spirit animals like giant grizzly bears or the <a href="https://en.wikipedia.org/wiki/White_buffalo">white buffalo</a>. </p>
						<p>While this inspiration is pretty wild, all the coding concepts do directly relate back to my day job designing and developing enterprise UI where privacy is paramount. With private pens, you can safely include sanitized client data to test your components and not worry about exposing any new IP or sensitive information. </p>
						<p>Whether you’re building an enterprise app, complex data visualization, or MMORPG, &nbsp;they are all comprised of lots of individual components that work together to form the whole experience. So whether you want to build a simple fail whale or T-rex…</p>
						<p style={dinoStyle}><img src={buffaloDino} /></p>
						<p>…or the next Stardew Valley… </p>
						<p><img src={buffaloStardew} /></p>
						<p>consider building shallow components in Codepen or deep components in Plunker for your next project. </p>
						<TweetEmbed id='562989253706387457' />
						<p>When Codepen implements a file system, it will more truly mirror how we prototype modular apps without all the headache of configuring increasing deliver time by day and overall joy of jumpoing right into the flow</p>
					</div>
				</article>
			<HothFooter />
		</div>
  )};
}

