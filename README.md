# Insight — Progressive Web App (PWA)

This repository serves the standalone Progressive Web App wrapper for **Insight — Personal Wealth & Portfolio Analytics**.

## How to Deploy to GitHub Pages

1. Create a new public repository on GitHub named `insight`:
   👉 [https://github.com/new](https://github.com/new) (Repository name: `insight`)

2. In your terminal inside this folder (`insight-pwa`), link and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/vaibhavrc1/insight.git
   git push -u origin main
   ```

3. Enable GitHub Pages:
   * Go to **Settings** &rarr; **Pages** in your repository.
   * Under **Branch**, select `main` and folder `/ (root)`.
   * Click **Save**.

4. Your live PWA URL will be:
   👉 **`https://vaibhavrc1.github.io/insight/`**

### Opening in Chrome on Android:
* Open `https://vaibhavchavan1998.github.io/insight/` in Chrome.
* Chrome will detect the manifest and show the **"Install app"** banner / menu option.
* Tap **Install** &rarr; Chrome creates a full **WebAPK** on your phone.
* Launching from your home screen runs **100% full screen with NO URL BAR**.
