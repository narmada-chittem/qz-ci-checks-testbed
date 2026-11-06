# qz-ci-checks-testbed

Test bed for QueueZero's CI status. The default branch requires two checks:

- `build`: runs the unit tests on every pull request.
- `ci-review`: runs on each pull request review and passes only when the latest review approves the PR.

`transition` is not required and always fails, like ticket automation that no code change can fix.
