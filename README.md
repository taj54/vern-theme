# Varna Theme

**Varna Theme** is a Visual Studio Code extension that provides an elegant, sleek, and modern dark color theme for your editor.

---

## Features

- Carefully crafted dark color palette for comfortable coding.
- Syntax highlighting for a wide range of languages and file types.
- Custom styling for editor UI elements and tokens.
- Two theme definitions included for experimentation and customization.

---

## Getting Started

### Installation

1. Clone or download this repository.
2. Open the folder in Visual Studio Code.
3. Press `F5` to launch a new Extension Development Host window with the theme loaded.
4. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`), type `Color Theme`, and select **Varna Dark**.

### Manual Installation

- Copy the extension folder to your VS Code extensions directory:  
  `<user home>/.vscode/extensions`
- Restart VS Code and select the theme as above.

---

## File Structure

- `package.json`: Extension manifest, registers the theme and metadata.
- `themes/Varna Dark-color-theme.json`: Main Varna Dark theme definition.
- `varna-color-theme.json`: Additional theme definition for reference or development.
- `CHANGELOG.md`: Changelog for tracking updates.
- `README.md`: This file.
- `vsc-extension-quickstart.md`: Quickstart guide for extension development.
- `.vscode/launch.json`: VS Code launch configuration for extension development.
- `.vscodeignore`: Files to exclude from the published extension.

---

## Customization

You can modify the color palette and token styles by editing the theme JSON files:

- Main theme: `themes/Varna Dark-color-theme.json`
- Alternate theme: `varna-color-theme.json`

Changes are applied automatically in the Extension Development Host window.

---

## Resources

- [VS Code Color Theme Guide](https://code.visualstudio.com/api/extension-guides/color-theme)
- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

---

## License

See repository for license details.

---

**Enjoy coding