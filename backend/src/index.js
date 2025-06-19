const { Medusa } = require('@medusajs/medusa');
const path = require('path');

// Initialize the Medusa server
async function bootstrap() {
  try {
    // Create a new Medusa instance
    const app = new Medusa({
      // Path to your Medusa config file
      config: {
        projectConfig: {
          // Your project configuration overrides go here
          // This will be merged with the configuration from medusa-config.js
        },
      },
    });

    // Start the server
    const { port } = await app.start();
    console.log(`🚀 Server is running on http://localhost:${port}`);
  } catch (error) {
    console.error('❌ Error starting server:', error);
    process.exit(1);
  }
}

// Start the application
bootstrap();
