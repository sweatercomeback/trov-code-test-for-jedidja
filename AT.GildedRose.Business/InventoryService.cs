using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AT.GildedRose.Business
{
    


    public interface IInventoryService
    {
        IEnumerable<IInventoryItem> GetAllItems();
        bool BuyItem(IInventoryItem item);
    }


    public class InventoryMockService : IInventoryService
    {
        private IList<IInventoryItem> _inventory;

        public InventoryMockService()
        {
            _inventory = new List<IInventoryItem>();
            _inventory.Add(new Item()
            {
                Description = "Pickaxe made of diamond",
                Name = "Diamond Pickaxe",
                Price = 64,
                Quantity = 4
            });
            _inventory.Add(new Item()
            {
                Description = "Pickaxe made of iron",
                Name = "Iron Pickaxe",
                Price = 32,
                Quantity = 5
            });
        }

        public IEnumerable<IInventoryItem> GetAllItems()
        {
            return _inventory;
        }

        public bool BuyItem(IInventoryItem item)
        {
            var isSuccess = false;

            if (!CanBuyItem(item)) return isSuccess;
            item.Quantity--;
            isSuccess = true;

            return isSuccess;
        }

        private bool CanBuyItem(IInventoryItem item)
        {
            return (item.Quantity > 0);

        }

        
    }
}
