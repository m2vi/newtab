import readingTime from 'reading-time';

export interface IReadTimeResults {
  text: string;
  time: number;
  words: number;
  minutes: number;
}

export const formatTime = ({ time, minutes }: IReadTimeResults) => {
  if (time < 60000) {
    return `${time / 1000}s`;
  } else {
    return `${(time / 1000) * 60}m`;
  }
};

export const wordsToTime = (text: string) => readingTime(text);
