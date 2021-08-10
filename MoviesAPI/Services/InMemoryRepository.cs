using MoviesAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Services
{
    public class InMemoryRepository : IRepository
    {
        private List<Genre> _genres;
        public InMemoryRepository()
        {
            _genres = new List<Genre>()
            {
                new Genre(){id = 1, Name = "Comedy" },
                new Genre(){id = 1, Name = "Action" }

            };
        }

        public List<Genre> GetAllGenres()
        {
            return _genres;
        }
    }
}
