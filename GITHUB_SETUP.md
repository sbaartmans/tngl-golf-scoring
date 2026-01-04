# Setting Up GitHub for TNGL Golf Scoring Website

This guide will help you set up GitHub and publish your golf scoring website to GitHub Pages.

## Step 1: Install Git (if not already installed)

1. Check if Git is installed:
   - Open a terminal in Cursor (View → Terminal or `` Ctrl+` ``)
   - Run: `git --version`
   - If you see a version number, Git is installed. Skip to Step 2.

2. If Git is not installed:
   - Download from: https://git-scm.com/download/win
   - Install with default settings
   - Restart Cursor after installation

## Step 2: Configure Git (First Time Setup)

Open a terminal in Cursor and run:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace with your actual name and the email associated with your GitHub account.

## Step 3: Set Up GitHub Authentication

### Option A: Using GitHub CLI (Recommended)

1. Install GitHub CLI:
   - Download from: https://cli.github.com/
   - Or use: `winget install GitHub.cli` (Windows 11)

2. Authenticate:
   ```bash
   gh auth login
   ```
   - Follow the prompts to authenticate with GitHub
   - Choose your preferred authentication method (browser or token)

### Option B: Using Personal Access Token

1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "Cursor Access")
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token (you won't see it again!)

7. In Cursor terminal, when Git prompts for credentials, use:
   - Username: your GitHub username
   - Password: the token you just created

### Option C: Using SSH Keys (Most Secure)

1. Generate SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "your.email@example.com"
   ```
   - Press Enter to accept default location
   - Optionally set a passphrase

2. Start SSH agent:
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

3. Copy your public key:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   - Copy the entire output

4. Add to GitHub:
   - Go to GitHub.com → Settings → SSH and GPG keys
   - Click "New SSH key"
   - Paste your public key
   - Click "Add SSH key"

5. Test connection:
   ```bash
   ssh -T git@github.com
   ```

## Step 4: Initialize Git in Your Project

1. Open the Source Control panel in Cursor:
   - Click the Source Control icon in the left sidebar (looks like a branch)
   - Or press `Ctrl+Shift+G`

2. Navigate to the tngl directory:
   ```bash
   cd tngl
   ```

3. Initialize repository:
   - Click "Initialize Repository" button
   - Or run in terminal: `git init`

4. Create `.gitignore` file:
   ```
   # OS files
   .DS_Store
   Thumbs.db
   
   # Editor files
   .vscode/
   .idea/
   *.swp
   *.swo
   
   # Logs
   *.log
   ```

## Step 5: Create GitHub Repository

1. Go to GitHub.com and click the "+" icon → "New repository"
2. Name it something like "tngl-golf-scoring"
3. Description: "TNGL Golf Tournament Scoring System"
4. Set to **Public** (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license (you already have files)
6. Click "Create repository"

## Step 6: Connect Local Repository to GitHub

In your terminal (in the `tngl` directory), run:

```bash
git remote add origin https://github.com/yourusername/tngl-golf-scoring.git
```

Or if using SSH:
```bash
git remote add origin git@github.com:yourusername/tngl-golf-scoring.git
```

Replace `yourusername` and `tngl-golf-scoring` with your actual GitHub username and repository name.

## Step 7: Commit and Push Files

```bash
git add .
git commit -m "Initial commit: TNGL Golf Scoring System"
git branch -M main
git push -u origin main
```

## Step 8: Enable GitHub Pages

1. Go to your repository on GitHub.com
2. Click **Settings** (in the repository menu)
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

Your website will be live at:
```
https://yourusername.github.io/tngl-golf-scoring/
```

**Note:** It may take a few minutes for the site to be available.

## Step 9: Update JSONBin Configuration (Important!)

After setting up JSONBin.io (see `JSONBIN_SETUP.md`), make sure to:
1. Update `tngl.js` with your JSONBin IDs and API key
2. Commit and push the changes:
   ```bash
   git add tngl.js
   git commit -m "Configure JSONBin.io for real-time score sharing"
   git push
   ```

## Using Git Going Forward

### Via Source Control Panel:
1. Click the Source Control icon (left sidebar)
2. Stage changes: Click "+" next to files
3. Commit: Enter message and click checkmark
4. Push: Click "..." menu → "Push"
5. Pull: Click "..." menu → "Pull"

### Via Terminal:
```bash
git status                    # Check status
git add .                     # Stage all changes
git add filename.js           # Stage specific file
git commit -m "Your message"  # Commit changes
git push                      # Push to GitHub
git pull                      # Pull from GitHub
```

## Troubleshooting

### "Authentication failed" error:
- Make sure you're using a Personal Access Token (not your password)
- Or set up SSH keys

### "Repository not found" error:
- Check the repository URL is correct
- Make sure you have access to the repository
- Verify your GitHub credentials

### "Permission denied" error:
- Check your SSH key is added to GitHub
- Verify SSH connection: `ssh -T git@github.com`

### Website not loading:
- Wait a few minutes after enabling GitHub Pages
- Check that `index.html` is in the root directory
- Verify the repository is set to Public
- Check repository Settings → Pages for any error messages

## Quick Reference

- **Source Control Panel**: `Ctrl+Shift+G`
- **Terminal**: `Ctrl+` ` (backtick)
- **Commit**: Stage files → Enter message → Click checkmark
- **Push**: Click "..." → "Push"
- **Pull**: Click "..." → "Pull"

