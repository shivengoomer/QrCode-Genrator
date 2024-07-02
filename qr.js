
document.querySelector('.genrate-button').addEventListener('click',() => {
    const link=document.querySelector('.input-box');
    const hlink=link.value;     
    let qrcodegenrator=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${hlink}`;
    const qrCode= document.getElementById('qr-code');
    qrCode.innerHTML='';
    qrImg=document.createElement('img')
    qrImg.src=qrcodegenrator;
    qrCode.appendChild(qrImg);
    
});
document.querySelector('.dbutton').addEventListener('click', () => {
    const qrImg = document.querySelector('#qr-code img');
if (qrImg) {
        const link = document.createElement('a');
        link.href = qrImg.src;
        link.download = 'qr-code.png';  // The name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('No QR code image to download!');
    }
});

