import add from '../js/utils/test.js';
import chai from 'chai';
var expect = chai.expect;

describe('加法测试', function() {
	it('1加1应该等于2', function() {
		expect(add(1, 1)).to.be.equal(2);
	});
});