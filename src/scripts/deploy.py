import os
import shutil
import subprocess

# Your GitHub username
USERNAME = "tasnidmahin"  # Replace with your actual GitHub username
DIST_FOLDER = "dist/tasnidmahin.github.io"  # Replace with your actual project name
REPO_ROOT = "."  # Root of your GitHub Pages repository

# Build Angular project with correct base-href
print("Building Angular project...")
subprocess.run(["ng", "build", "--configuration", "production", "--base-href", f"https://{USERNAME}.github.io/"], check=True)

# Copy built files to repository root, replacing existing files
print("Copying files to repository root...")
for item in os.listdir(DIST_FOLDER):
    src_path = os.path.join(DIST_FOLDER, item)
    dest_path = os.path.join(REPO_ROOT, item)
    
    if os.path.isdir(src_path):
        shutil.rmtree(dest_path, ignore_errors=True)  # Remove existing folder
        shutil.copytree(src_path, dest_path)  # Copy new folder
    else:
        shutil.copy2(src_path, dest_path)  # Copy files

print("Files copied, committing changes...")

# Git commands
subprocess.run(["git", "add", "."], check=True)
subprocess.run(["git", "commit", "-m", "Deploying latest changes"], check=True)
subprocess.run(["git", "push", "origin", "main"], check=True)

print("Deployment completed!")
