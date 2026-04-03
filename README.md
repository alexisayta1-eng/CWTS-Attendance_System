# ROTC Attendance System - Deployment Guide

This project is a **Static Frontend** application that uses **Cloud Firestore (Firebase)** as its backend. It does not require a Node.js server.

## 🛡️ Architecture
-   **Frontend**: Pure HTML, CSS, and Vanilla JavaScript.
-   **Backend**: Google Firebase (Cloud Storage & NoSQL Database).
-   **Authentication**: Admin and Officer access controlled via credentials.

---

## 🚀 Deployment Options

### 1. Firebase Hosting (Recommended)
Since your project already uses Firebase, this is the easiest and most integrated option.
1.  **Install Firebase CLI**: `npm install -g firebase-tools`
2.  **Login**: `firebase login`
3.  **Initialize**: `firebase init` (Select Hosting, then use `public` as your directory).
4.  **Deploy**: `firebase deploy`

### 1. Render (Recommended)
I have added a `render.yaml` file to your project root to automate the deployment.
1.  **Connect to GitHub**: Push your project to a GitHub repository.
2.  **Create Blueprint**: Go to **Blueprints** on Render and connect your repository.
3.  **Deploy**: Render will read the `render.yaml` and automatically configure:
    -   **Publish Directory**: `public`
    -   **Clean URLs**: You can access the system at `/` (Student), `/admin`, or `/scanner`.

Alternatively, if you create a **Static Site** manually:
1.  Set the **Build Command** to `""` (leave blank).
2.  Set the **Publish Directory** to `public`.

### 3. Vercel / GitHub Pages
If you use GitHub Pages or Vercel:
1.  Simply push your code to a repository.
2.  Configure the build settings (Vercel) or the Pages source branch (GitHub) to point to the `public/` folder.

---

## 📱 PWA Instructions
The system is built as a **Progressive Web App (PWA)**.
1.  Once deployed on HTTPS, visitors will see an "Install App" button in their browser (Chrome/Edge/Safari).
2.  The app works offline for viewing student QR codes (after they have been loaded at least once).

---

## ⚙️ Project Structure
-   `public/index.html`: Student Portal & Entry Point.
-   `public/admin.html`: Registration & Management.
-   `public/officer.html`: QR Scanner Interface.
-   `public/firebase-config.js`: Central Backend Configuration.
