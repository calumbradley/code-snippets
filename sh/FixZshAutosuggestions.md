# Fix Zsh Autosuggestions Not Working

# 1. Ensure zsh-autosuggestions is installed

```bash
brew list | grep zsh-autosuggestions
```

# If not installed, install it with Homebrew

```bash
brew install zsh-autosuggestions
```

# 2. Check your .zshrc Configuration

# Open .zshrc file

```bash
code ~/.zshrc -r
```

# Add the following line to load zsh-autosuggestions

```bash
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
```

# If using Oh My Zsh, ensure it's included in the plugins array

# plugins=(git zsh-autosuggestions)

# 3. Reload the Zsh Configuration

```bash
source ~/.zshrc
```

# 4. Check for Conflicts

# Disable other plugins or configurations temporarily in .zshrc to isolate the issue

# 5. Restart Your Terminal

# Close and reopen your terminal application

# 6. Ensure Zsh is the Default Shell

```bash
echo $SHELL
```

# If not set to /bin/zsh, set it as the default shell

```bash
chsh -s /bin/zsh
```

# 7. Check for Errors

```bash
zsh -xv
```

# 8. Update Zsh and Plugins

```bash
brew update
brew upgrade zsh zsh-autosuggestions
```
