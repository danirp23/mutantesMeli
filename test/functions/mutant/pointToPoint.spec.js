var modelEvent = require('../../events/mode-query'),
    chai = require('chai'),
    expect = chai.expect,
    handler = require('../../../src/mutant/handler');

describe('Test isMutant', function() {
    this.timeout(0);
    beforeEach(function() {   
        
    });

    it('Success isMutant', async() => {
        const result = await handler.Handler(modelEvent.eventQuery({
            "dna":["ATGCGA"]
        }, 
          'POST', {}, {}, {}), { 'awsRequestId': '3000' });
        console.log("result:", result)
    });
    it('Error Body undefined isMutant', async() => {
        const result = await handler.Handler(modelEvent.eventQuery(undefined, 
          'POST', {}, {}, {}), { 'awsRequestId': '3000' });
        expect(result.status.code).to.equal('MU4001')
    });
    it('Error Body dna isMutant', async() => {
        const result = await handler.Handler(modelEvent.eventQuery({}, 
          'POST', {}, {}, {}), { 'awsRequestId': '3000' });
        expect(result.status.code).to.equal('MU4001')
    });
    after(function() {
    });
});