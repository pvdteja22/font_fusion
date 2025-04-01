import './App.css'


export default function App(){

  const textColor= (colorName)=>{
    document.getElementById('text').style.color=colorName
  }

  const bgColor= (colorName)=>{
    document.getElementById('text').style.backgroundColor=colorName
  }


  return(
    <>
        <div className='heading'>
          <h1 id="heading">Font Fusion</h1>
        </div>
        
        <div className='parent'>
            <div id='child1'>
                <h1 contentEditable="true" id="text">Write your text...</h1>
                <button id="download-btn">Download</button>
            </div>

            <div id='child2'>
                <div id='text-color'>
                  <h2 id="sub-heading">Choose your text Color</h2>
                  <div id="text-color-names">
                    <button id='red' onClick={()=>{textColor('red')}}></button>
                    <button id='green' onClick={()=>{textColor('green')}}></button>
                    <button id='blue' onClick={()=>{textColor('blue')}}></button>
                    <button id='yellow' onClick={()=>{textColor('yellow')}}></button>
                    <button id='purple' onClick={()=>{textColor('purple')}}></button>
                    <input type='color'/>
                  </div>

                </div>

                <div id='bg-color'>
                  <h2 id='sub-heading'>Choose your Background Color</h2>
                  <div id="text-color-names">
                    <button id='red' onClick={()=>{bgColor('red')}}></button>
                    <button id='green' onClick={()=>{bgColor('green')}}></button>
                    <button id='blue' onClick={()=>{bgColor('blue')}}></button>
                    <button id='yellow' onClick={()=>{bgColor('yellow')}}></button>
                    <button id='purple' onClick={()=>{bgColor('purple')}}></button>
                    <input type='color'/>
                  </div>
                </div>

                <div id='fonts'>
                
                </div>
            </div>
        </div>
    </>
  );
}