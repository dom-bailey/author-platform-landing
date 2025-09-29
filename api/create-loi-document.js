export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request for CORS
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { templateId, recipientName, recipientEmail, fields } = req.body;

    // Validate required fields
    if (!templateId || !recipientName || !recipientEmail) {
        return res.status(400).json({
            error: 'Missing required fields: templateId, recipientName, or recipientEmail'
        });
    }

    // Check if API key is configured
    const apiKey = process.env.SIGNWELL_API_KEY;
    if (!apiKey) {
        console.error('SIGNWELL_API_KEY not found in environment variables');
        return res.status(500).json({
            error: 'SignWell API key not configured. Please add SIGNWELL_API_KEY to your environment variables.'
        });
    }

    try {
        console.log('Creating SignWell document for:', recipientEmail);
        console.log('Using template ID:', templateId);
        console.log('SignWell field mappings:', {
            DateSigned_1: fields.DateSigned_1,
            Name_1: fields.Name_1,
            Email_1: fields.Email_1,
            Name_2: fields.Name_2,
            Name_3: fields.Name_3
        });

        const signwellResponse = await fetch('https://www.signwell.com/api/v1/document_templates/documents/', {
            method: 'POST',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                test_mode: process.env.NODE_ENV !== 'production', // Use test mode in development
                template_id: templateId,
                embedded_signing: true,
                recipients: [
                    {
                        id: '1',
                        placeholder_name: 'document sender', // Company/Platform side
                        name: 'StoryAlive Platform',
                        email: 'noreply@storyalive.com', // This should be your company email
                        send_email: false // Don't send email to company placeholder
                    },
                    {
                        id: '2',
                        placeholder_name: 'author', // The actual author signing
                        name: recipientName,
                        email: recipientEmail,
                        fields: fields // Pre-fill fields for the author
                    }
                ],
                // Optional: Add custom branding
                custom_branding: {
                    company_name: 'StoryAlive'
                }
            })
        });

        const data = await signwellResponse.json();

        // Check if the request was successful
        if (!signwellResponse.ok) {
            console.error('SignWell API error:', data);
            return res.status(signwellResponse.status).json({
                error: 'SignWell API error',
                details: data
            });
        }

        // Extract the embedded signing URL
        if (data.recipients && data.recipients[0] && data.recipients[0].embedded_signing_url) {
            console.log('Document created successfully with ID:', data.id);
            return res.status(200).json({
                success: true,
                document_id: data.id,
                embedded_signing_url: data.recipients[0].embedded_signing_url
            });
        } else {
            console.error('No embedded signing URL in response:', data);
            return res.status(500).json({
                error: 'No embedded signing URL received from SignWell',
                details: data
            });
        }

    } catch (error) {
        console.error('Error creating SignWell document:', error);
        return res.status(500).json({
            error: 'Failed to create document',
            message: error.message
        });
    }
}