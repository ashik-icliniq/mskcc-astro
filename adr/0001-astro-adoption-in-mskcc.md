# 1. Adoption of Astro in MSKCC Platform

Date: 2023-04-05

## Status

Accepted

## Context

We are in need of a solid framework for MSKCC project that fullfills the below requirements.

**Framework Considered for MSKCC Dashboard:**
1. Astro
2. React

**Points that are considered in Astro:**
1. Both SSR components and SSR hydrated components can be used efficiently.
2. Page speed for Mobile site can be optimized to the fullest using Astro.
3. Comparitively Astro is faster than React in terms of page load.
4. Expansion of Astro knowledge and experience that benefits developers life.

## Decision

After implementation of MSKCC dashboard pages in both Astro and React frameworks. Astro is decided to be used throughout the MSKCC project.

## Consequences
- Since it's a MPA (Multi Page Application), Loading between the pages stresses some users. In this case, We concluded to use preloaders to have a interactive loading.
-  In Astro, it's not possible to pass data between the pages. For that we have decided to use [Nanostores Persistent](https://www.npmjs.com/package/@nanostores/persistent)
