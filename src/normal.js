'use strict'

class Normal {

    constructor(name, sell_in, quality) {
        this.name = name
        this.sell_in = sell_in
        this.quality = quality
    }

    updateQuality() {
        this.sell_in--
            if (this.quality > 0) {
                this.quality--
                    if (this.sell_in < 0) {
                        this.quality--
                    }
            }
    }

}
