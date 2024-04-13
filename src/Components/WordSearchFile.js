import React from 'react'
import { PDFDownloadLink , Document , Page , Line , Text , Svg} from '@react-pdf/renderer'
var wordsearch = require("../Helpers/wsgenerator")

function Wpay(props) {
  const settings = props.props
  const search = wordsearch(settings.wl.map((item)=> item.toLowerCase() ) , 9 ,9 )
  console.log(search)
  const payload1  = []
  const payload2 = []
  const payload3 = []
  const mainax = settings.size[0] < settings.size[1] ? settings.size[0] : settings.size[1]
  const unit = ((mainax - mainax*0.25) ) / 9
  const startx = (settings.size[0] - (unit*9))/2
  const starty = (settings.size[1] - (unit*9))/2
  let x = startx 
  let y = starty

  for(let i = 0 ; i < 10 ; i++ ){
    payload1.push(<Line x1={x} y1 ={starty} x2={x} y2={ starty + unit*9} stroke={'black'} strokeWidth={  1} />)
    x += unit
    }
    x=startx
  for(let i = 0 ; i < 10 ; i++ ){
        payload1.push(<Line x1={x} y1 ={y} x2={ startx + unit*9} y2={y} stroke={'black'} strokeWidth={ 1} />)
        y+= unit
    }

    
    y= starty - unit/3.5
    
  for (let i = 0; i < search.grid.length; i++) {
  const row = search.grid[i];
  y+= unit
  x = startx + unit/3.5

    for (let j = 0; j < row.length; j++) {
      const item = row[j].toUpperCase() ;
      payload2.push(<Text x={x} y={y} style={{fontSize : (mainax === settings.size[0] ? mainax*0.045 : mainax*0.05) }} >{item}</Text>)
      x+= unit
    } 
}
y= starty - unit/3.5

for (let i = 0; i < search.grid.length; i++) {
  const row = search.solved[i];
  y+= unit
  x = startx + unit/3.5

    for (let j = 0; j < row.length; j++) {
      const item = row[j].toUpperCase() ;
      if(item !== ""){
        payload3.push(<Text x={x} y={y} fill={"green"} style={{fontSize : (mainax === settings.size[0] ? mainax*0.045 : mainax*0.05)}} >{item}</Text>)

      }
      x+= unit
    } 
}

  return (
    <Document>
      <Page size={settings.size}>
        <Svg width={settings.size[0]} height={settings.size[1]}>
          {payload1}
          {payload2}
        </Svg>
      </Page>
      <Page size={settings.size}>
      <Svg width={settings.size[0]} height={settings.size[1]}>
          {payload1}
          {payload2}
          {payload3}
        </Svg>
      </Page>
    </Document>
  )
}








function WordSearchFile(props) {



  return (
    <div className='bg-main py-3 px-5 m-2 mb-5 self-center shadow-lg rounded-xl text-white  text-xl hover:bg-red-400 hover:shadow-xl'>
    <PDFDownloadLink document={<Wpay props={props} />} fileName="WordSearch.pdf">

      {({ blob, url, loading, error }) =>{
          
          return (loading ? 'loading... ': 'Download')
          
        } 
        
    }
    </PDFDownloadLink>
    </div>
  )
}

export default WordSearchFile