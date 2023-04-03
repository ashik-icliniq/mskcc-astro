# Best Practices in Astro

### Do's
- Project Structure must be followed as mentioned in https://docs.astro.build/en/core-concepts/project-structure/
- Fetch(...) in astro - This fetch call will be executed at build time, and the data will be available to the component template for generating dynamic HTML.
- Use client directives (or) SSR Hydration only when they is an interactive events in the component.
- Keep the parent component as .astro file for component having both SSR Hydration and static file.
- Analyze pure SSR component and SSR Hydration components foremost .
- Creating a separate component for rendering images can help keep your code organized and improve reusability.
- Always maintain Typescript Strict,
- Using paths in tsconfig.json is generally appreciated within the TypeScript community, as it is considered a best practice for managing module imports in TypeScript projects.
-  Use nanostores to create and maintain stores as per the astro's recommendation.

### Don'ts
- Avoid SSR Hydration as much as possible.
- Avoid fetch method or axios within the react component. Which may end up slowing down the client side.
- Avoid unused large packages such as react-icons which may slow down the page speed on client side even in pure SSR state.
- Avoid Overusing components to prevent complexity.






