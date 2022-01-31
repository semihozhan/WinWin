using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WinWin.Entities.Concreate;

namespace WinWin.MVC.Areas.Admin.Models
{
    public class UserReadRolesViewModel 
    {
        public User User { get; set; }
        public IList<string> Roles { get; set; }
    }
}
