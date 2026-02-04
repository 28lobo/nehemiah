# Refactor `src/app/page.tsx` into Smaller Components

## 1. Overview
This track focuses on refactoring the monolithic `src/app/page.tsx` file by extracting distinct UI sections into smaller, reusable, and more maintainable components. The primary goals are to improve code readability and organization, enhance maintainability and reduce technical debt, enable better reusability of components, and potentially improve performance by enabling better component-level caching or lazy loading.

## 2. Functional Requirements

### 2.1 Component Extraction
The following sections must be extracted from `src/app/page.tsx` into their respective files:
-   **Header:** Extract the `<header>` element into `src/components/layout/Header.tsx`.
-   **Footer:** Extract the `<footer>` element into `src/components/layout/Footer.tsx`.
-   **Masonry Grid Section:** Extract the Masonry Grid section into `src/components/home/MasonryGrid.tsx`.
-   **News Ticker Section:** Extract the News Ticker section into `src/components/home/NewsTicker.tsx`.
-   **Category Chips Section:** Extract the Category Chips section into `src/components/home/CategoryChips.tsx`.

### 2.2 `src/app/page.tsx` Update
After extraction, `src/app/page.tsx` must be updated to import and use these new components cleanly, maintaining the original layout and visual appearance.

### 2.3 News Ticker Functionality
The `NewsTicker.tsx` component must implement an infinite horizontal scroll (marquee) using pure CSS, ensuring overflowed text is readable. The animation should pause on hover. No external JavaScript libraries are to be used for this functionality.

### 2.4 Category Chips Functionality
For this refactor track, the `CategoryChips.tsx` component should render the category chips as static UI components (buttons) exactly as they appear in the current prototype. No complex filtering logic or dropdown functionality is to be implemented within this track.

## 3. Non-Functional Requirements
-   **Readability:** The refactored codebase should be easier to read and understand.
-   **Maintainability:** Changes to individual sections should be isolated to their respective components, improving maintainability.
-   **Reusability:** The extracted components should be designed for potential reuse across the application.
-   **Performance:** The refactoring should not negatively impact existing performance, and ideally, lay groundwork for future performance optimizations.
-   **Adherence to Conventions:** All new and modified code must adhere to existing project conventions (e.g., formatting, naming, style).

## 4. Acceptance Criteria
-   The `<header>` element is successfully moved to `src/components/layout/Header.tsx`.
-   The `<footer>` element is successfully moved to `src/components/layout/Footer.tsx`.
-   The Masonry Grid section is successfully moved to `src/components/home/MasonryGrid.tsx`.
-   The News Ticker section is successfully moved to `src/components/home/NewsTicker.tsx`.
-   The News Ticker component (`NewsTicker.tsx`) displays an infinitely scrolling horizontal marquee using pure CSS that pauses on hover.
-   The Category Chips section is successfully moved to `src/components/home/CategoryChips.tsx`.
-   The Category Chips component (`CategoryChips.tsx`) renders static UI components without any new interactive filtering logic.
-   `src/app/page.tsx` imports and utilizes the new `Header`, `Footer`, `MasonryGrid`, `NewsTicker`, and `CategoryChips` components.
-   The application's visual appearance and existing functionality remain identical to the state before refactoring.
-   No external JavaScript libraries are introduced for the News Ticker's marquee functionality.

## 5. Out of Scope
-   Implementing complex filtering or dropdown logic for the Category Chips.
-   Any changes to the existing data fetching or state management for the components beyond what is necessary for extraction.
-   Introduction of new features not directly related to the component extraction and reusability.
