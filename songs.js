const officialTracks = [
  {
    id: 'style',
    title: 'Style',
    artist: 'Taylor Swift',
    art: 'https://i.ytimg.com/vi/-CmadmM5cOk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsD9DpIi531XTkrtRwClnyDeFY3g',
    audioUrl: 'music/style.mp3',
    lyricsUrl: 'lyrics/style.lrc'
  },
  {
    id: 'wide-awake',
    title: 'Wide Awake',
    artist: 'Katy Perry',
    art: 'https://i.ytimg.com/vi/k0BWlvnBmIE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBh_5EL80NgVMSB5f1llsEvx2nHvQ',
    audioUrl: 'music/wide-awake.mp3',
    lyricsUrl: 'lyrics/wide-awake.lrc'
  },
   {
    id: 'billie-jean',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    art: 'https://i.ytimg.com/vi/Zi_XLOBDo_Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCajwWb-rTL2j_XlaHs0ooGm2H8Kw',
    audioUrl: 'music/billie-jean.mp3',
    lyricsUrl: 'lyrics/billie-jean.lrc'
  },
  {
    id: 'amor-do-afonso',
    title: 'Amor do Afonso',
    artist: 'Alex',
    art: 'https://i.ibb.co/rfcNNmp2/image.png',
    audioUrl: 'music/amor-do-afonso.mp3',
    lyricsUrl: 'lyrics/amor-do-afonso.lrc'
  },
   {
    id: 'talking-body',
    title: 'Talking Body',
    artist: 'Tove Lo',
    art: 'https://i.ytimg.com/vi/AzRyxGBGiAE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5q9mckaZZOET4zs1lpFt0T5lfrg',
    audioUrl: 'music/talking-body.mp3',
    lyricsUrl: 'lyrics/talking-body.lrc'
  },
    {
    id: 'effed-up-jeans',
    title: 'Effed Up Jeans',
    artist: 'Salem Slut',
    art: 'https://i.ytimg.com/vi/9Ov1TjBkn1w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlQrB-wYsdH0PxVHeALOX6ZdV2cg',
    audioUrl: 'music/effed-up-jeans.mp3',
    lyricsUrl: null
  },
   {
    id: 'love-story',
    title: 'Love Story',
    artist: 'Taylor Swift',
    art: 'https://i.ytimg.com/vi/8xg3vE8Ie_E/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBT71b10uC0iz9RpE2QbnbBi8IDQ',
    audioUrl: 'music/love-story.mp3',
    lyricsUrl: 'lyrics/love-story.lrc'
  },
   {
    id: 'the-one-that-got-away',
    title: 'The One That Got Away',
    artist: 'Katy Perry',
    art: 'https://i.ytimg.com/vi/Ahha3Cqe_fk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBq-cK47NEs7NR4RwhCbIa2_XTYVA',
    audioUrl: 'music/the-one-that-got-away.mp3',
    lyricsUrl: 'lyrics/the-one-that-got-away.lrc'
  },
   {
    id: 'timber',
    title: 'Timber',
    artist: 'Pitbull & Kesha',
    art: 'https://i.ytimg.com/vi/hHUbLv4ThOo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxIAwUUKZYQSJo5nOBqumeIni9cg',
    audioUrl: 'music/timber.mp3',
    lyricsUrl: 'lyrics/timber.lrc'
  },
   {
    id: 'where-them-girls-at',
    title: 'Where Them Girls At',
    artist: 'David Guetta',
    art: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WF53k_qHEt4qTeJ9hIvyYiFoT6OgGTjcfIvTzHz7U2M7YHdfgHw9tZKe&s=10',
    audioUrl: 'music/where-them-girls-at.mp3',
    lyricsUrl: 'lyrics/where-them-girls-at.lrc'
  },
  {
    id: 'your-love-is-my-drug',
    title: 'your love is my drug',
    artist: 'Kesha',
    art: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGiU2o3X_gWkwpd7aicFRZFFeLyU0Ub4HlZQVQojcPA&s=10',
    audioUrl: 'music/your-love-is-my-drug.mp3',
    lyricsUrl: 'lyrics/your-love-is-my-drug.lrc'
  },
   {
    id: 'little-angel',
    title: 'Little Angel',
    artist: 'onokami',
    art: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxWrgpfH65IrX2BK9huHYoyNICBqHV8lXudMXcGbY5zPW4cIcSd38LCK7&s=10',
    audioUrl: 'music/little-angel.mp3',
    lyricsUrl: null
  },
   {
    id: 'no-money',
    title: 'No Money',
    artist: 'Galantis',
    art: 'https://cdn-images.dzcdn.net/images/cover/975975999793550c9a02411b645796d2/500x500.jpg',
    audioUrl: 'music/no-money.mp3',
    lyricsUrl: 'lyrics/no-money.lrc'
  },
     {
    id: 'say-my-name',
    title: 'Say My Name',
    artist: 'David Guetta, Bebe Rexha & J Balvin',
    art: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeSrdElPIf379SlYpl_pTW_zi_P5FDgHNd5NPkh4DYA&s=10',
    audioUrl: 'music/say-my-name.mp3',
    lyricsUrl: 'lyrics/say-my-name.lrc'
  },
 {
    id: 'legendary-lovers',
    title: 'Legendary Lovers',
    artist: 'Katy Perry',
    art: 'https://cdn-images.dzcdn.net/images/cover/129e88ff711841eb2ab16a20db735147/1900x1900-000000-80-0-0.jpg',
    audioUrl: 'music/legendary-lovers.mp3',
    lyricsUrl: 'lyrics/legendary-lovers.lrc'
  },
  {
    id: 'aint-in-la',
    title: "ain't in la",
    artist: 'Adela',
    art: 'https://i1.sndcdn.com/artworks-7u3PSH7rBDHF-0-t500x500.jpg',
    audioUrl: 'music/aint-in-la.mp3',
    lyricsUrl: 'lyrics/aint-in-la.lrc'
  },
  {
    id: 'dark-horse',
    title: 'Dark Horse',
    artist: 'Katy Perry & Juicy J.',
    art: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFadYNCcWFqM3h7h6IeaSofGNjddUvG-YxQJ9fbH_hA&s=10',
    audioUrl: 'music/dark-horse.mp3',
    lyricsUrl: 'lyrics/dark-horse.lrc'
  },
    {
    id: 'something-just-like-this',
    title: 'Something Just Like This',
    artist: 'Coldplay & The Chainsmokers',
    art: 'https://upload.wikimedia.org/wikipedia/pt/8/87/The_Chainsmokers_%26_Coldplay_-_Something_Just_Like_This.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
    audioUrl: 'music/something-just-like-this.mp3',
    lyricsUrl: 'lyrics/something-just-like-this.lrc'
  },
  {
    id: 'oh-my-little-baby-boy',
    title: 'Oh My Little Baby Boy',
    artist: 'Babe',
    art: 'https://static.qobuz.com/images/covers/gb/fe/ee4tp5cz5fegb_600.jpg',
    audioUrl: 'music/oh-my-little-baby-boy.mp3',
    lyricsUrl: null
  },
{
    id: 'ангелочек',
    title: 'ангелочек',
    artist: 'onokami & Гущина Анастасия',
    art: 'https://cdn-images.dzcdn.net/images/cover/a548d30e7a9315a5eef398c03898db34/0x1900-000000-80-0-0.jpg',
    audioUrl: 'music/ангелочек.mp3',
    lyricsUrl: 'lyrics/ангелочек.lrc'
  },
 {
    id: 'burn',
    title: 'Burn',
    artist: 'Ellie Goulding',
    art: 'https://i1.sndcdn.com/artworks-000070937680-8mpxht-t1080x1080.jpg',
    audioUrl: 'music/burn.mp3',
    lyricsUrl: 'lyrics/burn.lrc'
  },
 {
    id: 'love-me-like-you-do',
    title: 'Love Me Like You Do',
    artist: 'Ellie Goulding',
    art: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPHxkitRay-NjkEEMA6fmlQ3gEpwIXNDpXSjffOR4eA&s=10',
    audioUrl: 'music/love-me-like-you-do.mp3',
    lyricsUrl: 'lyrics/love-me-like-you-do.lrc'
  },
   {
    id: 'dreams-pt-II',
    title: 'Dreams pt. II',
    artist: 'Lost Sky & Sara Skinner',
    art: 'https://i1.sndcdn.com/artworks-000463431084-s9wr2o-t1080x1080.jpg',
    audioUrl: 'music/dreams-pt-II.mp3',
    lyricsUrl: 'lyrics/dreams-pt-II.lrc'
  },
  {
    id: 'call-me-maybe',
    title: 'Call Me Maybe',
    artist: 'Carly Rae Jepsen',
    art: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFOjJvVruYgGVLUi22Rq61obAGW_Nd2C8ikUxVKZboCQ&s=10',
    audioUrl: 'music/call-me-maybe.mp3',
    lyricsUrl: 'lyrics/call-me-maybe.lrc'
  },
   {
    id: 'clarity',
    title: 'Clarity',
    artist: 'Zedd & Foxes',
    art: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtou9FmmYbxA2o3HiwrFmaUyDVbzi_vE4Asr78hNT_o4GOvmw_bGIKjk&s=10',
    audioUrl: 'music/clarity.mp3',
    lyricsUrl: 'lyrics/clarity.lrc'
  },
];
