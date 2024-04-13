import React from 'react'
import { Document , Page , Text , Svg, Line, PDFDownloadLink } from '@react-pdf/renderer'
const sudoku = require('../Helpers/sudokuGenerator').sudoku

function Spay(props) {
    const settings = props.props
    const payload = []
    const payloads = []
    const mainax = settings.size[0] < settings.size[1] ? settings.size[0] : settings.size[1]
    const unit = ((mainax - mainax*0.25) ) / 9
    const startx = (settings.size[0] - (unit*9))/2
    const starty = (settings.size[1] - (unit*9))/2
    for (let i = 0 ; i < settings.pages ; i++){
        const payloads1 = []
        const payload1= []
        const sdku = sudoku.generate(settings.difficulty)
        let x = startx 
        let y = starty
        let counter = 0 

    


    for(let i = 0 ; i < 10 ; i++ ){
        payload1.push(<Line x1={x} y1 ={starty} x2={x} y2={ starty + unit*9} stroke={settings.color} strokeWidth={ i%3 ===0 ? 3:  1} />)
        x += unit

    }
    x=startx
    for(let i = 0 ; i < 10 ; i++ ){
        payload1.push(<Line x1={x} y1 ={y} x2={ startx + unit*9} y2={y} stroke={settings.color} strokeWidth={ i%3 ===0 ? 3:  1} />)
        y+= unit

    }
    y= starty + mainax*0.055

    for(let i = 0 ; i < 9 ; i++ ){  
        x = startx + mainax*0.03
        for(let i = 0 ; i < 9 ; i++ ){
            payload1.push(<Text style={{fontSize : mainax === settings.size[0] ? mainax*0.045 : mainax*0.05 , fontWeight: 'bold' }} x={x} y={y} >{ sdku[counter] ==='.' ? '' : sdku[counter]}</Text>)
            counter++
            x += unit
        }
        y+= unit 
    
    }
    if (settings.solve == true){
        counter = 0
        const sol = sudoku.solve(sdku)
        y= starty + mainax*0.055

        for(let i = 0 ; i < 9 ; i++ ){  
            x = startx + mainax*0.03
            for(let i = 0 ; i < 9 ; i++ ){
                payloads1.push(<Text fill={settings.solcolor} style={{fontSize : (mainax === settings.size[0] ? mainax*0.045 : mainax*0.05) }} x={x} y={y} >{ sdku[counter] ==='.' ? sol[counter] : ''}</Text>)
                counter++
                x += unit
            }
            y+= unit 
        
        }
        
    }

    
    payload.push(<Page size={settings.size}><Svg width={settings.size[0]} height={settings.size[1]}>{payload1}</Svg></Page>)
    if(settings.solve == true ) {payloads.push(<Page size={settings.size}><Svg width={settings.size[0]} height={settings.size[1]}>{payload1}{payloads1}</Svg></Page>)}
}
    return (
        <Document>
            {payload}
            {settings.solve && payloads}
        </Document>
    )
}






function SodukuFile(props) {
  return (
    <div className='bg-main py-3 px-5 m-2 mb-5 self-center shadow-lg rounded-xl text-white  text-xl hover:bg-red-400 hover:shadow-xl'>

    <PDFDownloadLink  document={<Spay props={props} />} fileName={`Sudoku.pdf`}>

      {({ blob, url, loading, error }) =>{
          
          return (loading ? 'loading... ': 'Download')
          
        } 
        
    }
    </PDFDownloadLink>
    </div>
  )
}

export default SodukuFile