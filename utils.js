export const slidingWindow =
  (length, steps = 1) =>
  (data) => {
    const window = [];
    for (let i = 0; i < data.length - length - 1; i += steps) {
      let result = "";
      for (let j = 0; j < length; j++) {
        result += data[i + j];
      }
      window.push(result);
    }

    return window;
  };
