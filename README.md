<div align="center">
<img height="200" alt="Poku's Logo" src="./packages/vscode/assets/icon.png">

# Poku Theme ✨

A cute **gothic pastel** theme for [Visual Studio Code](https://github.com/microsoft/vscode).

💡 While [**Poku Test Runner**](https://github.com/wellwelwel/poku) makes testing easier, **Poku**'s theme makes it easy to read your code.

</div>

---

## Compatibilty

> Although it probably works with most languages, these are the languages and frameworks that are manually checked:

- ✅ **JavaScript**, **TypeScript**
  - ✅ **React.js**, **Stelve**, **Vue**
- ✅ **HTML**, **CSS**, **SCSS**, **JSON**, **YAML**, **Markdown**
- ✅ **SQL**, **Bash**
- ✅ **PHP**, **C++**, **Go**, **Python**, **Ruby**, **Rust**

# Main Color Palette 🎨🐷

This document describes the theme’s core color palette. It serves as a guide for developers who want to adapt the **Poku Theme** to other editors, variations or tools beyond **VSCode**.

---

## 🌌 Dark Theme

### 1. Editor Backgrounds and Main Surfaces

| Purpose                       | HEX       | 👨🏻‍🎨                                                       | Notes                                                  |
| ----------------------------- | --------- | -------------------------------------------------------- | ------------------------------------------------------ |
| **Editor / Code**             | `#2c313b` | <img src="./packages/vscode/assets/colors/2c313b.png" /> | Primary background where the code is displayed.        |
| **Title Bar / Inactive Tabs** | `#22242c` | <img src="./packages/vscode/assets/colors/22242c.png" /> | Background for the window title bar and inactive tabs. |
| **Sidebar / Explorer**        | `#1b1f25` | <img src="./packages/vscode/assets/colors/1b1f25.png" /> | Background for the sidebar and the file explorer.      |
| **Status Bar (normal)**       | `#443ca7` | <img src="./packages/vscode/assets/colors/443ca7.png" /> | Bottom status bar (normal mode).                       |
| **Status Bar (debugging)**    | `#8b34be` | <img src="./packages/vscode/assets/colors/8b34be.png" /> | Bottom status bar (debugging mode).                    |

---

### 2. Text and General Elements

| Purpose                          | HEX         | 👨🏻‍🎨                                                         | Notes                                                                      |
| -------------------------------- | ----------- | ---------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Primary Text**                 | `#babcc4`   | <img src="./packages/vscode/assets/colors/babcc4.png" />   | Main text color inside the editor.                                         |
| **Secondary Text**               | `#96a3b6`   | <img src="./packages/vscode/assets/colors/96a3b6.png" />   | Used in the sidebar items, breadcrumb, etc.                                |
| **Strings / Insertions**         | `#98aec9`   | <img src="./packages/vscode/assets/colors/98aec9.png" />   | Strings, template strings, inserted code blocks.                           |
| **Comments**                     | `#596170`   | <img src="./packages/vscode/assets/colors/596170.png" />   | Used for code comments, docblocks, etc.                                    |
| **Logical Operators**            | `#9294ff`   | <img src="./packages/vscode/assets/colors/9294ff.png" />   | Logical / comparison operators (`&&`, `==`, etc.).                         |
| **Keywords**                     | `#a29bfe`   | <img src="./packages/vscode/assets/colors/a29bfe.png" />   | Covers `keyword`, `storage`, `control`, etc. (sometimes italic).           |
| **Functions / Methods**          | `#c5bfff`   | <img src="./packages/vscode/assets/colors/c5bfff.png" />   | Function names, `meta.function-call`, methods, constructors, etc.          |
| **Variables**                    | `#8dc0ff`   | <img src="./packages/vscode/assets/colors/8dc0ff.png" />   | Local/global variables, placeholders in strings.                           |
| **Native properties and values** | `#38a2ff`   | <img src="./packages/vscode/assets/colors/38a2ff.png" />   | Built-in properties _(`this`, `lenght`, `null`, etc.)_.                    |
| **Classes**                      | `#0fb9b1`   | <img src="./packages/vscode/assets/colors/0fb9b1.png" />   | Classes, including **JSX**, **Vue**, **Stelve**, and **Astro** components. |
| **Types**                        | `#0fb9b0d1` | <img src="./packages/vscode/assets/colors/0fb9b0d1.png" /> | Types, annotations, etc. (often _italic_).                                 |
| **Numbers / Units**              | `#80cc8f`   | <img src="./packages/vscode/assets/colors/80cc8f.png" />   | Numeric constants, CSS units, etc. (often **bold**).                       |

These colors appear throughout **syntax highlighting**, driving legibility and consistent emphasis.

---

### 3. Accents / Specific Highlights

| Purpose                      | HEX         | 👨🏻‍🎨                                                         | Notes                                                       |
| ---------------------------- | ----------- | ---------------------------------------------------------- | ----------------------------------------------------------- |
| **Pink Accent / Decoration** | `#fd9fff`   | <img src="./packages/vscode/assets/colors/fd9fff.png" />   | Used in special characters and other prominent decorations. |
| **Errors / Invalid**         | `#ff6e97`   | <img src="./packages/vscode/assets/colors/ff6e97.png" />   | Used for `invalid.illegal`, lint errors, etc.               |
| **Search Highlight**         | `#5100ffdc` | <img src="./packages/vscode/assets/colors/5100ffdc.png" /> | Background for find match highlighting.                     |
| **Active Links**             | `#688eff`   | <img src="./packages/vscode/assets/colors/688eff.png" />   | `editorLink.activeForeground`.                              |

These vibrant shades intensify the visual experience, highlighting errors, selections, links, etc.

---

### 4. Edtior Miscellaneous Colors

| Purpose                     | HEX         | 👨🏻‍🎨                                                         |
| --------------------------- | ----------- | ---------------------------------------------------------- |
| **Line Numbers (Inactive)** | `#51647d`   | <img src="./packages/vscode/assets/colors/51647d.png" />   |
| **Line Numbers (Active)**   | `#948ef9`   | <img src="./packages/vscode/assets/colors/948ef9.png" />   |
| **Notifications (BG)**      | `#ffd3ed`   | <img src="./packages/vscode/assets/colors/ffd3ed.png" />   |
| **Notifications (FG)**      | `#821469`   | <img src="./packages/vscode/assets/colors/821469.png" />   |
| **Diff Editor (Removed)**   | `#e323902d` | <img src="./packages/vscode/assets/colors/e323902d.png" /> |
| **Diff Editor (Inserted)**  | `#45cf962d` | <img src="./packages/vscode/assets/colors/45cf962d.png" /> |

---

### 5. Theme Essence

The **Poku** Theme is defined by:

- **Dark background** with **light text**
- **Soft comments** in a subtle blue-gray
- **Lavender/purple keywords**
- **Strings / functions** in bluish-lilac tones
- **Selections** and **errors** highlighted in vibrant purple/pink
- **Occasional accents** in magenta and bright blues

This ensures good readability across HTML, CSS, JS/TS, Vue, Svelte, Markdown, etc. The theme’s identity remains consistent in other editors as long as you maintain the core contrast and color logic.
