var resumebuilderform = document.getElementById('resume-form');
var resumebuilderDisplayElement = document.getElementById('resume-display');
resumebuilderform.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var github = document.getElementById('git-hub').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var additional = document.getElementById('additional').value;
    var resumeHTML = "\n        <div>\n            <h2><b>Resume</b></h2>\n            <h3>Personal Information</h3>\n            <h2>".concat(fname, " ").concat(lname, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>GitHub:</strong> <a href=\"https://github.com/").concat(github, "\">").concat(github, "</a></p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n        </div>\n        <hr>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <hr>\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n        <hr>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        <h3>Additional Information</h3>\n        <p>").concat(additional, "</p>\n        <hr>\n    ");
    resumebuilderDisplayElement.innerHTML = resumeHTML;
});
