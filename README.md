# FollowThrough Chrome Extension

A Chrome extension that automates sprint planning follow-through by turning meeting transcripts into Jira tickets.

## 🎨 Design System Implementation

This project implements a complete design system based on the specifications in `guides/theme.md`, optimized for Chrome extension development.

### Theme Features

- **Complete Color Palette**: Primary, secondary, success, warning, error, muted, dark, light, white, and border colors
- **Typography System**: IBM Plex Sans with defined scale (h1-h4, body, small, caption)
- **Component Library**: Pre-built buttons, cards, inputs, alerts with consistent styling
- **8px Spacing System**: Consistent spacing units for visual harmony
- **Chrome Extension Optimized**: Max-width and sizing optimized for extension popups

### Available Components

#### Buttons
```tsx
<button className="btn btn-primary">Primary Action</button>
<button className="btn btn-secondary">Secondary Action</button>
<button className="btn btn-success">Success Action</button>
<button className="btn btn-warning">Warning Action</button>
<button className="btn btn-danger">Danger Action</button>

// Size variants
<button className="btn btn-sm btn-primary">Small</button>
<button className="btn btn-primary">Medium (default)</button>
<button className="btn btn-lg btn-primary">Large</button>
```

#### Cards
```tsx
<div className="card">
  <div className="card-body">
    <h3>Card Title</h3>
    <p>Card content</p>
  </div>
</div>
```

#### Alerts
```tsx
<div className="alert alert-success">Success message</div>
<div className="alert alert-warning">Warning message</div>
<div className="alert alert-error">Error message</div>
```

#### Form Elements
```tsx
<input type="text" className="input" placeholder="Text input" />
<textarea className="input" placeholder="Textarea"></textarea>
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## 📋 MVP Roadmap

Based on `guides/mvp-scope.md`, the development roadmap includes:

### Week 1-2: Setup & UI Shell ✅
- [x] Chrome extension scaffold with Vite + React + TypeScript
- [x] Complete design system implementation
- [x] Tailwind v4 configuration with theme
- [ ] Google Calendar integration (OAuth2)
- [ ] Notification system for meeting reminders

### Week 3: Transcripts & Task Generation
- [ ] Manual transcript upload (.txt/.docx)
- [ ] Google Drive integration for transcript fetching
- [ ] Transcript parser for task generation
- [ ] AI/LLM integration for task extraction

### Week 4: Task Review & Jira Integration
- [ ] Task review UI with edit/approve functionality
- [ ] Jira REST API integration (OAuth2/PAT)
- [ ] Task creation in Jira with proper formatting
- [ ] Success/failure feedback system

### Week 5: Testing & Polish
- [ ] End-to-end testing with real meetings
- [ ] UX improvements and error handling
- [ ] Performance optimization
- [ ] User guidance and tooltips

### Week 6: Launch Preparation
- [ ] Chrome Web Store packaging
- [ ] Landing page creation
- [ ] User onboarding flow
- [ ] Analytics and feedback collection

## 🏗️ Architecture

```
src/
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── services/           # API integrations (Google, Jira)
├── utils/              # Helper functions
├── types/              # TypeScript type definitions
├── App.tsx             # Main application component
├── index.css           # Global styles and theme
└── main.tsx            # Application entry point
```

## 🎯 Next Steps

1. **Chrome Extension Manifest**: Create `manifest.json` for Chrome extension
2. **Component Library**: Build reusable components using the theme system
3. **API Integrations**: Implement Google Calendar and Jira APIs
4. **State Management**: Add context/state management for data flow
5. **Background Scripts**: Create service workers for Chrome extension functionality

## 🧪 Development Notes

- The current `App.tsx` serves as a theme showcase and development reference
- All theme colors, typography, and spacing are defined in `tailwind.config.js`
- Component styles are in `src/index.css` using Tailwind's `@layer` system
- Use the theme demo to test components during development

## 📱 Chrome Extension Setup

To convert this to a Chrome extension:

1. Add `manifest.json` with extension configuration
2. Update build process for extension packaging
3. Implement popup, background, and content scripts as needed
4. Configure permissions for Google Calendar and Jira APIs

---

**Target**: Transform sprint planning meetings into actionable Jira tickets with minimal manual effort.
