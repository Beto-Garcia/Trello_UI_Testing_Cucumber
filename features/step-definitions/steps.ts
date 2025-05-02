import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import { BeforeAll, After  } from '@cucumber/cucumber'

// import LoginPage from '../pageobjects/login.page.js';
// import SecurePage from '../pageobjects/secure.page.js';

// const pages = {
//     login: LoginPage
// }

// // Given(/^I am on the (\w+) page$/, async (page) => {
// //     await pages[page].open()
// // });

import { LogInFormComponent } from "../pageobjects/pages/LoginPage.page";
import { HomePageHeaderComponent } from "../pageobjects/pages/HomePage.page";
import { WorkspaceDetailsComponent } from "../pageobjects/pages/WorkspacePage.page";
import { ProfileAndVisibility } from "../pageobjects/pages/SettingsPage.page";
import {
  BoardCardsListComponent,
  BoardHeaderComponent,
  BoardSideMenuComponent,
  FiltersComponent,
} from "../pageobjects/pages/BoardPage.page";
import {
  ProfileHeaderComponent,
  BoardsSectionComponent,
  WorkspacesOptionsComponent,
  AccountSettingsComponent,
  PlusOptionsComponent,
} from "../pageobjects/pages/ProfileMainPage.page";

const homePageHeader = new HomePageHeaderComponent();
const logInFormComponent = new LogInFormComponent();
const profileHeaderComponent = new ProfileHeaderComponent();
const boardsSectionComponent = new BoardsSectionComponent();
const boardHeaderComponent = new BoardHeaderComponent();
const filtersComponent = new FiltersComponent();
const boardCardsListComponent = new BoardCardsListComponent();
const accountSettingsComponent = new AccountSettingsComponent();
const profileAndVisibility = new ProfileAndVisibility();
const plusOptionsComponent = new PlusOptionsComponent();
const boardSideMenuComponent = new BoardSideMenuComponent();
const workspacesOptionsComponent = new WorkspacesOptionsComponent();
const workspaceDetailsComponent = new WorkspaceDetailsComponent();

BeforeAll (async function () {
    await browser.maximizeWindow();
    await browser.url("https://trello.com/es");
    await homePageHeader.logInBtn.click();
    await logInFormComponent.userNameTextBox.setValue("hbomax2054@gmail.com");
    await logInFormComponent.continueBtn.click();
    await logInFormComponent.passTextBox.setValue("trello123");
    await logInFormComponent.logInBtn.click();
})
After (async function () {
    await browser.url("https://trello.com");
})

Given(/^I navigate to the profile settings$/, async () => {
    await profileHeaderComponent.profileBtn.click();
    await accountSettingsComponent.profileAndVisibilityBtn.click();
});

Given(/^I navigate to my boards$/, async () => {
    await profileHeaderComponent.plusBtn.click();
    await plusOptionsComponent.createBoardBtn.click();
});

Given(/^I navigate to any of my boards$/, async () => {
    await boardsSectionComponent.boardListItem("newboard").click();
});

Given(/^I navigate to workspace settings$/, async () => {
    await profileHeaderComponent.workspacesBtn.click();
});

When(/^Update the display name to a non-taken username$/, async () =>{
    await profileAndVisibility.usernameTextBox.setValue("hbomax2054");
    await profileAndVisibility.saveBtn.click();
});

When(/^Update the display name to a taken username$/, async () =>{
    await profileAndVisibility.usernameTextBox.setValue("trello");
    await profileAndVisibility.saveBtn.click();
});

When(/^I create a new board with any name$/, async () =>{
    const newBoard = "Board_2025";
    await plusOptionsComponent.boardNameTextBox.setValue(newBoard);
    await plusOptionsComponent.submitBtn.waitForClickable();
    await plusOptionsComponent.submitBtn.click();
});

When(/^I create a new board with empty name$/, async () =>{
    await plusOptionsComponent.boardNameTextBox.setValue('');
});

When(/^I search for an existing board using the search tool$/, async () =>{
    //const existingBoard = "MyNewBoard";
    await profileHeaderComponent.searchBox.click();
    await profileHeaderComponent.expandedSearchBox.setValue("MyNewBoard");
});

When(/^I search for a non-existing board using the search tool$/, async () =>{
    //const existingBoard = "MyNewBoard";
    await profileHeaderComponent.searchBox.click();
    await profileHeaderComponent.expandedSearchBox.setValue("board121234");
});

When(/^I Create a new list$/, async () =>{
    await boardCardsListComponent.addListBtn.click();
    await boardCardsListComponent.listNameTextBox.setValue('newList123');
    await boardCardsListComponent.saveListBtn.click();
});

When(/^I try to create a new list leaving the name empty$/, async () =>{
    await boardCardsListComponent.addListBtn.click();
    await boardCardsListComponent.listNameTextBox.setValue('');
    await boardCardsListComponent.saveListBtn.click();
});

When(/^Create a new card in any list$/, async () =>{
    await boardCardsListComponent.addCardBtn.click();
    await boardCardsListComponent.cardNameTextArea.setValue('newCard');
    await boardCardsListComponent.saveCardBtn.click();
});

When(/^I try to create a new card in any list leaving the card name empty$/, async () =>{
    await boardCardsListComponent.addCardBtn.click();
    await boardCardsListComponent.cardNameTextArea.setValue('');
    await boardCardsListComponent.saveCardBtn.click();
});

When(/^I apply the filter 'Bug'$/, async () =>{
    await boardHeaderComponent.filtersBtn.click();
    await filtersComponent.bugLabel.click();
    await filtersComponent.filtersCloseBtn.click();
});

When(/^I apply the filter 'Pending'$/, async () =>{
    await boardHeaderComponent.filtersBtn.click();
    await filtersComponent.pendingLabel.click();
    await filtersComponent.filtersCloseBtn.click();
});

When(/^Update the workspace name with a valid value$/, async () =>{
    const workSpace = "Project May 2025";
    await workspacesOptionsComponent.workspaceTitle.click();
    await workspaceDetailsComponent.editIcon.click();
    await workspaceDetailsComponent.projectNameTextBox.setValue(workSpace);
    await workspaceDetailsComponent.saveBtn.click();
});

When(/^Update the workspace name with a null value$/, async () =>{
    await workspacesOptionsComponent.workspaceTitle.click();
    await workspaceDetailsComponent.editIcon.click();
    await workspaceDetailsComponent.projectNameTextBox.clearValue();
    await workspaceDetailsComponent.saveBtn.click();
});

Then(/^The profile name should display the new name$/, async () => {
    expect(await profileAndVisibility.savedAlert).toExist;
}); 

Then(/^An error message should be displayed$/, async () => {
    expect(await profileAndVisibility.errorAlert).toExist;
}); 

Then(/^The new board is displayed in my boards$/, async () => {
    const newBoard = "Board_2025";
    await boardSideMenuComponent.boardsBtn.click();
    expect(await $(`div=${newBoard}`)).toExist;
}); 

Then(/^The system should not allow me to create a new board$/, async () => {
    expect(await plusOptionsComponent.submitBtn.$('button[disabled=""]')).toExist;
}); 

Then(/^The board should be displayed in the search results$/, async () => {
    expect(
        await $('div[data-test-id="search-dialog-dialog-wrapper"]').$(`span=${"MyNewBoard"}`,),).not.toHaveElementProperty("error");
}); 

Then(/^The search results section is empty$/, async () => {
    expect(
        await $('div[data-test-id="search-dialog-dialog-wrapper"]').$(`span=${"board121234"}`,),).toHaveElementProperty("error");
}); 

Then(/^The new list is displayed on the board$/, async () => {
    expect(await $(`h2=${'newList123'}`)).toExist;
}); 

Then(/^The system will not allow me to create a new list$/, async () => {
    expect(
        await $('div[class="MwwP5nu2toWaoN"]')
          .$('textarea[data-testid="list-name-textarea"]')
          .$('textarea[placeholder="Enter list name…"]'),
      ).toExist;
}); 

Then(/^The new card is displayed on that list$/, async () => {
    expect(await $(`li=${'newCard'}`)).toExist;
}); 

Then(/^The system will not allow me to create the new card$/, async () => {
    const cardsCount = await boardCardsListComponent.cardsCount;
    expect(await boardCardsListComponent.cardsCount).toEqual(cardsCount);
}); 

Then(/^Only cards labeled 'Bug' are displayed$/, async () => {
    expect(
        await boardCardsListComponent.cardsList[0].$(
          "p=1 card matches filters",
        ),
      ).toExist;
      expect(
        await boardCardsListComponent.cardsList[1].$("p=0 cards match filters"),
      ).toExist;
      expect(
        await boardCardsListComponent.cardsList[2].$("p=0 cards match filters"),
      ).toExist;
}); 

Then(/^No cards are displayed$/, async () => {
    expect(
        await boardCardsListComponent.cardsList[0].$(
          "p=0 card matches filters",
        ),
      ).toExist;
      expect(
        await boardCardsListComponent.cardsList[1].$("p=0 cards match filters"),
      ).toExist;
      expect(
        await boardCardsListComponent.cardsList[2].$("p=0 cards match filters"),
      ).toExist;
}); 

Then(/^The workspace should display the new name$/, async () => {
    expect(await $(`h2=${'Project May 2025'}`)).toExist;
}); 

Then(/^The system should not allow me to make any update$/, async () => {
    expect(await $(`h2=${'Project May 2025'}`)).toExist;
}); 



