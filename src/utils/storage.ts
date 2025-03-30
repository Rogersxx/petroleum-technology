export const STORAGE_KEY = {
  LOCAL: "localStorage",
  SESSION: "sessionStorage",
  LANG: "language",
};

export const getLocal = (key: string) =>
  JSON.parse(localStorage.getItem(STORAGE_KEY.LOCAL) || "{}")[key];

export const setLocal = (key: string, data: any) => {
  const localData = JSON.parse(localStorage.getItem(STORAGE_KEY.LOCAL) || "{}");
  localData[key] = data;
  localStorage.setItem(STORAGE_KEY.LOCAL, JSON.stringify(localData));
};

export const getSession = (key: string) =>
  JSON.parse(sessionStorage.getItem(STORAGE_KEY.SESSION) || "{}")[key];

export const setSession = (key: string, data: any) => {
  const sessionData = JSON.parse(
    sessionStorage.getItem(STORAGE_KEY.SESSION) || "{}"
  );
  sessionData[key] = data;
  sessionStorage.setItem(STORAGE_KEY.SESSION, JSON.stringify(sessionData));
};
