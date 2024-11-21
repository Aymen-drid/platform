import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

// Define the type of the front matter metadata
export interface ChallengeData {
  title: string;
  difficulty: string;
  description: string;
  dataList: {
    title: string;
    items: string[];
  }[];
  accordings: string[];
}

// Create the function that extracts the front matter data
export const getFrontMatter = (filePath: string): ChallengeData => {
  // Read the MDX file content
  const fullPath = path.join(process.cwd(), filePath);
  const fileContent = fs.readFileSync(fullPath, 'utf8');

  // Parse the front matter and content using gray-matter
  const { data } = matter(fileContent);

  // Return the parsed front matter data (TypeScript will infer the correct type from the interface)
  return data as ChallengeData;
};
