using Imc.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Imc.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("Calcular")]
        public IActionResult Calcular(string pesoAltura)
        {
            decimal peso;
            decimal altura;
            decimal resultadoImc;

            var retornoDeserializacao = JsonConvert.DeserializeObject<PesoAltura>(pesoAltura);

            peso = retornoDeserializacao.Peso;
            altura = retornoDeserializacao.Altura;

            resultadoImc = peso / (altura * altura);
            return Json(resultadoImc);
        }

        public IActionResult Sobre()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
