using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using AT.GildedRose.Business;

namespace AT.GildedRose.ClientAPI.Controllers
{
    public class InventoryController : ApiController
    {
        private IInventoryService _service;

        public InventoryController(IInventoryService service)
        {
            _service = service;
        }
        // GET api/values
        public IEnumerable<IInventoryItem> Get()
        {
            return _service.GetAllItems();
        }

        public string Post(Item item)
        {
            if(_service.BuyItem(item))
            {
                return "Success";
            }
            else
            {
                throw new HttpException("Unable to purchase this item!");
            }

        }

    }
}
