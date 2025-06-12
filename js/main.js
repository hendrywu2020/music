document.addEventListener('DOMContentLoaded', function() {
    // 点击歌单切换播放内容
    document.querySelectorAll('.playlist-item').forEach(function(item) {
        item.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const server = this.getAttribute('data-server');
            
            // 更新播放器数据
            const aplayer = document.querySelector('.aplayer');
            aplayer.setAttribute('data-id', id);
            aplayer.setAttribute('data-server', server);
            
            // 重新初始化播放器
            if (window.APlayer && window.APlayer.instances) {
                window.APlayer.instances.forEach(ap => ap.destroy());
                window.APlayer.instances = [];
            }
            
            // 重新加载MetingJS
            const oldScript = document.querySelector('script[src*="Meting.min.js"]');
            if (oldScript) {
                document.body.removeChild(oldScript);
            }
            
            const newScript = document.createElement('script');
            newScript.src = 'https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js';
            document.body.appendChild(newScript);
        });
    });
});
