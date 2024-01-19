import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
export function App() {
  const formatUserName = (userName) => (`@${userName}`)

  const nicko = { formatUserName: formatUserName, isFollowing: false, name: "Nicolas", userName: "HolaMundoDev" }
  return (
    <section className="tw-section">
      <TwitterFollowCard formatUserName={formatUserName} isFollowing name="Miguel Ángel Durán" userName="midudev" ></TwitterFollowCard>
      <TwitterFollowCard  {...nicko} ></TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} isFollowing name="Xavier" userName="ProgramadorX" ></TwitterFollowCard>
    </section>
    
  )
}