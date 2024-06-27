# hashplate

A tiny and fast lib to generate human-readable hash from a string in the style of license plates.

## Use

```bash
pnpm add -D hashplate
```

```javascript
import { hashplate } from "hashplate";

const hash = hashplate("Hello, World!");
// returns "🦐 GP-150-UJ 🪣"
```

## Format

The hash is generated in the following format:

```
<emoji> <2 uppercase letters>-<3 digits>-<2 uppercase letters> <emoji>
```

## Why?

I needed a way to generate a hash that was **readable** and **easy to recognize** to **anonymize** data. This is the result.
