/**
 * WARNING: DO NOT MODIFY THIS FILE
 * This script is used to reset the project version, clear the changelog,
 * and update the project name across multiple files.
 * Modifying this script can lead to inconsistent project setups.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { createInterface } = require("readline");

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
  return commitCount > 1;
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

// Update the project name in package.json
const updateProjectName = (projectName) => {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    console.error('Error: package.json not found!');
    process.exit(1);
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  packageJson.name = projectName;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`Updated project name in package.json to ${projectName}`);
};

// Function to prompt user input
const promptUserInput = (query) => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }));
};

// Update the service name in the logger file
const updateServiceName = (projectName) => {
  const loggerPath = path.join(process.cwd(), 'src', 'lib', 'winston', 'global-logger', 'index.ts');
  if (!fs.existsSync(loggerPath)) {
    console.error('Error: src/lib/winston/global-logger/index.ts not found!');
    process.exit(1);
  }

  const loggerContent = fs.readFileSync(loggerPath, 'utf8');
  const updatedLoggerContent = loggerContent.replace(/const serviceName = '.*';/, `const serviceName = '${projectName}';`);
  fs.writeFileSync(loggerPath, updatedLoggerContent);
  console.log(`Updated service name in src/lib/winston/global-logger/index.ts to ${projectName}`);
};

// Update project name in README.md
const updateReadme = (projectName) => {
  const readmePath = path.join(process.cwd(), 'README.md');
  if (!fs.existsSync(readmePath)) {
    console.error('Error: README.md not found!');
    process.exit(1);
  }

  const readmeContent = fs.readFileSync(readmePath, 'utf8');
  const updatedReadmeContent = readmeContent.replace(/next-template/g, projectName);
  fs.writeFileSync(readmePath, updatedReadmeContent);
  console.log(`Updated README.md with project name ${projectName}`);
};

// Update the project name in package-lock.json
const updatePackageLockName = (projectName) => {
  const packageLockPath = path.join(process.cwd(), 'package-lock.json');
  if (!fs.existsSync(packageLockPath)) {
    console.error('Error: package-lock.json not found!');
    process.exit(1);
  }

  const packageLockJson = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
  packageLockJson.name = projectName;

  if (packageLockJson.packages && packageLockJson.packages[""]) {
    packageLockJson.packages[""].name = projectName;
  }

  fs.writeFileSync(packageLockPath, JSON.stringify(packageLockJson, null, 2) + '\n');
  console.log(`Updated project name in package-lock.json to ${projectName}`);
};



// Main function
const main = async () => {
  if (checkForCommits()) {
    console.log('The repository already has commits. The script will not run.');
    process.exit(0);
  }

  const projectName = await promptUserInput('Enter the project name: ');

  resetVersion();
  clearChangelog();
  updateProjectName(projectName);
  updateServiceName(projectName);
  updateReadme(projectName);
  updatePackageLockName(projectName);
};

main();
