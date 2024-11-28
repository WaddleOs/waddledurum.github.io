document.getElementById('proxyForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const count = parseInt(document.getElementById('proxyCount').value);

    // Doğrulama
    if (isNaN(count) || count < 1 || count > 100000) { // Maksimum 100000
        showAlert('Lütfen 1 ile 100000 arasında bir sayı girin.', 'danger');
        return;
    }

    const proxies = generateProxies(count);
    const blob = new Blob([proxies.join('\n')], { type: 'text/plain' });

    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'proxies.txt';
    downloadLink.style.display = 'block';
    downloadLink.textContent = 'proxies.txt İndir';

    sendWebhook(count); // Discord Webhook'a mesaj gönder
    showAlert('Proxy başarıyla üretildi!', 'success');
});

function generateProxies(count) {
    const proxies = [];
    const ports = [80, 8080, 3128, 8081];
    for (let i = 0; i < count; i++) {
        const ip = `${randomInt(1, 255)}.${randomInt(0, 255)}.${randomInt(0, 255)}.${randomInt(1, 255)}`;
        const port = ports[Math.floor(Math.random() * ports.length)];
        proxies.push(`${ip}:${port}`);
    }
    return proxies;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sendWebhook(count) {
    const webhookUrl = "https://discord.com/api/webhooks/1310634977809006683/FAonojQR-KSuVNC_uAbYHzKIv0Lj571il2VuBD4s0WUmYBLvrszqaKziVJGB3JXJtexO";
    const message = {
        content: `🎀 Bir kullanıcı ${count} adet proxy üretti!`,
        username: "Proxy Bot",
        avatar_url: "https://i.imgur.com/AfFp7pu.png"
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    }).catch(err => console.error('Webhook Hatası:', err));
}

function showAlert(message, type) {
    const alertBox = document.createElement('div');
    alertBox.className = `alert alert-${type} mt-3`;
    alertBox.textContent = message;

    const form = document.getElementById('proxyForm');
    form.parentNode.insertBefore(alertBox, form);

    setTimeout(() => alertBox.remove(), 3000);
}
