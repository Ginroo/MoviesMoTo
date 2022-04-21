using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Entities
{
    public class Genre
    {
        public int id { get; set; }

        [Required(ErrorMessage = "The field with name {0} is required")]
        public string Name { get; set; }
    }
}
