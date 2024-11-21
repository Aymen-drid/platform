import { ResizableHandle,ResizablePanel,ResizablePanelGroup } from "../components/ui/resiazble-modified";


import { Suspense } from "react";
import { ChallengeData } from './types';
import { getFrontMatter } from './utils/utils';
import React from 'react';
import fs from 'fs';
import path from 'path';
// Import the utility function and type
import { ScrollArea } from '../components/ui/scroll-area';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from '../components/ui/accordion';
import IDE from "./codeEditior/monaco";
import Loading from "../components/ui/loading";
// Define the component that expects ChallengeData as props
interface PageProps {
  meta: ChallengeData;
}

const buttons = [
  "Topics", "companies", "hint"
]

const Page: React.FC<PageProps> = ({ meta }) => (
          <ScrollArea className="h-screen w-screen rounded-md p-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-extrabold text-[30px]">{meta.title}</h1>
              <div className="flex flex-row gap-2 my-3">
                <Badge className="py-2 px-4 rounded-xl border-primary-2 " variant="outline" >
                  {meta.difficulty}
                </Badge>
                {buttons.map((label, index) => (
                  <Button key={index} size="default" className="p-3 rounded-xl" variant="outline">
                    {label}
                  </Button>
                ))}
              </div>
              <p>{meta.description}</p>
              <div className="flex flex-col gap-6">
                {meta.dataList.map((item, index) => (
                  <List title={item.title} items={item.items} key={index} />
                ))}
              </div>
              <hr />
              <div className="my-16">
                <p>Have you seen this question in an interview before?</p>
              </div>
              <hr />
              <Accordion type="single" collapsible>
                {meta.accordings.map((item, index) => (
                  <AccordionItem value={item} key={index}>
                    <AccordionTrigger>{item}</AccordionTrigger>
                    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
    
            </div>
          </ScrollArea>
        );



interface ListProps {
  title: string;
  items: string[];
}


const List: React.FC<ListProps> = ({ title, items }) => {
  return (
    <div className="mb-4">
      <h2 className="font-bold text-lg">{title}:</h2>
      <ul className="list-none pl-4">
        {items.map((item, index) => (
          <li key={index} className=" my-2 pr-4">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default async function Description({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug as string;
    console.log(slug)
    const pageData = getFrontMatter(`app/[slug]/challenges/${slug}.mdx`);
      return (

    <div className="flex h-screen border-none bg-background">
     <ResizablePanelGroup
          direction="horizontal"
          className="rounded-lg  flex-grow  "
        >
          <ResizablePanel  defaultSize={100}>
            <div className="flex h-full items-center justify-center p-6 font-semibold">
              
              <Page meta={pageData} />
              
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={60} >
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel className="  flex flex-col" >
                      
                            <Suspense fallback={<Loading/>}>
                              <IDE className="flex h-full w-full"/>
                            </Suspense>
                     
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
