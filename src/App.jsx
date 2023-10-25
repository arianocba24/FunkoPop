

import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import luna from './images/lunat.png';
import superman from './images/super.png';
import nubes from './images/nubes.png';
import edificio from './images/edificio.png';
import montana from './images/montañas2.png';
import arana from './images/arana.png';
import telarana from './images/telaraña.png';
import edificioFondo from './images/edificioFondo.png';

import merlina from './images/merlina.png';
import malva from './images/malva.png';


import './styleAmanecer.css';
import sonidoviento from './images/sonidoViento.mp3';
import sonidosoplido from './images/soplido.mp3';



function App() {
  const [isHovered, setSonido] = useState(false);
  const [vTela, setTela] = useState(false);


  return (
    <>
      <div>
<Parallax pages={10} >

 <ParallaxLayer 
    offset={0}
    speed={0.5}
    >
      <div className='Noche'>
        <img className='contenedorImagen' src={luna} style={{width:800 } } >
        </img>
      </div>
  </ParallaxLayer >
      

  <ParallaxLayer offset={0.1} speed={0.005}>
      <div > 
            <h2 style={{ color: 'white', marginRight:'20%',textAlign:'right'}}>Funko Pop</h2>
      </div>

  </ParallaxLayer> 
<ParallaxLayer  speed={0.2} style={{ display: 'flex', alignItems: 'center' , justifyContent: 'center' }}
    sticky={{start:0.9, end:1.0}}>
      
      <div >
        <img className='moverNubes' src={nubes} style={{width:700 , opacity: 0.1 } } >
        </img>  
      </div>
  </ParallaxLayer>

  <ParallaxLayer  speed={0.5} style={{ display: 'flex', alignItems: 'center' , justifyContent: 'center' }}
    sticky={{start:0.7, end:1.1}}>
      <div className='aumentar'>
        <img className='imagenAumentada' src={superman} style={{width:150} }  onMouseEnter={() => setSonido(true)} onMouseLeave={() => setSonido(false)}>
        </img>  

       {isHovered && (
        <ReactAudioPlayer
          src={sonidoviento}
          autoPlay // Opcional: Reproducir automáticamente al cargar
        /> 
      )}
      </div>
  </ParallaxLayer>



 
  <ParallaxLayer  speed={0.8} style={{ display: 'flex', alignItems: 'normal' , justifyContent: 'center' }}
    sticky={{start:2.1, end:2.9}}>
      <div >
        <img src={montana} style={{width:1500} }  >
        </img>  
      </div>
  </ParallaxLayer>





  <ParallaxLayer  speed={0.6} style={{ display: 'flex', alignItems: 'normal' , justifyContent: 'center' }}
    sticky={{start:2.4, end:3.1}}>
      <div >
        <img src={edificioFondo} style={{width:1500} }  >
        </img>  
      </div>
  </ParallaxLayer>




  <ParallaxLayer  speed={0.1} style={{ display: 'flex', alignItems: 'normal' , justifyContent: 'center' }}
    sticky={{start:2.7, end:2.9}}>
      <div >
        <img src={edificio} style={{width:1500} }  >
        </img>  
      </div>
  </ParallaxLayer>
  
  <ParallaxLayer className='cuerpoTarjeta'  offset={4.6} speed={0} >
 <div className='contenedorTarjeta'>
   <div className='card'>
       <img  className ='imagenTarjeta' src={merlina}  ></img> 
      <div className='intro'> <h1 style={{ color: 'white'}}><p >intro de la tarjeta2</p></h1> <p style={{ color: 'white'}}>parrafo de la tarjeta</p></div>
    </div>  

    <div className='card'>
       <img  className ='imagenTarjeta'  src={malva}  ></img> 
      <div className='intro2'> <h1 style={{ color: 'white'}}> <p >intro de la tarjeta2</p></h1> <p style={{ color: 'white'}}>parrafo de la tarjeta2</p></div>
    </div>  
  </div> 
  </ParallaxLayer> 


  <ParallaxLayer  speed={0.5} style={{ display: 'flex',  justifyContent: 'right', position: 'absolute' }}
    sticky={{start:3.2, end:3.3}}>

        
      <div style={{ position: 'relative' }}>
       {vTela && (
        <>
      <img className='imageTela' src={telarana} style={{ width:500 ,position: 'absolute', top: 40, left: -200 } } onDragEnd={() => setTela(false)}>
         </img> 
          <ReactAudioPlayer
          src={sonidosoplido}
          volume={1} 
          autoPlay // Opcional: Reproducir automáticamente al cargar
        /> 
        
        </>
      )}
      <img className='imagen' src={arana} style={{width:300 ,justifyContent:'right', right:'20px'}  }  onMouseEnter={() => setTela(true)}  >
      </img> 
       </div>
  </ParallaxLayer>

 
</Parallax>
      </div>
     
    </>
  )
}

export default App
