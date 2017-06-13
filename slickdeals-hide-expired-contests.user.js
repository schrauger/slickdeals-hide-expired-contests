// ==UserScript==
// @name        Slickdeals - Hide expired contests
// @namespace   com.schrauger.slickdeals.contests
// @author      Stephen Schrauger
// @description Using dates in the title, it hides any contests whose end date has already passed.
// @homepage    https://github.com/schrauger/slickdeals-hide-expired-contests
// @include     https://slickdeals.net/forums/forumdisplay.php?f=25*
// @version     1.1
// @grant       none
// @downloadURL https://raw.githubusercontent.com/schrauger/slickdeals-hide-expired-contests/master/slickdeals-hide-expired-contests.user.js
// @updateURL   https://raw.githubusercontent.com/schrauger/slickdeals-hide-expired-contests/master/slickdeals-hide-expired-contests.user.js
// ==/UserScript==
$(document).ready(function() {

  $('.threadtitleline > a').each(function(){
    var contest_date_text = $(this).text().match(/\d{1,2}([\/.-])\d{1,2}(\1\d{0,4})?/g);
    if (!contest_date_text) {
      // no date detected
      return true; // date is unknown, so it isn't known to be in the past.
    }

    // date parse can handle slashes, but if dashes or dots are used,
    // it assumes it's in ISO standard (so 5-16-17 would result in an error)
    contest_date_text = String(contest_date_text).replace(/[.-]/g, "/");

    if ((String(contest_date_text).match(/[\/]/g) || []).length <= 1){
      // no year provided. add that on
      contest_date_text = contest_date_text + "/2017";
    }


    var contest_date = new Date(contest_date_text);
    var today_date = new Date();
    today_date.setHours(0,0,0,0);
    //console.log(contest_date_text + ' ' + contest_date + ' ' +  today_date + (contest_date < today_date));
    if (contest_date < today_date){
      $(this).closest('tr').hide();
      //console.log('in the past');
    }
  });
});


