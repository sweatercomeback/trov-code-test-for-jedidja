/*global define */
define(['knockout'], function(ko) {
    'use strict';

    function getInventoryList(name) {
        $.getJSON('api/inventory', [], function(data) {
            vm.inventoryList(data);
        });
    }

    function buyItem(item) {
        console.log(item);
        var item2 = {};
        item2.Name = item.name;
        item2.Description = item.description;
        item2.Price = item.price;
        item2.Qauntity = item.quantity;

        var data = {
            item: item2
        };
        $.ajax({
            type: "POST",
            url: 'api/inventory',
            contentType: 'application/json',
            data: ko.toJSON(item)
        }).then(function(result) {
            alert(result);
        }).fail(function(error) {
            alert("OOPS!");
        });
        ;
    }

    var vm = {
        inventoryList: ko.observableArray([]),
        buyItem: buyItem
    };

    getInventoryList();

    ko.applyBindings(vm);

    return vm;
});