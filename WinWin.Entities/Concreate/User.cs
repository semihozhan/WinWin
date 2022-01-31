using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WinWin.Entities.Concreate
{
    public class User:IdentityUser<int>
    {
        
        public string Picture { get; set; }


    }
}
