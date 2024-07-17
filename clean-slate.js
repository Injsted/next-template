const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to execute a shell command and return the output
const execCommand = (command) => {
  try {
    return execSync(command, { stdio: 'pipe' }).toString().trim();
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    process.exit(1);
  }
};

// Check if there are any commits in the repository
const checkForCommits = () => {
  const commitCount = execCommand('git rev-list --count HEAD');
  return commitCount > 0;
};

// Reset version in package.json to 0.1.0
const resetVersion = () => {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    console.error('Error: package.json not found!');
    process.exit(1);
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  packageJson.version = '1.0.0';
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log('Reset version in package.json to 1.0.0');
};

// Clear the changelog
const clearChangelog = () => {
  const changelogPath = path.join(process.cwd(), 'CHANGELOG.md');
  if (!fs.existsSync(changelogPath)) {
    console.error('Error: CHANGELOG.md not found!');
    process.exit(1);
  }

  const newChangelogContent = '# Changelog\n\nAll notable changes to this project will be documented in this file.\n';
  fs.writeFileSync(changelogPath, newChangelogContent);
  console.log('Cleared CHANGELOG.md');
};

// Main function
const main = () => {
  if (checkForCommits()) {
    console.log('The repository already has commits. The script will not run.');
    process.exit(0);
  }

  resetVersion();
  clearChangelog();
};

main();
