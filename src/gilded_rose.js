function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function normalUpdate(item) {
    item.sell_in--
        if (item.quality > 0) {
            item.quality--
                if (item.sell_in < 0) {
                    item.quality--
                }
        }
}

function agedBrieUpdate(item) {
    item.sell_in--
        if (item.quality < 50) {
            item.quality++
        }
}

function backstageUpdate(item) {
    item.sell_in--
        if (item.quality < 50) {
            item.quality++
                if (item.sell_in < 11) {
                    item.quality++
                }
            if (item.sell_in < 6) {
                item.quality++
            }
        }
    if (item.sell_in < 0) {
        item.quality = 0
    }
}

function update_quality() {

    items.forEach((item) => {
        switch (item.name) {
            case 'Aged Brie':
                agedBrieUpdate(item)
                break;
            case 'Sulfuras, Hand of Ragnaros':
                break;
            case 'Backstage passes to a TAFKAL80ETC concert':
                backstageUpdate(item)
                break;
            default:
                normalUpdate(item)
        }
    })

}
