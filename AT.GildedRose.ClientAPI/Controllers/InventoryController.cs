using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AT.GildedRose.Business;

namespace AT.GildedRose.ClientAPI.Controllers
{
    public class InventoryController : ApiController
    {
        private IInventoryService _service;

        public InventoryController()
        {
        }

        public InventoryController(IInventoryService service)
        {
            _service = service;
        }
        // GET api/values
        public IEnumerable<IInventoryItem> Get()
        {
            return _service.GetAllItems();
        }

    }
}
