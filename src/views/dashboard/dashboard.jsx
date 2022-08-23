import CardList from "./cardList";
import Charts from "./charts";
import './dashboard.scss'
export default function Dashboard() {
  return (
    <div className="dashboard">
      <CardList />
      <Charts />
    </div>
  )
}
