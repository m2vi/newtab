export const settingsConfig = {
  key: 'settings',
};

export interface settings {
  background: {
    onlyColors: boolean;
    random: boolean;
  };
}

export const initalSettings: settings = {
  background: {
    onlyColors: false,
    random: true,
  },
};

export const changeValue = (key: string, value: any) => {
  const config = getConfig();

  config[key] = value;

  return config;
};

export const getConfig = () => {
  if (localStorage.getItem(settingsConfig.key)) {
    return getConfigFromStorage();
  } else {
    return initalSettings;
  }
};

export const getConfigFromStorage = () => {
  const string = localStorage.getItem(settingsConfig.key);
  const json = JSON.parse(string);

  return json;
};

export const applySettings = (settings: settings) => {
  localStorage.setItem(settingsConfig.key, JSON.stringify(settings));
};
