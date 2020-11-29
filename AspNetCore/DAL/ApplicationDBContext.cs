using Microsoft.EntityFrameworkCore;
using AspNetCoreSqlite;

namespace AspNetCore.DAL
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        { }
        public DbSet<Customer> Customers { get; set; }
        
    }
}