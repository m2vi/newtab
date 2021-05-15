import { DuckDuckGo } from './DuckDuckGo/engine';
import { Google } from './Google/engine';
import { GoogleScholar } from './GoogleScholar/engine';
import { InternetArchive } from './InternetArchive/engine';
import { MsBing } from './MsBing/engine';
import { Yahoo } from './Yahoo/engine';
import { Ask } from './Ask/engine';

import { engineProps } from './shared/engineProps';

export const allEngines = [
  DuckDuckGo,
  Google,
  GoogleScholar,
  InternetArchive,
  MsBing,
  Yahoo,
  Ask,
];

export const keys = (engines: any) => {
  let keys: string[] = [];

  for (let i = 0; i < engines.length; i++) {
    const engine: engineProps = engines[i];

    if (engine.deactivated) continue;

    keys.push(engine.key);
  }

  return keys;
};

export const getEngineFromKey = (key: string) => {
  for (let i = 0; i < keys(allEngines).length; i++) {
    const engine = allEngines[i];
    const currentKey = engine.key;

    if (currentKey !== key) continue;

    return engine;
  }
  return allEngines[0];
};
