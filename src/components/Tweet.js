import React from 'react'
import getDumberName from '../services/helpers'

export default function Tweet(props) {
  const quote = props.content
  let dumbName = getDumberName()

  return (
    <div className="tweet">
      <img className="ugly-face" src="https://i.kym-cdn.com/photos/images/facebook/001/797/916/908.jpg" alt="Big dumb face" />
      <div className="flex-box-is-dumb">
        <p className="dumb-name">
          {`${dumbName}`}
          <img className="verified" src="https://i.imgur.com/rS8tui4.png" alt="Tweet Verification Icon" />
          <a
            className="dumb-handle"
            href="https://twitter.com/RealDonalDrumpf?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          >
            {`@real${dumbName.replace(' ', '')}`}
          </a>
        </p>
        <div className="tweet-body">
          <p className="really-smart-words">{quote.value}</p>
          <a className="source" href={quote._links.self.href}>Sauce</a>
        </div>
      </div>
    </div>
  )
}