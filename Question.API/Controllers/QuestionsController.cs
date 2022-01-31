using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WinWin.Business.Abstract;
using WinWin.Business.Concreate;
using WinWin.Entities;

namespace WinWin.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private IQuestionServices _questionServices;
        public QuestionsController(IQuestionServices questionServices)
        {
            _questionServices = questionServices;
        }
        [HttpGet]
        public List<Questions> GetAllQuestions()
        {
            return _questionServices.GetAllQuestion();
        }

        [HttpGet("{id}")]
        public Questions GetQuestionById(int id)
        {
            return _questionServices.GetQuestionById(id);
        }

        [HttpPost]
        public Questions Post([FromBody]Questions question)
        {
            return _questionServices.CreateQuestion(question);
        }

        [HttpPut]
        public Questions Put([FromBody] Questions question)
        {
            return _questionServices.UpdateQuestion(question);
        }
    }
}
