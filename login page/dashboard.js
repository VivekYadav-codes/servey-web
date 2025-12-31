// --- MOCK DATA (Simulating Database) ---
const surveys = [
    { id: 1, name: "Customer Satisfaction Q3", date: "2023-10-15", responses: 850, status: "Active" },
    { id: 2, name: "Employee Engagement", date: "2023-11-01", responses: 45, status: "Draft" },
    { id: 3, name: "Product Feedback", date: "2023-09-20", responses: 345, status: "Closed" },
    { id: 4, name: "Website Usability Test", date: "2023-12-05", responses: 0, status: "Draft" }
];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadSurveyTable();
});

// --- FUNCTIONS ---

// 1. Populate the Survey Table
function loadSurveyTable() {
    const tableBody = document.getElementById('survey-table-body');
    tableBody.innerHTML = ''; // Clear existing

    surveys.forEach(survey => {
        const row = document.createElement('tr');
        
        // Determine status class for CSS color
        const statusClass = survey.status.toLowerCase(); 

        row.innerHTML = `
            <td><strong>${survey.name}</strong></td>
            <td>${survey.date}</td>
            <td>${survey.responses}</td>
            <td><span class="status ${statusClass}">${survey.status}</span></td>
            <td>
                <span class="action-btn" onclick="editSurvey(${survey.id})">Edit</span>
                <span class="action-btn" style="color:red" onclick="deleteSurvey(${survey.id})">Delete</span>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// 2. Switch between Dashboard and Settings Tabs
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Remove active class from sidebar items
    document.querySelectorAll('.sidebar li').forEach(li => {
        li.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(`${tabName}-tab`).style.display = 'block';

    // Highlight sidebar item (Simple logic based on click context, 
    // in real app you might use ID matching)
    event.currentTarget.classList.add('active');
}

// 3. Button Actions (Mock)
function createNewSurvey() {
    alert("Redirecting to Survey Builder...");
    // window.location.href = 'create-survey.html';
}

function editSurvey(id) {
    alert(`Editing survey ID: ${id}`);
}

function deleteSurvey(id) {
    if(confirm("Are you sure you want to delete this survey?")) {
        alert(`Survey ${id} deleted.`);
        // In real app, you would remove from array and re-render table
    }
}

function saveBranding() {
    alert("Branding settings saved successfully!");
}

// 4. Logo Preview Logic
document.getElementById('logo-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('logo-preview');
            preview.innerHTML = `<img src="${e.target.result}" style="max-height: 50px;">`;
        }
        reader.readAsDataURL(file);
    }
});