# Implementation Plan: Migrate Homepage Prototype

## Phase 1: Component Scaffolding & Initial Migration
- [ ] Task: Create empty component files
    - [ ] Create `components/layout/Header.tsx`
    - [ ] Create `components/layout/Footer.tsx`
    - [ ] Create `components/home/MasonryGrid.tsx`
- [ ] Task: Move prototype HTML to `app/page.tsx`
    - [ ] Read the content of `prototypes/homepage-variant-2.html`.
    - [ ] Replace the content of `app/page.tsx` with the prototype's HTML, adapting it for JSX syntax.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Component Scaffolding & Initial Migration' (Protocol in workflow.md)

## Phase 2: Component Implementation & TDD
- [ ] Task: Implement Header Component
    - [ ] Create a new test file `components/layout/Header.test.tsx`.
    - [ ] Write a failing test to check for the Header component's basic rendering.
    - [ ] Extract the header HTML from `app/page.tsx` into the `Header.tsx` component.
    - [ ] Run tests to confirm they now pass.
- [ ] Task: Implement Footer Component
    - [ ] Create a new test file `components/layout/Footer.test.tsx`.
    - [ ] Write a failing test to check for the Footer component's basic rendering.
    - [ ] Extract the footer HTML from `app/page.tsx` into the `Footer.tsx` component.
    - [ ] Run tests to confirm they now pass.
- [ ] Task: Implement MasonryGrid Component
    - [ ] Create a new test file `components/home/MasonryGrid.test.tsx`.
    - [ ] Write a failing test to check for the MasonryGrid component's basic rendering.
    - [ ] Extract the masonry grid HTML from `app/page.tsx` into the `MasonryGrid.tsx` component.
    - [ ] Run tests to confirm they now pass.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Component Implementation & TDD' (Protocol in workflow.md)

## Phase 3: Styling Extraction and Integration
- [ ] Task: Identify and Extract Tailwind CSS Configuration
    - [ ] Analyze the Tailwind CSS classes used in the components to identify custom configurations.
    - [ ] Move any custom theme, plugins, or other configurations to `tailwind.config.ts`.
- [ ] Task: Extract Global Styles
    - [ ] Identify any remaining styles that should be global and move them to `globals.css`.
- [ ] Task: Refactor Components
    - [ ] Update the class names in the components to use the newly defined global styles and Tailwind config.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Styling Extraction and Integration' (Protocol in workflow.md)

## Phase 4: Final Integration and Cleanup
- [ ] Task: Integrate Components into Homepage
    - [ ] Modify `app/page.tsx` to import and render the `Header`, `MasonryGrid`, and `Footer` components.
    - [ ] Remove the static HTML that has been replaced by the components.
- [ ] Task: Final Verification
    - [ ] Manually inspect the homepage to ensure it is visually identical to the original prototype.
    - [ ] Verify responsiveness across different screen sizes.
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Final Integration and Cleanup' (Protocol in workflow.md)
