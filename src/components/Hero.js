import React from 'react';
  
function Hero () {
    return (
        <div id="hero" className="Hero" style={{backgroundImage: 'url(https://hdqwalls.com/download/rampage-chinese-poster-2018-u1-2048x1152.jpg)'}}>
            <div className="content">
                <h2>Rampage April 13</h2>
                <p>
                    Global megastar Dwayne Johnson headlines the action adventure RAMPAGE, directed by Brad Peyton. 
                    Primatologist Davis Okoye (Johnson), a man who keeps people at a distance, shares an unshakable bond with George, the extraordinarily intelligent, silverback gorilla who has been in his care since birth. 
                    But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size. 
                </p>
                <button
                    className='button'
                    to='https://www.youtube.com/watch?v=coOKvrsmQiI&t=89s'
                >
                        View Trailer
                </button>
            </div>
        </div>
    )
}
  
export default Hero;