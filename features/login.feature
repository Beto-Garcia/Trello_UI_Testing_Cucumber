Feature: Trello Board Management Tool

  @positive @settings @smoke
  Scenario: Successful workspace name update
    Given I navigate to workspace settings
    When Update the workspace name with a valid value
    Then The workspace should display the new name

  @negative @settings
  Scenario: Trying to update a workspace with an empty name
    Given I navigate to workspace settings
    When Update the workspace name with a null value
    Then The system should not allow me to make any update

  @positive @card
  Scenario: Successfully creating a new card on a list
    Given I navigate to any of my boards
    When Create a new card in any list
    Then The new card is displayed on that list

  @negative @card
  Scenario: Trying to create a card with an empty name
    Given I navigate to any of my boards
    When I try to create a new card in any list leaving the card name empty
    Then The system will not allow me to create the new card

  @positive @card @smoke
  Scenario: Filter cards by label
    Given I navigate to any of my boards
    When I apply the filter 'Bug'
    Then Only cards labeled 'Bug' are displayed

  @negative @card
  Scenario: Filter cards by non-existing label
    Given I navigate to any of my boards
    When I apply the filter 'Pending'
    Then No cards are displayed

  @positive @settings
  Scenario: Successful profile name update
    Given I navigate to the profile settings
    When Update the display name to a non-taken username
    Then The profile name should display the new name

  @negative @settings
  Scenario: Profile name update with taken username
    Given I navigate to the profile settings
    When Update the display name to a taken username
    Then An error message should be displayed

  @positive @board
  Scenario: Successfully creating a new board
    Given I navigate to my boards
    When I create a new board with any name
    Then The new board is displayed in my boards

  @negative @board
  Scenario: Not able to create a new board
    Given I navigate to my boards
    When I create a new board with empty name
    Then The system should not allow me to create a new board

  @positive @board @smoke
  Scenario: Search for an existing board
    Given I navigate to my boards
    When I search for an existing board using the search tool
    Then The board should be displayed in the search results

  @negative @board
  Scenario: Search for a non-existing board
    Given I navigate to my boards
    When I search for a non-existing board using the search tool
    Then The search results section is empty

  @positive @list
  Scenario: Successfully creating a list on a board
    Given I navigate to any of my boards
    When I Create a new list
    Then The new list is displayed on the board

  @negative @list
  Scenario: Trying to create a list with an empty name
    Given I navigate to any of my boards
    When I try to create a new list leaving the name empty
    Then The system will not allow me to create a new list