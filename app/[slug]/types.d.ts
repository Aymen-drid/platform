// Define the structure of your MDX content
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
  