
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WinWin.Entities.Dtos;

namespace WinWin.MVC.Areas.Admin.Models
{
    public class UserAddAjavViewModel
    {
        public UserAddDto userAddDto { get; set; }
        public string userAddPartial { get; set; }
        public UserDto userDto { get; set; }
    }
}
