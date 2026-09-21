# Project Overview
- This is a web-based portfolio page for a professional software engineer.
- Run and test locally for now.
- Use https://brittanychiang.com/ as a model example.
- Structure project so it is simple to add/modify (examples: github link, list of projects)

## Core Features
- Copy the model example for now

## User Interface
- Minimal display that follows best practices for User Interface
- Dark background

# Tech Stack
Whatever is appropriate, as minimal as possible

# Directory Structure
Minimal structure, clean organization, clearly labeled folders and filenames


# Development Principles

## Code Quality
- **Simplicity first**: Favor clear, readable code over clever solutions
- **Justify complexity**: Document reasons for non-obvious implementations
- **Comprehensive comments**: Explain the "why" not just the "what"
  - Function purpose and context
  - Where/how the function is used
  - Side effects and downstream impacts
- **Reference documentation**: Link to relevant library docs, API references, and best practices

## Testing
- Write tests for all new features and bug fixes
- Run test suite before finalizing changes
- Include both unit and integration tests where appropriate
- Document test coverage and any manual testing steps

## Change Management
- **Explain tradeoffs**: Present alternatives and potential issues
- **Incremental changes**: Make focused, reviewable commits
- **Clear communication**: Summarize changes before finalizing

## Version Control
- Use descriptive but concise commit messages
- Commit to feature/test branches before merging
- Keep repository documentation up to date
- Ignore history.txt

# Logging
- Keep a prompts.txt file with a log of all user prompts that led to changes. The file will have a timestamp with the exact prompt the user submitted, followed by a very brief description of changes (shorter than history.txt)
- history.txt:  Whenever change is finalized, append a timestamped summary. Include the user Prompt that led to file changes (only finalized writes). Give a brief summary of design decisions for this commit, including pros and cons of this design, suggest possible alternatives and address potential issues.
