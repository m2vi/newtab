import {
  wordsToHours,
  wordsToMinutes,
  wordsToSeconds,
} from 'words-to-time-converter';

const calcReadTime = (text: string) => {
  return {
    seconds: wordsToSeconds(text),
    minutes: wordsToMinutes(text),
    hours: wordsToHours(text),
  };
};

export default calcReadTime;
