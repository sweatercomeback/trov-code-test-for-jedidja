using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace AT.GildedRose.Business.Tests
{
	[TestFixture]
    public class InventoryServiceTests
	{
	    private IInventoryService _service;

        [SetUp]
		public void SetupInventory()
		{
            _service = new InventoryMockService();
		}


	    [Test]
	    public void GetAllItems_WhenCalled_ReturnsAllItems()
	    {
	        var target = _service.GetAllItems();

			Assert.Greater(target.Count(), 0);
	    }

		[Test]
	    public void BuyItem_WhenCalled_DecrementsQuantity()
	    {
			//Assemble
	        var items = _service.GetAllItems();
		    var initialQuantity = items.First().Quantity;

			//Act
			_service.BuyItem(items.First());

			Assert.AreEqual(initialQuantity-1, items.First().Quantity);

	    }
        [Test]
        public void BuyItem_WhenNoInventory_DoesNotDecrementQuantity()
        {
            //Assemble
            var items = _service.GetAllItems();
            var initialQuantity = items.First().Quantity;

            //Act
            var item = items.First();
            while (item.Quantity > 0)
            {
                _service.BuyItem(item);
            }
			//Buy One More Time
            _service.BuyItem(item);


            items = _service.GetAllItems();
            Assert.AreEqual(item.Quantity, 0);

        }
    }
}
