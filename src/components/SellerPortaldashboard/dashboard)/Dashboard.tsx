import DemoPiechat from "./DemoPiechat"
import Status from "./Status"

const Dashboard = () => {
  return (
    <div>
       <h1 className="text-left text-[20px] font-semibold pb-2">Dashboard</h1>
       <Status />
       <div className="w-full">
        <div className="w-[70%]"></div>
        <div className="w-[30%]">
          <DemoPiechat />
        </div>
       </div>
    </div>
  )
}

export default Dashboard