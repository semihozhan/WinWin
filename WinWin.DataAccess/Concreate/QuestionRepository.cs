using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WinWin.DataAccess.Abstract;
using WinWin.Entities;

namespace WinWin.DataAccess.Concreate
{
    public class QuestionRepository : IQuestionRepository
    {
        public Questions CreateQuestion(Questions questions)
        {
            using (var questionDbContext = new WinWinDbContext())
            {
                 questionDbContext.Questions.Add(questions);
                 questionDbContext.SaveChanges();
                 return questions;
            }
        }

        public void DeleteQuestion(int id)
        {
            throw new NotImplementedException();
        }

        public List<Questions> GetAllQuestion()
        {
            using (var questionDbContext = new WinWinDbContext())
            {
                return questionDbContext.Questions.ToList();
            }
        }

        public Questions GetQuestionById(int id)
        {
            using (var questionDbContext = new WinWinDbContext())
            {
                return questionDbContext.Questions.Find(id);
            }
        }

        public Questions UpdateQuestion(Questions questions)
        {
            using (var questionDbContext = new WinWinDbContext())
            {
                questionDbContext.Questions.Update(questions);
                questionDbContext.SaveChanges();
                return questions;
            }
        }
    }
}
