export const reactionEmojis = {
  'likes': '☺️',
  'hearts': '😍',
  'sad': '😭',
};

export const actualites = [
  {
    id: '47ld',
    message: 'Bonjour tout le monde !',
    datePublication: Date.now() - 100,
    auteur: {
      nom: 'Lounis',
      avatar: 'https://media-exp1.licdn.com/dms/image/C5603AQGVDj1y1HvUtA/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=bVDf1gklhmmhSVAVuQ8VDLoJpjsU9ffV2pmzP8qBnJY',
    },
    reactions: {
      likes: 4,
      hearts: 5,
      sad: 0,
    },
    commentaires: [
      {
        message: 'Salut à toi !',
        datePublication: Date.now() - 30000,
        auteur: {
          nom: 'Tofik',
          avatar: 'https://www.radioalgerie.dz/news/sites/default/files/styles/282x211/public/field/image/mokh-Louffi.png?itok=JWzn6r6H',
        },
        actualiteId: '47ld',
      },
      {
        message: 'Salut',
        datePublication: Date.now() - 10000,
        auteur: {
          nom: 'Damien',
          avatar: 'https://logos.flamingtext.com/Name-Logos/Damien-design-fluffy-name.png',
        },
        actualiteId: '47ld',
      },
    ],
  },
  {
    id: 'i9pz',
    message: 'Je ne sais plus quoi faire...',
    datePublication: Date.now() - 100000,
    auteur: {
      nom: 'Tofik',
      avatar: 'https://www.radioalgerie.dz/news/sites/default/files/styles/282x211/public/field/image/mokh-Louffi.png?itok=JWzn6r6H',
    },
    reactions: {
      likes: 1,
      hearts: 0,
      sad: 3,
    },
    commentaires: [],
  },
];
