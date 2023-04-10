describe('Testing basic OnBase Login', () => {
    beforeEach(()=>{
       cy.visit('http://srvonbasepruws.udea.local/AppNet/Login.aspx')
        cy.wait(1000)
		 })	
    
    it('type the user an password', ()=>{
        cy.get('form').within(() => {
            cy.get('input[name="username"]').type('ANALISTA1.PRUEBAS')
            cy.get('input[name="password"]').type('t3st.Ud34')
            cy.get('button.btn.btn-primary.loginButton').click()
        })
        cy.wait(1000)
        cy.get('div.js-navMenuButton.navMenuButton').click()
        cy.wait(3000)
        cy.get('li#newform.navLink.firstLinkSet').click()
        cy.wait(3000)
        cy.get('[id="liunity103"]').click()
        cy.wait(3000)
    })
  })
