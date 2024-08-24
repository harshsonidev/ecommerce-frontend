Object.__proto__.hasKeys = () => {
  console.log("Here is this: ",this)
  return Object.keys({}).length > 0;
}

export const height = (selector = "") => {
  const element = document.querySelector(selector);
  console.log(element)
  return element?.clientHeight || 0;
};


