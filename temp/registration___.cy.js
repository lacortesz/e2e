describe('Testing basic OnBase Login', () => {
    beforeEach(()=>{
       cy.visit('https://uninavaut1.hylandcloud.com/221appnet/Login.aspx')
        cy.wait(1000)
		 })	
    
    it('type the user an password', ()=>{
        cy.get('form').within(() => {
            cy.get('input[name="username"]').type('VENTANILLAUNICA')
            cy.get('input[name="password"]').type('Uninavarra2023')
            cy.get('button.btn.btn-primary.loginButton').click()
        })
        cy.wait(1000)
        cy.get('div.js-navMenuButton.navMenuButton').click()
        cy.wait(3000)
        cy.get('li#newform.navLink.firstLinkSet').click()
        cy.wait(3000)
        
    })
  })
