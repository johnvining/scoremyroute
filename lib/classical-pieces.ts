export interface ClassicalPiece {
  id: string;
  title: string;
  composer: string;
  duration: number; // seconds
}

// Duration coverage: ~45s to ~180 min
// ~160 curated pieces with typical performance durations
export const CLASSICAL_PIECES: ClassicalPiece[] = [
  // ── Under 2 minutes ──────────────────────────────────────────────────────────
  {
    id: "anderson-typewriter",
    title: "The Typewriter",
    composer: "Leroy Anderson",
    duration: 99,
  },
  {
    id: "bach-minuet-g",
    title: "Minuet in G Major (BWV Anh. 114)",
    composer: "Johann Sebastian Bach",
    duration: 120,
  },
  {
    id: "chopin-minute-waltz",
    title: "Waltz in D-flat Major 'Minute Waltz' Op. 64 No. 1",
    composer: "Frédéric Chopin",
    duration: 105,
  },
  {
    id: "bach-prelude-c",
    title: "Prelude in C Major (Well-Tempered Clavier, BWV 846)",
    composer: "Johann Sebastian Bach",
    duration: 150,
  },

  // ── 2–5 minutes ──────────────────────────────────────────────────────────────
  {
    id: "schumann-traumerei",
    title: "Träumerei (Kinderszenen, Op. 15 No. 7)",
    composer: "Robert Schumann",
    duration: 165,
  },
  {
    id: "saint-saens-swan",
    title: "The Swan (Le Cygne) from Carnival of the Animals",
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
    id: "grieg-hall-mountain-king",
    title: "In the Hall of the Mountain King (Peer Gynt Suite No. 1)",
    composer: "Edvard Grieg",
    duration: 145,
  },
  {
    id: "beethoven-fur-elise",
    title: "Für Elise (Bagatelle in A Minor, WoO 59)",
    composer: "Ludwig van Beethoven",
    duration: 175,
  },
  {
    id: "satie-gymnopedie-1",
    title: "Gymnopédie No. 1",
    composer: "Erik Satie",
    duration: 195,
  },
  {
    id: "mozart-turkish-march",
    title: "Turkish March (Rondo alla Turca, K. 331)",
    composer: "Wolfgang Amadeus Mozart",
    duration: 180,
  },
  {
    id: "vivaldi-spring-1",
    title: "Spring – Allegro (The Four Seasons, 1st Movement)",
    composer: "Antonio Vivaldi",
    duration: 195,
  },
  {
    id: "chopin-waltz-a-minor",
    title: "Waltz in A Minor, B. 150",
    composer: "Frédéric Chopin",
    duration: 135,
  },
  {
    id: "handel-hallelujah",
    title: "Hallelujah Chorus (Messiah, HWV 56)",
    composer: "George Frideric Handel",
    duration: 215,
  },
  {
    id: "schubert-ave-maria",
    title: "Ave Maria (Ellens Gesang III, D. 839)",
    composer: "Franz Schubert",
    duration: 255,
  },
  {
    id: "chopin-fantasie-impromptu",
    title: "Fantaisie-Impromptu in C-sharp Minor, Op. 66",
    composer: "Frédéric Chopin",
    duration: 300,
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

  // ── 5–10 minutes ─────────────────────────────────────────────────────────────
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
    id: "rachmaninoff-prelude-c-sharp",
    title: "Prelude in C-sharp Minor, Op. 3 No. 2",
    composer: "Sergei Rachmaninoff",
    duration: 210,
  },
  {
    id: "debussy-clair-de-lune",
    title: "Clair de Lune (Suite bergamasque, L. 75)",
    composer: "Claude Debussy",
    duration: 315,
  },
  {
    id: "bach-air-g-string",
    title: "Air on the G String (Orchestral Suite No. 3, BWV 1068)",
    composer: "Johann Sebastian Bach",
    duration: 210,
  },
  {
    id: "pachelbel-canon",
    title: "Canon in D Major",
    composer: "Johann Pachelbel",
    duration: 300,
  },
  {
    id: "chopin-nocturne-op55-1",
    title: "Nocturne in F Minor, Op. 55 No. 1",
    composer: "Frédéric Chopin",
    duration: 315,
  },
  {
    id: "beethoven-moonlight-1st",
    title: "Moonlight Sonata – 1st Movement (Op. 27 No. 2)",
    composer: "Ludwig van Beethoven",
    duration: 330,
  },
  {
    id: "beethoven-moonlight-3rd",
    title: "Moonlight Sonata – 3rd Movement, Presto agitato",
    composer: "Ludwig van Beethoven",
    duration: 390,
  },
  {
    id: "wagner-ride-valkyries",
    title: "Ride of the Valkyries (Die Walküre, Act III)",
    composer: "Richard Wagner",
    duration: 480,
  },
  {
    id: "holst-mars",
    title: "Mars, the Bringer of War (The Planets, Op. 32)",
    composer: "Gustav Holst",
    duration: 450,
  },
  {
    id: "debussy-prelude-afternoon",
    title: "Prélude à l'après-midi d'un faune",
    composer: "Claude Debussy",
    duration: 660,
  },
  {
    id: "holst-jupiter",
    title: "Jupiter, the Bringer of Jollity (The Planets, Op. 32)",
    composer: "Gustav Holst",
    duration: 450,
  },
  {
    id: "bach-toccata-fugue",
    title: "Toccata and Fugue in D Minor, BWV 565",
    composer: "Johann Sebastian Bach",
    duration: 540,
  },
  {
    id: "vivaldi-spring-complete",
    title: "Spring (The Four Seasons) – Complete Concerto",
    composer: "Antonio Vivaldi",
    duration: 630,
  },
  {
    id: "vivaldi-winter-complete",
    title: "Winter (The Four Seasons) – Complete Concerto",
    composer: "Antonio Vivaldi",
    duration: 600,
  },
  {
    id: "vivaldi-summer-complete",
    title: "Summer (The Four Seasons) – Complete Concerto",
    composer: "Antonio Vivaldi",
    duration: 630,
  },
  {
    id: "vivaldi-autumn-complete",
    title: "Autumn (The Four Seasons) – Complete Concerto",
    composer: "Antonio Vivaldi",
    duration: 630,
  },

  // ── 10–20 minutes ────────────────────────────────────────────────────────────
  {
    id: "bach-brandeburg-3",
    title: "Brandenburg Concerto No. 3 in G Major, BWV 1048",
    composer: "Johann Sebastian Bach",
    duration: 600,
  },
  {
    id: "beethoven-moonlight-complete",
    title: "Moonlight Sonata – Complete (Op. 27 No. 2)",
    composer: "Ludwig van Beethoven",
    duration: 870,
  },
  {
    id: "ravel-bolero",
    title: "Boléro",
    composer: "Maurice Ravel",
    duration: 900,
  },
  {
    id: "tchaikovsky-1812",
    title: "1812 Overture, Op. 49",
    composer: "Pyotr Ilyich Tchaikovsky",
    duration: 960,
  },
  {
    id: "beethoven-pathetique-complete",
    title: "Piano Sonata 'Pathétique', Op. 13 – Complete",
    composer: "Ludwig van Beethoven",
    duration: 1080,
  },
  {
    id: "grieg-peer-gynt-1",
    title: "Peer Gynt Suite No. 1, Op. 46",
    composer: "Edvard Grieg",
    duration: 1320,
  },
  {
    id: "bach-violin-partita-2-chaconne",
    title: "Chaconne from Partita No. 2 in D Minor, BWV 1004",
    composer: "Johann Sebastian Bach",
    duration: 840,
  },
  {
    id: "mozart-piano-sonata-11",
    title: "Piano Sonata No. 11 in A Major, K. 331 – Complete",
    composer: "Wolfgang Amadeus Mozart",
    duration: 1200,
  },

  // ── 18–30 minutes ────────────────────────────────────────────────────────────
  {
    id: "mozart-eine-kleine",
    title: "Eine kleine Nachtmusik, K. 525",
    composer: "Wolfgang Amadeus Mozart",
    duration: 1140,
  },
  {
    id: "schubert-symphony-8",
    title: "Symphony No. 8 'Unfinished' in B Minor, D. 759",
    composer: "Franz Schubert",
    duration: 1500,
  },
  {
    id: "haydn-surprise-symphony",
    title: "Symphony No. 94 'Surprise' in G Major, Hob.I:94",
    composer: "Joseph Haydn",
    duration: 1380,
  },
  {
    id: "rachmaninoff-vocalise",
    title: "Vocalise, Op. 34 No. 14",
    composer: "Sergei Rachmaninoff",
    duration: 360,
  },
  {
    id: "mendelssohn-violin-concerto",
    title: "Violin Concerto in E Minor, Op. 64",
    composer: "Felix Mendelssohn",
    duration: 1740,
  },
  {
    id: "mendelssohn-italian-symphony",
    title: "Symphony No. 4 'Italian' in A Major, Op. 90",
    composer: "Felix Mendelssohn",
    duration: 1620,
  },
  {
    id: "rachmaninoff-rhapsody-paganini",
    title: "Rhapsody on a Theme of Paganini, Op. 43",
    composer: "Sergei Rachmaninoff",
    duration: 1380,
  },
  {
    id: "mozart-symphony-40",
    title: "Symphony No. 40 in G Minor, K. 550",
    composer: "Wolfgang Amadeus Mozart",
    duration: 1800,
  },
  {
    id: "dvorak-9th-new-world-2nd",
    title: "Symphony No. 9 'New World' – Largo (2nd Movement)",
    composer: "Antonín Dvořák",
    duration: 670,
  },

  // ── 30–45 minutes ────────────────────────────────────────────────────────────
  {
    id: "beethoven-symphony-5",
    title: "Symphony No. 5 in C Minor, Op. 67",
    composer: "Ludwig van Beethoven",
    duration: 2040,
  },
  {
    id: "beethoven-symphony-7",
    title: "Symphony No. 7 in A Major, Op. 92",
    composer: "Ludwig van Beethoven",
    duration: 2280,
  },
  {
    id: "haydn-london-symphony",
    title: "Symphony No. 104 'London' in D Major, Hob.I:104",
    composer: "Joseph Haydn",
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
    id: "tchaikovsky-nutcracker-suite",
    title: "The Nutcracker Suite, Op. 71a",
    composer: "Pyotr Ilyich Tchaikovsky",
    duration: 1350,
  },
  {
    id: "mussorgsky-pictures-exhibition",
    title: "Pictures at an Exhibition (orch. Ravel)",
    composer: "Modest Mussorgsky / Maurice Ravel",
    duration: 1800,
  },
  {
    id: "stravinsky-rite-of-spring",
    title: "The Rite of Spring",
    composer: "Igor Stravinsky",
    duration: 2100,
  },
  {
    id: "vivaldi-four-seasons-complete",
    title: "The Four Seasons – Complete",
    composer: "Antonio Vivaldi",
    duration: 2520,
  },
  {
    id: "beethoven-violin-concerto",
    title: "Violin Concerto in D Major, Op. 61",
    composer: "Ludwig van Beethoven",
    duration: 2460,
  },
  {
    id: "dvorak-cello-concerto",
    title: "Cello Concerto in B Minor, Op. 104",
    composer: "Antonín Dvořák",
    duration: 2400,
  },
  {
    id: "rimsky-scheherazade",
    title: "Scheherazade, Op. 35",
    composer: "Nikolai Rimsky-Korsakov",
    duration: 2520,
  },
  {
    id: "tchaikovsky-swan-lake-suite",
    title: "Swan Lake Suite, Op. 20a",
    composer: "Pyotr Ilyich Tchaikovsky",
    duration: 1500,
  },

  // ── 45–60 minutes ────────────────────────────────────────────────────────────
  {
    id: "beethoven-symphony-6",
    title: "Symphony No. 6 'Pastoral' in F Major, Op. 68",
    composer: "Ludwig van Beethoven",
    duration: 2340,
  },
  {
    id: "brahms-symphony-1",
    title: "Symphony No. 1 in C Minor, Op. 68",
    composer: "Johannes Brahms",
    duration: 2700,
  },
  {
    id: "brahms-symphony-2",
    title: "Symphony No. 2 in D Major, Op. 73",
    composer: "Johannes Brahms",
    duration: 2520,
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
    id: "tchaikovsky-symphony-4",
    title: "Symphony No. 4 in F Minor, Op. 36",
    composer: "Pyotr Ilyich Tchaikovsky",
    duration: 2520,
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
    id: "dvorak-symphony-9",
    title: "Symphony No. 9 'From the New World' in E Minor, Op. 95",
    composer: "Antonín Dvořák",
    duration: 2520,
  },
  {
    id: "elgar-cello-concerto",
    title: "Cello Concerto in E Minor, Op. 85",
    composer: "Edward Elgar",
    duration: 1800,
  },
  {
    id: "sibelius-symphony-2",
    title: "Symphony No. 2 in D Major, Op. 43",
    composer: "Jean Sibelius",
    duration: 2640,
  },
  {
    id: "debussy-la-mer",
    title: "La Mer (The Sea), L. 109",
    composer: "Claude Debussy",
    duration: 1440,
  },
  {
    id: "stravinsky-firebird",
    title: "The Firebird – Complete Ballet",
    composer: "Igor Stravinsky",
    duration: 2700,
  },
  {
    id: "holst-planets-complete",
    title: "The Planets, Op. 32 – Complete Suite",
    composer: "Gustav Holst",
    duration: 2880,
  },
  {
    id: "bruckner-symphony-7",
    title: "Symphony No. 7 in E Major",
    composer: "Anton Bruckner",
    duration: 4020,
  },

  // ── 50–80 minutes ────────────────────────────────────────────────────────────
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
    id: "bach-goldberg-variations",
    title: "Goldberg Variations, BWV 988",
    composer: "Johann Sebastian Bach",
    duration: 4500,
  },
  {
    id: "verdi-requiem",
    title: "Requiem",
    composer: "Giuseppe Verdi",
    duration: 5400,
  },
  {
    id: "mahler-symphony-5",
    title: "Symphony No. 5 in C-sharp Minor",
    composer: "Gustav Mahler",
    duration: 4200,
  },
  {
    id: "mahler-symphony-9",
    title: "Symphony No. 9 in D Major",
    composer: "Gustav Mahler",
    duration: 4800,
  },
  {
    id: "brahms-piano-concerto-2",
    title: "Piano Concerto No. 2 in B-flat Major, Op. 83",
    composer: "Johannes Brahms",
    duration: 2880,
  },

  // ── 80–120 minutes ────────────────────────────────────────────────────────────
  {
    id: "beethoven-symphony-9",
    title: "Symphony No. 9 'Choral' in D Minor, Op. 125",
    composer: "Ludwig van Beethoven",
    duration: 4020,
  },
  {
    id: "mahler-symphony-6",
    title: "Symphony No. 6 'Tragic' in A Minor",
    composer: "Gustav Mahler",
    duration: 4740,
  },
  {
    id: "mahler-symphony-3",
    title: "Symphony No. 3 in D Minor",
    composer: "Gustav Mahler",
    duration: 6000,
  },
  {
    id: "mahler-symphony-2",
    title: "Symphony No. 2 'Resurrection' in C Minor",
    composer: "Gustav Mahler",
    duration: 5100,
  },
  {
    id: "bach-well-tempered-clavier-1",
    title: "The Well-Tempered Clavier, Book I, BWV 846–869",
    composer: "Johann Sebastian Bach",
    duration: 6900,
  },
  {
    id: "handel-messiah",
    title: "Messiah, HWV 56 – Complete Oratorio",
    composer: "George Frideric Handel",
    duration: 8400,
  },
  {
    id: "bach-st-matthew-passion",
    title: "St. Matthew Passion, BWV 244",
    composer: "Johann Sebastian Bach",
    duration: 9600,
  },

  // ── Multi-hour works ──────────────────────────────────────────────────────────
  {
    id: "cage-organ2-aslsp",
    title: "Organ2/ASLSP 'As Slow as Possible'",
    composer: "John Cage",
    duration: 20165408400,
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
