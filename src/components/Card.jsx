import React from 'react'

const Card = ({ name, style, children }) => {
  return (
    <div className={'App-card'} style={style}>
      {name && <>
        <header>
          <h4>{name}</h4>
        </header>
        <hr/>
      </>}
      <main>
        {children}
      </main>
    </div>
  )
}

export default Card