# Implementation Plan: Refactor `src/app/page.tsx`

This plan outlines the steps to refactor `src/app/page.tsx` into smaller, reusable components, adhering to the specified goals and the project's workflow.

## Phase 1: Setup and Header/Footer Extraction

- [ ] Task: Initial setup and verification
    - [ ] Set up a new git branch for this feature.
    - [ ] Ensure all existing tests pass and the application builds without errors.
    - [ ] Familiarize with the current structure of `src/app/page.tsx`.
- [ ] Task: Extract Header component
    - [ ] Write failing tests for the `Header` component (e.g., checks for rendering specific elements).
    - [ ] Implement `src/components/layout/Header.tsx` by moving the `<header>` element and its children from `src/app/page.tsx`.
    - [ ] Update `src/app/page.tsx` to import and use the new `Header` component.
    - [ ] Ensure tests pass and the application's header renders correctly.
    - [ ] Refactor and commit changes.
- [ ] Task: Extract Footer component
    - [ ] Write failing tests for the `Footer` component.
    - [ ] Implement `src/components/layout/Footer.tsx` by moving the `<footer>` element and its children from `src/app/page.tsx`.
    - [ ] Update `src/app/page.tsx` to import and use the new `Footer` component.
    - [ ] Ensure tests pass and the application's footer renders correctly.
    - [ ] Refactor and commit changes.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Setup and Header/Footer Extraction' (Protocol in workflow.md)

## Phase 2: Home Component Extraction (Masonry, News Ticker, Category Chips)

- [ ] Task: Extract Masonry Grid component
    - [ ] Write failing tests for the `MasonryGrid` component.
    - [ ] Implement `src/components/home/MasonryGrid.tsx` by moving the Masonry Grid section from `src/app/page.tsx`.
    - [ ] Update `src/app/page.tsx` to import and use the new `MasonryGrid` component.
    - [ ] Ensure tests pass and the Masonry Grid renders correctly.
    - [ ] Refactor and commit changes.
- [ ] Task: Extract News Ticker component
    - [ ] Write failing tests for the `NewsTicker` component (e.g., checks for structure, presence of marquee elements).
    - [ ] Implement `src/components/home/NewsTicker.tsx` by moving the News Ticker section from `src/app/page.tsx`.
    - [ ] Implement pure CSS infinite horizontal scroll with pause on hover as specified.
    - [ ] Update `src/app/page.tsx` to import and use the new `NewsTicker` component.
    - [ ] Ensure tests pass and the News Ticker functions as expected visually.
    - [ ] Refactor and commit changes.
- [ ] Task: Extract Category Chips component
    - [ ] Write failing tests for the `CategoryChips` component.
    - [ ] Implement `src/components/home/CategoryChips.tsx` by moving the Category Chips section from `src/app/page.tsx`.
    - [ ] Ensure the component acts as a static UI component as specified.
    - [ ] Update `src/app/page.tsx` to import and use the new `CategoryChips` component.
    - [ ] Ensure tests pass and the Category Chips render correctly.
    - [ ] Refactor and commit changes.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Home Component Extraction (Masonry, News Ticker, Category Chips)' (Protocol in workflow.md)

## Phase 3: Final Integration and Cleanup

- [ ] Task: Update `src/app/page.tsx` to use all new components
    - [ ] Review `src/app/page.tsx` to ensure all extracted sections are replaced by their respective component imports.
    - [ ] Verify clean and idiomatic usage of the new components.
- [ ] Task: Final verification and linting
    - [ ] Run all automated tests (unit and integration) to ensure full functionality.
    - [ ] Perform a comprehensive visual check of the application to ensure no regressions.
    - [ ] Run linting and type checks (`npm run lint`, `tsc`) to ensure code quality and adherence to standards.
    - [ ] Address any warnings or errors.
    - [ ] Refactor and commit changes.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Final Integration and Cleanup' (Protocol in workflow.md)
