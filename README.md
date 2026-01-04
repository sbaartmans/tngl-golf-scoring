# TNGL Golf Scoring System

A web-based golf tournament scoring system for the TNGL (Team Match Play) tournament. This application tracks scores across multiple rounds, calculates net scores, and displays team standings in real-time.

## Features

- **Multi-Round Scoring**: Tracks scores for all tournament rounds
  - Round 1: 6-Ball format at Payne's Valley
  - Round 2A: Alternate Shot at Gilded Dunes
  - Round 2B: Match Play at Top of the Rock
  - Round 3: Individual Match Play at Wynn Golf Course

- **Real-Time Updates**: Multiple users can view and update scores simultaneously using JSONBin.io

- **Automatic Calculations**:
  - Net scores (gross score minus handicap strokes)
  - Team totals (lowest score per hole for team rounds)
  - Match play hole winners
  - Overall tournament points

- **Admin Mode**: Toggle admin mode to edit any score on the course

- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Teams

- **Team Baartmans**: Sean, Kevin, Steve
- **Team Kraft**: Brian, Jason, Vinoo

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A GitHub account (for hosting)
- A JSONBin.io account (for real-time score sharing)

### Setup Instructions

1. **Clone or Download** this repository
2. **Set up GitHub Pages** (see `GITHUB_SETUP.md`)
3. **Configure JSONBin.io** (see `JSONBIN_SETUP.md`)
4. **Open** `index.html` in a web browser or visit your GitHub Pages URL

## File Structure

```
tngl/
├── index.html          # Main HTML file
├── tngl.js            # JavaScript logic and scoring calculations
├── tngl.css           # Styles and layout
├── images/            # Tournament logos and images
│   ├── TNGL.jpeg
│   └── GarageMahal2.png
├── README.md          # This file
├── GITHUB_SETUP.md    # GitHub Pages setup guide
└── JSONBIN_SETUP.md   # Real-time sharing setup guide
```

## Usage

### Viewing Scores

1. Open the website in your browser
2. Navigate through the rounds using the tabs
3. Scores update automatically every 30 seconds
4. Click the "Sync" button to manually refresh scores

### Entering Scores (Admin Mode)

1. Toggle "Admin Mode" switch at the top of the page
2. Click on any score input field
3. Enter the gross score for that hole
4. Net score is calculated automatically
5. Scores are saved automatically to JSONBin.io

### Scoring Rules

- **Round 1 (6-Ball)**: All players complete each hole. Team score is the lowest net score of the three team players per hole.
- **Round 2A (Alternate Shot)**: Pairs alternate shots. Lowest net total wins.
- **Round 2B (Match Play)**: Head-to-head match. Player with most holes won wins.
- **Round 3 (Individual Match Play)**: Three individual matches. Each match winner earns 2 points for their team.

## Points System

- Round 1: 2 points
- Round 2A: 2 points
- Round 2B: 1 point
- Round 3: 2 points per match (6 points total)

**Total: 11 points available**

## Handicap Strokes

Handicap strokes are automatically applied based on each player's index and the course handicap for each hole. The system calculates net scores by subtracting strokes from gross scores.

## Technology

- **HTML5**: Structure and layout
- **CSS3**: Styling and responsive design
- **JavaScript (ES6+)**: Scoring logic and data management
- **Bootstrap 5**: UI framework
- **Font Awesome**: Icons
- **JSONBin.io**: Real-time data storage and synchronization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for private use by the TNGL tournament participants.

## Support

For issues or questions:
1. Check the setup guides (`GITHUB_SETUP.md` and `JSONBIN_SETUP.md`)
2. Check browser console for error messages
3. Verify JSONBin.io configuration in `tngl.js`

## Version History

- **v1.0.0**: Initial release with all four rounds, real-time sync, and admin mode

