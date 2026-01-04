// TNGL Golf Scoring App
// Storage keys
const STORAGE_KEY_SCORES = 'tngl_scores';
const STORAGE_KEY_VERSION = 'tngl_version';
const APP_VERSION = '1.0.0';

// JSONBin.io configuration for real-time sharing
const JSONBIN_SCORES_ID = '695ae2d443b1c97be9193914'; // Replace with your bin ID
const JSONBIN_API_KEY = '$2a$10$G9Z6PTtUjbyJuLkW.yao6.qVV2ER0gnuVb/lbmothcUcBtxkrLPe2'; // Replace with your API key (optional for public bins)
const JSONBIN_BASE_URL = 'https://api.jsonbin.io/v3/b';

// Teams
const TEAMS = {
    BAARTMANS: {
        name: 'Team Baartmans',
        players: ['Sean', 'Kevin', 'Steve'],
        color: '#0d6efd'
    },
    KRAFT: {
        name: 'Team Kraft',
        players: ['Brian', 'Jason', 'Vinoo'],
        color: '#dc3545'
    }
};

// Course data parsed from reference files
const COURSES = {
    'Paynes Valley': {
        name: "Payne's Valley",
        holes: [
            { number: 1, par: 4, yards: 393, hcp: 3 },
            { number: 2, par: 3, yards: 197, hcp: 7 },
            { number: 3, par: 4, yards: 278, hcp: 17 },
            { number: 4, par: 5, yards: 484, hcp: 11 },
            { number: 5, par: 3, yards: 142, hcp: 9 },
            { number: 6, par: 4, yards: 405, hcp: 13 },
            { number: 7, par: 4, yards: 315, hcp: 15 },
            { number: 8, par: 5, yards: 455, hcp: 5 },
            { number: 9, par: 4, yards: 372, hcp: 1 },
            { number: 10, par: 3, yards: 140, hcp: 16 },
            { number: 11, par: 4, yards: 374, hcp: 12 },
            { number: 12, par: 4, yards: 282, hcp: 18 },
            { number: 13, par: 5, yards: 493, hcp: 2 },
            { number: 14, par: 4, yards: 353, hcp: 10 },
            { number: 15, par: 4, yards: 376, hcp: 4 },
            { number: 16, par: 3, yards: 171, hcp: 14 },
            { number: 17, par: 4, yards: 424, hcp: 8 },
            { number: 18, par: 5, yards: 479, hcp: 6 }
        ],
        players: {
            'Sean': { index: 9, strokes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            'Brian': { index: 17, strokes: [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1] },
            'Jason': { index: 17, strokes: [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1] },
            'Steve': { index: 20, strokes: [1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1] },
            'Kevin': { index: 24, strokes: [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1] },
            'Vinoo': { index: 30, strokes: [1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1] }
        }
    },
    'Gilded Dunes': {
        name: 'Gilded Dunes',
        holes: [
            { number: 1, par: 4, yards: 331, hcp: 18 },
            { number: 2, par: 5, yards: 587, hcp: 14 },
            { number: 3, par: 3, yards: 149, hcp: 4 },
            { number: 4, par: 4, yards: 395, hcp: 10 },
            { number: 5, par: 3, yards: 134, hcp: 2 },
            { number: 6, par: 5, yards: 573, hcp: 12 },
            { number: 7, par: 4, yards: 421, hcp: 16 },
            { number: 8, par: 3, yards: 157, hcp: 6 },
            { number: 9, par: 5, yards: 453, hcp: 8 },
            { number: 10, par: 4, yards: 362, hcp: 11 },
            { number: 11, par: 5, yards: 542, hcp: 5 },
            { number: 12, par: 3, yards: 149, hcp: 3 },
            { number: 13, par: 4, yards: 332, hcp: 17 },
            { number: 14, par: 3, yards: 260, hcp: 7 },
            { number: 15, par: 5, yards: 561, hcp: 15 },
            { number: 16, par: 3, yards: 135, hcp: 9 },
            { number: 17, par: 4, yards: 304, hcp: 13 },
            { number: 18, par: 5, yards: 519, hcp: 1 }
        ],
        players: {
            'Sean/Kevin': { index: 33, strokes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            'Brian/Jason': { index: 34, strokes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] }
        }
    },
    'Top of the Rock': {
        name: 'Top of the Rock',
        holes: [
            { number: 1, par: 3, yards: 123, hcp: 15 },
            { number: 2, par: 3, yards: 75, hcp: 17 },
            { number: 3, par: 3, yards: 118, hcp: 1 },
            { number: 4, par: 3, yards: 83, hcp: 5 },
            { number: 5, par: 3, yards: 91, hcp: 3 },
            { number: 6, par: 3, yards: 84, hcp: 9 },
            { number: 7, par: 3, yards: 60, hcp: 13 },
            { number: 8, par: 3, yards: 145, hcp: 7 },
            { number: 9, par: 3, yards: 106, hcp: 11 },
            { number: 10, par: 3, yards: 123, hcp: 16 },
            { number: 11, par: 3, yards: 75, hcp: 18 },
            { number: 12, par: 3, yards: 118, hcp: 2 },
            { number: 13, par: 3, yards: 83, hcp: 6 },
            { number: 14, par: 3, yards: 91, hcp: 4 },
            { number: 15, par: 3, yards: 84, hcp: 10 },
            { number: 16, par: 3, yards: 60, hcp: 14 },
            { number: 17, par: 3, yards: 145, hcp: 8 },
            { number: 18, par: 3, yards: 106, hcp: 12 }
        ],
        players: {
            'Steve': { index: 20, strokes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            'Vinoo': { index: 30, strokes: [0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0] }
        }
    },
    'Wynn Golf Course': {
        name: 'Wynn Golf Course',
        holes: [
            { number: 1, par: 4, yards: 395, hcp: 15 },
            { number: 2, par: 3, yards: 184, hcp: 11 },
            { number: 3, par: 4, yards: 415, hcp: 1 },
            { number: 4, par: 4, yards: 411, hcp: 5 },
            { number: 5, par: 4, yards: 358, hcp: 17 },
            { number: 6, par: 3, yards: 149, hcp: 13 },
            { number: 7, par: 5, yards: 516, hcp: 9 },
            { number: 8, par: 4, yards: 444, hcp: 3 },
            { number: 9, par: 3, yards: 213, hcp: 7 },
            { number: 10, par: 5, yards: 534, hcp: 4 },
            { number: 11, par: 3, yards: 157, hcp: 14 },
            { number: 12, par: 5, yards: 499, hcp: 18 },
            { number: 13, par: 4, yards: 428, hcp: 8 },
            { number: 14, par: 4, yards: 408, hcp: 10 },
            { number: 15, par: 3, yards: 153, hcp: 12 },
            { number: 16, par: 4, yards: 362, hcp: 16 },
            { number: 17, par: 4, yards: 413, hcp: 6 },
            { number: 18, par: 4, yards: 425, hcp: 2 }
        ],
        players: {
            'Sean': { index: 9, strokes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            'Jason': { index: 17, strokes: [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1] },
            'Brian': { index: 17, strokes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            'Steve': { index: 20, strokes: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
            'Kevin': { index: 24, strokes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            'Vinoo': { index: 30, strokes: [0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1] }
        }
    }
};

// Rounds configuration
const ROUNDS = {
    round1: {
        name: 'Round 1: 6-Ball',
        course: 'Paynes Valley',
        points: 2,
        type: '6ball',
        description: 'All players complete each hole. Team score is the lowest of the three team players.'
    },
    round2a: {
        name: 'Round 2A: Alternate Shot',
        course: 'Gilded Dunes',
        points: 2,
        type: 'alternateShot',
        description: 'Sean/Kevin vs Brian/Jason - Alternate shots for the entire hole.'
    },
    round2b: {
        name: 'Round 2B: Match Play',
        course: 'Top of the Rock',
        points: 1,
        type: 'matchPlay',
        description: 'Steve vs Vinoo - Match play format.'
    },
    round3: {
        name: 'Round 3: Individual Match Play',
        course: 'Wynn Golf Course',
        points: 2,
        type: 'individualMatch',
        description: 'Sean vs Brian, Kevin vs Jason, Steve vs Vinoo - Individual match play.'
    }
};

// State
let scores = {};
let syncInProgress = false;
let isAdmin = false;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    checkVersionAndClearStaleData();
    loadSharedData().then(() => {
        initializeScores();
        displayAllRounds();
        updateOverallScores();
        setupEventListeners();
        setInterval(syncWithSharedData, 30000); // Sync every 30 seconds
    });
});

// Check version and clear stale localStorage
function checkVersionAndClearStaleData() {
    const storedVersion = localStorage.getItem(STORAGE_KEY_VERSION);
    if (storedVersion !== APP_VERSION) {
        console.log('App version changed - clearing localStorage');
        localStorage.removeItem(STORAGE_KEY_SCORES);
        localStorage.setItem(STORAGE_KEY_VERSION, APP_VERSION);
    }
}

// Initialize scores structure
function initializeScores() {
    if (!scores.round1) {
        scores.round1 = initializeRound1Scores();
    }
    if (!scores.round2a) {
        scores.round2a = initializeRound2aScores();
    }
    if (!scores.round2b) {
        scores.round2b = initializeRound2bScores();
    }
    if (!scores.round3) {
        scores.round3 = initializeRound3Scores();
    }
    saveScores();
}

// Initialize Round 1 scores (6-ball)
function initializeRound1Scores() {
    const course = COURSES['Paynes Valley'];
    const roundScores = {};
    
    TEAMS.BAARTMANS.players.forEach(player => {
        roundScores[player] = {
            scores: new Array(18).fill(null),
            netScores: new Array(18).fill(null),
            total: 0,
            netTotal: 0
        };
    });
    
    TEAMS.KRAFT.players.forEach(player => {
        roundScores[player] = {
            scores: new Array(18).fill(null),
            netScores: new Array(18).fill(null),
            total: 0,
            netTotal: 0
        };
    });
    
    return roundScores;
}

// Initialize Round 2A scores (Alternate Shot)
function initializeRound2aScores() {
    return {
        'Sean/Kevin': {
            scores: new Array(18).fill(null),
            netScores: new Array(18).fill(null),
            total: 0,
            netTotal: 0
        },
        'Brian/Jason': {
            scores: new Array(18).fill(null),
            netScores: new Array(18).fill(null),
            total: 0,
            netTotal: 0
        }
    };
}

// Initialize Round 2B scores (Match Play)
function initializeRound2bScores() {
    return {
        'Steve': {
            scores: new Array(18).fill(null),
            netScores: new Array(18).fill(null),
            total: 0,
            netTotal: 0,
            holesWon: 0
        },
        'Vinoo': {
            scores: new Array(18).fill(null),
            netScores: new Array(18).fill(null),
            total: 0,
            netTotal: 0,
            holesWon: 0
        }
    };
}

// Initialize Round 3 scores (Individual Match Play)
function initializeRound3Scores() {
    return {
        'Sean': {
            scores: new Array(18).fill(null),
            netScores: new Array(18).fill(null),
            total: 0,
            netTotal: 0,
            holesWon: 0
        },
        'Brian': {
            scores: new Array(18).fill(null),
            netScores: new Array(18).fill(null),
            total: 0,
            netTotal: 0,
            holesWon: 0
        },
        'Kevin': {
            scores: new Array(18).fill(null),
            netScores: new Array(18).fill(null),
            total: 0,
            netTotal: 0,
            holesWon: 0
        },
        'Jason': {
            scores: new Array(18).fill(null),
            netScores: new Array(18).fill(null),
            total: 0,
            netTotal: 0,
            holesWon: 0
        },
        'Steve': {
            scores: new Array(18).fill(null),
            netScores: new Array(18).fill(null),
            total: 0,
            netTotal: 0,
            holesWon: 0
        },
        'Vinoo': {
            scores: new Array(18).fill(null),
            netScores: new Array(18).fill(null),
            total: 0,
            netTotal: 0,
            holesWon: 0
        }
    };
}

// Load shared data from JSONBin
async function loadSharedData() {
    if (JSONBIN_SCORES_ID && JSONBIN_SCORES_ID !== 'YOUR_SCORES_BIN_ID') {
        try {
            const headers = {};
            const hasValidApiKey = JSONBIN_API_KEY && 
                JSONBIN_API_KEY !== 'YOUR_API_KEY' &&
                (JSONBIN_API_KEY.startsWith('$2b$10$') || JSONBIN_API_KEY.startsWith('$2a$10$'));
            
            if (hasValidApiKey) {
                headers['X-Master-Key'] = JSONBIN_API_KEY;
            }
            
            const response = await fetch(`${JSONBIN_BASE_URL}/${JSONBIN_SCORES_ID}/latest?t=${Date.now()}`, {
                method: 'GET',
                mode: 'cors',
                credentials: 'omit',
                cache: 'no-cache',
                headers: headers
            });
            
            if (response.ok) {
                const data = await response.json();
                const remoteScores = data.record || {};
                if (Object.keys(remoteScores).length > 0) {
                    scores = mergeScores(scores, remoteScores);
                    console.log('✓ Loaded scores from JSONBin');
                }
            }
        } catch (error) {
            console.error('Could not load from JSONBin:', error.message);
        }
    }
    
    // Load from localStorage as fallback
    const localScores = localStorage.getItem(STORAGE_KEY_SCORES);
    if (localScores) {
        const parsed = JSON.parse(localScores);
        scores = mergeScores(scores, parsed);
    }
}

// Merge scores (remote takes precedence for conflicts)
function mergeScores(local, remote) {
    const merged = { ...local };
    Object.keys(remote).forEach(round => {
        if (!merged[round]) {
            merged[round] = remote[round];
        } else {
            Object.keys(remote[round]).forEach(player => {
                if (!merged[round][player]) {
                    merged[round][player] = remote[round][player];
                } else {
                    // Merge scores array
                    if (remote[round][player].scores) {
                        merged[round][player].scores = remote[round][player].scores.map((score, idx) => 
                            score !== null ? score : (merged[round][player].scores[idx] || null)
                        );
                    }
                    // Update other fields
                    Object.keys(remote[round][player]).forEach(key => {
                        if (key !== 'scores') {
                            merged[round][player][key] = remote[round][player][key];
                        }
                    });
                }
            });
        }
    });
    return merged;
}

// Save scores to localStorage and JSONBin
function saveScores() {
    localStorage.setItem(STORAGE_KEY_SCORES, JSON.stringify(scores));
    
    if (JSONBIN_SCORES_ID && JSONBIN_SCORES_ID !== 'YOUR_SCORES_BIN_ID') {
        syncToJSONBin();
    }
}

// Sync to JSONBin
async function syncToJSONBin() {
    if (syncInProgress) return;
    syncInProgress = true;
    
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        
        const hasValidApiKey = JSONBIN_API_KEY && 
            JSONBIN_API_KEY !== 'YOUR_API_KEY' &&
            (JSONBIN_API_KEY.startsWith('$2b$10$') || JSONBIN_API_KEY.startsWith('$2a$10$'));
        
        if (hasValidApiKey) {
            headers['X-Master-Key'] = JSONBIN_API_KEY;
        }
        
        const response = await fetch(`${JSONBIN_BASE_URL}/${JSONBIN_SCORES_ID}`, {
            method: 'PUT',
            mode: 'cors',
            credentials: 'omit',
            headers: headers,
            body: JSON.stringify(scores)
        });
        
        if (response.ok) {
            console.log('✓ Synced scores to JSONBin');
        } else {
            console.error('Failed to sync to JSONBin:', response.status);
        }
    } catch (error) {
        console.error('Error syncing to JSONBin:', error.message);
    } finally {
        syncInProgress = false;
    }
}

// Sync with shared data periodically
async function syncWithSharedData() {
    if (syncInProgress) return;
    syncInProgress = true;
    
    try {
        if (JSONBIN_SCORES_ID && JSONBIN_SCORES_ID !== 'YOUR_SCORES_BIN_ID') {
            const headers = {};
            const hasValidApiKey = JSONBIN_API_KEY && 
                JSONBIN_API_KEY !== 'YOUR_API_KEY' &&
                (JSONBIN_API_KEY.startsWith('$2b$10$') || JSONBIN_API_KEY.startsWith('$2a$10$'));
            
            if (hasValidApiKey) {
                headers['X-Master-Key'] = JSONBIN_API_KEY;
            }
            
            const response = await fetch(`${JSONBIN_BASE_URL}/${JSONBIN_SCORES_ID}/latest?t=${Date.now()}`, {
                method: 'GET',
                mode: 'cors',
                credentials: 'omit',
                cache: 'no-cache',
                headers: headers
            });
            
            if (response.ok) {
                const data = await response.json();
                const remoteScores = data.record || {};
                if (Object.keys(remoteScores).length > 0) {
                    scores = mergeScores(scores, remoteScores);
                    displayAllRounds();
                    updateOverallScores();
                    console.log('Periodic sync updated scores from remote');
                }
            }
        }
    } catch (error) {
        console.log('Could not sync from remote:', error.message);
    } finally {
        syncInProgress = false;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Admin toggle
    const adminToggle = document.getElementById('adminToggle');
    if (adminToggle) {
        adminToggle.addEventListener('change', function() {
            isAdmin = this.checked;
            document.body.classList.toggle('admin-mode', isAdmin);
            displayAllRounds();
        });
    }
    
    // Manual sync button
    const syncBtn = document.getElementById('syncBtn');
    if (syncBtn) {
        syncBtn.addEventListener('click', function() {
            syncWithSharedData();
            this.innerHTML = '<i class="fas fa-sync fa-spin"></i> Syncing...';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-sync"></i> Sync';
            }, 2000);
        });
    }
}

// Display all rounds
function displayAllRounds() {
    displayRound1();
    displayRound2A();
    displayRound2B();
    displayRound3();
}

// Display Round 1 (6-Ball)
function displayRound1() {
    const container = document.getElementById('round1Container');
    if (!container) return;
    
    const course = COURSES['Paynes Valley'];
    const round = ROUNDS.round1;
    
    let html = `
        <div class="round-header">
            <h3>${round.name}</h3>
            <p class="text-muted">${round.description}</p>
            <p><strong>Course:</strong> ${course.name} | <strong>Points:</strong> ${round.points}</p>
        </div>
    `;
    
    // Team Baartmans
    html += `<div class="team-section" style="border-left: 4px solid ${TEAMS.BAARTMANS.color};">`;
    html += `<h4>${TEAMS.BAARTMANS.name}</h4>`;
    html += createScoreTable('round1', TEAMS.BAARTMANS.players, course, 'Paynes Valley');
    html += `</div>`;
    
    // Team Kraft
    html += `<div class="team-section" style="border-left: 4px solid ${TEAMS.KRAFT.color};">`;
    html += `<h4>${TEAMS.KRAFT.name}</h4>`;
    html += createScoreTable('round1', TEAMS.KRAFT.players, course, 'Paynes Valley');
    html += `</div>`;
    
    // Team totals
    html += calculateAndDisplayTeamTotals('round1');
    
    container.innerHTML = html;
    attachScoreInputListeners('round1');
}

// Display Round 2A (Alternate Shot)
function displayRound2A() {
    const container = document.getElementById('round2aContainer');
    if (!container) return;
    
    const course = COURSES['Gilded Dunes'];
    const round = ROUNDS.round2a;
    
    let html = `
        <div class="round-header">
            <h3>${round.name}</h3>
            <p class="text-muted">${round.description}</p>
            <p><strong>Course:</strong> ${course.name} | <strong>Points:</strong> ${round.points}</p>
        </div>
    `;
    
    html += createScoreTable('round2a', ['Sean/Kevin', 'Brian/Jason'], course, 'Gilded Dunes');
    
    // Determine winner
    const seanKevin = scores.round2a?.['Sean/Kevin'];
    const brianJason = scores.round2a?.['Brian/Jason'];
    
    if (seanKevin && brianJason && seanKevin.netTotal > 0 && brianJason.netTotal > 0) {
        const winner = seanKevin.netTotal < brianJason.netTotal ? 'Sean/Kevin' : 'Brian/Jason';
        html += `<div class="alert alert-info mt-3"><strong>Leader:</strong> ${winner} (${Math.min(seanKevin.netTotal, brianJason.netTotal)} net)</div>`;
    }
    
    container.innerHTML = html;
    attachScoreInputListeners('round2a');
}

// Display Round 2B (Match Play)
function displayRound2B() {
    const container = document.getElementById('round2bContainer');
    if (!container) return;
    
    const course = COURSES['Top of the Rock'];
    const round = ROUNDS.round2b;
    
    let html = `
        <div class="round-header">
            <h3>${round.name}</h3>
            <p class="text-muted">${round.description}</p>
            <p><strong>Course:</strong> ${course.name} | <strong>Points:</strong> ${round.points}</p>
        </div>
    `;
    
    html += createScoreTable('round2b', ['Steve', 'Vinoo'], course, 'Top of the Rock', true);
    
    // Match play status
    const steve = scores.round2b?.['Steve'];
    const vinoo = scores.round2b?.['Vinoo'];
    
    if (steve && vinoo && steve.holesWon !== undefined && vinoo.holesWon !== undefined) {
        const steveWins = steve.holesWon || 0;
        const vinooWins = vinoo.holesWon || 0;
        const status = steveWins > vinooWins ? `Steve leads ${steveWins}-${vinooWins}` :
                      vinooWins > steveWins ? `Vinoo leads ${vinooWins}-${steveWins}` :
                      `Tied ${steveWins}-${steveWins}`;
        html += `<div class="alert alert-info mt-3"><strong>Match Status:</strong> ${status}</div>`;
    }
    
    container.innerHTML = html;
    attachScoreInputListeners('round2b');
}

// Display Round 3 (Individual Match Play)
function displayRound3() {
    const container = document.getElementById('round3Container');
    if (!container) return;
    
    const course = COURSES['Wynn Golf Course'];
    const round = ROUNDS.round3;
    
    let html = `
        <div class="round-header">
            <h3>${round.name}</h3>
            <p class="text-muted">${round.description}</p>
            <p><strong>Course:</strong> ${course.name} | <strong>Points:</strong> ${round.points} per match</p>
        </div>
    `;
    
    // Match 1: Sean vs Brian
    html += `<div class="match-section">`;
    html += `<h5>Sean vs Brian</h5>`;
    html += createScoreTable('round3', ['Sean', 'Brian'], course, 'Wynn Golf Course', true);
    html += `</div>`;
    
    // Match 2: Kevin vs Jason
    html += `<div class="match-section">`;
    html += `<h5>Kevin vs Jason</h5>`;
    html += createScoreTable('round3', ['Kevin', 'Jason'], course, 'Wynn Golf Course', true);
    html += `</div>`;
    
    // Match 3: Steve vs Vinoo
    html += `<div class="match-section">`;
    html += `<h5>Steve vs Vinoo</h5>`;
    html += createScoreTable('round3', ['Steve', 'Vinoo'], course, 'Wynn Golf Course', true);
    html += `</div>`;
    
    container.innerHTML = html;
    attachScoreInputListeners('round3');
}

// Create score table
function createScoreTable(roundKey, players, course, courseKey, showMatchPlay = false) {
    let html = '<div class="table-responsive"><table class="table table-bordered table-sm score-table">';
    
    // Header row
    html += '<thead><tr>';
    html += '<th>Player</th>';
    for (let i = 1; i <= 9; i++) {
        html += `<th>${i}</th>`;
    }
    html += '<th>Out</th>';
    for (let i = 10; i <= 18; i++) {
        html += `<th>${i}</th>`;
    }
    html += '<th>In</th>';
    html += '<th>Total</th>';
    html += '<th>Net</th>';
    if (showMatchPlay) {
        html += '<th>Holes Won</th>';
    }
    html += '</tr></thead>';
    
    // Par row
    html += '<tr class="par-row"><td><strong>Par</strong></td>';
    for (let i = 0; i < 9; i++) {
        html += `<td>${course.holes[i].par}</td>`;
    }
    html += '<td><strong>-</strong></td>';
    for (let i = 9; i < 18; i++) {
        html += `<td>${course.holes[i].par}</td>`;
    }
    html += '<td><strong>-</strong></td>';
    html += '<td><strong>-</strong></td>';
    html += '<td><strong>-</strong></td>';
    if (showMatchPlay) {
        html += '<td><strong>-</strong></td>';
    }
    html += '</tr>';
    
    // Player rows
    players.forEach(player => {
        const playerData = scores[roundKey]?.[player] || {
            scores: new Array(18).fill(null),
            netScores: new Array(18).fill(null),
            total: 0,
            netTotal: 0
        };
        
        const playerStrokes = COURSES[courseKey].players[player]?.strokes || new Array(18).fill(0);
        
        html += `<tr data-player="${player}">`;
        html += `<td><strong>${player}</strong></td>`;
        
        let outTotal = 0;
        let inTotal = 0;
        let outNet = 0;
        let inNet = 0;
        
        // Front 9
        for (let i = 0; i < 9; i++) {
            const score = playerData.scores[i];
            const netScore = score !== null ? score - playerStrokes[i] : null;
            if (score !== null) {
                outTotal += score;
                outNet += netScore;
            }
            html += `<td>`;
            if (isAdmin || score !== null) {
                html += `<input type="number" class="form-control form-control-sm score-input" 
                    data-round="${roundKey}" data-player="${player}" data-hole="${i}" 
                    value="${score !== null ? score : ''}" min="1" max="15">`;
            } else {
                html += `<span class="text-muted">-</span>`;
            }
            html += `</td>`;
        }
        
        html += `<td><strong>${outTotal > 0 ? outTotal : '-'}</strong></td>`;
        
        // Back 9
        for (let i = 9; i < 18; i++) {
            const score = playerData.scores[i];
            const netScore = score !== null ? score - playerStrokes[i] : null;
            if (score !== null) {
                inTotal += score;
                inNet += netScore;
            }
            html += `<td>`;
            if (isAdmin || score !== null) {
                html += `<input type="number" class="form-control form-control-sm score-input" 
                    data-round="${roundKey}" data-player="${player}" data-hole="${i}" 
                    value="${score !== null ? score : ''}" min="1" max="15">`;
            } else {
                html += `<span class="text-muted">-</span>`;
            }
            html += `</td>`;
        }
        
        html += `<td><strong>${inTotal > 0 ? inTotal : '-'}</strong></td>`;
        html += `<td><strong>${outTotal + inTotal > 0 ? outTotal + inTotal : '-'}</strong></td>`;
        html += `<td><strong>${outNet + inNet > 0 ? outNet + inNet : '-'}</strong></td>`;
        
        if (showMatchPlay) {
            html += `<td><strong>${playerData.holesWon || 0}</strong></td>`;
        }
        
        html += '</tr>';
    });
    
    html += '</table></div>';
    return html;
}

// Calculate and display team totals for Round 1
function calculateAndDisplayTeamTotals(roundKey) {
    if (roundKey !== 'round1') return '';
    
    const baartmansPlayers = TEAMS.BAARTMANS.players;
    const kraftPlayers = TEAMS.KRAFT.players;
    
    // Calculate team net scores (lowest of three players per hole)
    let baartmansTeamNet = 0;
    let kraftTeamNet = 0;
    
    for (let hole = 0; hole < 18; hole++) {
        const baartmansHoleNets = baartmansPlayers.map(player => {
            const playerData = scores.round1?.[player];
            if (!playerData || playerData.scores[hole] === null) return null;
            const strokes = COURSES['Paynes Valley'].players[player].strokes[hole];
            return playerData.scores[hole] - strokes;
        }).filter(net => net !== null);
        
        const kraftHoleNets = kraftPlayers.map(player => {
            const playerData = scores.round1?.[player];
            if (!playerData || playerData.scores[hole] === null) return null;
            const strokes = COURSES['Paynes Valley'].players[player].strokes[hole];
            return playerData.scores[hole] - strokes;
        }).filter(net => net !== null);
        
        if (baartmansHoleNets.length > 0) {
            baartmansTeamNet += Math.min(...baartmansHoleNets);
        }
        if (kraftHoleNets.length > 0) {
            kraftTeamNet += Math.min(...kraftHoleNets);
        }
    }
    
    let html = '<div class="team-totals mt-3">';
    html += `<div class="alert alert-primary"><strong>${TEAMS.BAARTMANS.name} Team Net:</strong> ${baartmansTeamNet > 0 ? baartmansTeamNet : '-'}</div>`;
    html += `<div class="alert alert-danger"><strong>${TEAMS.KRAFT.name} Team Net:</strong> ${kraftTeamNet > 0 ? kraftTeamNet : '-'}</div>`;
    
    if (baartmansTeamNet > 0 && kraftTeamNet > 0) {
        const winner = baartmansTeamNet < kraftTeamNet ? TEAMS.BAARTMANS.name : TEAMS.KRAFT.name;
        html += `<div class="alert alert-success"><strong>Leader:</strong> ${winner}</div>`;
    }
    
    html += '</div>';
    return html;
}

// Attach score input listeners
function attachScoreInputListeners(roundKey) {
    const inputs = document.querySelectorAll(`#${roundKey}Container .score-input`);
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            const round = this.dataset.round;
            const player = this.dataset.player;
            const hole = parseInt(this.dataset.hole);
            const score = this.value ? parseInt(this.value) : null;
            
            updateScore(round, player, hole, score);
        });
    });
}

// Update score
function updateScore(roundKey, player, hole, score) {
    if (!scores[roundKey]) {
        scores[roundKey] = {};
    }
    if (!scores[roundKey][player]) {
        scores[roundKey][player] = {
            scores: new Array(18).fill(null),
            netScores: new Array(18).fill(null),
            total: 0,
            netTotal: 0
        };
    }
    
    scores[roundKey][player].scores[hole] = score;
    
    // Calculate net score
    const courseKey = getCourseKeyForRound(roundKey);
    const playerStrokes = COURSES[courseKey].players[player]?.strokes || new Array(18).fill(0);
    const netScore = score !== null ? score - playerStrokes[hole] : null;
    scores[roundKey][player].netScores[hole] = netScore;
    
    // Calculate totals
    let total = 0;
    let netTotal = 0;
    scores[roundKey][player].scores.forEach((s, idx) => {
        if (s !== null) {
            total += s;
            netTotal += (s - playerStrokes[idx]);
        }
    });
    scores[roundKey][player].total = total;
    scores[roundKey][player].netTotal = netTotal;
    
    // For match play, calculate holes won
    if (roundKey === 'round2b' || roundKey === 'round3') {
        calculateMatchPlayHoles(roundKey, player);
    }
    
    saveScores();
    displayAllRounds();
    updateOverallScores();
}

// Calculate match play holes won
function calculateMatchPlayHoles(roundKey, player) {
    const courseKey = getCourseKeyForRound(roundKey);
    const playerStrokes = COURSES[courseKey].players[player]?.strokes || new Array(18).fill(0);
    const playerData = scores[roundKey][player];
    
    let holesWon = 0;
    
    // Determine opponent
    let opponent;
    if (roundKey === 'round2b') {
        opponent = player === 'Steve' ? 'Vinoo' : 'Steve';
    } else if (roundKey === 'round3') {
        if (player === 'Sean') opponent = 'Brian';
        else if (player === 'Brian') opponent = 'Sean';
        else if (player === 'Kevin') opponent = 'Jason';
        else if (player === 'Jason') opponent = 'Kevin';
        else if (player === 'Steve') opponent = 'Vinoo';
        else if (player === 'Vinoo') opponent = 'Steve';
    }
    
    if (!opponent) return;
    
    const opponentData = scores[roundKey]?.[opponent];
    const opponentStrokes = COURSES[courseKey].players[opponent]?.strokes || new Array(18).fill(0);
    
    if (!opponentData) return;
    
    for (let hole = 0; hole < 18; hole++) {
        const playerScore = playerData.scores[hole];
        const opponentScore = opponentData.scores[hole];
        
        if (playerScore !== null && opponentScore !== null) {
            const playerNet = playerScore - playerStrokes[hole];
            const opponentNet = opponentScore - opponentStrokes[hole];
            
            if (playerNet < opponentNet) {
                holesWon++;
            }
        }
    }
    
    playerData.holesWon = holesWon;
}

// Get course key for round
function getCourseKeyForRound(roundKey) {
    if (roundKey === 'round1') return 'Paynes Valley';
    if (roundKey === 'round2a') return 'Gilded Dunes';
    if (roundKey === 'round2b') return 'Top of the Rock';
    if (roundKey === 'round3') return 'Wynn Golf Course';
    return '';
}

// Update overall scores
function updateOverallScores() {
    let baartmansPoints = 0;
    let kraftPoints = 0;
    
    // Round 1: 6-Ball
    const baartmansR1 = calculateTeamNet('round1', TEAMS.BAARTMANS.players, 'Paynes Valley');
    const kraftR1 = calculateTeamNet('round1', TEAMS.KRAFT.players, 'Paynes Valley');
    if (baartmansR1 > 0 && kraftR1 > 0) {
        if (baartmansR1 < kraftR1) baartmansPoints += 2;
        else if (kraftR1 < baartmansR1) kraftPoints += 2;
    }
    
    // Round 2A: Alternate Shot
    const seanKevin = scores.round2a?.['Sean/Kevin']?.netTotal || 0;
    const brianJason = scores.round2a?.['Brian/Jason']?.netTotal || 0;
    if (seanKevin > 0 && brianJason > 0) {
        if (seanKevin < brianJason) baartmansPoints += 2;
        else if (brianJason < seanKevin) kraftPoints += 2;
    }
    
    // Round 2B: Match Play
    const steve = scores.round2b?.['Steve']?.holesWon || 0;
    const vinoo = scores.round2b?.['Vinoo']?.holesWon || 0;
    if (steve > 0 || vinoo > 0) {
        if (steve > vinoo) baartmansPoints += 1;
        else if (vinoo > steve) kraftPoints += 1;
    }
    
    // Round 3: Individual Match Play
    const sean = scores.round3?.['Sean']?.holesWon || 0;
    const brian = scores.round3?.['Brian']?.holesWon || 0;
    if (sean > 0 || brian > 0) {
        if (sean > brian) baartmansPoints += 2;
        else if (brian > sean) kraftPoints += 2;
    }
    
    const kevin = scores.round3?.['Kevin']?.holesWon || 0;
    const jason = scores.round3?.['Jason']?.holesWon || 0;
    if (kevin > 0 || jason > 0) {
        if (kevin > jason) baartmansPoints += 2;
        else if (jason > kevin) kraftPoints += 2;
    }
    
    const steveR3 = scores.round3?.['Steve']?.holesWon || 0;
    const vinooR3 = scores.round3?.['Vinoo']?.holesWon || 0;
    if (steveR3 > 0 || vinooR3 > 0) {
        if (steveR3 > vinooR3) baartmansPoints += 2;
        else if (vinooR3 > steveR3) kraftPoints += 2;
    }
    
    // Update display
    const baartmansEl = document.getElementById('baartmansPoints');
    const kraftEl = document.getElementById('kraftPoints');
    
    if (baartmansEl) baartmansEl.textContent = baartmansPoints;
    if (kraftEl) kraftEl.textContent = kraftPoints;
    
    // Highlight leader
    if (baartmansPoints > kraftPoints) {
        document.getElementById('baartmansCard')?.classList.add('leader');
        document.getElementById('kraftCard')?.classList.remove('leader');
    } else if (kraftPoints > baartmansPoints) {
        document.getElementById('kraftCard')?.classList.add('leader');
        document.getElementById('baartmansCard')?.classList.remove('leader');
    } else {
        document.getElementById('baartmansCard')?.classList.remove('leader');
        document.getElementById('kraftCard')?.classList.remove('leader');
    }
}

// Calculate team net score
function calculateTeamNet(roundKey, players, courseKey) {
    let teamNet = 0;
    
    for (let hole = 0; hole < 18; hole++) {
        const holeNets = players.map(player => {
            const playerData = scores[roundKey]?.[player];
            if (!playerData || playerData.scores[hole] === null) return null;
            const strokes = COURSES[courseKey].players[player].strokes[hole];
            return playerData.scores[hole] - strokes;
        }).filter(net => net !== null);
        
        if (holeNets.length > 0) {
            teamNet += Math.min(...holeNets);
        }
    }
    
    return teamNet;
}

