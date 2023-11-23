import { Song, SongCompleted} from './song';

const ArtistDKM = 'Dropkick Murphy\'s';

enum Albums {
    DoorDie = 'Do or Die'
}

export const SongDatabase = [
    // Do or Die
    { id: 'B2', title: 'Cadence to Arms', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=s2ctpx0zYgk' },
    { id: 'B3', title: 'Do or Die', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=M8lLdbK9CJM' },
    { id: 'B4', title: 'Get Up', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=dDSMYIPiVyw' },
    { id: 'B5', title: 'Never Alone', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=4lsTreTfgNs' },
    { id: 'B6', title: 'Caught in a Jar', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=kcqXQJEoGxE' },
    { id: 'B7', title: 'Memories Remain', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=ILjxxv4xShM' },
    { id: 'B8', title: 'Road of the Righteous', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=HLeqXYE07Rw' },
    { id: 'B9', title: 'Far Away Coast', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=jYHcrszc0z0' },
    { id: 'B10', title: 'Fightstarter Karaoke', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=T1SsFH9Z0ww' },
    { id: 'B11', title: 'Barroom Hero', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=wpIVk2AY3sw' },
    { id: 'B12', title: '3rd Man In', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=rtHNJHGx0bA' },
    { id: 'B13', title: 'Tenant Enemy #1', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=3WxwoVjfhOY' },
    { id: 'B14', title: 'Finnegan\'s Wake', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=LffND8EVL0E' },
    { id: 'B15', title: 'Noble', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=Uo6m2qjgCYQ' },
    { id: 'B16', title: 'Boys on the Docks', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=F-VKppBBtX0' },
    { id: 'B17', title: 'Skinhead on the MBTA', album: 'Do or Die', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=-U-DH6tasgY' },

    // Do or Die fakes
    { id: 'D2', title: 'Cadence to Rest', album: null, artist: 'Jouni Valjakka', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=cjHvF5FqHiQ' },
    { id: 'D3', title: 'Ride or Die', album: null, artist: 'Cadence', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=kMp8U00FlJQ' },
    { id: 'D4', title: 'Get \'Em Up', album: null, artist: 'Cypress Hill', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=S2Bou8d9qMk' },
    { id: 'D5', title: 'Stand Alone', album: null, artist: 'Bob Marley', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=UsQcnG0Nt4E' },
    { id: 'D6', title: 'Whiskey in the Jar', album: null, artist: 'The Irish Rovers', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=cYGyERe2Vbw' },
    { id: 'D7', title: 'The Memory Remains', album: null, artist: 'Metallica', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=RDN4awrpPQQ' },
    { id: 'D8', title: 'Path of the Righteous', album: null, artist: '7 Feet Under', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=yFa3v0_WMjg' },
    { id: 'D9', title: 'The Blackest Day', album: null, artist: 'Lana Del Rey', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=BiKYRNoyzZ0' },
    { id: 'D10', title: 'Bloody Dotted Line', album: null, artist: 'Stanfields', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=NugVR6WitqQ' },
    { id: 'D11', title: 'Prize Fighter', album: null, artist: 'Bar Room Heros', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=lDil6UnfA-Y' },
    { id: 'D12', title: 'Freedom', album: null, artist: 'Paddy and the Rats', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=uvec4X3J10I' },
    { id: 'D13', title: 'Public Enemy #1', album: null, artist: 'Public Enemy', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=AAWVAbUAADQ' },
    { id: 'D14', title: 'Fruitless Fortunes', album: null, artist: 'Swingin\' Utters', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=8FDgkLpRksU' },
    { id: 'D15', title: 'Noble End', album: null, artist: 'Lagwagon', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=IC5znYLOvq8' },
    { id: 'D16', title: 'Stand and Deliver', album: null, artist: 'Darkbuster', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=HBhl1uDlmic' },
    { id: 'D17', title: 'Altercations', album: null, artist: 'The Tossers', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=hh5yRVCKML0' },

    // The Gang's All Here
    { id: 'B18', title: 'Roll Call', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=ZGquP3NtgVg' },
    { id: 'B19', title: 'Blood and Whiskey', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=h8980Cf0Wsg' },
    { id: 'B20', title: 'Pipebomb on Lansdowne', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=9jQGA--UwS0' },
    { id: 'B21', title: 'Perfect Stranger', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=U6hqDr4ylac' },
    { id: 'B22', title: '10 Years of Service', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=F3cpmHzTmSI' },
    { id: 'B23', title: 'Upstarts and Broken Hearts', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=Prua7BJQTJI' },
    { id: 'B24', title: 'Devil\'s Brigade', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=ht02JEL2LkE' },
    { id: 'B25', title: 'Curse of a Fallen Soul', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=KGR967DoHrU' },
    { id: 'B26', title: 'Homeward Bound', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=M0KbssZ5G-o' },
    { id: 'B27', title: 'Going Strong', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=-3h609TvHxA' },
    { id: 'B28', title: 'The Fighting 69th', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=hEd3SgLU344' },
    { id: 'B29', title: 'Boston Asphalt', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=J3PUjF5c738' },
    { id: 'B30', title: 'Wheel of Misfortune', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=AGLHQaVEbFU' },
    { id: 'B31', title: 'The Only Road', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=99qlv49fvdQ' },
    { id: 'B32', title: 'Amazing Grace', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=YvwETUv7dSQ' },
    { id: 'B33', title: 'The Gang\'s All Here', album: 'The Gang\'s All Here', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=m4BwFl3kb5g' },

    // The Gang's All Here fakes
    { id: 'D18', title: 'No Rules', album: null, artist: 'Booze and Glory', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=BAj97aEISBA' },
    { id: 'D19', title: 'Whiskey and Gin', album: null, artist: 'The Killigans', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=7o-ZF2-1f7Q' },
    { id: 'D20', title: 'Working Class Hole', album: null, artist: 'Dwarves', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=_pLK9xT7v54' },
    { id: 'D21', title: 'Living In The Past', album: null, artist: 'Perfect Stranger', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=pRe9H1jY814' },
    { id: 'D22', title: 'Working Class Hero', album: null, artist: 'John Lennon', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=iMewtlmkV6c' },
    { id: 'D23', title: 'Nowhere to Run', album: null, artist: 'Stegosaurus Rex', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=E4JY04ccAB4' },
    { id: 'D24', title: 'Shakedown', album: null, artist: 'Devil\'s Brigade', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=w1a9CR2wbJE' },
    { id: 'D25', title: 'The Table, The Glass, The Wine', album: null, artist: 'Kris Kristofferson', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=asHc6JBP5jc' },
    { id: 'D26', title: 'The Boxer', album: null, artist: 'Simon and Garfunkel', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=l3LFML_pxlY' },
    { id: 'D27', title: 'The Rumor', album: null, artist: 'Steel Going Strong', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=Cm0aIScb9AA' },
    { id: 'D28', title: 'Nameless Grave', album: null, artist: 'The Porters', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=lJGqOAluH0Q' },
    { id: 'D29', title: 'Hold the Line', album: null, artist: 'Toto', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=htgr3pvBr-I' },
    { id: 'D30', title: 'Salty Dog', album: null, artist: 'Flogging Molly', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=ZcLpNP8jwRo' },
    { id: 'D31', title: 'One for the Road', album: null, artist: 'Arctic Monkeys', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=qN7gSMPQFss' },
    { id: 'D32', title: 'Loud Pipes', album: null, artist: 'Prydein', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=e-1B3FA3U50' },
    { id: 'D33', title: 'The Foreman O\'rourke', album: null, artist: 'Rumjacks', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=F-EMm17KSzs' },

    // Sing Loud Sing Proud
    { id: 'B34', title: 'For Boston', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=8z4ECBVWKao' },
    { id: 'B35', title: 'The Legend of Finn MacCumhail', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=pMAVE_PH0w0' },
    { id: 'B36', title: 'Which Side Are You On?', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=SKWfnO7fhQM' },
    { id: 'B37', title: 'Rocky Road to Dublin', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=m2GvU6GEuPI' },
    { id: 'B38', title: 'Heroes from Our Past', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=Z875CLxj12E' },
    { id: 'B39', title: 'Forever', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=mkaBGz0hQKI' },
    { id: 'B40', title: 'The Gauntlet', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=mYalsVzbCXw' },
    { id: 'B41', title: 'Good Rats', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=S_dE0nFYP_4' },
    { id: 'B42', title: 'The New American Way', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=iQfLvnQNCkQ' },
    { id: 'B43', title: 'The Torch', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=tbxAPxtjhjs' },
    { id: 'B44', title: 'The Fortunes of War', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=68nSjvffmyc' },
    { id: 'B45', title: 'A Few Good Men', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=5nU2qq3iWS4' },
    { id: 'B46', title: 'Ramble and Roll', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=sMrrgIWD16Q' },
    { id: 'B47', title: 'Caps and Bottles', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=gFs1finUfQo' },
    { id: 'B48', title: 'The Wild Rover', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=gaPGMUP4P50' },
    { id: 'B49', title: 'The Spicy McHaggis Jig', album: 'Sing Loud Sing Proud', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=_ZN3weW1udE' },

    // Sing Loud Sing Proud fakes
    { id: 'D34', title: 'The Captain\'s Dead', album: null, artist: 'Paddy and the Rats', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=yznQCUCsoOY' },
    { id: 'D35', title: 'Drink Up Ya Sinners', album: null, artist: 'Sir Reg', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=PHSDrTWfy9k' },
    { id: 'D36', title: 'Let\'s Go', album: null, artist: 'Pipes and Pints', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=qylCEMMTJXY' },
    { id: 'D37', title: 'Empty Streets', album: null, artist: 'The Killigans', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=J9CCP-SikYQ' },
    { id: 'D38', title: 'Heroes and Villains', album: null, artist: 'Beach Boys', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=ptxwWt2JeGQ' },
    { id: 'D39', title: 'Yesterday\'s Rebel', album: null, artist: 'O\'Reilly\'s and the Paddyhats', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=HpzDl0Spv0E' },
    { id: 'D40', title: 'My Time Again', album: null, artist: 'Rumjacks', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=vAx9os7aDQ0' },
    { id: 'D41', title: 'Waxie\'s Dargle', album: null, artist: 'The Pogues', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=TxFliEOskNg' },
    { id: 'D42', title: 'This Time', album: null, artist: 'Flatfoot 56', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=fowSt91AmHo' },
    { id: 'D43', title: 'Pass the Torch', album: null, artist: 'Que Rock', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=StnnRCZ6T40' },
    { id: 'D44', title: 'Fight to Live', album: null, artist: 'Bouncing Souls', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=9BslGHePggs' },
    { id: 'D45', title: 'Glory Waits', album: null, artist: 'The Clan', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=ZcUVq3ucjzo' },
    { id: 'D46', title: 'Roam and Ramble', album: null, artist: 'Jimmy Witherspoon', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=b5LSS205fpg' },
    { id: 'D47', title: 'Bottle Caps', album: null, artist: 'Kosher', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=yp_ZvdVFxdg' },
    { id: 'D48', title: 'Drink Some More', album: null, artist: 'The Real McKenzies', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=ar22FtG5XaU' },
    { id: 'D49', title: 'Mary Riley', album: null, artist: 'The Bollox', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=xZ9GBMQWW2E' },
] as Song[];

const localStorageKey = "scoreTracker";
export class ScoreTracker {
    scores: {
        [id: string]: {
            totalPoints: number
        }
    } = {};

    constructor() {
        const persistedTracker = localStorage?.getItem(localStorageKey);
        this.scores = persistedTracker ? JSON.parse(persistedTracker) : {};
    }

    reset() {
        localStorage?.removeItem(localStorageKey);
        this.scores = {};
    }

    recordScore(item: SongCompleted) {
        if (this.scores[item.id]) {
            this.scores[item.id].totalPoints = item.totalPoints;
        }
        else {
            this.scores[item.id] = {
                totalPoints: item.totalPoints
            };
        }

        localStorage?.setItem(localStorageKey, JSON.stringify(this.scores));
    }

    completedSongs() {
        let total = 0;
        for (const key in this.scores) {
            if (this.scores.hasOwnProperty(key)) {
                total += 1;
            }
        }
        return total;
    }

    totalSongs() {
        return SongDatabase.length;
    }

    totalScore(album?: string) {
        const validIdSet = new Set(SongDatabase
            .filter(s => !album || s.album === album)
            .map(s => s.id)
        );

        let total = 0;
        for (const key in this.scores) {
            if (this.scores.hasOwnProperty(key) && validIdSet.has(key)) {
                total += this.scores[key].totalPoints
            }
        }
        return total;
    }

    maximumScore(album?: string) {
        return SongDatabase
            .filter(s => !album || s.album === album)
            .map(s => s.isDKM ? 2 : 1)
            .reduce((a, b) => a + b, 0);
    }

    unscoredSongs() {
        return SongDatabase.filter(
            s => !this.scores[s.id]
        );
    }
}
