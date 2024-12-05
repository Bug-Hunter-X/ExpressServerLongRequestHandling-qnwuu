# Node.js Express Server Hang on Long Requests

This repository demonstrates a common issue in Node.js Express servers: hanging on long-running requests without proper timeout handling.  The example showcases a server that simulates a 5-second delay in responding.  Without proper handling, requests exceeding a reasonable timeframe can cause the server to become unresponsive.

## Problem

The `bug.js` file contains an Express server with a route that introduces a 5-second delay. In a production environment, such delays might occur due to database queries, external API calls, or complex computations.  If many requests hit this endpoint concurrently and exceed the default timeout or no timeout is set, the server's event loop can become blocked, leading to unresponsive behavior.

## Solution

The `bugSolution.js` file demonstrates how to address this issue using request timeouts.  By setting a reasonable timeout value, the server can gracefully handle long-running requests that exceed the specified limit, preventing server hangs and improving overall responsiveness.