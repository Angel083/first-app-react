import { useState } from "react";
export function TwitterFollowCard({ formatUserName, userName, name }) {

  const [isFollowing, setIsFollowing] = useState(false)
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }
  const text = isFollowing ? 'Siguiendo' : "Seguir";
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : "tw-followCard-button";
  return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            src={`https://unavatar.io/youtube/${userName}`}
            alt="avatar"
            className="tw-followCard-avatar"
          />
          <div className="tw-followCard-info">
            <strong>{name}</strong>
            <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
          </div>
        </header>
        <aside>
          <button
            onClick={handleClick}
            className={buttonClassName}>{text}</button>
        </aside>
      </article>
    </>
  );
}