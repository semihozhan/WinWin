
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WinWin.Entities.Dtos;

namespace NetBlog.Mvc.Areas.Admin.Models
{
    public class UserUpdateAjavViewModel
    {
        public UserUpdateDto userUpdateDto { get; set; }
        public string userUpdatePartial { get; set; }
        public UserDto userDto { get; set; }
    }
}
