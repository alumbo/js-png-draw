Pong = {
    step:1,
    mode:1,
    init:function() {
        this.bg = create(Obj);
        this.bg.darkness=0;
        PngDraw.addObj(this.bg);
        
        this.step1.create.call(this);
        this.step2.create.call(this);
        
        document.onkeydown = proxy(this.keydown, this);
        document.onkeyup = proxy(this.keyup, this);
        
        PngDraw.addRender(proxy(this.render, this));
    },
    keydown:function() {
        if(this.step==1) this.step1.keydown.call(this, event.keyCode);
        if(this.step==2) this.step2.keydown.call(this, event.keyCode);
    },
    keyup:function() {
        if(this.step==2) this.step2.keyup.call(this, event.keyCode);
    },
    step1: {
        create:function() {
            this.pongTitle = PongLib.getPongTitle();
            this.pongTitle.rx = .5;
            this.pongTitle.ry = .1;
            PngDraw.addObj(this.pongTitle);

            this.selectDisc = PongLib.getSelectDisc();
            this.selectDisc.rx = .3;
            this.selectDisc.ry = .5;
            PngDraw.addObj(this.selectDisc);
            
            this.pong1P = PongLib.getPong1P();
            this.pong1P.rx = .3;
            this.pong1P.ry = .5;
            PngDraw.addObj(this.pong1P);

            this.pong2P = PongLib.getPong2P();
            this.pong2P.rx = .7;
            this.pong2P.ry = .5;
            PngDraw.addObj(this.pong2P);

            this.selectMode = PongLib.getSelectMode();
            this.selectMode.rx = .5;
            this.selectMode.ry = .9;
            PngDraw.addObj(this.selectMode);
        },
        init:function() {
            this.step = 1;
            this.selectMode.visible = true;
            this.selectDisc.visible = true;
            this.pong1P.visible = true;
            this.pong2P.visible = true;
            this.pongTitle.visible = true;
            TweenLite.to(this.selectMode, .3, {ry:.9, ease:Cubic.easeOut});
            TweenLite.to(this.selectDisc, .3, {rx:this.mode==1?.3:.7, ease:Cubic.easeOut});
            TweenLite.to(this.pong1P, .3, {rx:.3, ease:Cubic.easeOut});
            TweenLite.to(this.pong2P, .3, {rx:.7, ease:Cubic.easeOut});
            TweenLite.to(this.pongTitle, .3, {ry:.1, ease:Cubic.easeOut});
            TweenLite.to(this.bg, .3, {darkness:0});
        },
        keydown:function(keycode) {
            //left
            if(event.keyCode==37) {
                TweenLite.to(this.selectDisc, .3, {rx:.3, ease:Cubic.easeOut});
                this.mode = 1;
            }
            //right
            if(event.keyCode==39) {
                TweenLite.to(this.selectDisc, .3, {rx:.7, ease:Cubic.easeOut});
                this.mode = 2;
            }
            //enter
            if(event.keyCode==13) {
                this.step = 0;
                TweenLite.to(this.selectMode, .3, {ry:1.2, ease:Cubic.easeIn});
                TweenLite.to(this.selectDisc, .3, {rx:this.mode==1?-0.2:1.2, ease:Cubic.easeIn});
                TweenLite.to(this.pong1P, .3, {rx:-0.2, ease:Cubic.easeIn});
                TweenLite.to(this.pong2P, .3, {rx:1.2, ease:Cubic.easeIn});
                TweenLite.to(this.pongTitle, .3, {ry:-0.2, ease:Cubic.easeIn});
                TweenLite.to(this.bg, .3, {darkness:90, onComplete:proxy(this.step2.init,this)});
            }
        }
    },
    step2: {
        create: function() {
            this.barP1 = PongLib.getBar();
            this.barP1.visible = false;
            PngDraw.addObj(this.barP1);
            
            this.barP2 = PongLib.getBar();
            this.barP2.visible = false;
            PngDraw.addObj(this.barP2);
            
            this.count1 = PongLib.getCount1();
            this.count1.rx=.5;
            this.count1.ry=.5;
            this.count1.visible = false;
            PngDraw.addObj(this.count1);
            
            this.count2 = PongLib.getCount2();
            this.count2.rx=.5;
            this.count2.ry=.5;
            this.count2.visible = false;
            PngDraw.addObj(this.count2);
            
            this.count3 = PongLib.getCount3();
            this.count3.rx=.5;
            this.count3.ry=.5;
            this.count3.visible = false;
            PngDraw.addObj(this.count3);
            
            this.ball = PongLib.getBall();
            this.ball.visible = false;
            PngDraw.addObj(this.ball);
            
            this.goTxt = PongLib.getGo();
            this.goTxt.rx=.5;
            this.goTxt.visible = false;
            PngDraw.addObj(this.goTxt);
            
            this.pasBar = 0.05;
        },
        init: function() {
            this.step = 2;
            
            this.selectMode.visible = false;
            this.selectDisc.visible = false;
            this.pong1P.visible = false;
            this.pong2P.visible = false;
            this.pongTitle.visible = false;
            
            this.barP1.visible = true;
            this.barP2.visible = true;
            this.barP1.rx=-.2;
            this.barP1.ry=.5;
            this.barP2.rx=1.2;
            this.barP2.ry=.5;
            TweenLite.to(this.barP1, .3, {rx:0.07, ease:Cubic.easeOut});
            TweenLite.to(this.barP2, .3, {rx:0.93, ease:Cubic.easeOut});
            
            this.count1.visible = false;
            this.count2.visible = false;
            this.count3.visible = false;
            this.goTxt.visible = false;
            this.ball.visible = false;
            
            this.explosion(this.count1, 0, 100, null);
            this.explosion(this.count2, 0, 100, null);
            this.explosion(this.count3, 0, 100, null);
            this.explosion(this.goTxt, 0, 50, null);
            
            this.step2.countDown3.call(this);
            //this.step2.countDown0.call(this);
        },
        countDown3:function() {
            this.count3.visible = true;
            this.implosion(this.count3, 1.2, proxy(this.step2.countDown2, this));
        },
        countDown2:function() {
            if(this.step!=2) return;
            this.explosion(this.count3, 1.2, 50, 100, proxy(this.step2.countDown1, this));
            this.count2.visible = true;
            this.implosion(this.count2, 1);
        },
        countDown1:function() {
            if(this.step!=2) return;
            this.count3.visible = false;
            this.explosion(this.count2, 1.2, 50, 100, proxy(this.step2.countDown0, this));
            this.count1.visible = true;
            this.implosion(this.count1, 1);
        },
        countDown0:function() {
            if(this.step!=2) return;
            this.count2.visible = false;
            this.explosion(this.count1, 1.2, 100, 100, proxy(this.step2.go, this));
            this.goTxt.visible = true;
            this.goTxt.ry=.5;
            this.implosion(this.goTxt, 1);
        },
        go:function() {
            if(this.step!=2) return;
            this.count1.visible = false;
            TweenLite.to(this.goTxt, .5, {ry:1.4, ease:"Cubic.easeIn"});
            this.scoreP1 = 0;
            this.scoreP2 = 0;
            this.ball.visible = true;
            this.step2.ballStart.call(this);
        },
    
        ballStart:function() {
            this.ball.rx = .5;
            this.ball.ry = .5;
            this.pasBallX = 0;
            this.pasBallY = .0001*(Math.random()>.5?1:-1);
            TweenLite.to(this, .7, {pasBallX:.018*(Math.random()>.5?1:-1), ease:Cubic.easeIn});
        },
        
        checkColision:function(player) {
            var bar = player==1?this.barP1:this.barP2;
            var distance = this.ball.ry-bar.ry;
            if(Math.abs(distance)>.12) {
                if(player==1) this.scoreP2++;
                if(player==2) this.scoreP1++;
                this.step2.ballStart.call(this);
            }
            else {
               this.pasBallY = distance*.15+(Math.abs(this.pasBallX)*((distance>0)?(1+distance):-(1+distance)))*distance;
               if(this.upPressed&&player==1&&bar.ry!=0) this.pasBallY *= 1.5;
               if(this.downPressed&&!this.upPressed&&player==1&&bar.ry!=1) this.pasBallY *= -1.5;
            }
        },
        keydown: function(keycode) {
            //up
            if(keycode==38) {
                this.upPressed = true;
            }
            //down
            if(keycode==40) {
                this.downPressed = true;
            }
            //escap
            if(keycode==27) {
                this.barP1.visible = false;
                this.barP2.visible = false;
                this.count1.visible = false;
                this.count2.visible = false;
                this.count3.visible = false;
                this.goTxt.visible = false;
                this.ball.visible = false;
                proxy(this.step1.init, this)();
            }
        },
        keyup: function(keycode) {
            //up
            if(keycode==38) {
                this.upPressed = false;
            }
            //down
            if(keycode==40) {
                this.downPressed = false;
            }
        }
    },
    
    explosion:function(obj, duration, range, bottom, callback) {
        var pointI, point;
        for(pointI in obj.pointList) {
            point = obj.pointList[pointI];
            if(point.ox==undefined) point.ox = point.x;
            if(point.oy==undefined) point.oy = point.y;
            var angleX = Math.random()*4;
            var cosX = Math.cos(angleX);
            var angleY = Math.random()*4;
            var cosY = Math.cos(angleY)-0.5;
            if(Math.abs(cosX)<.8&&Math.abs(cosY)<.8) {
                if(Math.random()>.5) {
                    cosX = (cosX>0?1:-1)*(Math.random()*0.5+1);
                }
                else {
                    cosY = (cosY>0?1:-1)*(Math.random()*0.5+1);
                }
            }
            var randY = point.oy+range*cosY;
            var randX = point.ox+range*cosX;
            if(duration==0) {
                point.x = randX;
                point.y = randY;
            }
            else {
                TweenLite.to(point, duration, {x:randX, y:randY, ease:"Cubic.easeOut", onComplete:callback});
                if(bottom!=null) TweenLite.to(point, duration/2, { y:bottom, delay:duration/6, ease:"Cubic.easeIn"});
            }
            callback = null;
        }
    },
    
    implosion:function(obj, duration, callback) {
        var pointI, point;
        for(pointI in obj.pointList) {
            point = obj.pointList[pointI];
            TweenLite.to(point, duration, {x:point.ox, y:point.oy, ease:Cubic.easeOut, onComplete:callback});
            callback = null;
        }
    },
    
    render:function() {
        
        if(this.step==2) {
            if(this.upPressed) {
                this.barP1.ry-=this.pasBar;
            }
            else {
                if(this.downPressed) this.barP1.ry+=this.pasBar;
            }
            if(this.upPressed||this.downPressed) {
                this.barP1.ry = Math.max(0, this.barP1.ry);
                this.barP1.ry = Math.min(1, this.barP1.ry);
            }
            if(this.ball.visible)  {
                this.pasBallX*=1.0005;
                this.ball.rx+=this.pasBallX;
                this.ball.ry+=this.pasBallY;
                if(this.ball.rx<this.barP1.rx) this.step2.checkColision.call(this,1);
                if(this.ball.rx>this.barP2.rx) this.step2.checkColision.call(this,2);
                if(this.ball.rx<this.barP1.rx||this.ball.rx>this.barP2.rx) {
                    this.ball.rx = Math.max(this.barP1.rx,Math.min(this.barP2.rx, this.ball.rx));
                    this.pasBallX *= -1;
                }
                if(this.ball.ry<0||this.ball.ry>1) {
                    this.ball.ry = Math.max(0,Math.min(1, this.ball.ry));
                    this.pasBallY *= -1;
                }
                if(this.mode==1) {
                    var factor = 7;
                    if(this.pasBallX<0) factor = 150*this.ball.rx;
                    this.barP2.ry += (this.ball.ry-this.barP2.ry)/factor;
                }
            }
            if(this.mode==2) this.barP2.ry = PngDraw.my/window.innerHeight;
        }
        
        this.bg.clear();
        for (this.y = 0; this.y < PngDraw.h; this.y++) {
            for (this.x = 0; this.x < PngDraw.w; this.x++) {
                this.ry = this.y/PngDraw.h;
                this.point = create(Point);
                this.point.init(this.x, this.y, 31+this.ry*20-this.bg.darkness/3, 118+this.ry*30-this.bg.darkness, 175+this.ry*40-this.bg.darkness);
                this.bg.addPoint(this.point);
            }
        }
    }
}
Pong.init();