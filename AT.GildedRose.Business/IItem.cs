namespace AT.GildedRose.Business
{
    public interface IInventoryItem : IItem
    {
        int Quantity { get; set; }
        int Price { get; set; }
    }

    public interface IItem
    {
        string Name { get; set; }
        string Description { get; set; }
    }
}