using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WinWin.DataAccess;
using WinWin.Entities.Concreate;

namespace WinWin.Business.Extensions
{
    public static class ServiceCollectionExtensions 
    {
        public static IServiceCollection LoadMyService(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddDbContext<WinWinDbContext>();
            serviceCollection.AddIdentity<User,Role>(options => {
                //password option
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 5;
                options.Password.RequiredUniqueChars = 0;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = false;
                //username and mail
                options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
                options.User.RequireUniqueEmail=true;


            }).AddEntityFrameworkStores<WinWinDbContext>();

            return serviceCollection;
        }
    }
}
