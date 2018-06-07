# Parcel vs Webpack

## How to run
```bash
yarn install
yarn run build-parcel   # Parcel production build
yarn run build-webpack  # Webpack production build
yarn run start-parcel   # Parcel dev server
yarn run start-webpack  # Webpack dev server
```

## Benchmarks
- Production build without cache
- Tested on MacBook Pro 2016 (2.9 GHz Intel Core i7, 16GB 2133 MHz LPDDR3)

| .. | Webpack | Parcel |
| -- | -- | -- |
| Build time | 7.38s | 13.13s |
| Asset size (`*.js` only) | 300K | 620K |

## Tested aspects
This example uses:
- React
- TypeScript
- Code splitting
- Asset loading

## Problems
Parcel's code splitting feature has some issue with MobX. With Parcel, MobX is duplicated in two distinct bundles. Therefore MobX warns that it has multiple active instances.
