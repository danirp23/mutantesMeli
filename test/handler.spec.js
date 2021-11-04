var modelEvent = require('../test/events/mode-query'),
    chai = require('chai'),
    expect = chai.expect,
    handler = require('../handler');

describe('Test isMutant', function() {
    this.timeout(0);
    beforeEach(function() {   
        
    });

    it('Success isMutant', async() => {
        const result = await handler.hello(modelEvent.eventQuery({}, 
          '', {}, {}, {}), {});
          console.log("result:", result)
        expect(result.body).to.exist
    });
    after(function() {
    });
});