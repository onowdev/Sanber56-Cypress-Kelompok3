class createAccPage {
    fn = '#firstname'
    ln = '#lastname'
    email = '#email_address'
    pass = '#password'
    cpass = '#password-confirmation'
    create = '#form-validate > .actions-toolbar > div.primary > .action > span'

    inputfn (fn){
        cy.get(this.fn).type(fn)
    }
    inputln (ln){
        cy.get(this.ln).type(ln)
    }
    inputemail (email){
        cy.get(this.email).type(email)
    }
    inputpass (pass){
        cy.get(this.pass).type(pass)
    }
    inputcpass (cpass){
        cy.get(this.cpass).type(cpass)
    }
    clickcreate (){
        cy.get(this.create).click()
    }


}

export default new createAccPage ()
