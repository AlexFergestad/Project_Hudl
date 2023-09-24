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

describe('Verify if the club and sports link in the "Solutions" tab displays "Get in Touch" Button', () => {
  beforeEach(() => {
    // Visits the actual home page of Hudl
    //homePage.visitHomePage();
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


describe('Verify if user can search "Lyons Township High School in search bar in "Search Teams & Athletes" Button', () => {
  beforeEach(() => {
    // Visits the actual home page of Hudl
    //homePage.visitHomePage();
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

describe('Verify if the "Hudl Assist" walkthrough video works as intended', () => {
  beforeEach(() => {

    // Visits the actual home page of Hudl
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