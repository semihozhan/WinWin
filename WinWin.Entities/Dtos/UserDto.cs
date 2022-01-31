
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WinWin.Entities.Concreate;

namespace WinWin.Entities.Dtos
{
    public class UserDto : DtoGetBase
    {
        public User user { get; set; }
    }
}
