/*global browser sleep element describe beforeEach it expect 
 * ref site - http://mobicon.tistory.com/367 
 *            http://blog.outsider.ne.kr/1020
 **/

(function() {
	'use strict';
	
	//suite
	describe('ratior Application', function() {
		
		beforeEach(function() {
			browser().navigateTo('/main/');
			console.log("초기화면 로딩")
			sleep(2);
		});
		
		// 1 case: 
		it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
			browser().navigateTo('#/view1');
			sleep(2);
			expect(browser().location().url()).toBe("/view1");
			console.log("done case 1");
		});
		
		// 2 case:
		it('selected view2', function() {
			browser().navigateTo('#/view2');
			sleep(2);
			expect(browser().location().url()).toBe("/view2");
			console.log("done case 2");
		});
		
		
	});
})();