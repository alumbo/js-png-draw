PngDraw = {
    /* PUBLIC VARIABLES */
   w:0,
   h:0,
    
    /* PUBLIC METHODS */
   
   addObj:function(obj) {
       if(obj.z==null) obj.z = this.objList.length;
       this.objList.push(obj);
       this.objList = sortByKey(this.objList, "z");
   },
   addRender:function(renderFunction) {
       this.renderList.push(renderFunction);
   },
    
    /* PRIVATE VARIABLES */
   
    objList:[],
    mx:0,
    my:0,
    renderList:[],
    
    /* PRIVATE METHODS */
   
    init:function() {
        window.onload = proxy(this.start, this);
        document.onmousemove = proxy(this.mousemove, this);
    },
    start:function() {
        this.img = document.createElement("img");
        document.body.appendChild(this.img);
        window.requestAnimFrame(proxy(this.animloop,this));
    },
    
    mousemove:function(e) {
        if(!e&&!event) return;
        this.mx = e?e.pageX:(event.clientX + document.body.scrollLeft);
        this.my = e?e.pageY:(event.clientY + document.body.scrollTop);
    },
    
    render:function() {
        if(!document.body) return;
       /* this.w = Math.max(100,Math.round(window.innerWidth/15));
        this.h = Math.round(this.w/window.innerWidth*window.innerHeight);*/
        this.w = 110;
        this.h = 70;
        for(this.renderI in this.renderList) this.renderList[this.renderI].call();
        this.pngData = "";
        this.matrix = {};
        for (this.objIndex in this.objList) {
            this.obj = this.objList[this.objIndex];
            if(this.obj.visible) {
                this.objX = Math.round((this.w-(this.obj.centerX?this.obj.w:0))*this.obj.rx)+this.obj.offsetX;
                this.objY = Math.round((this.h-(this.obj.centerY?this.obj.h:0))*this.obj.ry)+this.obj.offsetY;
                for(this.pointIndex in this.obj.pointList) {
                    this.point = this.obj.pointList[this.pointIndex];
                    this.pointX = this.objX+Math.round(this.point.x);
                    this.pointY = this.objY+Math.round(this.point.y);
                    this.matrix[this.pointX+","+this.pointY] = this.point;
                }
            }
        }
        for (this.y = 0; this.y < this.h; this.y++) {
            for (this.x = 0; this.x < this.w; this.x++) {
                this.r = 255;
                this.g = 255;
                this.b = 255;
                this.a = 255;
                if(this.matrix[this.x+","+this.y]) {
                    this.point = this.matrix[this.x+","+this.y];
                    this.r = this.point.r;
                    this.g = this.point.g;
                    this.b = this.point.b;
                    this.a = this.point.a;
                }
                this.pngData += String.fromCharCode(this.r, this.g, this.b, this.a);
            }
        }
        if(!this.prevPngData||this.prevPngData!=this.pngData) {
            this.prevPngData = this.pngData;
            this.pngFile = generatePng(this.w, this.h, this.pngData);
            this.base64png = Base64.encode(this.pngFile);
            this.dataUrl = 'data:image/png;base64,' + this.base64png;
            this.img.src = this.dataUrl;
        }
    },
    animloop:function(){
      window.requestAnimFrame(proxy(this.animloop,this));
      this.render();
    }
};

PngDraw.init();