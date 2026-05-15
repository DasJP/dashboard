>What is the difference between react-router-dom and react-router?
**React Router**
Handles navigation between pages without reloading.

react-router -> core routing logic (framework agnostic)
react-router-dom -> react-router + browser-specific features (reading URLs, using browser history)

Docs: reactrouter.com

>What `<Navigate to="/overview" replace />` does

When someone visits the root URL /, there is no content there — it would show a blank page. Navigate immediately redirects them to /overview.

replace means the redirect replaces the current history entry instead of adding a new one. Without it, pressing the browser back button would send the user back to / which would immediately redirect forward again — an infinite loop. replace prevents that.

>