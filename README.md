# TDD-module

Using jest for unit testing as the code has been written in javascript.

Note that in the last condition where the application throws a custom exception, we can add try-catch block in the sum.js code to check that issue. But then jest will fail that test saying no exception was thrown -- that exception was already handled in the code, so there was nothing for jest test case to catch.
