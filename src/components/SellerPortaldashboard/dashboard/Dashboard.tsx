import DemoPiechat from "./DemoPiechat"
import Status from "./Status"

const DashboardPage = () => {
  return (
    <div>
       <h1 className="text-left text-[20px] font-semibold pb-2">Dashboard</h1>
       <Status />
       <div className="w-full py-7">
        <div className="w-[70%]"></div>
        <div className="w-[24%]">
          <DemoPiechat />
        </div>
       </div>
    </div>
  )
}

export default DashboardPage