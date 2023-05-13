export default async function handler(req, res) {
   const data = {
      headers : [
         {
            name: 'Categories',
            slug: 'categories',
            icon: '<i class="fa-solid fa-grid-2"></i>',
            children: [
               {
                  name: 'Action',
                  slug: 'action',
                  icon: false,
                  children: []
               },
               {
                  name: 'Adventure',
                  slug: 'adventure',
                  icon: false,
                  children: []
               },
               {
                  name: 'Animation',
                  slug: 'animation',
                  icon: false,
                  children: []
               },
               {
                  name: 'Comedy',
                  slug: 'comedy',
                  icon: false,
                  children: []
               },
               {
                  name: 'Crime',
                  slug: 'crime',
                  icon: false,
                  children: []
               },
               {
                  name: 'Documentary',
                  slug: 'documentary',
                  icon: false,
                  children: []
               },
               {
                  name: 'Drama',
                  slug: 'drama',
                  icon: false,
                  children: []
               },
               {
                  name: 'Family',
                  slug: 'family',
                  icon: false,
                  children: []
               },
               {
                  name: 'Fantasy',
                  slug: 'fantasy',
                  icon: false,
                  children: []
               },
               {
                  name: 'History',
                  slug: 'history',
                  icon: false,
                  children: []
               },
               {
                  name: 'Horror',
                  slug: 'horror',
                  icon: false,
                  children: []
               }
            ]
         },
         {
            name: 'Movies',
            slug: 'movies',
            icon: false,
            children: []
         },
         {
            name: 'Tv Shows',
            slug: 'tv-shows',
            icon: false,
            children: []
         },
      ],
      footers : []
   }
   res.status(200).json(data)
}