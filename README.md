# Common TS Props

```bash
npm install --save-dev common-ts-props
# or
yarn add --dev common-ts-props
```

I made this because I was repeatedly remaking the same interface throughout different React.js projects:

```typescript
import { ReactNode } from "react";

export interface WrapperProps {
  children: ReactNode;
}
```

I found myself making a types folder just to include the types, and a props.ts file, after which I include the above snipped and include the interface wherever needed.

This project will also contain similar, repeatedly used props. And this wouldn't be specific to react, but it is the major area I find a need in organizing the interfaces for.
