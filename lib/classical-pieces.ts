export interface ClassicalPiece {
  id: string;
  title: string;
  composer: string;
  duration: number; // seconds
}

// Duration coverage: ~45s to ~180 min
// ~160 curated pieces with typical performance durations
export const CLASSICAL_PIECES: ClassicalPiece[] = [
  {
    id: "anderson-typewriter",
    title: "The Typewriter",
    composer: "Leroy Anderson",
    duration: 99,
  },
  {
    id: "chopin-minute-waltz",
    title: "Waltz in D-flat Major 'Minute Waltz', Op. 64 No. 1",
    composer: "Frédéric Chopin",
    duration: 105,
  },
  {
    id: "bach-minuet-g",
    title: "Minuet in G Major, BWV Anh. 114",
    composer: "Christian Petzold",
    duration: 120,
  },
  {
    id: "chopin-waltz-a-minor",
    title: "Waltz in A Minor, B. 150",
    composer: "Frédéric Chopin",
    duration: 135,
  },
  {
    id: "grieg-hall-mountain-king",
    title: "In the Hall of the Mountain King (Peer Gynt Suite No. 1), Op. 46",
    composer: "Edvard Grieg",
    duration: 145,
  },
  {
    id: "bach-prelude-c",
    title: "Prelude in C Major (Well-Tempered Clavier), BWV 846",
    composer: "Johann Sebastian Bach",
    duration: 150,
  },
  {
    id: "saint-saens-swan",
    title: "The Swan (Le Cygne), Carnival of the Animals",
    composer: "Camille Saint-Saëns",
    duration: 160,
  },
  {
    id: "orff-o-fortuna",
    title: "O Fortuna (Carmina Burana)",
    composer: "Carl Orff",
    duration: 162,
  },
  {
    id: "schumann-traumerei",
    title: "Träumerei (Kinderszenen), Op. 15 No. 7",
    composer: "Robert Schumann",
    duration: 165,
  },
  {
    id: "beethoven-fur-elise",
    title: "Für Elise, WoO 59",
    composer: "Ludwig van Beethoven",
    duration: 175,
  },
  {
    id: "bach-jesu-joy",
    title: "Jesu, Joy of Man's Desiring, BWV 147",
    composer: "Johann Sebastian Bach",
    duration: 180,
  },
  {
    id: "mozart-turkish-march",
    title: "Turkish March (Rondo alla Turca), K. 331",
    composer: "Wolfgang Amadeus Mozart",
    duration: 180,
  },
  {
    id: "satie-gymnopedie-1",
    title: "Gymnopédie No. 1",
    composer: "Erik Satie",
    duration: 195,
  },
  {
    id: "vivaldi-spring-1",
    title: "Spring – Allegro (The Four Seasons), Op. 8 No. 1, RV 269",
    composer: "Antonio Vivaldi",
    duration: 195,
  },
  {
    id: "rachmaninoff-prelude-c-sharp",
    title: "Prelude in C-sharp Minor, Op. 3 No. 2",
    composer: "Sergei Rachmaninoff",
    duration: 210,
  },
  {
    id: "bach-air-g-string",
    title: "Air on the G String (Orchestral Suite No. 3), BWV 1068",
    composer: "Johann Sebastian Bach",
    duration: 210,
  },
  {
    id: "handel-hallelujah",
    title: "Hallelujah Chorus (Messiah), HWV 56",
    composer: "George Frideric Handel",
    duration: 215,
  },
  {
    id: "chopin-nocturne-op9-2",
    title: "Nocturne in E-flat Major, Op. 9 No. 2",
    composer: "Frédéric Chopin",
    duration: 240,
  },
  {
    id: "liszt-liebestraum-3",
    title: "Liebesträume No. 3 in A-flat Major",
    composer: "Franz Liszt",
    duration: 240,
  },
  {
    id: "schubert-ave-maria",
    title: "Ave Maria (Ellens Gesang III), D. 839",
    composer: "Franz Schubert",
    duration: 255,
  },
  {
    id: "satie-gnossienne-1",
    title: "Gnossienne No. 1",
    composer: "Erik Satie",
    duration: 255,
  },
  {
    id: "liszt-la-campanella",
    title: "La Campanella (Grandes Études de Paganini No. 3)",
    composer: "Franz Liszt",
    duration: 270,
  },
  {
    id: "bach-sheep-may-safely-graze",
    title: "Sheep May Safely Graze, BWV 208",
    composer: "Johann Sebastian Bach",
    duration: 300,
  },
  {
    id: "chopin-fantasie-impromptu",
    title: "Fantaisie-Impromptu in C-sharp Minor, Op. 66",
    composer: "Frédéric Chopin",
    duration: 300,
  },
  {
    id: "pachelbel-canon",
    title: "Canon in D Major",
    composer: "Johann Pachelbel",
    duration: 300,
  },
  {
    id: "debussy-clair-de-lune",
    title: "Clair de Lune (Suite bergamasque), L. 75",
    composer: "Claude Debussy",
    duration: 315,
  },
  {
    id: "chopin-nocturne-op55-1",
    title: "Nocturne in F Minor, Op. 55 No. 1",
    composer: "Frédéric Chopin",
    duration: 315,
  },
  {
    id: "beethoven-moonlight-1st",
    title: "Moonlight Sonata – 1st Movement, Op. 27 No. 2",
    composer: "Ludwig van Beethoven",
    duration: 330,
  },
  {
    id: "rachmaninoff-vocalise",
    title: "Vocalise, Op. 34 No. 14",
    composer: "Sergei Rachmaninoff",
    duration: 360,
  },
  {
    id: "beethoven-moonlight-3rd",
    title: "Moonlight Sonata – 3rd Movement, Presto agitato, Op. 27 No. 2",
    composer: "Ludwig van Beethoven",
    duration: 390,
  },
  {
    id: "holst-mars",
    title: "Mars, the Bringer of War (The Planets), Op. 32",
    composer: "Gustav Holst",
    duration: 450,
  },
  {
    id: "holst-jupiter",
    title: "Jupiter, the Bringer of Jollity (The Planets), Op. 32",
    composer: "Gustav Holst",
    duration: 450,
  },
  {
    id: "wagner-ride-valkyries",
    title: "Ride of the Valkyries (Die Walküre, Act III)",
    composer: "Richard Wagner",
    duration: 480,
  },
  {
    id: "bach-toccata-fugue",
    title: "Toccata and Fugue in D Minor, BWV 565",
    composer: "Johann Sebastian Bach",
    duration: 540,
  },
  {
    id: "vivaldi-winter-complete",
    title: "Winter (The Four Seasons), Op. 8 No. 4, RV 297 – Complete Concerto",
    composer: "Antonio Vivaldi",
    duration: 600,
  },
  {
    id: "bach-brandeburg-3",
    title: "Brandenburg Concerto No. 3 in G Major, BWV 1048",
    composer: "Johann Sebastian Bach",
    duration: 600,
  },
  {
    id: "vivaldi-spring-complete",
    title: "Spring (The Four Seasons), Op. 8 No. 1, RV 269 – Complete Concerto",
    composer: "Antonio Vivaldi",
    duration: 630,
  },
  {
    id: "vivaldi-summer-complete",
    title: "Summer (The Four Seasons), Op. 8 No. 2, RV 315 – Complete Concerto",
    composer: "Antonio Vivaldi",
    duration: 630,
  },
  {
    id: "vivaldi-autumn-complete",
    title: "Autumn (The Four Seasons), Op. 8 No. 3, RV 293 – Complete Concerto",
    composer: "Antonio Vivaldi",
    duration: 630,
  },
  {
    id: "debussy-prelude-afternoon",
    title: "Prélude à l'après-midi d'un faune",
    composer: "Claude Debussy",
    duration: 660,
  },
  {
    id: "dvorak-9th-new-world-2nd",
    title: "Symphony No. 9 'New World' – Largo (2nd Movement)",
    composer: "Antonín Dvořák",
    duration: 670,
  },
  {
    id: "bach-brandenburg-2",
    title: "Brandenburg Concerto No. 2 in F Major, BWV 1047",
    composer: "Johann Sebastian Bach",
    duration: 720,
  },
  {
    id: "schoenberg-four-orchestral-songs",
    title: "Four Orchestral Songs, Op. 22",
    composer: "Arnold Schoenberg",
    duration: 812,
  },
  {
    id: "bach-violin-partita-2-chaconne",
    title: "Chaconne from Partita No. 2 in D Minor, BWV 1004",
    composer: "Johann Sebastian Bach",
    duration: 840,
  },
  {
    id: "beethoven-moonlight-complete",
    title: "Moonlight Sonata – Complete, Op. 27 No. 2",
    composer: "Ludwig van Beethoven",
    duration: 870,
  },
  {
    id: "bach-double-violin-concerto",
    title: "Concerto for Two Violins in D Minor, BWV 1043",
    composer: "Johann Sebastian Bach",
    duration: 900,
  },
  {
    id: "bach-brandenburg-4",
    title: "Brandenburg Concerto No. 4 in G Major, BWV 1049",
    composer: "Johann Sebastian Bach",
    duration: 900,
  },
  {
    id: "ravel-bolero",
    title: "Boléro",
    composer: "Maurice Ravel",
    duration: 900,
  },
  {
    id: "bryars-black-river",
    title: "The Black River",
    composer: "Gavin Bryars",
    duration: 900,
  },
  {
    id: "tchaikovsky-1812",
    title: "1812 Overture, Op. 49",
    composer: "Pyotr Ilyich Tchaikovsky",
    duration: 960,
  },
  {
    id: "bryars-after-the-requiem",
    title: "After the Requiem",
    composer: "Gavin Bryars",
    duration: 960,
  },
  {
    id: "beethoven-pathetique-complete",
    title: "Piano Sonata 'Pathétique', Op. 13 – Complete",
    composer: "Ludwig van Beethoven",
    duration: 1080,
  },
  {
    id: "bach-cello-suite-1",
    title: "Cello Suite No. 1 in G Major, BWV 1007",
    composer: "Johann Sebastian Bach",
    duration: 1140,
  },
  {
    id: "bach-brandon-6",
    title: "Brandenburg Concerto No. 6 in B-flat Major, BWV 1051",
    composer: "Johann Sebastian Bach",
    duration: 1140,
  },
  {
    id: "mozart-eine-kleine",
    title: "Eine kleine Nachtmusik, K. 525",
    composer: "Wolfgang Amadeus Mozart",
    duration: 1140,
  },
  {
    id: "mozart-piano-sonata-11",
    title: "Piano Sonata No. 11 in A Major, K. 331 – Complete",
    composer: "Wolfgang Amadeus Mozart",
    duration: 1200,
  },
  {
    id: "schoenberg-five-pieces",
    title: "Five Pieces for Orchestra, Op. 16",
    composer: "Arnold Schoenberg",
    duration: 1200,
  },
  {
    id: "schoenberg-piano-concerto",
    title: "Piano Concerto, Op. 42",
    composer: "Arnold Schoenberg",
    duration: 1200,
  },
  {
    id: "bach-brandon-5",
    title: "Brandenburg Concerto No. 5 in D Major, BWV 1050",
    composer: "Johann Sebastian Bach",
    duration: 1260,
  },
  {
    id: "schoenberg-variations-orchestra",
    title: "Variations for Orchestra, Op. 31",
    composer: "Arnold Schoenberg",
    duration: 1260,
  },
  {
    id: "bryars-string-quartet-1",
    title: "String Quartet No. 1",
    composer: "Gavin Bryars",
    duration: 1260,
  },
  {
    id: "grieg-peer-gynt-1",
    title: "Peer Gynt Suite No. 1, Op. 46",
    composer: "Edvard Grieg",
    duration: 1320,
  },
  {
    id: "bach-brandon-1",
    title: "Brandenburg Concerto No. 1 in F Major, BWV 1046",
    composer: "Johann Sebastian Bach",
    duration: 1320,
  },
  {
    id: "bach-harpsichord-concerto-d",
    title: "Harpsichord Concerto in D Minor, BWV 1052",
    composer: "Johann Sebastian Bach",
    duration: 1320,
  },
  {
    id: "tchaikovsky-nutcracker-suite",
    title: "The Nutcracker Suite, Op. 71a",
    composer: "Pyotr Ilyich Tchaikovsky",
    duration: 1350,
  },
  {
    id: "haydn-surprise-symphony",
    title: "Symphony No. 94 'Surprise' in G Major, Hob.I:94",
    composer: "Joseph Haydn",
    duration: 1380,
  },
  {
    id: "rachmaninoff-rhapsody-paganini",
    title: "Rhapsody on a Theme of Paganini, Op. 43",
    composer: "Sergei Rachmaninoff",
    duration: 1380,
  },
  {
    id: "debussy-la-mer",
    title: "La Mer (The Sea), L. 109",
    composer: "Claude Debussy",
    duration: 1440,
  },
  {
    id: "schubert-symphony-8",
    title: "Symphony No. 8 'Unfinished' in B Minor, D. 759",
    composer: "Franz Schubert",
    duration: 1500,
  },
  {
    id: "tchaikovsky-swan-lake-suite",
    title: "Swan Lake Suite, Op. 20a",
    composer: "Pyotr Ilyich Tchaikovsky",
    duration: 1500,
  },
  {
    id: "schoenberg-string-quartet-d",
    title: "String Quartet in D Major",
    composer: "Arnold Schoenberg",
    duration: 1500,
  },
  {
    id: "mendelssohn-italian-symphony",
    title: "Symphony No. 4 'Italian' in A Major, Op. 90",
    composer: "Felix Mendelssohn",
    duration: 1620,
  },
  {
    id: "schoenberg-verklarte-nacht",
    title: "Verklärte Nacht (Transfigured Night), Op. 4",
    composer: "Arnold Schoenberg",
    duration: 1680,
  },
  {
    id: "mendelssohn-violin-concerto",
    title: "Violin Concerto in E Minor, Op. 64",
    composer: "Felix Mendelssohn",
    duration: 1740,
  },
  {
    id: "schoenberg-erwartung",
    title: "Erwartung (Expectation), Op. 17",
    composer: "Arnold Schoenberg",
    duration: 1740,
  },
  {
    id: "bach-wachet-auf",
    title: "Wachet auf, ruft uns die Stimme, BWV 140",
    composer: "Johann Sebastian Bach",
    duration: 1800,
  },
  {
    id: "mozart-symphony-40",
    title: "Symphony No. 40 in G Minor, K. 550",
    composer: "Wolfgang Amadeus Mozart",
    duration: 1800,
  },
  {
    id: "haydn-london-symphony",
    title: "Symphony No. 104 'London' in D Major, Hob.I:104",
    composer: "Joseph Haydn",
    duration: 1800,
  },
  {
    id: "mussorgsky-pictures-exhibition",
    title: "Pictures at an Exhibition (orch. Ravel)",
    composer: "Modest Mussorgsky / Maurice Ravel",
    duration: 1800,
  },
  {
    id: "elgar-cello-concerto",
    title: "Cello Concerto in E Minor, Op. 85",
    composer: "Edward Elgar",
    duration: 1800,
  },
  {
    id: "mozart-symphony-41",
    title: "Symphony No. 41 'Jupiter' in C Major, K. 551",
    composer: "Wolfgang Amadeus Mozart",
    duration: 1980,
  },
  {
    id: "tchaikovsky-piano-concerto-1",
    title: "Piano Concerto No. 1 in B-flat Minor, Op. 23",
    composer: "Pyotr Ilyich Tchaikovsky",
    duration: 1980,
  },
  {
    id: "beethoven-symphony-5",
    title: "Symphony No. 5 in C Minor, Op. 67",
    composer: "Ludwig van Beethoven",
    duration: 2040,
  },
  {
    id: "rachmaninoff-piano-concerto-2",
    title: "Piano Concerto No. 2 in C Minor, Op. 18",
    composer: "Sergei Rachmaninoff",
    duration: 2100,
  },
  {
    id: "tchaikovsky-violin-concerto",
    title: "Violin Concerto in D Major, Op. 35",
    composer: "Pyotr Ilyich Tchaikovsky",
    duration: 2100,
  },
  {
    id: "stravinsky-rite-of-spring",
    title: "The Rite of Spring",
    composer: "Igor Stravinsky",
    duration: 2100,
  },
  {
    id: "beethoven-symphony-7",
    title: "Symphony No. 7 in A Major, Op. 92",
    composer: "Ludwig van Beethoven",
    duration: 2280,
  },
  {
    id: "schoenberg-pierrot-lunaire",
    title: "Pierrot Lunaire, Op. 21",
    composer: "Arnold Schoenberg",
    duration: 2280,
  },
  {
    id: "beethoven-symphony-6",
    title: "Symphony No. 6 'Pastoral' in F Major, Op. 68",
    composer: "Ludwig van Beethoven",
    duration: 2340,
  },

  {
    id: "dvorak-cello-concerto",
    title: "Cello Concerto in B Minor, Op. 104",
    composer: "Antonín Dvořák",
    duration: 2400,
  },
  {
    id: "brahms-symphony-4",
    title: "Symphony No. 4 in E Minor, Op. 98",
    composer: "Johannes Brahms",
    duration: 2400,
  },
  {
    id: "brahms-violin-concerto",
    title: "Violin Concerto in D Major, Op. 77",
    composer: "Johannes Brahms",
    duration: 2400,
  },
  {
    id: "rachmaninoff-piano-concerto-3",
    title: "Piano Concerto No. 3 in D Minor, Op. 30",
    composer: "Sergei Rachmaninoff",
    duration: 2400,
  },
  {
    id: "beethoven-violin-concerto",
    title: "Violin Concerto in D Major, Op. 61",
    composer: "Ludwig van Beethoven",
    duration: 2460,
  },
  {
    id: "vivaldi-four-seasons-complete",
    title: "The Four Seasons, Op. 8 – Complete",
    composer: "Antonio Vivaldi",
    duration: 2520,
  },
  {
    id: "rimsky-scheherazade",
    title: "Scheherazade, Op. 35",
    composer: "Nikolai Rimsky-Korsakov",
    duration: 2520,
  },
  {
    id: "brahms-symphony-2",
    title: "Symphony No. 2 in D Major, Op. 73",
    composer: "Johannes Brahms",
    duration: 2520,
  },
  {
    id: "tchaikovsky-symphony-4",
    title: "Symphony No. 4 in F Minor, Op. 36",
    composer: "Pyotr Ilyich Tchaikovsky",
    duration: 2520,
  },
  {
    id: "dvorak-symphony-9",
    title: "Symphony No. 9 'From the New World' in E Minor, Op. 95",
    composer: "Antonín Dvořák",
    duration: 2520,
  },
  {
    id: "sibelius-symphony-2",
    title: "Symphony No. 2 in D Major, Op. 43",
    composer: "Jean Sibelius",
    duration: 2640,
  },
  {
    id: "brahms-symphony-1",
    title: "Symphony No. 1 in C Minor, Op. 68",
    composer: "Johannes Brahms",
    duration: 2700,
  },
  {
    id: "stravinsky-firebird",
    title: "The Firebird – Complete Ballet",
    composer: "Igor Stravinsky",
    duration: 2700,
  },
  {
    id: "tchaikovsky-symphony-5",
    title: "Symphony No. 5 in E Minor, Op. 64",
    composer: "Pyotr Ilyich Tchaikovsky",
    duration: 2760,
  },
  {
    id: "tchaikovsky-symphony-6",
    title: "Symphony No. 6 'Pathétique' in B Minor, Op. 74",
    composer: "Pyotr Ilyich Tchaikovsky",
    duration: 2760,
  },
  {
    id: "holst-planets-complete",
    title: "The Planets, Op. 32 – Complete Suite",
    composer: "Gustav Holst",
    duration: 2880,
  },
  {
    id: "brahms-piano-concerto-2",
    title: "Piano Concerto No. 2 in B-flat Major, Op. 83",
    composer: "Johannes Brahms",
    duration: 2880,
  },
  {
    id: "beethoven-symphony-3",
    title: "Symphony No. 3 'Eroica' in E-flat Major, Op. 55",
    composer: "Ludwig van Beethoven",
    duration: 2940,
  },
  {
    id: "mozart-requiem",
    title: "Requiem in D Minor, K. 626",
    composer: "Wolfgang Amadeus Mozart",
    duration: 3000,
  },
  {
    id: "berlioz-symphonie-fantastique",
    title: "Symphonie fantastique, Op. 14",
    composer: "Hector Berlioz",
    duration: 3180,
  },
  {
    id: "mahler-symphony-4",
    title: "Symphony No. 4 in G Major",
    composer: "Gustav Mahler",
    duration: 3240,
  },
  {
    id: "mahler-symphony-1",
    title: "Symphony No. 1 in D Major 'Titan'",
    composer: "Gustav Mahler",
    duration: 3300,
  },
  {
    id: "schubert-symphony-9",
    title: "Symphony No. 9 in C Major 'The Great', D. 944",
    composer: "Franz Schubert",
    duration: 3600,
  },
  {
    id: "bryars-sinking-of-titanic",
    title: "The Sinking of the Titanic",
    composer: "Gavin Bryars",
    duration: 3660,
  },
  {
    id: "bruckner-symphony-7",
    title: "Symphony No. 7 in E Major",
    composer: "Anton Bruckner",
    duration: 4020,
  },
  {
    id: "beethoven-symphony-9",
    title: "Symphony No. 9 'Choral' in D Minor, Op. 125",
    composer: "Ludwig van Beethoven",
    duration: 4020,
  },
  {
    id: "mahler-symphony-5",
    title: "Symphony No. 5 in C-sharp Minor",
    composer: "Gustav Mahler",
    duration: 4200,
  },
  {
    id: "bryars-jesus-blood",
    title: "Jesus' Blood Never Failed Me Yet",
    composer: "Gavin Bryars",
    duration: 4440,
  },
  {
    id: "bach-goldberg-variations",
    title: "Goldberg Variations, BWV 988",
    composer: "Johann Sebastian Bach",
    duration: 4500,
  },
  {
    id: "mahler-symphony-6",
    title: "Symphony No. 6 'Tragic' in A Minor",
    composer: "Gustav Mahler",
    duration: 4740,
  },
  {
    id: "mahler-symphony-9",
    title: "Symphony No. 9 in D Major",
    composer: "Gustav Mahler",
    duration: 4800,
  },
  {
    id: "mahler-symphony-2",
    title: "Symphony No. 2 'Resurrection' in C Minor",
    composer: "Gustav Mahler",
    duration: 5100,
  },
  {
    id: "verdi-requiem",
    title: "Requiem",
    composer: "Giuseppe Verdi",
    duration: 5400,
  },
  {
    id: "mahler-symphony-3",
    title: "Symphony No. 3 in D Minor",
    composer: "Gustav Mahler",
    duration: 6000,
  },
  {
    id: "bach-mass-b-minor",
    title: "Mass in B Minor, BWV 232",
    composer: "Johann Sebastian Bach",
    duration: 6360,
  },
  {
    id: "bach-st-john-passion",
    title: "St. John Passion, BWV 245",
    composer: "Johann Sebastian Bach",
    duration: 6600,
  },
  {
    id: "bach-well-tempered-clavier-1",
    title: "The Well-Tempered Clavier, Book I, BWV 846–869",
    composer: "Johann Sebastian Bach",
    duration: 6900,
  },
  {
    id: "verdi-nabucco",
    title: "Nabucco",
    composer: "Giuseppe Verdi",
    duration: 6960,
  },
  {
    id: "glass-akhnaten",
    title: "Akhnaten",
    composer: "Philip Glass",
    duration: 7740,
  },
  {
    id: "wagner-hollaender",
    title: "Der fliegende Holländer",
    composer: "Richard Wagner",
    duration: 8100,
  },
  {
    id: "handel-messiah",
    title: "Messiah, HWV 56 – Complete Oratorio",
    composer: "George Frideric Handel",
    duration: 8400,
  },
  {
    id: "verdi-otello",
    title: "Otello",
    composer: "Giuseppe Verdi",
    duration: 8400,
  },
  {
    id: "mozart-zauberflote",
    title: "Die Zauberflöte",
    composer: "Wolfgang Amadeus Mozart",
    duration: 8700,
  },
  {
    id: "verdi-aida",
    title: "Aida",
    composer: "Giuseppe Verdi",
    duration: 8880,
  },
  {
    id: "glass-satyagraha",
    title: "Satyagraha",
    composer: "Philip Glass",
    duration: 8880,
  },
  {
    id: "bach-well-tempered-clavier-2",
    title: "The Well-Tempered Clavier, Book II, BWV 870–893",
    composer: "Johann Sebastian Bach",
    duration: 9000,
  },
  {
    id: "wagner-rheingold",
    title: "Das Rheingold",
    composer: "Richard Wagner",
    duration: 9000,
  },
  {
    id: "bach-christmas-oratorio",
    title: "Christmas Oratorio, BWV 248 – Complete",
    composer: "Johann Sebastian Bach",
    duration: 9300,
  },
  {
    id: "bach-st-matthew-passion",
    title: "St. Matthew Passion, BWV 244",
    composer: "Johann Sebastian Bach",
    duration: 9600,
  },
  {
    id: "mozart-don-giovanni",
    title: "Don Giovanni",
    composer: "Wolfgang Amadeus Mozart",
    duration: 9600,
  },
  {
    id: "wagner-tannhauser",
    title: "Tannhäuser",
    composer: "Richard Wagner",
    duration: 9900,
  },
  {
    id: "mozart-figaro",
    title: "Le nozze di Figaro",
    composer: "Wolfgang Amadeus Mozart",
    duration: 9900,
  },
  {
    id: "wagner-lohengrin",
    title: "Lohengrin",
    composer: "Richard Wagner",
    duration: 12000,
  },
  {
    id: "glass-music-twelve-parts",
    title: "Music in Twelve Parts",
    composer: "Philip Glass",
    duration: 12240,
  },
  {
    id: "wagner-walkure",
    title: "Die Walküre",
    composer: "Richard Wagner",
    duration: 14100,
  },
  {
    id: "wagner-siegfried",
    title: "Siegfried",
    composer: "Richard Wagner",
    duration: 14100,
  },
  {
    id: "wagner-parsifal",
    title: "Parsifal",
    composer: "Richard Wagner",
    duration: 14400,
  },
  {
    id: "wagner-tristan",
    title: "Tristan und Isolde",
    composer: "Richard Wagner",
    duration: 14520,
  },
  {
    id: "wagner-gotterdammerung",
    title: "Götterdämmerung",
    composer: "Richard Wagner",
    duration: 15300,
  },
  {
    id: "wagner-meistersinger",
    title: "Die Meistersinger von Nürnberg",
    composer: "Richard Wagner",
    duration: 16200,
  },
  {
    id: "glass-einstein-beach",
    title: "Einstein on the Beach",
    composer: "Philip Glass",
    duration: 18000,
  },
  {
    id: "wagner-ring-des-nibelungen",
    title: "Der Ring des Nibelungen",
    composer: "Richard Wagner",
    duration: 54000,
  },
  {
    id: "satie-vexations",
    title: "Vexations",
    composer: "Erik Satie",
    duration: 64800,
  },
  {
    id: "cage-organ2-aslsp",
    title: "Organ2/ASLSP 'As Slow as Possible'",
    composer: "John Cage",
    duration: 20165408400,
  },
];

/**
 * Find the closest classical pieces to a given duration.
 * Returns up to `count` pieces sorted by absolute difference from targetSeconds.
 */
export function findClosestPieces(
  targetSeconds: number,
  count: number = 3
): (ClassicalPiece & { diffSeconds: number; diffPercent: number })[] {
  return CLASSICAL_PIECES.map((piece) => ({
    ...piece,
    diffSeconds: Math.abs(piece.duration - targetSeconds),
    diffPercent:
      Math.round(
        (Math.abs(piece.duration - targetSeconds) / targetSeconds) * 1000
      ) / 10,
  }))
    .sort((a, b) => a.diffSeconds - b.diffSeconds)
    .slice(0, count);
}

export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h}h ${m}m`;
  }
  if (m > 0 && s > 0) {
    return `${m}m ${s}s`;
  }
  if (m > 0) {
    return `${m} min`;
  }
  return `${s}s`;
}
