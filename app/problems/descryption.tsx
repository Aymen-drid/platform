import * as React from 'react';
import { ScrollArea } from 'app/components/ui/scroll-area';
import { ChallengeDifficulty, dataList, ChallengeTitle, ChallengeDescryption, accordings } from './module';
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const buttons = [
  "Topics", "companies", "hint"
]



export default function Description() {
  return (

    <ScrollArea className=" h-screen w-screen rounded-md border p-4">
      <div className="flex flex-col gap-2">
        <h1 className='font-extrabold'>{ChallengeTitle}</h1>
        <div className='flex flex-row gap-2 my-3'>
          <Badge className='p-3 rounded-xl' variant="outline">{ChallengeDifficulty}</Badge>
          {buttons.map((label, index) => (
            <Button key={index} size="default" className='p-3 rounded-xl' variant="outline">
              {label}
            </Button>
          ))}

        </div>
        <p>{ChallengeDescryption}</p>
        <div className='flex flex-col gap-6'>
          {/* n div for examples */}
          {dataList.map((item, index) => (
            <List title={item.title} items={item.items} key={index} />
          ))}
        </div>
        <hr />
        <div className='my-16'>
         
          <p>Have you see this question in interview before</p>
        
        </div>
        <hr />
        <Accordion type="single" collapsible >
          {accordings.map((item,index)=>( 
            <AccordionItem value={item} key={index}>
            <AccordionTrigger>{item}</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          ))}
         
        </Accordion>
      </div>


    </ScrollArea>

  );
}
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