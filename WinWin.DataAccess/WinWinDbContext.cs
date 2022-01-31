using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using WinWin.Entities;
using WinWin.Entities.Concreate;

namespace WinWin.DataAccess
{
    public class WinWinDbContext : IdentityDbContext<User, Role, int, UserClaim, UserRole, UserLogin, RoleClaim, UserToken>
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=localhost; Database=WinWin; uid=sa ; pwd=S3mih.12");
        }

        public DbSet<Questions> Questions { get; set; }
    }
}
