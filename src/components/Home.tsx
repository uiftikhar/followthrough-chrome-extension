function Home() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="card">
        <div className="card-body">
          <h2 className="mb-3">Welcome to FollowThrough</h2>
          <p className="mb-4">
            Transform your sprint planning meetings into actionable Jira tickets with minimal manual effort.
            This Chrome extension automates the follow-through process by parsing meeting transcripts and 
            generating structured tasks.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
              Chrome Extension
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success text-white">
              MVP Ready
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-warning text-dark">
              In Development
            </span>
          </div>
        </div>
      </div>

      {/* MVP Overview */}
      <div className="card">
        <div className="card-body">
          <h3 className="mb-3">MVP Features</h3>
          <p className="mb-4 text-muted">
            Core functionality planned for the initial release:
          </p>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium">Google Calendar Integration</h4>
                <p className="text-sm text-muted">Detect upcoming meetings and send reminders to enable transcripts</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium">Transcript Processing</h4>
                <p className="text-sm text-muted">Upload and parse meeting transcripts to extract actionable tasks</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium">Task Review Interface</h4>
                <p className="text-sm text-muted">Review and edit generated tasks before pushing to Jira</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium">Jira Integration</h4>
                <p className="text-sm text-muted">Automatically create properly formatted tickets in your Jira project</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development Status */}
      <div className="card">
        <div className="card-body">
          <h3 className="mb-3">Development Progress</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Design System & UI Foundation</span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success text-white">
                Complete
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Chrome Extension Setup</span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-warning text-dark">
                In Progress
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Google Calendar Integration</span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-white">
                Planned
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Transcript Processing</span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-white">
                Planned
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Jira Integration</span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-white">
                Planned
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <div className="card-body">
          <h3 className="mb-3">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="btn btn-primary text-left">
              <div>
                <div className="font-medium">Upload Transcript</div>
                <div className="text-sm opacity-75">Process a meeting transcript manually</div>
              </div>
            </button>
            <button className="btn btn-secondary text-left">
              <div>
                <div className="font-medium">Connect Calendar</div>
                <div className="text-sm opacity-75">Set up Google Calendar integration</div>
              </div>
            </button>
            <button className="btn btn-secondary text-left">
              <div>
                <div className="font-medium">Configure Jira</div>
                <div className="text-sm opacity-75">Connect your Jira workspace</div>
              </div>
            </button>
            <button className="btn btn-secondary text-left">
              <div>
                <div className="font-medium">View Settings</div>
                <div className="text-sm opacity-75">Customize extension preferences</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 