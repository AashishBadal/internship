# Framework Core & UI Integration Documentation

## 1. Task Overview
**Goal:** Initialize the project with a clean integration of Next.js (App Router) and Material-UI (MUI).
**Priority:** Modularity, reusability, and adherence to specific coding standards (LOC limits).

## 2. Technology Stack
- **Framework:** Next.js 16.1.6 (App Router)
- **UI Library:** Material-UI (v7)
- **Styling Engine:** Emotion (MUI default) & Tailwind CSS v4
- **Language:** TypeScript

## 3. Core Integration Steps

### 3.1 Project Initialization
The project was initialized using `create-next-app` with TypeScript and Tailwind CSS enabled.

### 3.2 Dependency Installation
The following core packages were installed to support MUI:
```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

### 3.3 Theme Configuration
A centralized theme configuration was created to enforce design consistency.
- **File:** `lib/theme/theme.ts`
- **Details:**
    - Defines `lightTheme` and `darkTheme` (ready for toggle implementation).
    - Customizes color palette (Primary: Blue, Secondary: Pink/Red).
    - overrides `MuiButton` to disable uppercase text transform and set font weight.
    - Sets global border radius to 8px.

### 3.4 Theme Provider Setup
To inject the theme into the application, a client-side wrapper component was created.
- **File:** `lib/theme/ThemeProvider.tsx`
- **Key Features:**
    - Marked as `'use client'` to allow React Context usage.
    - Wraps content in MUI `ThemeProvider` using the custom `lightTheme`.
    - Includes `CssBaseline` to normalize styles across browsers.

### 3.5 Root Layout Integration
The global layout wraps the entire application with the necessary providers and shell structure.
- **File:** `app/layout.tsx`
- **Integration:**
    - Imports and applies the `ThemeProvider`.
    - Wraps children in `AppLayout` for consistent page structure.
    - Sets metadata for SEO (Title, Description, Keywords).
    - Loads `Inter` font from `next/font/google`.

### 3.6 Layout Component Architecture
A reusable shell component was built to handle navigation and responsiveness.
- **File:** `components/layout/AppLayout.tsx`
- **Structure:**
    - **Header:** Sticky `AppBar` with logo, desktop navigation, and action icons (Search, Profile, Cart).
    - **Mobile Navigation:** `Drawer` component controlled by a hamburger menu interactable state.
    - **Main Content:** `Container` component that wraps page content, ensuring max-width and padding.
    - **Footer:** Simple footer section at the bottom.
- **Compliance:**
    - kept within the 160 LOC limit (approx. 108 lines).
    - Uses strict typing (`AppLayoutProps`).

## 4. Code Quality Analysis & Proofs

### 4.1 MUI Implementation Evidence
MUI is integrated at the root level to ensure all components have access to the theme context.
- **Registration:** `app/layout.tsx` wraps the entire app in `ThemeProvider`.
- **Context:** `lib/theme/ThemeProvider.tsx` implements the localized Material UI context.
- **Usage:** Components verify integration by importing from `@mui/material`. For example, `components/layout/Navigation.tsx` uses `Box`, `List`, `ListItem`.

### 4.2 Modularity and Reusability
The codebase demonstrates modularity by breaking down complex UIs into smaller, focused components.
- **AppLayout.tsx (108 LOC):** Acts as a shell, delegating specific UI parts to sub-components.
- **Navigation.tsx (80 LOC):** Designed to be reusable. It creates the menu list once (`navItems`) and renders it responsibly. It accepts `mobile` and `onClose` props, allowing the *same component* to be used in both the desktop Header and the mobile request Drawer.
  - *Proof:* Used in `AppLayout` line 64 (desktop) and line 91 (mobile).

### 4.3 LOC Limit Verification (<160 Lines)
All core components have been verified to stay well under the 160 lines of code limit, promoting readability and maintainability.

| Component | File Path | Line Count | Status |
|-----------|-----------|------------|--------|
| **Root Layout** | `app/layout.tsx` | 36 lines | ✅ Pass |
| **Theme Provider** | `lib/theme/ThemeProvider.tsx` | 26 lines | ✅ Pass |
| **App Layout** | `components/layout/AppLayout.tsx` | 108 lines | ✅ Pass |
| **Navigation** | `components/layout/Navigation.tsx` | 80 lines | ✅ Pass |
| **Header** | `components/layout/Header.tsx` | 16 lines | ✅ Pass |
| **Home Page** | `app/page.tsx` | 107 lines | ✅ Pass |

## 5. Verification
To verify the integration:
1. Run the development server:
   ```bash
   npm run dev
   ```
2. Navigate to `http://localhost:3000`.
3. Check:
   - Font is loaded (Inter).
   - MUI styles are applied (Blue primary color).
   - Responsive design works (Mobile drawer opens).
   - No console errors regarding theme context.
