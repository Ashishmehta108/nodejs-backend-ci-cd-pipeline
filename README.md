# Node.js CI/CD Pipeline (Render Deployment)

This project demonstrates a simple Node.js Express app with a GitHub Actions CI/CD pipeline that automatically deploys to Render on every push to `main`.

## Steps

1. Push to `main`.
2. GitHub Actions runs tests, lint, and deploys via Render API.
3. Deployment completes on your Render service.

### Environment variables (GitHub Secrets)

- `RENDER_API_KEY` — your Render API key
- `RENDER_SERVICE_ID` — your Render service ID

### Local Development

```bash
npm install
npm start
```
