var modelEvent = require('../../events/mode-query'),
    handler = require('../../../src/mutant/handler');

describe('Test isMutant', function() {
    this.timeout(0);
    beforeEach(function() {   
        
    });

    it('Success isMutant', async() => {
        const result = await handler.Handler(modelEvent.eventQuery({}, 
          'POST', {}, {}, {}), { 'awsRequestId': '3000' });
          console.log("result:", result)
    });
    after(function() {
    });
});