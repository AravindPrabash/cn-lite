function combineClassNames(...args) {
  const classes = [];

  for (const arg of args) {
    if (!arg) continue;

    const type = typeof arg;

    if (type === 'string' || type === 'number') {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      classes.push(combineClassNames(...arg));
    } else if (type === 'object') {
      for (const key in arg) {
        if (arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

export default combineClassNames;
