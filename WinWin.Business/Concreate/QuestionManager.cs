using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WinWin.Business.Abstract;
using WinWin.DataAccess.Abstract;
using WinWin.DataAccess.Concreate;
using WinWin.Entities;

namespace WinWin.Business.Concreate
{
    public class QuestionManager : IQuestionServices
    {
        private IQuestionRepository _questionRepository;
        public QuestionManager(IQuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }
        public Questions CreateQuestion(Questions questions)
        {
            _questionRepository.CreateQuestion(questions);
            return questions;
        }

        public void DeleteQuestion(int id)
        {
            throw new NotImplementedException();
        }

        public List<Questions> GetAllQuestion()
        {
            return _questionRepository.GetAllQuestion();
        }

        public Questions GetQuestionById(int id)
        {
            return _questionRepository.GetQuestionById(id);
        }

        public Questions UpdateQuestion(Questions questions)
        {
            _questionRepository.UpdateQuestion(questions);
            return questions;
        }
    }
}
