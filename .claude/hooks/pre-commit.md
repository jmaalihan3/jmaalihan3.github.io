---
name: pre-commit
description: Run ruff linter and formatter on Python files before committing
when: before_commit
---

# Pre-Commit Hook: Ruff Python Linting

This hook runs ruff linter and formatter on all Python files before committing to ensure code quality and consistency.

## What it does

1. **Linting**: Checks Python code for errors, style issues, and potential bugs
2. **Formatting**: Automatically formats Python code to match project standards

## Commands

```bash
# Run ruff linter on all Python files
ruff check .

# Run ruff formatter on all Python files
ruff format .
```

## Installation

Ensure ruff is installed:

```bash
pip install ruff
```

Or add to `requirements.txt` or `requirements-dev.txt`:

```
ruff>=0.3.0
```

## Configuration

Create a `pyproject.toml` or `ruff.toml` file in the project root to customize ruff settings:

```toml
[tool.ruff]
line-length = 88
target-version = "py310"

[tool.ruff.lint]
select = [
    "E",   # pycodestyle errors
    "W",   # pycodestyle warnings
    "F",   # pyflakes
    "I",   # isort
    "B",   # flake8-bugbear
    "C4",  # flake8-comprehensions
    "UP",  # pyupgrade
]
ignore = []

[tool.ruff.format]
quote-style = "double"
indent-style = "space"
```

## Behavior

- **Linting errors**: Commit will be blocked if critical issues are found
- **Formatting**: Code will be auto-formatted; review changes before committing
- **Exit codes**: Non-zero exit code blocks the commit
