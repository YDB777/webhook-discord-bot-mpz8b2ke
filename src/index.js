process.on('uncaughtException', (err) => {
  console.error('SYSTEM CRASHED ON STARTUP:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION AT:', promise, 'REASON:', reason);
}); 1511974725625053254
