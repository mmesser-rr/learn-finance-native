const assert = require('assert');
const fc = require('fast-check');

const { getAirtable } = require('../index.js');

describe('getAirtable', () => {
    
    it("should return airtable list", async () => {
        const result = await getAirtable(event);
        assert.equal(result, true);
      });
    
});
