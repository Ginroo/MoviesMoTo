using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Entities;
using MoviesAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    public class GenresController : ControllerBase
    {
        private readonly IRepository _repository;

        public GenresController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Genre>>> Get()
        {
            return await _repository.GetAllGenres();
        }

        [HttpGet("{Id:int}/{param2=Rogin}")]
        public ActionResult<Genre> Get(int id,string param2)
        {
            var genre = _repository.GetGenreById(id);

            if(genre == null)
            {
                return NotFound();
            }

            return genre;
        }

        [HttpPost]
        public ActionResult Post()
        {
            return NoContent();
        }

        [HttpPut]
        public ActionResult Put()
        {
            return NoContent();

        }

        [HttpDelete]
        public ActionResult Delete()
        {
            return NoContent();

        }
    }
}
