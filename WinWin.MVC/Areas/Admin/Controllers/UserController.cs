using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using NetBlog.Mvc.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using WinWin.Entities.Concreate;
using WinWin.Entities.Dtos;
using WinWin.Entities.Results.ComplexTypes;

namespace WinWin.MVC.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class UserController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IWebHostEnvironment _env;

        public UserController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager=userManager;
            _signInManager = signInManager;
        }
     

        [HttpGet]
        public IActionResult Login()
        {
            return View("UserLogin");
        }

        [HttpPost]
        public async Task<IActionResult> Login(UserLoginDto userLoginDto)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(userLoginDto.Email);
                if (user!=null)
                {
                    var result = await _signInManager.PasswordSignInAsync(user, userLoginDto.Password, userLoginDto.RememberMe,false);
                    if (result.Succeeded)
                    {
                        return RedirectToAction("Index", "Home", new
                        {
                            Area = ""
                        });
                    }
                    else
                    {
                        ModelState.AddModelError("", "Eposta veya şifre hatalı");
                        return View("UserLogin");
                    }
                }
                else
                {
                    ModelState.AddModelError("", "Eposta veya şifre hatalı");
                    return View("UserLogin");
                }
            }
            else
            {
                return View("UserLogin");
            }
            
        }

        [Authorize]
        [HttpGet]

        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index","Home", new {
                Area=""
            });
        }

     
        [HttpGet]
        public ViewResult AccessDenied()
        {
            return View("AccessDenied");
        }

    }
}
