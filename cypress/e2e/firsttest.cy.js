

describe('whole trial orangehrm', () => {

  const customTimeout = {timeout : 10000}
  //implicit assertion 'should = and'
  it('Url Check - pass', () => {

    cy.wait(3000)
    //this method to check whatever inside in url will capture a particular text
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', 'opensource-demo.orangehrmlive.com')
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('Url check - failed', () => {

    cy.wait(3000)
    //this method to check whatever inside in url will capture a particular text
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', 'wrong.orangehrmlive.com')
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  })
  it('Logo check - pass', () => {

    cy.wait(3000)
    //this method to check logo
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.get('img[alt="company-branding"]', customTimeout).should('be.visible')

  })
  it('Logo check - fail', () => {

    cy.wait(3000)
    //this method to check logo
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.get('img[alt="company-branding"]', customTimeout).should('not.be.visible')

})
it('Text box - pass', () => {

  cy.wait(3000)
  //this method to check text box
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  //this is alter way of getting the two text in a box
  cy.get('div.orangehrm-demo-credentials').contains('Username : Admin')
  .siblings('p')  //siblings method is to locate another p element in p elements
  .contains('admin123')

/* this is a simple way but long process
  cy.get('div.orangehrm-demo-credentials').contains('Username : Admin')
  cy.get('div.orangehrm-demo-credentials').contains('admin123')
*/

})
it('Text box - fail', () => {

  cy.wait(3000)
  //this method to check text box
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  cy.get('div.orangehrm-demo-credentials').contains('Username : Admin')
  .siblings('p')  //siblings method is to locate another p element in p elements
  .contains('wrongpass')
  
})

it('Input fields - pass', () => {

  cy.wait(4000)
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.wait(4000)
  cy.get('input[name="username"]', customTimeout).should('be.visible').type('Admin')
  cy.get('input[name="username"]', customTimeout).should('have.value', 'Admin')
  cy.get('input[name="password"]', customTimeout).should('be.visible', 'Password').type('admin123')
  cy.get('input[name="password"]', customTimeout).should('have.value', 'admin123')
  cy.get('button[type="submit"]', customTimeout).contains(' Login ').click() // .contain() is used to find an element that contains the specified text, and returns that element.

})

it('Input fields - fail', () => {

  cy.wait(4000)
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.wait(4000)
  cy.get('input[name="username"]', customTimeout).should('be.visible').type('Admin')
  cy.get('input[name="username"]', customTimeout).should('have.value', 'Admin')
  cy.get('input[name="password"]', customTimeout).should('be.visible', 'Password').type('sample')
  cy.get('input[name="password"]', customTimeout).should('have.value', 'sample')
  cy.get('button[type="submit"]', customTimeout).should('have.text', ' Login ').click() // have.text is to  used to assert that an element has the exact text content that is expected.

})

it('Forgot password ', () => {

  cy.wait(4000)
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.wait(4000)
  cy.get('.orangehrm-login-forgot > .oxd-text').contains('Forgot your password?').click()
})

it('Reset password', () => {

  cy.wait(4000)
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
  cy.wait(4000)
  cy.get('.oxd-input').should('be.visible', 'Username').type('Admin')
})

it('Cancel reset password', () => {

  cy.wait(4000)
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
  cy.wait(4000)
  cy.get('.oxd-button--ghost').should('be.visible', 'Cancel').click()
})

it('Dropdown Profile - pass', ()=> {

  cy.wait(4000)
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  cy.wait(4000)
  cy.get('input[name="username"]', customTimeout).should('be.visible').type('Admin')
  cy.get('input[name="username"]', customTimeout).should('have.value', 'Admin')
  cy.get('input[name="password"]', customTimeout).should('be.visible', 'Password').type('admin123')
  cy.get('input[name="password"]', customTimeout).should('have.value', 'admin123')
  cy.get('button[type="submit"]', customTimeout).contains(' Login ').click()
  cy.get('.oxd-userdropdown-name').click()
})

it('Log out button', () => {

  cy.wait(4000)
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  cy.wait(4000)
  cy.get('input[name="username"]', customTimeout).should('be.visible').type('Admin')
  cy.get('input[name="username"]', customTimeout).should('have.value', 'Admin')
  cy.get('input[name="password"]', customTimeout).should('be.visible', 'Password').type('admin123')
  cy.get('input[name="password"]', customTimeout).should('have.value', 'admin123')
  cy.get('button[type="submit"]', customTimeout).contains(' Login ').click()
  cy.get('.oxd-userdropdown-name').click()
  cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
})

it('slide button', () => {

  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.wait(4000)
  cy.get('input[name="username"]', customTimeout).should('be.visible').type('Admin')
  cy.get('input[name="username"]', customTimeout).should('have.value', 'Admin')
  cy.get('input[name="password"]', customTimeout).should('be.visible', 'Password').type('admin123')
  cy.get('input[name="password"]', customTimeout).should('have.value', 'admin123')
  cy.get('button[type="submit"]', customTimeout).contains(' Login ').click() 

  cy.wait(4000)
  cy.get('.oxd-main-menu-search > .oxd-icon-button > .oxd-icon').click()

})

it.only('Search bar', ()=> {

  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.wait(4000)
  cy.get('input[name="username"]', customTimeout).should('be.visible').type('Admin')
  cy.get('input[name="username"]', customTimeout).should('have.value', 'Admin')
  cy.get('input[name="password"]', customTimeout).should('be.visible', 'Password').type('admin123')
  cy.get('input[name="password"]', customTimeout).should('have.value', 'admin123')
  cy.get('button[type="submit"]', customTimeout).contains(' Login ').click() 

  cy.get('input[placeholder="Search"]', customTimeout).type('Winonna {enter}' )
})
})