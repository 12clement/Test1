Feature: Login Feature
    Feature This is required for a User to Log in.

    
    Scenario: Success Login
        Given A user is on login page
        Given I login as follows
          | user        | pass        |
          |standard_user| secret_sauce|
        # When A user enter username 'standard_user' 
        # And A user enter password 'secret_sauce'
        Given A user clicks on login button
        Then A user will be logged in