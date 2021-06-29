import React from 'react'


const index = () => {
  let nombre_en_lettre = require('../public/num2let.js');
  return (
    <div>
      {console.log(nombre_en_lettre("15000.50", "Dinnar", "Centimes"))}
    </div>
  )
}

export default index
