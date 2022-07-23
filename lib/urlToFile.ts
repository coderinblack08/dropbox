export const urlToFile = async (url: string, type: string): Promise<File> => {
  const response = await fetch(url);
  const data = await response.blob();
  return new File([data], url.split("/").at(-1)!, { type });
};
