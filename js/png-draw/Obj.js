Obj = {
    /* PUBLIC VARIABLES */
    pointList:[],
    x:0,
    y:0,
    z:null,
    rx:0,
    ry:0,
    centerX:true,
    centerY:true,
    a:1,
    w:0,
    h:0,
    offsetX:0,
    offsetY:0,
    visible:true,
    
    /* PUBLIC METHODS */
    init:function(rx,ry,a) {
        this.rx = rx;
        this.ry = ry;
        if(a!=undefined) this.a = a;
    },
    
    addPoint:function(point) {
        point.a = this.a*point.a;
        this.xMax = Math.max(this.xMax, point.x);
        this.xMin = Math.min(this.xMin, point.x);
        this.yMax = Math.max(this.yMax, point.y);
        this.yMin = Math.min(this.yMin, point.y);
        this.w = this.xMax-this.xMin;
        this.h = this.yMax-this.yMin;
        this.pointList.push(point);
    },
    
    clear:function() {
        while(this.pointList.length) {
            delete this.pointList[0];
            this.pointList.splice(0,1);
        }
    },
    
    fillCoords:function(coords) {
        coords = coords.split(" ");
        var coordI, coord, point;
        for(coordI in coords) {
            coord = coords[coordI].split(",");
            point = create(Point);
            point.init(Number(coord[0]), Number(coord[1]), Number(coord[2]), Number(coord[3]), Number(coord[4]), Number(coord[5]?coord[5]:255));
            this.addPoint(point);
        }
    },
    
    fillCoordsSingleColor:function(r, g, b, a, coords) {
        coords = coords.split(" ");
        var coordI, coord, point;
        for(coordI in coords) {
            coord = coords[coordI].split(",");
            point = create(Point);
            point.init(Number(coord[0]), Number(coord[1]), r, g, b, a);
            this.addPoint(point);
        }
    },
   
    /* PRIVATE VARIABLES */
   xMax:0,
   xMin:0,
   yMin:0,
   yMax:0,
   
    /* PRIVATE METHODS */
}
