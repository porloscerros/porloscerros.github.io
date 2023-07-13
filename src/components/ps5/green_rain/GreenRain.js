let p5;
let canvasDiv = document.getElementById('container');
let width = canvasDiv.offsetWidth;
let height = canvasDiv.offsetHeight;
export function main(_p5) {
    p5 = _p5
    let streams = [];
    let fadeInterval = 1.6;
    let symbolSize = 16;

    // // NOTE: Set up is here
    p5.setup = () => {
        let sketchCanvas = p5.createCanvas(
            width,
            height
        );
        sketchCanvas.parent("container");
        p5.background(0);

        let x = 0;
        let stream;
        // console.log(p5.width / symbolSize)
        for (var i = 0; i <= p5.width / symbolSize; i++) {
            stream = new Stream();
            stream.generateSymbols(x, p5.random(-2000, 0));
            streams.push(stream);
            x += symbolSize
        }

        p5.textFont('Consolas');
        p5.textSize(symbolSize);
    }
    // // NOTE: Draw is here
    p5.draw = () => {
        p5.background(0, 150);
        streams.forEach(function(stream) {
            stream.render();
        });
    }


    function Symbol(x, y, speed, first, opacity) {
        this.x = x;
        this.y = y;
        this.value;

        this.speed = speed;
        this.first = first;
        this.opacity = opacity;

        this.switchInterval = p5.round(p5.random(2, 25));

        this.setToRandomSymbol = function() {
            var charType = p5.round(p5.random(0, 5));
            if (p5.frameCount % this.switchInterval == 0) {
                if (charType > 1) {
                    // set it to Katakana
                    this.value = String.fromCharCode(
                        0x30A0 + p5.floor(p5.random(0, 97))
                    );
                } else {
                    // set it to numeric
                    this.value = p5.floor(p5.random(0,10));
                }
            }
        }

        this.rain = function() {
            this.y = (this.y >= p5.height) ? 0 : this.y += this.speed;
        }

    }

    function Stream() {
        this.symbols = [];
        this.totalSymbols = p5.round(p5.random(5, 35));
        this.speed = p5.random(5, 22);

        this.generateSymbols = function(x, y) {
            var opacity = 255;
            var first = p5.round(p5.random(0, 4)) == 1;
            let symbol;
            for (var i =0; i <= this.totalSymbols; i++) {
                symbol = new Symbol(
                    x,
                    y,
                    this.speed,
                    first,
                    opacity
                );
                symbol.setToRandomSymbol();
                this.symbols.push(symbol);
                opacity -= (255 / this.totalSymbols) / fadeInterval;
                y -= symbolSize;
                first = false;
            }
        }

        this.render = function() {
            this.symbols.forEach(function(symbol) {
                // console.log(symbol.x)
                if (symbol.first) {
                    p5.fill(140, 255, 170, symbol.opacity);
                } else {
                    // if ((symbol.x > 100 ||symbol.x < 200) && (symbol.y > 100 || symbol.y < 200)) {
                    if ((symbol.x > 100) && (symbol.y < 200)) {
                        p5.fill(255, 0, 0, symbol.opacity);
                    } else {
                        p5.fill(0, 255, 70, symbol.opacity);
                    }
                }
                p5.text(symbol.value, symbol.x, symbol.y);
                symbol.rain();
                symbol.setToRandomSymbol();
            });
        }
    }
}

