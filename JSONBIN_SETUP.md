# Setting Up Real-Time Score Sharing with JSONBin.io

To enable real-time sharing so multiple users can see and update scores simultaneously, you need to set up JSONBin.io (free service).

## Step 1: Create a JSONBin.io Account

1. Go to https://jsonbin.io
2. Sign up for a free account (no credit card required)
3. Log in to your account

## Step 2: Create a Bin for Scores

1. Click "Create Bin" or go to https://jsonbin.io/app
2. Create a bin for the **Scores**:
   - Name it something like "tngl-golf-scores"
   - Set it to **Public** (so everyone can read it)
   - Copy the **Bin ID** (you'll see it in the URL or bin details)
   - Initialize it with an empty object: `{}`
   - Save the bin

## Step 3: Get Your API Key (Optional but Recommended)

1. Go to your JSONBin.io account settings
2. Find your **API Key** (Master Key)
3. Copy it (it starts with `$2b$10$` or `$2a$10$`)

**Note:** The API key is optional for public bins, but recommended if you want to ensure only authorized users can update scores.

## Step 4: Update tngl.js

Open `tngl.js` and find these lines near the top:

```javascript
const JSONBIN_SCORES_ID = 'YOUR_SCORES_BIN_ID'; // Replace with your bin ID
const JSONBIN_API_KEY = 'YOUR_API_KEY'; // Replace with your API key (optional for public bins)
```

Replace them with your actual values:

```javascript
const JSONBIN_SCORES_ID = '65abc123def456789'; // Your scores bin ID
const JSONBIN_API_KEY = '$2b$10$your_actual_api_key_here'; // Your API key (optional)
```

## Step 5: Commit and Push

```bash
git add tngl.js JSONBIN_SETUP.md
git commit -m "Add JSONBin.io configuration for real-time score sharing"
git push
```

## How It Works

- **Automatic Sync**: When anyone enters or updates a score, it's saved to JSONBin.io
- **Real-Time Updates**: The app checks for updates every 30 seconds
- **Fallback**: If JSONBin.io isn't configured, it falls back to localStorage (single-user mode)
- **No Conflicts**: The merge function prevents data loss

## Troubleshooting

- **"Could not load from JSONBin"**: Check that your bin ID is correct and the bin is set to Public
- **"Error syncing to JSONBin"**: Make sure your API key is correct (if using one)
- **Updates not showing**: Wait up to 30 seconds for automatic sync, or click the "Sync" button
- **Scores not saving**: Check browser console for errors, verify bin ID and API key

## Free Tier Limits

JSONBin.io free tier includes:
- Unlimited bins
- 10,000 requests per month
- Public bins (no authentication needed for reading)

This should be more than enough for a golf tournament scoring system!

## Security Note

For a golf tournament, you may want to:
1. Keep the bin **Public** for reading (so everyone can see scores)
2. Use an **API Key** for writing (so only authorized scorers can update)
3. Share the API key only with trusted administrators/scorers

