PongLib = {
    /* STEP 1 */
    getPongTitle:function() {
        var pongTitle = create(Obj);
        pongTitle.fillCoordsSingleColor(255, 255, 255, 255, "0,0 1,0 2,0 3,0 0,1 4,1 0,2 4,2 8,2 9,2 10,2 14,2 15,2 16,2 17,2 22,2 23,2 24,2 25,2 0,3 4,3 7,3 11,3 14,3 18,3 21,3 25,3 0,4 1,4 2,4 3,4 7,4 11,4 14,4 18,4 21,4 25,4 0,5 7,5 11,5 14,5 18,5 21,5 25,5 0,6 7,6 11,6 14,6 18,6 21,6 25,6 0,7 8,7 9,7 10,7 14,7 18,7 22,7 23,7 24,7 25,7 25,8 22,9 23,9 24,9");
        return pongTitle;
    },
    getPong1P:function() {
        var pong1P = create(Obj);
        pong1P.fillCoordsSingleColor(255, 255, 255, 255, "4,0 5,0 6,0 7,0 8,0 9,0 10,0 11,0 3,1 12,1 2,2 13,2 1,3 14,3 0,4 4,4 9,4 10,4 11,4 12,4 15,4 0,5 2,5 3,5 4,5 9,5 13,5 15,5 0,6 4,6 9,6 13,6 15,6 0,7 4,7 9,7 13,7 15,7 0,8 4,8 9,8 10,8 11,8 12,8 15,8 0,9 4,9 9,9 15,9 0,10 4,10 9,10 15,10 0,11 2,11 3,11 4,11 5,11 6,11 9,11 15,11 1,12 14,12 2,13 13,13 3,14 12,14 4,15 5,15 6,15 7,15 8,15 9,15 10,15 11,15");
        return pong1P;
    },
    getPong2P:function() {
        pong2P = create(Obj);
        pong2P.fillCoordsSingleColor(255, 255, 255, 255, "4,0 5,0 6,0 7,0 8,0 9,0 10,0 11,0 3,1 12,1 2,2 13,2 1,3 14,3 0,4 3,4 4,4 5,4 9,4 10,4 11,4 12,4 15,4 0,5 2,5 6,5 9,5 13,5 15,5 0,6 6,6 9,6 13,6 15,6 0,7 5,7 9,7 13,7 15,7 0,8 4,8 9,8 10,8 11,8 12,8 15,8 0,9 3,9 9,9 15,9 0,10 2,10 9,10 15,10 0,11 2,11 3,11 4,11 5,11 6,11 9,11 15,11 1,12 14,12 2,13 13,13 3,14 12,14 4,15 5,15 6,15 7,15 8,15 9,15 10,15 11,15");
        return pong2P;
    },
    getSelectDisc:function() {
        var selectDisc = create(Obj);
        selectDisc.fillCoords("4,0,226,75,62 5,0,226,75,62 6,0,226,75,62 7,0,226,75,62 8,0,226,75,62 9,0,226,75,62 10,0,226,75,62 11,0,226,75,62 3,1,221,73,64 4,1,221,73,64 5,1,221,73,64 6,1,221,73,64 7,1,221,73,64 8,1,221,73,64 9,1,221,73,64 10,1,221,73,64 11,1,221,73,64 12,1,221,73,64 2,2,214,71,66 3,2,214,71,66 4,2,214,71,66 5,2,214,71,66 6,2,214,71,66 7,2,214,71,66 8,2,214,71,66 9,2,214,71,66 10,2,214,71,66 11,2,214,71,66 12,2,214,71,66 13,2,214,71,66 1,3,206,68,69 2,3,206,68,69 3,3,206,68,69 4,3,206,68,69 5,3,206,68,69 6,3,206,68,69 7,3,206,68,69 8,3,206,68,69 9,3,206,68,69 10,3,206,68,69 11,3,206,68,69 12,3,206,68,69 13,3,206,68,69 14,3,206,68,69 0,4,198,65,72 1,4,198,65,72 2,4,198,65,72 3,4,198,65,72 4,4,198,65,72 5,4,198,65,72 6,4,198,65,72 7,4,198,65,72 8,4,198,65,72 9,4,198,65,72 10,4,198,65,72 11,4,198,65,72 12,4,198,65,72 13,4,198,65,72 14,4,198,65,72 15,4,198,65,72 0,5,189,63,76 1,5,189,63,76 2,5,189,63,76 3,5,189,63,76 4,5,189,63,76 5,5,189,63,76 6,5,189,63,76 7,5,189,63,76 8,5,189,63,76 9,5,189,63,76 10,5,189,63,76 11,5,189,63,76 12,5,189,63,76 13,5,189,63,76 14,5,189,63,76 15,5,189,63,76 0,6,179,60,79 1,6,179,60,79 2,6,179,60,79 3,6,179,60,79 4,6,179,60,79 5,6,179,60,79 6,6,179,60,79 7,6,179,60,79 8,6,179,60,79 9,6,179,60,79 10,6,179,60,79 11,6,179,60,79 12,6,179,60,79 13,6,179,60,79 14,6,179,60,79 15,6,179,60,79 0,7,170,56,83 1,7,170,56,83 2,7,170,56,83 3,7,170,56,83 4,7,170,56,83 5,7,170,56,83 6,7,170,56,83 7,7,170,56,83 8,7,170,56,83 9,7,170,56,83 10,7,170,56,83 11,7,170,56,83 12,7,170,56,83 13,7,170,56,83 14,7,170,56,83 15,7,170,56,83 0,8,160,53,86 1,8,160,53,86 2,8,160,53,86 3,8,160,53,86 4,8,160,53,86 5,8,160,53,86 6,8,160,53,86 7,8,160,53,86 8,8,160,53,86 9,8,160,53,86 10,8,160,53,86 11,8,160,53,86 12,8,160,53,86 13,8,160,53,86 14,8,160,53,86 15,8,160,53,86 0,9,150,50,90 1,9,150,50,90 2,9,150,50,90 3,9,150,50,90 4,9,150,50,90 5,9,150,50,90 6,9,150,50,90 7,9,150,50,90 8,9,150,50,90 9,9,150,50,90 10,9,150,50,90 11,9,150,50,90 12,9,150,50,90 13,9,150,50,90 14,9,150,50,90 15,9,150,50,90 0,10,140,47,94 1,10,140,47,94 2,10,140,47,94 3,10,140,47,94 4,10,140,47,94 5,10,140,47,94 6,10,140,47,94 7,10,140,47,94 8,10,140,47,94 9,10,140,47,94 10,10,140,47,94 11,10,140,47,94 12,10,140,47,94 13,10,140,47,94 14,10,140,47,94 15,10,140,47,94 0,11,131,44,97 1,11,131,44,97 2,11,131,44,97 3,11,131,44,97 4,11,131,44,97 5,11,131,44,97 6,11,131,44,97 7,11,131,44,97 8,11,131,44,97 9,11,131,44,97 10,11,131,44,97 11,11,131,44,97 12,11,131,44,97 13,11,131,44,97 14,11,131,44,97 15,11,131,44,97 1,12,122,41,101 2,12,122,41,101 3,12,122,41,101 4,12,122,41,101 5,12,122,41,101 6,12,122,41,101 7,12,122,41,101 8,12,122,41,101 9,12,122,41,101 10,12,122,41,101 11,12,122,41,101 12,12,122,41,101 13,12,122,41,101 14,12,122,41,101 2,13,114,38,104 3,13,114,38,104 4,13,114,38,104 5,13,114,38,104 6,13,114,38,104 7,13,114,38,104 8,13,114,38,104 9,13,114,38,104 10,13,114,38,104 11,13,114,38,104 12,13,114,38,104 13,13,114,38,104 3,14,106,36,107 4,14,106,36,107 5,14,106,36,107 6,14,106,36,107 7,14,106,36,107 8,14,106,36,107 9,14,106,36,107 10,14,106,36,107 11,14,106,36,107 12,14,106,36,107 4,15,99,34,109 5,15,99,34,109 6,15,99,34,109 7,15,99,34,109 8,15,99,34,109 9,15,99,34,109 10,15,99,34,109 11,15,99,34,109");
        return selectDisc;
    },
    getSelectMode:function() {
        var selectMode = create(Obj);
        selectMode.fillCoordsSingleColor(208, 225, 242, 255, "12,0 52,0 12,1 52,1 12,2 27,2 52,2 1,3 2,3 3,3 7,3 8,3 12,3 16,3 17,3 22,3 23,3 24,3 26,3 27,3 28,3 29,3 34,3 35,3 36,3 38,3 39,3 44,3 45,3 50,3 51,3 52,3 56,3 57,3 0,4 6,4 9,4 12,4 15,4 18,4 21,4 27,4 34,4 37,4 40,4 43,4 46,4 49,4 52,4 55,4 58,4 1,5 2,5 6,5 7,5 8,5 9,5 12,5 15,5 16,5 17,5 18,5 21,5 27,5 34,5 37,5 40,5 43,5 46,5 49,5 52,5 55,5 56,5 57,5 58,5 3,6 6,6 12,6 15,6 21,6 27,6 34,6 37,6 40,6 43,6 46,6 49,6 52,6 55,6 0,7 1,7 2,7 7,7 8,7 9,7 12,7 16,7 17,7 18,7 22,7 23,7 24,7 28,7 29,7 34,7 37,7 40,7 44,7 45,7 50,7 51,7 52,7 56,7 57,7 58,7");
        return selectMode;
    },
    /* STEP 2 */
    getBar:function() {
        var bar = create(Obj);
        bar.fillCoordsSingleColor(255, 255, 255, 255, "0,0 0,1 0,2 0,3 0,4 0,5 0,6 0,7 0,8 0,9 0,10 0,11 0,12 0,13 0,14 1,0 1,1 1,2 1,3 1,4 1,5 1,6 1,7 1,8 1,9 1,10 1,11 1,12 1,13 1,14");
        return bar;
    },
    getCount1:function() {
        var count = create(Obj);
        count.fillCoords("6,0,99,34,109 7,0,99,34,109 5,1,99,34,109 6,1,99,34,109 7,1,99,34,109 3,2,99,34,109 4,2,99,34,109 5,2,99,34,109 6,2,99,34,109 7,2,99,34,109 1,3,103,35,107 2,3,103,35,107 3,3,103,35,107 4,3,103,35,107 5,3,103,35,107 6,3,103,35,107 7,3,103,35,107 1,4,109,37,105 2,4,109,37,105 3,4,109,37,105 4,4,109,37,105 5,4,109,37,105 6,4,109,37,105 7,4,109,37,105 4,5,115,39,103 5,5,115,39,103 6,5,115,39,103 7,5,115,39,103 4,6,123,42,100 5,6,123,42,100 6,6,123,42,100 7,6,123,42,100 4,7,131,44,97 5,7,131,44,97 6,7,131,44,97 7,7,131,44,97 4,8,140,47,94 5,8,140,47,94 6,8,140,47,94 7,8,140,47,94 4,9,149,50,91 5,9,149,50,91 6,9,149,50,91 7,9,149,50,91 4,10,158,53,87 5,10,158,53,87 6,10,158,53,87 7,10,158,53,87 4,11,167,56,84 5,11,167,56,84 6,11,167,56,84 7,11,167,56,84 4,12,176,59,80 5,12,176,59,80 6,12,176,59,80 7,12,176,59,80 4,13,185,62,77 5,13,185,62,77 6,13,185,62,77 7,13,185,62,77 4,14,194,65,74 5,14,194,65,74 6,14,194,65,74 7,14,194,65,74 4,15,202,67,71 5,15,202,67,71 6,15,202,67,71 7,15,202,67,71 4,16,210,70,68 5,16,210,70,68 6,16,210,70,68 7,16,210,70,68");
        return count;
    },
    getCount2:function() {
        var count = create(Obj);
        count.fillCoords("3,0,99,34,109 4,0,99,34,109 5,0,99,34,109 6,0,99,34,109 7,0,99,34,109 2,1,99,34,109 3,1,99,34,109 4,1,99,34,109 5,1,99,34,109 6,1,99,34,109 7,1,99,34,109 8,1,99,34,109 1,2,99,34,109 2,2,99,34,109 3,2,99,34,109 4,2,99,34,109 5,2,99,34,109 6,2,99,34,109 7,2,99,34,109 8,2,99,34,109 9,2,99,34,109 1,3,103,35,107 2,3,103,35,107 3,3,103,35,107 6,3,103,35,107 7,3,103,35,107 8,3,103,35,107 9,3,103,35,107 1,4,109,37,105 2,4,109,37,105 3,4,109,37,105 6,4,109,37,105 7,4,109,37,105 8,4,109,37,105 9,4,109,37,105 1,5,115,39,103 2,5,115,39,103 3,5,115,39,103 6,5,115,39,103 7,5,115,39,103 8,5,115,39,103 9,5,115,39,103 6,6,123,42,100 7,6,123,42,100 8,6,123,42,100 9,6,123,42,100 5,7,131,44,97 6,7,131,44,97 7,7,131,44,97 8,7,131,44,97 4,8,140,47,94 5,8,140,47,94 6,8,140,47,94 7,8,140,47,94 8,8,140,47,94 4,9,149,50,91 5,9,149,50,91 6,9,149,50,91 7,9,149,50,91 3,10,158,53,87 4,10,158,53,87 5,10,158,53,87 6,10,158,53,87 7,10,158,53,87 3,11,167,56,84 4,11,167,56,84 5,11,167,56,84 6,11,167,56,84 2,12,176,59,80 3,12,176,59,80 4,12,176,59,80 5,12,176,59,80 2,13,185,62,77 3,13,185,62,77 4,13,185,62,77 5,13,185,62,77 1,14,194,65,74 2,14,194,65,74 3,14,194,65,74 4,14,194,65,74 5,14,194,65,74 6,14,194,65,74 7,14,194,65,74 8,14,194,65,74 9,14,194,65,74 1,15,202,67,71 2,15,202,67,71 3,15,202,67,71 4,15,202,67,71 5,15,202,67,71 6,15,202,67,71 7,15,202,67,71 8,15,202,67,71 9,15,202,67,71 1,16,210,70,68 2,16,210,70,68 3,16,210,70,68 4,16,210,70,68 5,16,210,70,68 6,16,210,70,68 7,16,210,70,68 8,16,210,70,68 9,16,210,70,68");
        return count;
    },
    getCount3:function() {
        var count = create(Obj);
        count.fillCoords("2,0,99,34,109 3,0,99,34,109 4,0,99,34,109 5,0,99,34,109 6,0,99,34,109 7,0,99,34,109 0,1,99,34,109 1,1,99,34,109 2,1,99,34,109 3,1,99,34,109 4,1,99,34,109 5,1,99,34,109 6,1,99,34,109 7,1,99,34,109 8,1,99,34,109 0,2,99,34,109 1,2,99,34,109 2,2,99,34,109 3,2,99,34,109 4,2,99,34,109 5,2,99,34,109 6,2,99,34,109 7,2,99,34,109 8,2,99,34,109 9,2,99,34,109 0,3,103,35,107 1,3,103,35,107 2,3,103,35,107 3,3,103,35,107 6,3,103,35,107 7,3,103,35,107 8,3,103,35,107 9,3,103,35,107 0,4,109,37,105 1,4,109,37,105 2,4,109,37,105 3,4,109,37,105 6,4,109,37,105 7,4,109,37,105 8,4,109,37,105 9,4,109,37,105 6,5,115,39,103 7,5,115,39,103 8,5,115,39,103 9,5,115,39,103 3,6,123,42,100 4,6,123,42,100 5,6,123,42,100 6,6,123,42,100 7,6,123,42,100 8,6,123,42,100 9,6,123,42,100 3,7,131,44,97 4,7,131,44,97 5,7,131,44,97 6,7,131,44,97 7,7,131,44,97 3,8,140,47,94 4,8,140,47,94 5,8,140,47,94 6,8,140,47,94 7,8,140,47,94 8,8,140,47,94 9,8,140,47,94 6,9,149,50,91 7,9,149,50,91 8,9,149,50,91 9,9,149,50,91 0,10,158,53,87 1,10,158,53,87 2,10,158,53,87 3,10,158,53,87 6,10,158,53,87 7,10,158,53,87 8,10,158,53,87 9,10,158,53,87 0,11,167,56,84 1,11,167,56,84 2,11,167,56,84 3,11,167,56,84 6,11,167,56,84 7,11,167,56,84 8,11,167,56,84 9,11,167,56,84 0,12,176,59,80 1,12,176,59,80 2,12,176,59,80 3,12,176,59,80 6,12,176,59,80 7,12,176,59,80 8,12,176,59,80 9,12,176,59,80 0,13,185,62,77 1,13,185,62,77 2,13,185,62,77 3,13,185,62,77 6,13,185,62,77 7,13,185,62,77 8,13,185,62,77 9,13,185,62,77 0,14,194,65,74 1,14,194,65,74 2,14,194,65,74 3,14,194,65,74 4,14,194,65,74 5,14,194,65,74 6,14,194,65,74 7,14,194,65,74 8,14,194,65,74 9,14,194,65,74 1,15,202,67,71 2,15,202,67,71 3,15,202,67,71 4,15,202,67,71 5,15,202,67,71 6,15,202,67,71 7,15,202,67,71 8,15,202,67,71 2,16,210,70,68 3,16,210,70,68 4,16,210,70,68 5,16,210,70,68 6,16,210,70,68 7,16,210,70,68");
        return count;
    },
    getGo:function() {
        var go = create(Obj);
        go.fillCoordsSingleColor(192, 57, 43, 255, "2,0 3,0 4,0 5,0 6,0 7,0 14,0 15,0 16,0 17,0 18,0 19,0 24,0 25,0 26,0 27,0 1,1 2,1 3,1 4,1 5,1 6,1 7,1 8,1 13,1 14,1 15,1 16,1 17,1 18,1 19,1 20,1 24,1 25,1 26,1 27,1 0,2 1,2 2,2 3,2 4,2 5,2 6,2 7,2 8,2 9,2 12,2 13,2 14,2 15,2 16,2 17,2 18,2 19,2 20,2 21,2 24,2 25,2 26,2 27,2 0,3 1,3 2,3 3,3 6,3 7,3 8,3 9,3 12,3 13,3 14,3 15,3 18,3 19,3 20,3 21,3 24,3 25,3 26,3 27,3 0,4 1,4 2,4 3,4 6,4 7,4 8,4 9,4 12,4 13,4 14,4 15,4 18,4 19,4 20,4 21,4 24,4 25,4 26,4 27,4 0,5 1,5 2,5 3,5 6,5 7,5 8,5 9,5 12,5 13,5 14,5 15,5 18,5 19,5 20,5 21,5 24,5 25,5 26,5 27,5 0,6 1,6 2,6 3,6 12,6 13,6 14,6 15,6 18,6 19,6 20,6 21,6 24,6 25,6 26,6 27,6 0,7 1,7 2,7 3,7 12,7 13,7 14,7 15,7 18,7 19,7 20,7 21,7 24,7 25,7 26,7 27,7 0,8 1,8 2,8 3,8 5,8 6,8 7,8 8,8 9,8 12,8 13,8 14,8 15,8 18,8 19,8 20,8 21,8 24,8 25,8 26,8 27,8 0,9 1,9 2,9 3,9 5,9 6,9 7,9 8,9 9,9 12,9 13,9 14,9 15,9 18,9 19,9 20,9 21,9 24,9 25,9 26,9 27,9 0,10 1,10 2,10 3,10 5,10 6,10 7,10 8,10 9,10 12,10 13,10 14,10 15,10 18,10 19,10 20,10 21,10 24,10 25,10 26,10 27,10 0,11 1,11 2,11 3,11 6,11 7,11 8,11 9,11 12,11 13,11 14,11 15,11 18,11 19,11 20,11 21,11 25,11 26,11 0,12 1,12 2,12 3,12 6,12 7,12 8,12 9,12 12,12 13,12 14,12 15,12 18,12 19,12 20,12 21,12 25,12 26,12 0,13 1,13 2,13 3,13 6,13 7,13 8,13 9,13 12,13 13,13 14,13 15,13 18,13 19,13 20,13 21,13 0,14 1,14 2,14 3,14 4,14 5,14 6,14 7,14 8,14 9,14 12,14 13,14 14,14 15,14 16,14 17,14 18,14 19,14 20,14 21,14 24,14 25,14 26,14 27,14 1,15 2,15 3,15 4,15 5,15 6,15 7,15 8,15 9,15 13,15 14,15 15,15 16,15 17,15 18,15 19,15 20,15 24,15 25,15 26,15 27,15 2,16 3,16 4,16 5,16 6,16 8,16 9,16 14,16 15,16 16,16 17,16 18,16 19,16 24,16 25,16 26,16 27,16");
        return go;
    },
    getBall:function() {
        var ball = create(Obj);
        ball.fillCoordsSingleColor(255, 255, 255, 255, "0,0 0,1 1,0 1,1");
        return ball;
    }
}