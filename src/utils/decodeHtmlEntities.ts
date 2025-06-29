/* eslint-disable @typescript-eslint/no-explicit-any */
const decodeHtmlEntities = (str:any) => {
    console.log(str);
    const doc = new DOMParser().parseFromString(str, "text/html");
    return doc.documentElement.textContent || doc.documentElement.innerText;
  };
  export default decodeHtmlEntities;