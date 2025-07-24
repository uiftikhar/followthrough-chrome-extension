function Theme() {
  return (
    <div className="space-y-6">
      {/* Colors */}
      <div className="card">
        <div className="card-body">
          <h3 className="mb-4">Color Palette</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Primary', color: 'bg-primary', text: 'text-white' },
              { name: 'Secondary', color: 'bg-secondary', text: 'text-dark' },
              { name: 'Success', color: 'bg-success', text: 'text-white' },
              { name: 'Warning', color: 'bg-warning', text: 'text-dark' },
              { name: 'Error', color: 'bg-error', text: 'text-white' },
              { name: 'Muted', color: 'bg-muted', text: 'text-white' },
              { name: 'Dark', color: 'bg-dark', text: 'text-white' },
              { name: 'Light', color: 'bg-light border border-border', text: 'text-dark' },
            ].map(({ name, color, text }) => (
              <div key={name} className={`p-4 rounded-md ${color} ${text}`}>
                <div className="font-medium">{name}</div>
                <div className="text-sm opacity-75">Color swatch</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="card">
        <div className="card-body">
          <h3 className="mb-4">Buttons</h3>
          <div className="space-y-4">
            <div>
              <h4 className="mb-3">Button Variants</h4>
              <div className="flex flex-wrap gap-3">
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-success">Success</button>
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-danger">Danger</button>
              </div>
            </div>
            <div>
              <h4 className="mb-3">Button Sizes</h4>
              <div className="flex flex-wrap gap-3 items-center">
                <button className="btn btn-sm btn-primary">Small</button>
                <button className="btn btn-primary">Medium (Default)</button>
                <button className="btn btn-lg btn-primary">Large</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Elements */}
      <div className="card">
        <div className="card-body">
          <h3 className="mb-4">Form Elements</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Input Field</label>
              <input
                type="text"
                placeholder="Enter text here..."
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Textarea</label>
              <textarea
                placeholder="Enter description..."
                rows={3}
                className="input resize-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="card">
        <div className="card-body">
          <h3 className="mb-4">Alerts</h3>
          <div className="space-y-3">
            <div className="alert alert-success">
              Tasks successfully created in Jira!
            </div>
            <div className="alert alert-warning">
              Please review the generated tasks before pushing to Jira.
            </div>
            <div className="alert alert-error">
              Failed to connect to Jira. Please check your credentials.
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="card">
        <div className="card-body">
          <h3 className="mb-4">Typography Scale</h3>
          <div className="space-y-4">
            <div>
              <h1>Heading 1 - Modal or page title</h1>
              <small className="text-muted">36px / 600 weight</small>
            </div>
            <div>
              <h2>Heading 2 - Section title</h2>
              <small className="text-muted">30px / 600 weight</small>
            </div>
            <div>
              <h3>Heading 3 - Card or block heading</h3>
              <small className="text-muted">24px / 500 weight</small>
            </div>
            <div>
              <h4>Heading 4 - Label inside modals</h4>
              <small className="text-muted">20px / 500 weight</small>
            </div>
            <div>
              <p>Body text - Standard body copy using IBM Plex Sans</p>
              <small className="text-muted">16px / 400 weight</small>
            </div>
            <div>
              <small>Small text - Helper text, tooltips</small>
              <div className="text-xs text-muted">14px / 400 weight</div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Variables Reference */}
      <div className="card">
        <div className="card-body">
          <h3 className="mb-4">CSS Variables</h3>
          <p className="text-sm text-muted mb-4">
            All theme values are available as CSS variables for custom styling:
          </p>
          <div className="bg-gray-50 p-4 rounded-md">
            <pre className="text-xs text-gray-700 overflow-x-auto">
{`.my-component {
  background-color: var(--color-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  font-family: var(--font-family-sans);
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Theme 