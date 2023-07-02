const gameClock=1000;
const blockSideLength=30;
const rows=20;
const cols=30;
const scoreWorth=10;
const shapes=[
    [],
    [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ],[
        [2,0,0],
        [2,2,2],
        [0,0,0]
    ],[
        [0,0,3],
        [3,3,3],
        [0,0,0]
    ],[
        [4,4],
        [4,4]
    ],[
        [0,5,5],
        [5,5,0],
        [0,0,0]
    ],[
        [0,6,0],
        [6,6,6],
        [0,0,0]
    ],[
        [7,7,0],
        [0,7,7],
        [0,0,0]
    ]
];
const colors=[
    'black',
    '#ff4040',
    '#40ff43',
    '#40ffdf',
    '#4099ff',
    '#5d40ff',
    '#d640ff'
];
class Piece{
    constructor(shape,ctx){
        this.shape=shape;
        this.ctx=ctx;
        this.x=100;
        this.y=100;
    }
    renderPiece(){
        this.shape.map((row,i)=>{
            row.map((col,j)=>{
                if(col==!0){
                    this.ctx.fillStyle=colors[this.shape[i][j]];
                    this.ctx.fillRect((this.x+j),(this.y+i),1,1);
                }
            })
        })
    }
}
