import { useState } from 'react'

export function TwitterFollowCard({children, userName, inicialFollowing={} }) {

  const [isFollowing,setIsFollowing]= useState(inicialFollowing)
  
  const imgSrc=`https://unavatar.io/${userName}`

  const textButton= isFollowing ? "Siguiendo" : "Seguir"

  const classNameButton= isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick= ()=>{
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={imgSrc}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={classNameButton} onClick={handleClick}>
            <span className='tw-followCard-text'>{textButton}</span>
            <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
    
}