using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WinWin.Entities;

namespace WinWin.DataAccess.Abstract
{
    public interface IQuestionRepository
    {
        List<Questions> GetAllQuestion();

        Questions GetQuestionById(int id);

        Questions CreateQuestion(Questions questions);

        Questions UpdateQuestion(Questions questions);

        void DeleteQuestion(int id);
    }
}
