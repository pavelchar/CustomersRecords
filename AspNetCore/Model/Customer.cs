using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace AspNetCoreSqlite
{

    [Table("Customers")]
    public class Customer
    {
        [Key]
        [Required]
        public int id { get; set; }
        [StringLength(50)]
        public String name { get; set; }
        [StringLength(50)]
        public String email { get; set; }
        [StringLength(70)]
        public String address { get; set; }
    }
}