This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

### Getting Started with Template [Ignore if you are working on a project that already uses this template]

To get started with development, clone the repository with your own project name:

```bash
git clone <repository-url> <your-project-name>
cd <your-project-name>
pnpm install
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
