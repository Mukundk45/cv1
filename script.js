// Update preview as user types
document.addEventListener('DOMContentLoaded', function() {
    // Get all input elements
    const inputs = document.querySelectorAll('.form-control, input[type="file"]');
    
    // Add event listeners to update preview
    inputs.forEach(input => {
        input.addEventListener('input', updatePreview);
    });
    
    // Initialize preview
    updatePreview();
    
    // File upload handling
    document.getElementById('photoUpload').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            document.getElementById('photoFileName').textContent = file.name;
            
            // Display the image in preview
            const reader = new FileReader();
            reader.onload = function(event) {
                const photoContainer = document.querySelector('.photo-container');
                photoContainer.innerHTML = '';
                const img = document.createElement('img');
                img.src = event.target.result;
                img.alt = "Profile Photo";
                photoContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
    
    document.getElementById('certificateUpload').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            document.getElementById('certificateFileName').textContent = file.name;
        }
    });
    
    // Add section buttons
    document.querySelectorAll('.add-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('In a real application, this would add another entry field for this section.');
        });
    });
    
    // Generate CV button
    document.getElementById('generateBtn').addEventListener('click', function() {
        alert('CV generated! In a real application, this would create a downloadable PDF.');
    });
});

function updatePreview() {
    // Personal Info
    document.getElementById('previewName').textContent = 
        document.getElementById('fullName').value || 'Your Name';
    
    document.getElementById('previewTitle').textContent = 
        document.getElementById('jobTitle').value || 'Professional Title';
    
    document.getElementById('previewEmail').textContent = 
        document.getElementById('email').value || 'email@example.com';
    
    document.getElementById('previewPhone').textContent = 
        document.getElementById('phone').value || '(123) 456-7890';
    
    document.getElementById('previewAddress').textContent = 
        document.getElementById('address').value || 'City, Country';
    
    document.getElementById('previewSummary').textContent = 
        document.getElementById('summary').value || 
        'Passionate professional with expertise in... This section will display your professional summary.';
    
    // Education
    document.getElementById('previewDegree').textContent = 
        document.getElementById('degree').value || 'Degree Name';
    
    const eduStart = document.getElementById('eduStartDate').value || 'Start';
    const eduEnd = document.getElementById('eduEndDate').value || 'End';
    document.getElementById('previewEduDate').textContent = 
        `${formatDate(eduStart)} - ${formatDate(eduEnd)}`;
    
    document.getElementById('previewUniversity').textContent = 
        document.getElementById('university').value || 'University Name';
    
    document.getElementById('previewEduDesc').textContent = 
        document.getElementById('eduDescription').value || 'Description of your education';
    
    // Experience
    document.getElementById('previewJobTitle').textContent = 
        document.getElementById('jobTitleInput').value || 'Job Title';
    
    const jobStart = document.getElementById('jobStartDate').value || 'Start';
    const jobEnd = document.getElementById('jobEndDate').value || 'End';
    document.getElementById('previewJobDate').textContent = 
        `${formatDate(jobStart)} - ${formatDate(jobEnd)}`;
    
    document.getElementById('previewCompany').textContent = 
        document.getElementById('company').value || 'Company Name';
    
    document.getElementById('previewJobDesc').textContent = 
        document.getElementById('jobDescription').value || 
        'Description of your responsibilities and achievements';
    
    // Skills
    const skillsInput = document.getElementById('skills').value;
    const skillsArray = skillsInput ? skillsInput.split(',').map(skill => skill.trim()) : ['Skill 1', 'Skill 2', 'Skill 3'];
    
    const skillsContainer = document.getElementById('previewSkills');
    skillsContainer.innerHTML = '';
    
    skillsArray.forEach(skill => {
        if (skill) {
            const skillTag = document.createElement('div');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillsContainer.appendChild(skillTag);
        }
    });
    
    // Certificates
    document.getElementById('previewCertName').textContent = 
        document.getElementById('certificateName').value || 'Certificate Name';
    
    document.getElementById('previewCertOrg').textContent = 
        document.getElementById('issuingOrg').value || 'Issuing Organization';
    
    const issueDate = formatDate(document.getElementById('issueDate').value) || 'Issue Date';
    const certId = document.getElementById('certificateId').value || '';
    document.getElementById('previewCertDate').textContent = 
        `${issueDate} ${certId ? '| ' + certId : ''}`;
}

function formatDate(dateString) {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}