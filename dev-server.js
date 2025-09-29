import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import handler from './api/create-loi-document.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
dotenv.config({ path: '.env.local' }); // Also load .env.local if it exists

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Wrap the Vercel function handler for Express
app.post('/api/create-loi-document', (req, res) => {
    // Create mock Vercel request/response objects
    const mockReq = {
        body: req.body,
        method: req.method,
        headers: req.headers
    };

    const mockRes = {
        status: (code) => {
            res.status(code);
            return mockRes;
        },
        json: (data) => {
            res.json(data);
        },
        end: () => {
            res.end();
        },
        setHeader: (key, value) => {
            res.setHeader(key, value);
        }
    };

    // Call the Vercel function handler
    handler(mockReq, mockRes);
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        apiKeyConfigured: !!process.env.SIGNWELL_API_KEY,
        environment: process.env.NODE_ENV || 'development'
    });
});

app.listen(PORT, () => {
    console.log(`API server running on http://localhost:${PORT}`);
    console.log(`SignWell API key configured: ${!!process.env.SIGNWELL_API_KEY}`);
    console.log(`\nTo test the API, run the frontend with: npm run dev:simple`);
});