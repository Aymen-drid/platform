"use client";

import { Editor } from "@monaco-editor/react/dist";
import { useEffect, useState } from "react";
import React from "react";
interface IDEProps {
    className?: string; // Make className optional
  }
  
  export default function IDE({ className }: IDEProps) {
    const handleSubmit = async () => {
      // Your logic here
    };
  
    return (
      <div className={`  ${className}`}>
        <div className="w-full h-full p-4 border">
          <form action="#" onSubmit={handleSubmit}>
            <div >
              <label htmlFor="comment" className="sr-only">
                Add your code
              </label>
              <Editor
                height="100vh"
                defaultLanguage="javascript"
                defaultValue='Deno.serve(req => new Response("Hello!"));'
              />
            </div>
            <div className="flex justify-between pt-2">
              <div className="flex items-center space-x-5"></div>
              <div className="flex-shrink-0">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                >
                  Run
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }