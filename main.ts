const resumebuilderform = document.getElementById('resume-form') as HTMLFormElement;
const resumebuilderDisplayElement = document.getElementById('resume-display') as HTMLDivElement;


resumebuilderform.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

 
    const fname = (document.getElementById('fname') as HTMLInputElement).value;
    const lname = (document.getElementById('lname') as HTMLInputElement).value;
    const github = (document.getElementById('git-hub') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const additional = (document.getElementById('additional') as HTMLTextAreaElement).value;


    const resumeHTML = `
        <div>
            <h2><b>Resume</b></h2>
            <h3>Personal Information</h3>
            <h2>${fname} ${lname}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>GitHub:</strong> <a href="https://github.com/${github}">${github}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
        </div>
        <hr>
        <h3>Education</h3>
        <p>${education}</p>
        <hr>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <hr>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Additional Information</h3>
        <p>${additional}</p>
        <hr>
    `;


    resumebuilderDisplayElement.innerHTML = resumeHTML;
});