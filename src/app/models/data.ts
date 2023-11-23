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

    // Blackout
    { id: 'B50', title: 'Walk Away', album: 'Blackout', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=88_eu97Xvp8' },
    { id: 'B51', title: 'Worker\'s Song', album: 'Blackout', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=Clj8htWcFho' },
    { id: 'B52', title: 'The Outcast', album: 'Blackout', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=FP14iewRPTQ' },
    { id: 'B53', title: 'Black Velvet Band', album: 'Blackout', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=uQyRROidJNA' },
    { id: 'B54', title: 'Gonna Be a Blackout Tonight', album: 'Blackout', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=j2EvDxuMnKE' },
    { id: 'B55', title: 'World Full of Hate', album: 'Blackout', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=F1hjsSQLHXo' },
    { id: 'B56', title: 'Buried Alive', album: 'Blackout', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=v5B_0FVZ4ks' },
    { id: 'B57', title: 'The Dirty Glass', album: 'Blackout', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=3CG-92Rz2os' },
    { id: 'B58', title: 'Fields of Athenry', album: 'Blackout', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=zRIn_eWc4WM' },
    { id: 'B59', title: 'Bastards on Parade', album: 'Blackout', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=0tTseIpxZUo' },
    { id: 'B60', title: 'As One', album: 'Blackout', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=2gZrGu1kKSc' },
    { id: 'B61', title: 'This Is Your Life', album: 'Blackout', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=XoW2OYT2c08' },
    { id: 'B62', title: 'Time to Go', album: 'Blackout', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=AP5g-Pjpg_I' },
    { id: 'B63', title: 'Kiss Me I\'m Shitfaced', album: 'Blackout', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=vCISi5cRZyc' },

    // Blackout fakes
    { id: 'D50', title: 'Just Walk Away', album: null, artist: 'Celine Dion', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=kcUK2zkbQg0' },
    { id: 'D51', title: 'Our Legacy', album: null, artist: 'The Bastard Sons', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=ffxIXwh_0Ak' },
    { id: 'D52', title: 'Chonkyfire', album: null, artist: 'Outkast', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=R5uoxivoSSo' },
    { id: 'D53', title: 'Old Man Stone', album: null, artist: 'Black Velvet Band', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=dIIFKHmPTmI' },
    { id: 'D54', title: 'The Blackout', album: null, artist: 'U2', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=PaJCFHXcWmM' },
    { id: 'D55', title: 'The Drug In Me Is You', album: null, artist: 'Falling In Reverse', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=lb1MJ4_QVrk' },
    { id: 'D56', title: 'Star of the County Down', album: null, artist: 'Irish Rovers', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=jXLnSkGmTdQ' },
    { id: 'D57', title: 'The Rotten Hand', album: null, artist: 'Flatfoot 56', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=0boTEGSeGFM' },
    { id: 'D58', title: 'Wreck Head Wedding', album: null, artist: 'The Gallowgate Murders', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=lxubw9_72gY' },
    { id: 'D59', title: 'Outlaw Rebel Songs', album: null, artist: 'Bastards on Parade', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=WSy-HnZPWzg' },
    { id: 'D60', title: 'Fight As One', album: null, artist: 'Sub Zero Project', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=VHbQN4-l5sQ' },
    { id: 'D61', title: 'Real Life', album: null, artist: 'The Weeknd', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=GADoA6NU2mQ' },
    { id: 'D62', title: 'Don\'t Drag Me Down', album: null, artist: 'Social Distortion', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=7e_KlnL8f9U' },
    { id: 'D63', title: 'Prison Years', album: null, artist: 'Sydney City Trash', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=-bR-ILMGhr0' },

    // Warrior's Code
    { id: 'B64', title: 'Your Spirit\'s Alive', album: 'The Warrior\'s Code', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=h73-H4m0GeA&t=68s' },
    { id: 'B65', title: 'The Warrior\'s Code', album: 'The Warrior\'s Code', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=PPC0kTWaE7I' },
    { id: 'B66', title: 'Captain Kelly\'s Kitchen', album: 'The Warrior\'s Code', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=agro9miL3bA' },
    { id: 'B67', title: 'The Walking Dead', album: 'The Warrior\'s Code', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=jNLLXGxGLnM' },
    { id: 'B68', title: 'Sunshine Highway', album: 'The Warrior\'s Code', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=hbZMgEGrccs' },
    { id: 'B69', title: 'Wicked Sensitive Crew', album: 'The Warrior\'s Code', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=IBhECm5itdE' },
    { id: 'B70', title: 'The Burden', album: 'The Warrior\'s Code', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=zFuMmwDn8yA' },
    { id: 'B71', title: 'Citizen C.I.A', album: 'The Warrior\'s Code', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=vBmgbM5xeik' },
    { id: 'B72', title: 'The Green Fields of France', album: 'The Warrior\'s Code', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=zRmJwqVbtQI' },
    { id: 'B73', title: 'Take It and Run', album: 'The Warrior\'s Code', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=ILhgCiIXKys' },
    { id: 'B74', title: 'I\'m Shipping Off To Boston', album: 'The Warrior\'s Code', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=x-64CaD8GXw' },
    { id: 'B75', title: 'The Auld Triangle', album: 'The Warrior\'s Code', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=kiSacFpkzoo' },
    { id: 'B76', title: 'Last Letter Home', album: 'The Warrior\'s Code', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=ExF7dz3THrw' },
    { id: 'B77', title: 'Tessie', album: 'The Warrior\'s Code', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=C0oIi4ARDls' },    

    // Warrior's Code fakes
    { id: 'D64', title: 'Proud', album: null, artist: 'Have Nots', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=EAczfCsawjk' },
    { id: 'D65', title: 'No Turning Back', album: null, artist: 'Gawdbless', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=5_yoOFwISAs' },
    { id: 'D66', title: 'You Wasted Me', album: null, artist: 'Rear View Ramblers', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=UHI0_AwF6NU' },
    { id: 'D67', title: 'Bad Blood', album: null, artist: 'Taylor Swift', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=lUvBk4owRNU' },
    { id: 'D68', title: 'Broken Window Serenade', album: null, artist: 'Whiskey Myers', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=_bto0UKEZNA' },
    { id: 'D69', title: 'H.B.C.', album: null, artist: '2 Live Crew', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=yS4J2ORzCoE' },
    { id: 'D70', title: 'Beast of Burden', album: null, artist: 'The Rolling Stones', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=tuk1NnnMQBA' },
    { id: 'D71', title: 'Let it Burn', album: null, artist: 'Citizen Solider', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=YCmEO0ipKxg' },
    { id: 'D72', title: 'The Orange and the Green', album: null, artist: 'Irish Rovers', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=5je1fQahLMs' },
    { id: 'D73', title: 'Take it on the Run', album: null, artist: 'REO Speedwagon', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=t7Csc6l4QLs' },
    { id: 'D74', title: 'Ship in a Bottle', album: null, artist: 'The Bouncing Souls', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=XCEQIToKAV8' },
    { id: 'D75', title: 'Drums of Chelsea', album: null, artist: 'The Go Set', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=MrTah6zWUXY' },
    { id: 'D76', title: 'Katie Bar the Door', album: null, artist: 'The Peelers', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=8cdZIAWJdcs' },
    { id: 'D77', title: 'Selfish Man', album: null, artist: 'Flogging Molly', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=ObknfrVoP9s' },    

    // Meanest of Times
    { id: 'B78', title: 'Famous for Nothing', album: 'The Meanest of Times', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=Ge_w1TzLOqc' },
    { id: 'B79', title: 'God Willing', album: 'The Meanest of Times', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=hVLxyJrhEyI' },
    { id: 'B80', title: 'The State of Massachusetts', album: 'The Meanest of Times', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=UkxRW51acS4' },
    { id: 'B81', title: 'Tomorrow\'s Industry', album: 'The Meanest of Times', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=BkRh4b6lRGo' },
    { id: 'B82', title: 'Echoes on A Street', album: 'The Meanest of Times', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=ae1NWuMjdd4' },
    { id: 'B83', title: 'Vices and Virtues', album: 'The Meanest of Times', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=brFsORTJ55w' },
    { id: 'B84', title: 'Surrender', album: 'The Meanest of Times', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=nX55zD4YqaM' },
    { id: 'B85', title: 'Flannigan\'s Ball', album: 'The Meanest of Times', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=9JX_9SGdjtU' },
    { id: 'B86', title: 'I\'ll Begin Again', album: 'The Meanest of Times', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=oA_FEeS-BM8' },
    { id: 'B87', title: 'Fairmount Hill', album: 'The Meanest of Times', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=_YEaiILx99Q' },
    { id: 'B88', title: 'Loyal to No One', album: 'The Meanest of Times', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=xqz4YudiOBo' },
    { id: 'B89', title: 'Shattered', album: 'The Meanest of Times', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=ZEHnft62dYI' },
    { id: 'B90', title: 'Rude Awakenings', album: 'The Meanest of Times', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=Zc4z4l8hM5k' },
    { id: 'B91', title: 'Johnny, I Hardly Knew Ya', album: 'The Meanest of Times', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=srG9hIY6Edg' },
    { id: 'B92', title: 'Never Forget', album: 'The Meanest of Times', artist: ArtistDKM, isDKM: true, videoLink: 'https://www.youtube.com/watch?v=_26OFDvO2k8' },    

    // Meanest of Times fakes
    { id: 'D78', title: 'In The End', album: null, artist: 'Linkin Park', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=Q3gy8A0jY10' },
    { id: 'D79', title: 'Let Us Hear Your Voice', album: null, artist: 'Pennywise', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=ig7eSGtYelg' },
    { id: 'D80', title: 'Bashed Out', album: null, artist: 'This is the Kit', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=yME_52X20N8' },
    { id: 'D81', title: 'Fair Trade', album: null, artist: 'Drake', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=F6cwa9DysRY' },
    { id: 'D82', title: 'Animal I Have Become', album: null, artist: 'Three Days Grace', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=j7rLdd8EiJQ' },
    { id: 'D83', title: 'Famous Last Words', album: null, artist: 'My Chemical Romance', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=WLZPdylzeOg' },
    { id: 'D84', title: 'Never Surrender', album: null, artist: 'Liv Ash', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=HRdSrgcoymc' },
    { id: 'D85', title: 'The Climb Back', album: null, artist: 'J. Cole', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=c8gvcTcMJGs' },
    { id: 'D86', title: 'Ready to Start', album: null, artist: 'Arcade Fire', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=92IKHz5vT6k' },
    { id: 'D87', title: 'Tales of Men', album: null, artist: 'Akua Naru', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=dqnnYewRtVU' },
    { id: 'D88', title: 'Cut Your Teeth', album: null, artist: 'Kyla La Grange', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=WDhEG0mDxcY' },
    { id: 'D89', title: 'Broken', album: null, artist: 'Tracy Chapman', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=FKSTFdNfz-E' },
    { id: 'D90', title: 'Go Your Own Way', album: null, artist: 'Fleetwood Mac', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=ozl3L9fhKtE' },
    { id: 'D91', title: 'Up In Flames', album: null, artist: 'Nicki Minaj', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=v5Ok3_l1Opc' },
    { id: 'D92', title: 'Fight Song', album: null, artist: 'Rachel Platten', isDKM: false, videoLink: 'https://www.youtube.com/watch?v=xo1VInw-SKc' },
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
