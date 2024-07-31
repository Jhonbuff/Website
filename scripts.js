function playVideo() {
    const link = document.getElementById('terabox-link').value;
    const videoPlayer = document.getElementById('video-player');
    
    // Ekstrak parameter video_id dari link
    const urlParams = new URLSearchParams(new URL(link).search);
    const videoId = urlParams.get('tera_link_id');
    
    if (videoId) {
        // Membersihkan video player sebelumnya
        videoPlayer.innerHTML = '';

        // Membuat elemen iframe untuk video
        const iframe = document.createElement('iframe');
        iframe.src = `https://terabox.com/embed/${videoId}`; // URL embed sesuai Terabox
        iframe.width = '560';
        iframe.height = '315';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        // Menambahkan iframe ke dalam video player
        videoPlayer.appendChild(iframe);
    } else {
        alert('Harap masukkan link video Terabox yang valid.');
    }
}

