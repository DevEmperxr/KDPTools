class Cell {
    constructor(x,y){
        this.x = x
        this.y = y
        this.info = [0,1,1]
    }
}
class Maze {
    constructor(rows, columns , solve){
        this.rows = rows
        this.columns = columns
        this.solve = solve
        this.grid = []
        for (let r = 0 ; r < this.rows ;r++ ){
            for (let c = 0 ; c<this.columns ;c++){
                this.grid.push(new Cell(c,r))
            }
        }
        this.makeMaze()

        this.solvepath = this.mazeSearch(this.getCell(0,0) , this.getCell(this.columns -1 , this.rows -1))

    }

    getCell(x,y){
        return (x < 0|| y < 0 || y >= this.rows || x >= this.columns ? undefined : this.grid[y*this.columns + x])
    }

    getNei(cell,visited){
        let neis = [this.getCell(cell.x, cell.y+1),this.getCell(cell.x, cell.y-1),this.getCell(cell.x+1, cell.y),this.getCell(cell.x-1, cell.y)]
        return (visited ? neis.filter(cell => cell!== undefined).filter(x => x.info[0] === 0) : neis.filter(cell => cell!== undefined))

    }
    removeWalls(cell1,cell2){
        if (cell2.x - cell1.x === 1){
            cell2.info[2] = 0
        }
        if (cell2.x - cell1.x === -1){
            cell1.info[2] = 0
        }
        if (cell2.y - cell1.y === 1){
            cell2.info[1] = 0
        }
        if (cell2.y - cell1.y === -1){
            cell1.info[1] = 0
        }
    }

    makeMaze(){
        let stack = []
        let startCell = this.getCell(0,0)
        startCell.info[0] = 1
        stack.push(startCell)
        while(stack.length > 0){
            let current = stack.pop()
            let neis = this.getNei(current, true)
            if (neis.length > 0){
                stack.push(current)
                let next =  neis[Math.floor(Math.random() * neis.length)]
                this.removeWalls(current, next)
                next.info[0] = 1 
                stack.push(next)
            }
        }
        return this.grid        
    }

    wallList(){
        let Hwalls = []
        let Vwalls = []
        let wch = 0
        let bch = 0 
        let wcv = 0
        let bcv = 0
        for (let r = 0 ; r < this.rows ;r++ ){
            for (let c = 0 ; c<this.columns ;c++){
                let cell = this.getCell(c,r)
                if(cell.info[1] === 1 ){
                    if (bch !== 0 ){
                        Hwalls.push([0 , bch])
                        bch = 0
                    }
                    wch+=1
                } else {
                    if (wch !== 0 ){
                        Hwalls.push([1 , wch])
                        wch = 0
                    }
                    bch+=1
                }
            }
            if (bch !== 0 ){
                Hwalls.push([0 , bch])
            }
            if (wch !== 0 ){
                Hwalls.push([1 , wch])
            }
            wch = 0
            bch = 0
            Hwalls.push(['newHLine'])
        }

        for (let c = 0 ; c < this.columns ;c++ ){
            for (let r = 0 ; r<this.rows ;r++){
                let cell = this.getCell(c,r)
                if(cell.info[2] === 1 ){
                    if (bcv !== 0 ){
                        Vwalls.push([0 , bcv])
                        bcv = 0
                    }
                    wcv+=1
                } else {
                    if (wcv !== 0 ){
                        Vwalls.push([1 , wcv])
                        wcv = 0
                    }   
                    bcv+=1
                }
            }
            if (bcv !== 0 ){
                Vwalls.push([0 , bcv])
            }
            if (wcv !== 0 ){
                Vwalls.push([1 , wcv])
            }
            wcv = 0
            bcv = 0
            Vwalls.push(['newVLine'])
        }
        return [Hwalls, Vwalls]

    }

    getAvailableCloseCells(cell){
        //console.log('neis of ')
        //console.log(cell)
        let ret = []
        if (cell.info[2] === 0 ){
            ret.push(this.getCell(cell.x -1 , cell.y))
        }
        if (cell.info[1] === 0 ){
            ret.push(this.getCell(cell.x, cell.y -1))
        }
        if (this.getCell(cell.x , cell.y +1 )!== undefined && this.getCell(cell.x , cell.y +1 ).info[1] === 0 ){
            ret.push(this.getCell(cell.x, cell.y +1 ))
        }
        if (this.getCell(cell.x +1, cell.y )!== undefined && this.getCell(cell.x +1 , cell.y ).info[2] === 0 ){
            ret.push(this.getCell(cell.x +1 , cell.y ))
        }
        ret = ret.filter(x => x.info[0] !== 2)
        return ret
    }
    mazeSearch(start , goal){
        let path = []
        path.push(this.getCell(start.x , start.y))
        while (path.lenght !== 0){
            let current = path[path.length -1 ]
            if (current === goal){
                current.info[0] =  3
                path.push(current)
                for( let cell of path){
                    cell.info[0] = 3
                }
                return path
            }else {
                current.info[0] = 2
                let neis = this.getAvailableCloseCells(current)
                if (neis.length === 0){
                    path.pop()
                }else {
                    path.push(neis[Math.floor(Math.random() * neis.length)])
                }
                
            }
        }
                    
                
      
    }
}
export default Maze