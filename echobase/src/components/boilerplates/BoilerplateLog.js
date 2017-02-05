import HothHeader from '../header/HothHeader';
import HothFooter from '../footer/HothFooter';

const key = "boilerplate";

export default function BoilerplateLog() {
	 
	return (
		<div id="page" className={pageClassNames}>
			<HothHeader />
			<div id="main" className={styles.site_main}>
			
			</div>
			<HothFooter />
		</div>
  );
}

