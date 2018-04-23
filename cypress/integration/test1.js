describe('Hooks', function() {
    before(function() {
      // runs once before all tests in the block
    //   cy.visit('http://localhost:8888') 
    })
  
    after(function() {
      // runs once after all tests in the block
    })
  
    beforeEach(function() {
      // runs before each test in the block
    })
  
    afterEach(function() {
      // runs after each test in the block
    })
  })

describe("check homepage buttons", function(){
    it('successfully loads', function() {
        cy.visit('http://localhost:8888') // change URL to match your dev URL
      })

    it("should have an edit name button", function(){
        cy.get('[data-test=edit-name]').should('contain',"Edit Name")
    })
})