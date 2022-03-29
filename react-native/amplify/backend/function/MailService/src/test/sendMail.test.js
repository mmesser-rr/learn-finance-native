const assert = require('assert');
const fc = require('fast-check');

const { sendMail } = require('../index.js');

describe('sendMail', () => {
    
    it("should send mail to list of users", async () => {
        const result = await sendMail(event);
        assert.equal(result, true);
      });
    
});
