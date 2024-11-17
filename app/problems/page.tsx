import { ResizableHandle,ResizablePanel,ResizablePanelGroup } from "../components/ui/resiazble-modified";
import * as React from 'react';
import Description from './descryption';
import IDE from "./codeEditior/monaco";
export interface IProblemsPageProps {
}

export default function ProblemsPage (props: IProblemsPageProps) {
  return (
    <div className="flex h-screen">
 <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border flex-grow  "
    >
      <ResizablePanel  defaultSize={100}>
        <div className="flex h-full items-center justify-center p-6 font-semibold">
          
            <Description/>
          
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60} >
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel className="  flex flex-col" >
                  
                        <IDE className="flex h-full w-full"/>
                 
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={40} >
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>

    </div>
  );
}
