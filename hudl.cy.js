// First Test Case
describe('Verify if the "High Schools" tab displays intended results', () => {
  beforeEach(() => {
    // Visits the actual home page of Hudl
    //homePage.visitHomePage();
    cy.visit('https://www.hudl.com/');

  });
  it('Navigate to the hudl home page.', () => 
  {
  })
  
  it('Click on the high school tab.', () => 
  {
    cy.get('#homepage_persona-picker_high-schools').click()
  })
})

// Second Test Case
describe('Verify if the club and sports link in the "Solutions" tab displays "Get in Touch" Button', () => {
  beforeEach(() => {

    // Visits the actual home page of Hudl
    cy.visit('https://www.hudl.com/');

  });
  it('Navigate to the hudl home page.', () => 
  {
  })
  
  it('Click on the "Solutions" tab.', () => 
  {
    cy.get('.mainnav__toggle').click()
    cy.get('.mainnav__container--horizontal > .mainnav__item').click()
    cy.get('.subnav__group__inner > .subnav__items > :nth-child(1) > .subnav__item > .subnavitem__label').click()
    cy.get('#club_hero_contact')
  })

})

// Third Test Case
describe('Verify if user can search "Lyons Township High School in search bar in "Search Teams & Athletes" Button', () => {
  beforeEach(() => {
    
    // Visits the actual home page of Hudl
    cy.visit('https://www.hudl.com/');

  });
  it('Navigate to the hudl home page.', () => 
  {
  })
  
  it('Click on the "Search Teams & Athletes" Bar.', () => 
  {
    cy.get('.mainnav__toggle').click()
    cy.get('#site-navigation > .mainnav__btn').click()
    
  })

  it('In the Search Bar, type "Lyons Township High School" and then hit enter.', () =>
  {
    cy.get('.mainnav__toggle').click()
    cy.get('#site-navigation > .mainnav__btn').click()
    cy.get('.u-search-input').type("Lyons Township High School")
    
    // Clicks on the Recommended School that pops up
    cy.get('#home-page-main-content > div.styles_searchBarContainer__35Djc > div > ul > li:nth-child(1) > li:nth-child(2) > a').click();


  })

})

// Fourth Test Case
describe('Verify if the "Hudl Assist" walkthrough video works as intended', () => {
  beforeEach(() => {

    cy.visit('https://www.hudl.com/');

  });
  it('Navigate to the hudl home page.', () => 
  {
  })
  
  it('Click on the "See our subscription options" link under the "High School" tab.', () => 
  {
    cy.get('#homepage_card_high-school').click()
    
  })

  it('Scroll down and click on the "Hudl Assist" button.', () =>
  {
    cy.get('#homepage_card_high-school').click()
    cy.get('#s_150935-r_2-c_3-copy').click()
    cy.get('#hudl-assist_video').click()
    


  })

  it('Click on "See How It Works"', () =>
  {
    cy.get('#homepage_card_high-school').click()
    cy.get('#s_150935-r_2-c_3-copy').click()
    cy.get('#hudl-assist_video').click()

  })

})

// Fifth Test Case
describe('Verify if the sideline release notes pop up', () => {
  beforeEach(() => {
    // Visits the actual home page of Hudl
    cy.visit('https://www.hudl.com/');

  });
  it('Navigate to the hudl home page.', () => 
  {
  })
  
  it('Scroll down to the bottom of the page and click "Release Notes".', () => 
  {
    cy.get(':nth-child(18) > .footer-link').click()
  })

  it('Click on "Hudl Sideline".', () => 
  {
    cy.get(':nth-child(18) > .footer-link').click()
    cy.get('#sideline-tab').click()
    cy.get('#sideline-oct-29')
  })
})

// Sixth Test Case
describe('Verify if the pro suite "Football" tab works as intended.', () => {
  beforeEach(() => {
    cy.visit('https://www.hudl.com/');

  });
  it('Navigate to the hudl home page.', () => 
  {
  })
  
  it('Click on the "Read more" link from the Roberto Martinez comment on the bottom of the page.', () => 
  {
    cy.get('#homepage_testimonial_1').click()
  })

  it('Go to the top of the bag and click the "Football" tab.', () => 
  {
    cy.get('#homepage_testimonial_1').click()
    cy.get('.breadcrumbs > [href="/blog/elite/global-football"]').click()
  })
  
})


// Seventh Test Case
describe('Verify if "Hudl Fan" in Privacy Policy in Terms and Conditions when clicked returns to full description.', () => {
  beforeEach(() => {
    cy.visit('https://www.hudl.com/');

  });
  it('Navigate to the hudl home page.', () => 
  {
  })
  
  it('Click on the "Terms & Conditions" link at the bottom of the page.', () => 
  {
    cy.get('[href="/terms"]').click()
  })

  it('Then click on "Hudls Privacy Policy" link.', () => 
  {
    cy.get('[href="/terms"]').click()
    cy.get(':nth-child(3) > .font-bold').click()
  })

  it('Click on the "4. Hudl Fan" link.', () => 
  {
    cy.get('[href="/terms"]').click()
    cy.get(':nth-child(3) > .font-bold').click()
    cy.get('[href="#four"]').click()
  })
  
})


// Eighth Test Case
describe('Verify if "Volleyball" tab works when clicking ""the worlds top organizations." link.', () => {
  beforeEach(() => {
    cy.visit('https://www.hudl.com/');

  });
  it('Navigate to the hudl home page.', () => 
  {
  })
  
  it('Scroll down and click on the "the worlds top organization." link.', () => 
  {
    cy.get('#homepage-product-overview_pro-solutions').click()
  })

  it('Scroll down again and then click on the "Volleyball" tab.', () => 
  {
    cy.get('#homepage-product-overview_pro-solutions').click()
    cy.get('#prosuite_sport_menu_volleyball').click()
  })
  
})

// Ninth Test Case
describe('Verify if user can type in First Name, Last Name, email, and phone number into Hudl SportsCode Personal Information', () => {
  beforeEach(() => {
    cy.visit('https://www.hudl.com/');

  });

  it('Navigate to the hudl home page.', () => 
  {
  })

  it('Scroll down and click on "Sportscode"', () => 
  {
    cy.get('#homepage_product-icon_sportscode > .w-10').click()
  })
  
  it('Scroll down and then type in "Alex" in the First Name, "Fergestad" for the Last Name, "ajfergestad@comcast.net" for the email, and "9999999999" for the Phone Number', () => 
  {
    cy.get('#homepage_product-icon_sportscode > .w-10').click()
    cy.get('#FirstName').type("Alex")
    cy.get('#LastName').type("Fergestad")
    cy.get('#Email').type("ajfergestad@comcast.net")
    cy.get('#Phone').type("9999999999")
  })

})

// Tenth Test Case
describe('Verify if login functionality is valid.', () => {
  beforeEach(() => {
    cy.visit('https://www.hudl.com/');

  });

  it('Navigate to the hudl home page.', () => 
  {
  })

  it('Click on the login bar on the top right and click on the hudl Icon.', () => 
  {
    cy.get('.mainnav__actions > .mainnav__container > .mainnav__item').click()
    cy.get('.mainnav__actions > .mainnav__container > .mainnav__sub > .subnav__inner > :nth-child(1) > .subnav__items > .subnav__item').click()
  })
  
  it('Enter in "ajfergestad@comcast.net" for the email and "Amber0127$" for the password.', () => 
  {
    cy.get('.mainnav__actions > .mainnav__container > .mainnav__item').click()
    cy.get('.mainnav__actions > .mainnav__container > .mainnav__sub > .subnav__inner > :nth-child(1) > .subnav__items > .subnav__item').click()
    cy.get('#email').type("ajfergestad@comcast.net")
    cy.get('#password').type("Amber0127$")
  })

  it('Then select the "continue" button.', () => 
  {
    cy.get('.mainnav__actions > .mainnav__container > .mainnav__item').click()
    cy.get('.mainnav__actions > .mainnav__container > .mainnav__sub > .subnav__inner > :nth-child(1) > .subnav__items > .subnav__item').click()
    cy.get('#email').type("ajfergestad@comcast.net")
    cy.get('#password').type("Amber0127$")
    cy.get('#logIn').click()

  })

})