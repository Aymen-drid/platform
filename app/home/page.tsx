import { Input } from "@nextui-org/react";
import TypedNew from './typd';
import { ArrowRight } from "lucide-react";
function Page() {
  return (  
    <div className="w-screen h-screen flex flex-col items-center justify-center  con ">
     <div className="  w-3/6 h-2/6 bg-white rounded-lg flex flex-col">
      <TypedNew className="m-5"/>
      <div className="my-8 mx-3 flex flex-row">
      <ArrowRight className="mr-3 pt-2 size-8"/>
        <Input className="border w-4/5 rounded-lg"/>
      </div>
     </div>
      </div>
  );
}

export default Page;