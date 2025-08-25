# Certificate Images Directory

## How to add your certificate images:

1. **Save your certificate images** in this directory (`/public/certificates/`)

2. **Supported formats**: JPG, PNG, PDF (for PDFs, convert to image first or use PDF.js)

3. **Recommended naming convention**:
   - `python-advanced.jpg` (for Advanced Python Programming)
   - `ibm-bigdata.jpg` (for IBM Big Data 101)
   - `ideo-design-thinking.jpg` (for IDEO Design Thinking)
   - `microsoft-powerpoint.jpg` (for Microsoft PowerPoint)
   - `oracle-sql.jpg` (for Oracle SQL Fundamentals)
   - `edx-data-science.jpg` (for edX Data Science)
   - `google-ai.jpg` (for Google Cloud Generative AI)

4. **Image specifications**:
   - **Resolution**: Minimum 1200x800px for good quality
   - **Aspect ratio**: 4:3 or 16:9 works best
   - **File size**: Keep under 2MB for fast loading
   - **Format**: JPG for photos, PNG for certificates with transparency

5. **Update the code**: The image paths are already configured in `src/components/Education.jsx`

## File Structure:
```
/public/certificates/
├── python-advanced.jpg
├── ibm-bigdata.jpg
├── ideo-design-thinking.jpg
├── microsoft-powerpoint.jpg
├── oracle-sql.jpg
├── edx-data-science.jpg
├── google-ai.jpg
└── README.md (this file)
```

## Features:
- **3D Flip Cards**: Click any certificate to flip and see details
- **Full-Screen Modal**: Click "View Full" to see the certificate in a modal
- **Image Fallback**: If image doesn't load, shows placeholder
- **Verify Links**: Direct links to verify certificates online
- **Responsive Design**: Works on all screen sizes
- **Dark/Light Theme**: Adapts to your theme preference

## For PDFs:
If you have PDF certificates, you can:
1. Convert them to JPG/PNG using online tools
2. Take a screenshot of the PDF
3. Use tools like `pdf2pic` to convert PDF to image

## Tips:
- Scan certificates at high resolution for best quality
- Ensure text is readable in the image
- Crop unnecessary white space around the certificate
- Use descriptive filenames for easy management
