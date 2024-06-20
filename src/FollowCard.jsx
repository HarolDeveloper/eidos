import { Children, useState } from 'react'

export function XFollowCard({ userName = 'unknow', children, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'x-followCard-button is-following'
        : 'x-followCard-button'
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='x-followCard' >
            <header className='x-followCard-header'>
                <img className='x-followCard-avatar' alt="El avatar de Harold" src={`https://unavatar.io/${userName}`} />
                <div className='x-followCard-info'>
                    <strong>{children}</strong>
                    <span className='x-followCard-infoUserName'>{`@${userName}`}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>

                    <span className='x-followCard-text'>{text}</span>
                    <span className='x-followCard-stopFollow'>Dejar de seguir</span></button>
            </aside>
        </article>
    )
}