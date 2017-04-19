import React, {Component} from 'react';
import { connect } from 'react-redux';
import styles from './Log.css';
import LogMenuItem from './LogMenuItem';
import LogCategoryItem from './LogCategoryItem';
import logs from './logs';
import TweetEmbed from 'react-tweet-embed';
import categories from './categories';
import classNames from 'classnames';
//import * as logActions from '../../redux/actions/log_actions';

class LogMenu extends Component {

	constructor(props){
		super(props);
		this.props = props;

		this.onClick = this.onClick.bind(this);
	}

	onClick(){
		//event.preventDefault
	}

	render(){

		const tweetStyle = {width: "300px"};
		 
		const displayLogs = logs.map( (log, logIndex)=>{
			let key = "log" + logIndex;
			return(<LogMenuItem key={key} content={log} />)
		});

		const displayCategories = categories.map( (category,catIndex)=>{
			let key = "cat" + catIndex;
			return(<LogCategoryItem key={key} content={category} onClick={this.onClick} />)
		});
	 
  	const pageClassNames = classNames('hfeed', 'site');

		return (
			<div id="page" className={pageClassNames}>
				<div id="content" className={styles.site_content} role="main">
					<div className={styles.split}>
						<div className={styles.logsColumn}>
							<div style={tweetStyle}>	
								<TweetEmbed id='827905410543685632' />
							</div>
							<div style={tweetStyle}>	
								<TweetEmbed id='828050257548341248' />
							</div>
						</div>
						<div className={styles.logsColumn}>
						{displayLogs}
						<h2 className={styles.category_title}>Categories</h2>
							<div className={styles.categoriesColumn}>		
								{displayCategories}
							</div>
						</div>
					</div>
				</div>
			</div>
	  );
	}
}

const mapStateToProps = (state) => ({
  app: state.app,
  log: state.log
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogMenu);


