import React from 'react'
import { Line, Document , Page, Svg , PDFDownloadLink} from '@react-pdf/renderer'
import Maze from '../Helpers/mazeGenerator'

function Mpay(props) {
  const pl1 = []
  const pl2 = []
  const mainax = props.size[0] < props.size[1] ? props.size[0] : props.size[1]
  let unit = (props.width > props.height) ? (mainax - mainax*0.25) / props.width :  (mainax - mainax*0.25) / props.height
  for (let i = 0 ; i < props.pages ; i++ ){
      const pl = []
      const pv = []
    const maze = new Maze(props.height , props.width , props.solve)
    maze.grid[0].info[2]= 0
    const [hwalls, vwalls ] = maze.wallList()
    const pathh = maze.solvepath
    const startx =(  - unit*props.width + props.size[0] ) /2
    const starty =  (  - unit*props.height + props.size[1] ) /2
    let x = startx
    let y = starty
    
    hwalls.forEach(item => {
      if (item[0] === 1){
      pl.push(<Line style={{strokeLineCap : "round"}} key={hwalls.indexOf(item)} x1={x} y1={y} x2={x + item[1]*unit} y2={y} strokeWidth={1} stroke={props.mazeColor} />)
      x += item[1]* unit
      }else if (item[0] === 0 ){
        x += item[1]* unit
      }else {
        x=startx
        y += unit
      }
    });
    x = startx
    y = starty
    vwalls.forEach(item => {
      if (item[0] === 1){
      pl.push(<Line style={{strokeLineCap : "round"}} key={-vwalls.indexOf(item) + 1} x1={x} y1={y} x2={x} y2={y + item[1]*unit} strokeWidth={1} stroke={props.mazeColor} strokeLine/>)
      y += item[1]* unit
      }else if (item[0] === 0 ){
        y += item[1]* unit
      }else {
        y=starty
        x += unit
      }
      
    });


    x = startx + unit/2
    y = starty + unit/2 

    if (props.solve === true){
       pv.concat(pl)
      pathh.forEach(cell => {
        pv.push(<Line style={{strokeLineCap : "round"}} className={""} x1={x} y1={y} x2={startx + cell.x*unit + unit/2  } y2={starty + cell.y*unit + unit/2 }  stroke={props.solcolor} strokeLine={false } strokeWidth={2} fill={props.solcolor}></Line>)
        x = startx + cell.x*unit + unit/2
        y = cell.y*unit + starty + unit/2
      });
      }
    

    pl.push(<Line style={{strokeLineCap : "round"}} x1={startx} y1={starty + (unit*props.height)} x2={(unit*props.width) + startx} y2={unit*props.height + starty} strokeWidth={1} stroke={props.mazeColor}  />)
    pl.push(<Line style={{strokeLineCap : "round"}} y1={starty} x1={(unit*props.width) + startx} x2={(unit*props.width) + startx} y2={((unit*props.height)- unit ) + starty} strokeWidth={1} stroke={props.mazeColor} />)
    pl1.push(<Page key={i} size={props.size} ><Svg width={props.size[0]} height={props.size[1]} key={i}>{pl}</Svg></Page>)
    if (props.solve) {pl2.push(<Page key={-i -1} size={props.size} ><Svg width={props.size[0]} height={props.size[1]} key={-i+1}>{pl}{pv}</Svg></Page>) }
  }
    return (      
      <Document title='test123'>
      {pl1}
      {pl2}
    </Document>
  )
}
    




function MazeFile(props){
  return (
    <>
    <PDFDownloadLink className='bg-blue-900 py-3 px-5 m-2 mb-5 self-center shadow-lg rounded-xl text-white font-semibold text-xl hover:bg-red-400 hover:shadow-xl' document={<Mpay solcolor={props.solcolor} pages={props.pages} size={props.size} height={props.height} width={props.width} mazeColor={props.mazeColor } solve={props.solve} />} fileName={`maze ${props.width}x${props.height}.pdf`}>

      {({ blob, url, loading, error }) =>{
        
        return (loading ? 'loading... ': 'Download')
        
      } 
      
    }
    </PDFDownloadLink>
    </>
  )
}

export default MazeFile