function showSuccessMessage() {
    
    document.getElementById("successMessage").innerText = "Register successful!";
    
    document.getElementById("loginForm").style.display = "none";

    document.getElementById("newLoginPage").style.display = "block";


    return false;
}
function showSuccessMessage1() 
{

document.getElementById("successMessage1").innerText = "login successful!";

document.getElementById("loginForm1").style.display = "none";

document.getElementById("newLoginPage1").style.display = "block";


return false;
}

let videoStream;
const picPreview = document.getElementById('pic-preview');
const captureBtn = document.getElementById('capture-btn');
const retakeBtn = document.getElementById('retake-btn');
const continueBtn = document.getElementById('continue-btn');
const videoPreview = document.getElementById('video-preview');



async function startCamera() {
    try {
        videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoPreview.srcObject = videoStream;
    } catch (error) {
        console.error('Error accessing webcam:', error);
    }
    
}


function captureImage() {
    const canvas = document.createElement('canvas');
    canvas.width = videoPreview.videoWidth;
    canvas.height = videoPreview.videoHeight;
    canvas.getContext('2d').drawImage(videoPreview, 0, 0, canvas.width, canvas.height);
    const imageUrl = canvas.toDataURL('image/png');
    picPreview.innerHTML =  `<img src="${imageUrl}" alt="Captured Image" width="100%">  `;
    toggleButtons();
    
   

    
}

function toggleButtons() {
    captureBtn.style.display = 'none';
    retakeBtn.style.display = 'inline-block';
    continueBtn.style.display = 'inline-block';
}

function retakePicture() {
    picPreview.innerHTML = '';
    captureBtn.style.display = 'inline-block';
    retakeBtn.style.display = 'none';
    continueBtn.style.display = 'none';
    
   
}

function continueProcess() {
    // Add logic to navigate to another page or perform further actions
    alert('Continue with the captured image!');
    alert("successfuly completed..!");                                                                          
   
}

window.addEventListener('load', startCamera);