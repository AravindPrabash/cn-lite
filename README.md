# cn-lite

A dead-simple utility to combine CSS class names conditionally.

## 🔧 Install

```bash
npm install cn-lite
```

## 📝 Usage

```javascript
import cn from "cn-lite";

const className = cn("btn", { "btn-primary": true, "btn-disabled": false }, [
  "mt-2",
  { "px-4": true },
]);

// Output: "btn btn-primary mt-2 px-4"
```
