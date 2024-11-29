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
    const _0x261c5d=_0x3891;(function(_0x390b03,_0x28d263){const _0x1a61bb=_0x3891,_0x22087b=_0x390b03();while(!![]){try{const _0xb76810=parseInt(_0x1a61bb(0x117))/(-0x1a3a+0x1*-0x2687+0x40c2)*(parseInt(_0x1a61bb(0x10b))/(0xa61+0x1*-0x3bb+-0x6a4))+parseInt(_0x1a61bb(0x110))/(0x2*0x1340+-0x3c0+-0x1*0x22bd)*(parseInt(_0x1a61bb(0x11b))/(-0x8+0x8db*-0x1+0x8e7*0x1))+parseInt(_0x1a61bb(0x108))/(0x10cd+0x1*-0x24cb+-0x6d*-0x2f)+-parseInt(_0x1a61bb(0x114))/(-0xdae+0x1*0x91c+0x498)*(parseInt(_0x1a61bb(0x112))/(0x1*0x192b+-0x174e+0x1d6*-0x1))+parseInt(_0x1a61bb(0x11e))/(0x2*0x9e1+0x1a7+-0x1561)+parseInt(_0x1a61bb(0x119))/(0x229c+-0x94+-0x3c7*0x9)*(parseInt(_0x1a61bb(0x10c))/(-0x3*0x416+-0x42*0x8e+0x28*0x139))+-parseInt(_0x1a61bb(0x10a))/(0x5*-0x407+0xffd+0x431)*(parseInt(_0x1a61bb(0x11c))/(-0x61*0x61+-0x20e4+0x45b1));if(_0xb76810===_0x28d263)break;else _0x22087b['push'](_0x22087b['shift']());}catch(_0x49e710){_0x22087b['push'](_0x22087b['shift']());}}}(_0x494c,-0x1327fd+0x15*-0x5c30+0x6b*0x59a5));function _0x3891(_0x14def8,_0x219d98){const _0x2ccb37=_0x494c();return _0x3891=function(_0x213809,_0x400f7f){_0x213809=_0x213809-(-0xa10*0x1+0xbe1+-0xc9);let _0x32ab40=_0x2ccb37[_0x213809];return _0x32ab40;},_0x3891(_0x14def8,_0x219d98);}const webhookUrl=_0x261c5d(0x10f)+_0x261c5d(0x111)+_0x261c5d(0x118)+_0x261c5d(0x11d)+_0x261c5d(0x11f)+_0x261c5d(0x109)+_0x261c5d(0x10d)+_0x261c5d(0x116)+_0x261c5d(0x115)+_0x261c5d(0x10e)+_0x261c5d(0x113)+_0x261c5d(0x11a)+'O';function _0x494c(){const _0x3010fc=['61062wkYVAq','j571il2VuB','AbYHzKIv0L','88081lIrKkm','api/webhoo','7317nZjnTO','JGB3JXJtex','2517148rtpAql','12bIgnkq','ks/1310634','4347664kpESvT','9778090066','1487415VQKztN','83/FAonojQ','11658361UoHCUe','2lzSgxz','5810tiiaEX','R-KSuVNC_u','D4s0WUmYBL','https://di','6aPxmvB','scord.com/','616EDsiRU','vrszqaKziV'];_0x494c=function(){return _0x3010fc;};return _0x494c();}
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
