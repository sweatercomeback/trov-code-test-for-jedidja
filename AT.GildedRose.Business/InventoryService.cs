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
        void BuyItem(IInventoryItem item);
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

        public void BuyItem(IInventoryItem item)
        {
            if (item.Quantity > 0)
            {
                item.Quantity--;
            }
        }
    }
}
