describe("Given the Gilded Rose update quality system", function() {


    it("Then +5 Dexterity Vest will have sell in of 9, quality of 19", function() {
        items = []
        items.push(new Item('+5 Dexterity Vest', 10, 20));
        update_quality();
        expect(items[0].sell_in).toEqual(9)
        expect(items[0].quality).toEqual(19)
    });

    it("Then Aged Brie will have sell in of 1, quality of 1", function() {
        items = []
        items.push(new Item('Aged Brie', 2, 0));
        update_quality();
        expect(items[0].sell_in).toEqual(1)
        expect(items[0].quality).toEqual(1)
    });

    it("Then Elixir of the Mongoose will have sell in of 4, quality of 6", function() {
        items = []
        items.push(new Item('Elixir of the Mongoose', 5, 7));
        update_quality();
        expect(items[0].sell_in).toEqual(4)
        expect(items[0].quality).toEqual(6)
    });

    it("Then Sulfuras, Hand of Ragnaros will have sell in of 0, quality of 80", function() {
        items = []
        items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
        update_quality();
        expect(items[0].sell_in).toEqual(0)
        expect(items[0].quality).toEqual(80)
    });

    it("Then Backstage passes to a TAFKAL80ETC concert will have sell in of 14, quality of 21", function() {
        items = []
        items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
        update_quality();
        expect(items[0].sell_in).toEqual(14)
        expect(items[0].quality).toEqual(21)
    });

    // it("Then Conjured Mana Cake will have sell in of 2, quality of 4", function() {
    //     expect(items[0].sell_in).toEqual(2)
    //     expect(items[0].quality).toEqual(4)
    // });

    it("Then an item with quality 10 should decrease to 8 if sell is less than 0", function() {
        items = []
        var item = new Item('test_item', 0, 10)
        items.push(item)
        update_quality()
        expect(items[0].quality).toEqual(8)
    });

    it("Then an item with quality 0 should stay as 0 even when sell in days decreases", function() {
        items = []
        var item = new Item('test_quality_item', 5, 0)
        items.push(item)
        update_quality()
        expect(items[0].quality).toEqual(0)
    });

    it("Then the quality of an item will never go higher than 50", function() {
        items = []
        var item = new Item('Aged Brie', 20, 50)
        items.push(item)
        update_quality()
        expect(items[0].quality).toEqual(50)
    });

    it("Given sell in days of 10, Then Backstage passes to a TAFKAL80ETC concert will have sell in of 9, quality of 27", function() {
        items = []
        var item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 25)
        items.push(item)
        update_quality()
        expect(items[0].sell_in).toEqual(9)
        expect(items[0].quality).toEqual(27)
    });

    it("Given sell in days of 5, Then Backstage passes to a TAFKAL80ETC concert will have sell in of 4, quality of 33", function() {
        items = []
        var item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 30)
        items.push(item)
        update_quality()
        expect(items[0].sell_in).toEqual(4)
        expect(items[0].quality).toEqual(33)
    });

    it("Given sell in days of 0, Then Backstage passes to a TAFKAL80ETC concert will have sell in of -1, quality of 0", function() {
        items = []
        var item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)
        items.push(item)
        update_quality()
        expect(items[0].sell_in).toEqual(-1)
        expect(items[0].quality).toEqual(0)
    });

    it("Then +5 Dexterity Vest will have sell in of 9, quality of 19", function() {
        var normal = new Normal('+5 Dexterity Vest', 10, 20)
        normal.updateQuality();

        var brie = new Brie('Aged Brie', 10, 10)
        var items = [normal, brie]

        items.forEach((item) {
            item.updateQuality();
        })

        expect(normal.sell_in).toEqual(9)
        expect(normal.quality).toEqual(19)
    });

});

// console.log('=========================')
// console.log('items.length: ' + items.length);
// console.log('items[0].name=' + items[0].name)
// console.log('items[0].sell_in=' + items[0].sell_in)
// console.log('items[0].quality=' + items[0].quality)
