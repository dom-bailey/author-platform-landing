<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Invitation - Author Platform</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
        }

        .form-content {
            padding: 40px 30px;
        }

        .section {
            margin-bottom: 40px;
            padding-bottom: 40px;
            border-bottom: 1px solid #e2e8f0;
        }

        .section:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }

        .section h2 {
            font-size: 1.5rem;
            color: #2d3748;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .section-icon {
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #4a5568;
            font-weight: 500;
        }

        input[type="text"],
        input[type="email"],
        input[type="url"],
        input[type="number"],
        textarea,
        select {
            width: 100%;
            padding: 12px;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
        }

        input:focus,
        textarea:focus,
        select:focus {
            outline: none;
            border-color: #667eea;
        }

        textarea {
            min-height: 120px;
            resize: vertical;
        }

        .checkbox-group {
            display: flex;
            align-items: flex-start;
            margin-bottom: 15px;
        }

        .checkbox-group input[type="checkbox"] {
            margin-right: 10px;
            margin-top: 5px;
        }

        .button-container {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 30px;
        }

        .btn {
            padding: 14px 28px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }

        .btn-cancel {
            background: #e2e8f0;
            color: #4a5568;
        }

        .btn-cancel:hover {
            background: #cbd5e0;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        /* Investor Evidence Section Styles */
        .investor-section {
            background: #f7fafc;
            border-radius: 12px;
            padding: 30px;
            margin-top: 40px;
        }

        .investor-section h2 {
            color: #2d3748;
            margin-bottom: 15px;
        }

        .investor-section p {
            color: #4a5568;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .btn-loi {
            background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
            color: white;
            padding: 14px 28px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 4px 15px rgba(72, 187, 120, 0.4);
        }

        .btn-loi:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(72, 187, 120, 0.5);
        }

        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }

        .modal.active {
            display: flex;
        }

        .modal-content {
            background: white;
            width: 90%;
            max-width: 900px;
            height: 90vh;
            border-radius: 12px;
            position: relative;
            display: flex;
            flex-direction: column;
        }

        .modal-header {
            padding: 20px;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .modal-header h3 {
            font-size: 1.5rem;
            color: #2d3748;
        }

        .modal-close {
            background: none;
            border: none;
            font-size: 28px;
            color: #718096;
            cursor: pointer;
            transition: color 0.3s;
        }

        .modal-close:hover {
            color: #2d3748;
        }

        .modal-body {
            flex: 1;
            padding: 20px;
            overflow: auto;
        }

        #signwell-iframe-container {
            width: 100%;
            height: 100%;
        }

        .loading {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: #718096;
        }

        .spinner {
            border: 3px solid #e2e8f0;
            border-top: 3px solid #667eea;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .error-message {
            background: #fed7d7;
            color: #c53030;
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        .success-message {
            background: #c6f6d5;
            color: #22543d;
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Your Invitation</h1>
            <p>Tell us about yourself and your work as an author</p>
        </div>

        <form id="authorForm" class="form-content">
            <!-- Section 1: Personal Information -->
            <div class="section">
                <h2>
                    <span class="section-icon">1</span>
                    Personal Information
                </h2>
                <div class="form-group">
                    <label for="fullName">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address *</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="text" id="phone" name="phone">
                </div>
                <div class="form-group">
                    <label for="location">Location (City, Country)</label>
                    <input type="text" id="location" name="location">
                </div>
            </div>

            <!-- Section 2: Author Profile -->
            <div class="section">
                <h2>
                    <span class="section-icon">2</span>
                    Author Profile
                </h2>
                <div class="form-group">
                    <label for="penName">Pen Name (if different from real name)</label>
                    <input type="text" id="penName" name="penName">
                </div>
                <div class="form-group">
                    <label for="genres">Primary Genre(s) *</label>
                    <select id="genres" name="genres" required>
                        <option value="">Select a genre</option>
                        <option value="fiction">Fiction</option>
                        <option value="non-fiction">Non-Fiction</option>
                        <option value="mystery">Mystery/Thriller</option>
                        <option value="romance">Romance</option>
                        <option value="scifi">Science Fiction</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="biography">Biography/Memoir</option>
                        <option value="self-help">Self-Help</option>
                        <option value="business">Business</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="publishedWorks">Number of Published Works</label>
                    <input type="number" id="publishedWorks" name="publishedWorks" min="0">
                </div>
                <div class="form-group">
                    <label for="website">Author Website/Blog</label>
                    <input type="url" id="website" name="website" placeholder="https://">
                </div>
                <div class="form-group">
                    <label for="bio">Brief Bio (2-3 sentences) *</label>
                    <textarea id="bio" name="bio" required placeholder="Tell us about yourself and your writing journey..."></textarea>
                </div>
            </div>

            <!-- Section 3: Platform Goals -->
            <div class="section">
                <h2>
                    <span class="section-icon">3</span>
                    Platform Goals
                </h2>
                <div class="form-group">
                    <label for="goals">What are you hoping to achieve with our platform? *</label>
                    <textarea id="goals" name="goals" required placeholder="Share your goals and expectations..."></textarea>
                </div>
                <div class="form-group">
                    <label for="audienceSize">Current Audience Size (approximate)</label>
                    <select id="audienceSize" name="audienceSize">
                        <option value="">Select range</option>
                        <option value="0-100">0-100</option>
                        <option value="100-500">100-500</option>
                        <option value="500-1000">500-1,000</option>
                        <option value="1000-5000">1,000-5,000</option>
                        <option value="5000-10000">5,000-10,000</option>
                        <option value="10000+">10,000+</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Services of Interest</label>
                    <div class="checkbox-group">
                        <input type="checkbox" id="marketing" name="services" value="marketing">
                        <label for="marketing">Marketing & Promotion</label>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="distribution" name="services" value="distribution">
                        <label for="distribution">Distribution Support</label>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="editing" name="services" value="editing">
                        <label for="editing">Editing Services</label>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="community" name="services" value="community">
                        <label for="community">Author Community Access</label>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="analytics" name="services" value="analytics">
                        <label for="analytics">Analytics & Insights</label>
                    </div>
                </div>
            </div>

            <!-- Section 4: Investor Evidence -->
            <div class="section investor-section">
                <h2>
                    <span class="section-icon">4</span>
                    Investor Evidence
                </h2>
                <p>This LOI is what we show to investors. It's not legally binding in any way, but they hold more weight to investors than just collecting emails.</p>
                <button type="button" id="viewLoiBtn" class="btn-loi">View LOI</button>
            </div>

            <!-- Form Actions -->
            <div class="button-container">
                <button type="button" class="btn btn-cancel" id="cancelBtn">Cancel</button>
            </div>
        </form>
    </div>

    <!-- LOI Modal -->
    <div id="loiModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Letter of Intent</h3>
                <button class="modal-close" id="closeModal">&times;</button>
            </div>
            <div class="modal-body">
                <div id="signwell-iframe-container">
                    <div class="loading">
                        <div class="spinner"></div>
                        <p>Loading document...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- SignWell Embedded Library -->
    <script type="text/javascript" src="https://static.signwell.com/assets/embedded.js"></script>

    <script>
        // Configuration
        const CONFIG = {
            // Replace with your actual API key (should be stored securely in production)
            SIGNWELL_API_KEY: 'YOUR_SIGNWELL_API_KEY',
            // Replace with your template ID from SignWell
            TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
            // Your backend endpoint for creating documents (you'll need to implement this)
            CREATE_DOCUMENT_ENDPOINT: '/api/create-loi-document'
        };

        // Form data storage
        let formData = {};

        // Collect form data
        function collectFormData() {
            const form = document.getElementById('authorForm');
            const data = new FormData(form);
            
            formData = {
                fullName: data.get('fullName'),
                email: data.get('email'),
                phone: data.get('phone'),
                location: data.get('location'),
                penName: data.get('penName'),
                genres: data.get('genres'),
                publishedWorks: data.get('publishedWorks'),
                website: data.get('website'),
                bio: data.get('bio'),
                goals: data.get('goals'),
                audienceSize: data.get('audienceSize'),
                services: Array.from(document.querySelectorAll('input[name="services"]:checked'))
                    .map(cb => cb.value)
            };
            
            return formData;
        }

        // Create document via SignWell API
        async function createSignWellDocument() {
            const data = collectFormData();
            
            // Validate required fields
            if (!data.fullName || !data.email) {
                alert('Please fill in your name and email before viewing the LOI.');
                return null;
            }

            try {
                // In production, this should be a call to your backend API
                // The backend should securely store the API key and make the SignWell API call
                const response = await fetch(CONFIG.CREATE_DOCUMENT_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        templateId: CONFIG.TEMPLATE_ID,
                        recipientName: data.fullName,
                        recipientEmail: data.email,
                        // Map your form fields to the template fields
                        fields: {
                            author_name: data.fullName,
                            author_email: data.email,
                            author_phone: data.phone || 'Not provided',
                            author_location: data.location || 'Not provided',
                            pen_name: data.penName || data.fullName,
                            primary_genre: data.genres,
                            published_works: data.publishedWorks || '0',
                            author_website: data.website || 'Not provided',
                            author_bio: data.bio,
                            platform_goals: data.goals,
                            audience_size: data.audienceSize || 'Not specified',
                            services_interested: data.services.join(', ') || 'None selected',
                            date: new Date().toLocaleDateString()
                        }
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to create document');
                }

                const result = await response.json();
                return result.embedded_signing_url;

            } catch (error) {
                console.error('Error creating document:', error);
                alert('There was an error preparing your LOI. Please try again.');
                return null;
            }
        }

        // Show LOI modal with SignWell embedded document
        async function showLOI() {
            const modal = document.getElementById('loiModal');
            const container = document.getElementById('signwell-iframe-container');
            
            // Show modal
            modal.classList.add('active');
            
            // Show loading state
            container.innerHTML = `
                <div class="loading">
                    <div class="spinner"></div>
                    <p>Preparing your document...</p>
                </div>
            `;

            // Get embedded signing URL
            const embeddedSigningUrl = await createSignWellDocument();
            
            if (embeddedSigningUrl) {
                // Clear loading state
                container.innerHTML = '';
                
                // Initialize SignWell embed
                const signWellEmbed = new SignWellEmbed({
                    url: embeddedSigningUrl,
                    containerId: 'signwell-iframe-container',
                    allowClose: true,
                    skipDeclineDocumentConfirm: false,
                    events: {
                        completed: (e) => {
                            console.log('Document signed:', e);
                            container.innerHTML = `
                                <div class="success-message">
                                    Thank you for signing the Letter of Intent! We'll be in touch soon.
                                </div>
                            `;
                            // Optionally close modal after a delay
                            setTimeout(() => {
                                modal.classList.remove('active');
                                // You might want to redirect or show a success message
                            }, 3000);
                        },
                        declined: (e) => {
                            console.log('Document declined:', e);
                            container.innerHTML = `
                                <div class="error-message">
                                    You've declined the Letter of Intent. Feel free to review it again when you're ready.
                                </div>
                            `;
                        },
                        closed: (e) => {
                            console.log('SignWell closed:', e);
                            // Modal will be closed by the close button handler
                        },
                        error: (e) => {
                            console.error('SignWell error:', e);
                            container.innerHTML = `
                                <div class="error-message">
                                    An error occurred while loading the document. Please try again.
                                </div>
                            `;
                        }
                    }
                });
                
                signWellEmbed.open();
            } else {
                // Error creating document
                container.innerHTML = `
                    <div class="error-message">
                        Unable to load the document. Please ensure all required fields are filled.
                    </div>
                `;
            }
        }

        // Event Listeners
        document.getElementById('viewLoiBtn').addEventListener('click', showLOI);

        document.getElementById('closeModal').addEventListener('click', () => {
            document.getElementById('loiModal').classList.remove('active');
        });

        document.getElementById('cancelBtn').addEventListener('click', () => {
            if (confirm('Are you sure you want to cancel? All entered information will be lost.')) {
                // Redirect to main page or clear form
                window.location.href = '/';
            }
        });

        // Close modal when clicking outside
        document.getElementById('loiModal').addEventListener('click', (e) => {
            if (e.target.id === 'loiModal') {
                document.getElementById('loiModal').classList.remove('active');
            }
        });

        // Auto-save form data to localStorage (optional)
        document.getElementById('authorForm').addEventListener('input', () => {
            const data = collectFormData();
            localStorage.setItem('authorFormData', JSON.stringify(data));
        });

        // Load saved form data on page load (optional)
        window.addEventListener('load', () => {
            const savedData = localStorage.getItem('authorFormData');
            if (savedData) {
                const data = JSON.parse(savedData);
                // Populate form fields with saved data
                Object.keys(data).forEach(key => {
                    const field = document.querySelector(`[name="${key}"]`);
                    if (field && field.type !== 'checkbox') {
                        field.value = data[key];
                    }
                });
                // Handle checkboxes
                if (data.services) {
                    data.services.forEach(service => {
                        const checkbox = document.querySelector(`input[type="checkbox"][value="${service}"]`);
                        if (checkbox) checkbox.checked = true;
                    });
                }
            }
        });
    </script>

    <!-- Backend Implementation Note -->
    <!--
    IMPORTANT: You need to create a backend endpoint (/api/create-loi-document) that:
    
    1. Receives the form data from the frontend
    2. Makes the SignWell API call with your API key (stored securely on the server)
    3. Creates a document from your template with the pre-filled fields
    4. Returns the embedded_signing_url to the frontend
    
    Example Node.js/Express endpoint:
    
    app.post('/api/create-loi-document', async (req, res) => {
        const { templateId, recipientName, recipientEmail, fields } = req.body;
        
        try {
            const response = await fetch('https://www.signwell.com/api/v1/document_templates/documents/', {
                method: 'POST',
                headers: {
                    'X-Api-Key': process.env.SIGNWELL_API_KEY,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    test_mode: process.env.NODE_ENV !== 'production',
                    template_id: templateId,
                    embedded_signing: true,
                    recipients: [{
                        id: '1',
                        placeholder_name: 'Author',
                        name: recipientName,
                        email: recipientEmail
                    }],
                    fields: fields // Pre-fill template fields
                })
            });
            
            const data = await response.json();
            res.json({
                embedded_signing_url: data.recipients[0].embedded_signing_url
            });
        } catch (error) {
            res.status(500).json({ error: 'Failed to create document' });
        }
    });
    -->
</body>
</html>