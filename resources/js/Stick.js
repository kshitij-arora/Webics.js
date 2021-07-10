class Stick {
    constructor(_startPoint, _endPoint, _length) {
        this.startPoint = _startPoint;
        this.endPoint = _endPoint;
        this.stiffness = 2;
        this.color = "black";

        if (!_length)
            this.length = this.startPoint.pos.dist(this.endPoint.pos);
        else
            this.length = _length;
        // console.log(_startPoint);
    }

    update() {
        let delX = this.endPoint.pos.x - this.startPoint.pos.x;
        let delY = this.endPoint.pos.y - this.startPoint.pos.y;

        let distance = Math.sqrt(delX * delX + delY * delY);
        let unitCompression = this.stiffness * ((this.length - distance) / distance);

        let offsetx = (delX * unitCompression) * 0.5;
        let offsety = (delY * unitCompression) * 0.5;

        let miu1 = 1 - (this.startPoint.mass / (this.startPoint.mass + this.endPoint.mass));
        let miu2 = 1 - (this.endPoint.mass / (this.startPoint.mass + this.endPoint.mass));

        if (!this.startPoint.pinned) {
            this.startPoint.pos.x = this.startPoint.pos.x - offsetx * miu1;
            this.startPoint.pos.y = this.startPoint.pos.y - offsety * miu1;
        }
        if (!this.endPoint.pinned) {
            this.endPoint.pos.x = this.endPoint.pos.x + offsetx * miu2;
            this.endPoint.pos.y = this.endPoint.pos.y + offsety * miu2;
        }
    }

    render(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.moveTo(this.startPoint.pos.x, this.startPoint.pos.y);
        ctx.lineTo(this.endPoint.pos.x, this.endPoint.pos.y);
        ctx.stroke();
        ctx.closePath();
    }
}