let detectIEUtil;
class DetectIEUtil {

    constructor(){

    }

		isIE() {
     var msie, rv, rvNum, trident, ua, undef;
      
      if (this.isIECache) {
        return this.isIECache;
      }
      undef = void 0;
      rv = -1;
      ua = window.navigator.userAgent;
      msie = ua.indexOf("MSIE ");
      trident = ua.indexOf("Trident/");
      if (msie > 0) {
        rv = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
      } else if (trident > 0) {
        rvNum = ua.indexOf("rv:");
        rv = parseInt(ua.substring(rvNum + 3, ua.indexOf(".", rvNum)), 10);
      }
      this.isIECache = (rv > -1 ? rv : undef);
      
      return this.isIECache;
		}


};

export default detectIEUtil = new DetectIEUtil();


