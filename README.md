# combine-classnames

A dead-simple utility to combine CSS class names conditionally.

## 🔧 Install

```bash
npm install combine-classnames
```

## 📝 Usage

```javascript
import cn from "combine-classnames";

const className = cn("btn", { "btn-primary": true, "btn-disabled": false }, [
  "mt-2",
  { "px-4": true },
]);

// Output: "btn btn-primary mt-2 px-4"
```
