Feature: Authorization

    Scenario: User is unauthorized
        Given main page
        When fill in Login form with short password
        Then get error message 'Password must be at least 6 characters long'