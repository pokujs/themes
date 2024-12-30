# Main Color Palette for the Poku Theme 🐷🎨

This document describes the theme’s core color palette. It serves as a guide for developers who want to adapt the **Poku Theme** to other editors, variations or tools beyond **VSCode**.

---

## 1. Backgrounds and Main Surfaces

| Purpose                       | Color     | Notes                                                  |
| ----------------------------- | --------- | ------------------------------------------------------ |
| **Editor / Code**             | `#2c313b` | Primary background where the code is displayed.        |
| **Sidebar / Explorer**        | `#1b1f25` | Background for the sidebar and the file explorer.      |
| **Title Bar / Inactive Tabs** | `#22242c` | Background for the window title bar and inactive tabs. |
| **Status Bar (normal)**       | `#443ca7` | Bottom status bar (normal mode).                       |

These form the **dark contrast** base of the theme.

---

## 2. Text and General Elements

| Purpose                  | Color     | Notes                                                             |
| ------------------------ | --------- | ----------------------------------------------------------------- |
| **Primary Text**         | `#babcc4` | Main text color inside the editor.                                |
| **Secondary Text**       | `#96a3b6` | Used in the sidebar items, breadcrumb, etc.                       |
| **Comments**             | `#596170` | Used for code comments, docblocks, etc.                           |
| **Numbers / Units**      | `#80cc8f` | Numeric constants, CSS units, etc. (often **bold**).              |
| **Keywords**             | `#a29bfe` | Covers `keyword`, `storage`, `control`, etc. (sometimes italic).  |
| **Strings / Insertions** | `#98aec9` | Strings, template strings, inserted code blocks (DIFF).           |
| **Functions / Methods**  | `#c5bfff` | Function names, `meta.function-call`, methods, constructors, etc. |
| **Variables**            | `#8dc0ff` | Local/global variables, placeholders in strings.                  |
| **Logical Operators**    | `#9294ff` | Logical / comparison operators (`&&`, `==`, etc.).                |

These colors appear throughout **syntax highlighting**, driving legibility and consistent emphasis.

---

## 3. Accents / Specific Highlights

| Purpose                      | Color       | Notes                                                                     |
| ---------------------------- | ----------- | ------------------------------------------------------------------------- |
| **Text Selection**           | `#9044db`   | Selection background (in JSON it may appear as `#3b54a583`).              |
| **Bracket Pair Colors**      | various     | For example: `#c690df`, `#c086db`, `#b77cd2`, `#a16aba`, `#9e63ba`.       |
| **Search Highlight**         | `#5100ffdc` | Background for find match highlighting.                                   |
| **Errors / Invalid**         | `#ff6e97`   | Used for `invalid.illegal`, lint errors, etc.                             |
| **Warnings**                 | `#e3e3b369` | Typically for diagnostic warnings.                                        |
| **Active Links**             | `#688eff`   | `editorLink.activeForeground`.                                            |
| **Pink Accent / Decoration** | `#fd9fff`   | Used in Svelte special, SCSS references, and other prominent decorations. |
| **Blue Accent (“Pure”)**     | `#38a2ff`   | Sometimes used for operators, methods, or italic scopes.                  |

These vibrant shades intensify the visual experience, highlighting errors, selections, links, etc.

---

## 4. Other Key Colors

- **Line Numbers**
  - Inactive: `#51647d`
  - Active: `#948ef9`
- **Punctuation / Separators**
  - Often vary between `#899cc3`, `#328bf1`, `#4974e0`, etc.
- **Status Bar**
  - Normal: `#443ca7`
  - Debugging: `#00fbffdc`
- **Activity Bar Badge**
  - Background: `#ffd3ed`
  - Foreground: `#821469`
- **Diff Editor**
  - Removed background: `#e323902d`
  - Inserted background: `#45cf962d`

---

## 5. Usage Recommendations

1. **Maintain the dark background** (`#2c313b` or similar) to preserve contrast.
2. **Use `#babcc4`** as the base text color to ensure readability.
3. **Follow the highlight logic**:
   - Comments in `#596170`
   - Strings in `#98aec9`
   - Keywords in `#a29bfe`
   - Functions in `#c5bfff`
   - Errors in `#ff6e97`
4. **Use the accent colors** (`#fd9fff`, `#38a2ff`, `#89c4f4`, etc.) sparingly to keep a cohesive appearance.
5. **Consider semi-transparent colors** (`#xxxxxxyy`) for selections and highlights, adding subtle layers of contrast.

---

## 6. Theme Essence

The Poku Theme is defined by:

- **Dark background** with **light text**
- **Soft comments** in a subtle blue-gray
- **Lavender/purple keywords**
- **Strings / functions** in bluish-lilac tones
- **Selections** and **errors** highlighted in vibrant purple/pink
- **Occasional accents** in magenta and bright blues

This ensures good readability across HTML, CSS, JS/TS, Vue, Svelte, Markdown, etc. The theme’s identity remains consistent in other editors as long as you maintain the core contrast and color logic.
