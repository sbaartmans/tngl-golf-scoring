# Quick Start Guide

Get your TNGL Golf Scoring website up and running in minutes!

## Step 1: Set Up GitHub Repository (5 minutes)

1. Create a new repository on GitHub.com
   - Name it: `tngl-golf-scoring` (or any name you prefer)
   - Make it **Public** (required for free GitHub Pages)
   - Don't initialize with README

2. In your terminal, navigate to the `tngl` folder:
   ```bash
   cd tngl
   ```

3. Initialize Git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tngl-golf-scoring.git
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your GitHub username)

4. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: `main` branch, `/ (root)` folder
   - Save

Your site will be live at: `https://YOUR_USERNAME.github.io/tngl-golf-scoring/`

## Step 2: Set Up JSONBin.io for Real-Time Sharing (5 minutes)

1. Go to https://jsonbin.io and sign up (free)

2. Create a new bin:
   - Name: "tngl-golf-scores"
   - Set to **Public**
   - Initialize with: `{}`
   - Copy the **Bin ID**

3. Get your API Key:
   - Go to Account Settings
   - Copy your Master Key (starts with `$2b$10$`)

4. Update `tngl.js`:
   - Open `tngl.js`
   - Find lines 11-12:
     ```javascript
     const JSONBIN_SCORES_ID = 'YOUR_SCORES_BIN_ID';
     const JSONBIN_API_KEY = 'YOUR_API_KEY';
     ```
   - Replace with your actual values:
     ```javascript
     const JSONBIN_SCORES_ID = 'your_bin_id_here';
     const JSONBIN_API_KEY = '$2b$10$your_api_key_here';
     ```

5. Commit and push:
   ```bash
   git add tngl.js
   git commit -m "Configure JSONBin.io"
   git push
   ```

## Step 3: Test It Out!

1. Open your GitHub Pages URL in a browser
2. Toggle "Admin Mode" to enable score editing
3. Enter a test score
4. Open the same page in another browser/device
5. Click "Sync" - you should see the score appear!

## That's It! 🎉

Your golf scoring website is now live and ready to use. Multiple users can:
- View scores in real-time
- Update scores (with Admin Mode enabled)
- See automatic calculations for net scores and team totals
- Track tournament points across all rounds

## Need Help?

- **GitHub Setup**: See `GITHUB_SETUP.md`
- **JSONBin Setup**: See `JSONBIN_SETUP.md`
- **General Info**: See `README.md`

## Tips

- **Admin Mode**: Only enable when you need to edit scores
- **Sync Button**: Click to manually refresh scores (auto-sync happens every 30 seconds)
- **Mobile Friendly**: Works great on phones and tablets for on-course scoring
- **Multiple Devices**: Scores sync across all devices viewing the page

