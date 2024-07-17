This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![GitHub package.json version](https://img.shields.io/github/package-json/v/Injsted/next-template)
![GitHub Release Date](https://img.shields.io/github/release-date/Injsted/next-template)

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Injsted/next-template/main.yml)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Injsted/next-template/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/Injsted/next-template/tree/main)
![Last Commit](https://img.shields.io/github/last-commit/Injsted/next-template)

## Project Overview

This project was started from our custom Next.js template, which serves as the starter for any future Next.js projects.
This template is designed to streamline the setup process and ensure consistency across all our projects.

### Project Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **ESLint** for code linting, configured with recommended rules for JavaScript, TypeScript, React, and React Hooks
- **Prettier** for code formatting
- **Tailwind CSS** for styling
- **Local Development Setup** with pre-configured scripts for linting and formatting

### Future Projects

All future projects will use this template, ensuring a consistent and efficient development environment. If you are
working on a project that doesn't already use this template, consider migrating to benefit from the standardized
configuration and tooling.

> **Note:**
>
> For all cloned repositories from this template, ensure that all occurrences of the project name are updated
> accordingly. This includes updating the `package-name` field in the `.release-please-config.json` file, as well as any
> other references to the project name throughout the codebase and documentation.
>
> This step is crucial to ensure that the release process, versioning, and other project-specific configurations are
> correctly aligned with the new project's name.

### Getting Started with Template [Ignore if you are working on a project that already uses this template]

To get started with development, run the following commands:

```bash
npx create-next-app@latest --example https://github.com/Injsted/next-template <your-project-name> 
cd <your-project-name>
pnpm install
```

After running these commands, you should clean the Changelog file and reset the version to `1.0.0` in the `package.json`
by running the following command:

```bash
npx node clean-slate.js
```

### Key Commands

- **Development:** `pnpm dev`
- **Build:** `pnpm build`
- **Start:** `pnpm start`
- **Lint:** `pnpm lint`
- **Format:** `pnpm format`

### Note

If this is a cloned project from the original template, you can ignore the instructions above.

## Code Quality and Formatting

This project uses ESLint and Prettier to maintain code quality and consistency.

## Starting Up the Project

To get started with the project, run the following commands:

```bash
pnpm install
pnpm dev
```

This will install the project dependencies and start the development server. You can then access the application at
`http://localhost:3000`.

### ESLint

ESLint is configured to extend recommended settings from ESLint, TypeScript, React, React Hooks, and Prettier. It
includes rules for:

- General JavaScript best practices
- TypeScript best practices
- React and React Hooks best practices
- Code formatting enforced by Prettier

### Prettier

Prettier is used for code formatting with the following settings:

- Semicolons: `true`
- Single quotes: `true`
- Print width: `80`
- Tab width: `2`
- Trailing commas: `es5`
- Arrow parens: `avoid`

### Configuration Files

- **ESLint:** `.eslintrc.json`
- **Prettier:** `.prettierrc`
- **Ignored files for Prettier:** `.prettierignore`

### Scripts

- **Lint:** `pnpm lint`
- **Format:** `pnpm format`

For auto-formatting on save in VSCode, ensure you have the following settings in `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

### Additional Configuration

- The rule `react/react-in-jsx-scope` is disabled as it is not required for React 17 and newer.

## Husky Setup

This project uses Husky to manage Git hooks, ensuring that code quality checks are run before each commit. Husky helps
automate the process of running linters and formatters, making it easier to maintain a clean and consistent codebase.

### What Are Staged Files?

Staged files are files that have been added to the staging area in Git. When you make changes to files in your working
directory, those changes are untracked by Git until you explicitly add them to the staging area using the `git add`
command. Staging files is the step before committing them to the repository.

### How It Works

Whenever you make changes to files in the project and add them to the staging area, Husky will automatically run a
series of checks on these files before allowing the commit to proceed. Specifically, it uses `lint-staged` to run ESLint
and Prettier on the staged files. This ensures that only code that meets our quality standards is committed to the
repository.

### Usage

Here’s how to work with Husky in this project:

1. **Make Changes:** Modify or create files as needed.
2. **Stage Changes:** Add your changes to the staging area using `git add`:

   ```bash
   git add <filename>
   ```

3. **Commit Changes:** Commit your changes as usual:

   ```bash
   git commit -m "Your commit message"
   ```

During the commit process, Husky will automatically run ESLint and Prettier on the staged files. If there are any issues
that can be automatically fixed (e.g., formatting issues), they will be fixed, and the commit will proceed. If there are
issues that need manual intervention (e.g., linting errors), the commit will be aborted, and you will need to fix these
issues before committing again

## CommitLint

This project uses CommitLint to enforce a consistent commit message format. CommitLint ensures that all commit messages
adhere to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard, which improves
readability and maintainability of the project's commit history.

### Commit Message Format

CommitLint is configured to follow the Conventional Commits standard, which uses the following format:

    <type>[optional scope]: <description>

**Types:**

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Changes to the build system or dependencies
- `ci`: Changes to CI configuration
- `chore`: Other changes that don't modify source code or tests
- `revert`: Reverting a previous commit

### Examples

- `feat: add user authentication`
- `fix: resolve login bug`
- `docs: update README with setup instructions`
- `style: format code with Prettier`
- `refactor: simplify API endpoint logic`

### How It Works

Whenever you make a commit, Husky will automatically run CommitLint to check your commit message. If the commit message
does not follow the Conventional Commits format, the commit will be rejected, and you will see an error message
indicating what needs to be fixed.

### Benefits

- **Consistent Commit Messages:** Helps maintain a consistent commit history across the project.
- **Improved Readability:** Makes it easier to understand the history of changes in the project.
- **Better Automation:** Allows for easier automation of versioning and changelog generation based on commit messages.

By adhering to the commit message conventions enforced by CommitLint, we ensure a clean and understandable project
history, which benefits all contributors and maintainers.

## Release Automation with Release Please

This project uses Release Please to automate the process of generating changelogs and creating releases.

### How It Works

1. **Push Changes:** When changes are pushed to the `main` branch, Release Please creates a release pull request if
   there are new changes.
2. **Merge PR:** Once the release pull request is reviewed and merged, Release Please updates the version
   in `package.json`, generates a changelog, and creates a new release on GitHub.

### Usage

- **Creating a Release:** Simply push your changes to the `main` branch. Release Please will handle the rest, including
  version bumping, changelog generation, and release creation.
- **Versioning:** The version in `package.json` is automatically updated based on the changes merged into the `main`
  branch, following semantic versioning.

### Benefits

- **Automated Changelog Generation:** Ensures that changelogs are consistent and always up to date.
- **Simplified Release Process:** Reduces manual steps for creating releases, saving time and effort.
- **Consistency:** Maintains a standardized release process across all projects using this template.

### Important Note

If this template is being cloned for a new project, make sure to update the `package-name` field in
the `.release-please-config.json` file to the new project's name. This ensures that the release process and versioning
are correctly aligned with the new project.

## Security

This project uses Snyk to find and fix vulnerabilities. Snyk helps maintain a secure codebase by continuously monitoring
for vulnerabilities in dependencies and providing automated fixes.

### Using Snyk

- **Test for vulnerabilities:**
  ```bash
  npx snyk test
    ```
- **Fix vulnerabilities:**
    ```
    npx snyk wizard
    ```
  ### Continuous Integration

Snyk is integrated with GitHub Actions to automatically test for vulnerabilities on every push and pull request to
the `main` branch. The results can be viewed in the Actions tab of the repository.

### Important Notes

- **SNYK_TOKEN:** Ensure that the `SNYK_TOKEN` is set in the repository's secrets to enable Snyk integration in GitHub
  Actions.
- **Automated Security Checks:** The security scan runs automatically on every push to the `main` branch and on every
  pull request, helping to maintain the security of the codebase.

By using these commands, you can ensure your project remains secure and up-to-date with the latest vulnerability
patches.

## Global Logger

This project uses Winston as the global logging library to maintain consistent and structured logging across the
application. The logger is configured to log messages to both console (in development) and log files (in production),
making it easier to debug and monitor the application.

### Configuration

The logger is configured in `utils/logger.ts`. The configuration includes settings for:

- **Logging Levels**: Logs are categorized into different levels such as `info`, `warn`, `error`, etc.
- **Transports**: Logs are written to files (`error.log` for errors and `combined.log` for all logs) and to the console
  in development.
- **Format**: Logs include timestamps, error stacks, and are formatted as JSON.

### Usage

You can use the logger in any part of the application including API routes, server-side functions, and middleware.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
