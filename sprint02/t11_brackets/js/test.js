describe("checkBrackets", () => {
    it("case.Nan", () => assert.equal(checkBrackets(NaN), '-1'))
    it("case.Undefined",function() {assert.equal(checkBrackets(undefined), '-1')})
    it("case { () }", function() {assert.equal(checkBrackets('()'), '0')})
    it("case { ()()()()() }", function() {assert.equal(checkBrackets('()()()()()'), '0')})
    it("case { ()()(string) }", function() {assert.equal(checkBrackets('()()(string)'), '0')})
    it("case { ()()()()() }", function() {assert.equal(checkBrackets('()()()()()'), '0')})
    it("case { ([ }", function() {assert.equal(checkBrackets('()()()()()()'), '0')})
    it("case { ((((((((hui)))))))) }", function() {assert.equal(checkBrackets('((((((((hui))))))))'), '0')})
    it("case { ( ( ( ( ( ( ( }", function() {assert.equal(checkBrackets('( ( ( ( ( ( ('), '7')})
    it("case { (1) (2) (3) (4) }", function() {assert.equal(checkBrackets('(1) (2) (3) (4)'), '0')})
    it("case.String",function() {assert.equal(checkBrackets('string'), '0')})
    it("case.Number",function() {assert.equal(checkBrackets(59), '0')})
    it("case.NULL",function() {assert.equal(checkBrackets(null), '0')})
    it("case { () )( }", function() {assert.equal(checkBrackets('() )('), '0')})
    it("case { 1( 2 }", function() {assert.equal(checkBrackets('1( 2'), '2')})
});