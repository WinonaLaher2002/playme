        // Startpage code (only runs on startpage.html)
        const starpageBtn = document.getElementById('starpageBtn');
        const infoBtn = document.getElementById('infoBtn');
        const exitBtn = document.getElementById('exitBtn');
        const infoModal = document.getElementById('infoModal');
        const infoContent = document.getElementById('infoContent');
        
        if (starpageBtn) {
            const clickSound = document.getElementById('clickSound');
            
            function playClickSound() {
                if (clickSound) {
                    clickSound.play().catch(err => console.log('Sound play error:', err));
                }
                setTimeout(() => {
                    window.location.href = 'playme.html';
                }, 300);
            }

            // Info modal toggle
            function toggleModal() {
                infoModal.classList.toggle('active');
            }

            // Close page/browser
            function exitPage() {
                if (confirm('Do you really want to exit?')) {
                    window.close();
                }
            }

            starpageBtn.addEventListener('click', playClickSound);
            infoBtn.addEventListener('click', toggleModal);
            exitBtn.addEventListener('click', exitPage);
            infoContent.addEventListener('click', (e) => {
                if (e.target === infoContent) {
                    toggleModal();
                }
            });
            infoModal.addEventListener('click', (e) => {
                if (e.target === infoModal) {
                    toggleModal();
                }
            });
        }

        // Music player code (only runs on index.html)
        if (document.getElementById('playBtn')) {
            const songs = [
                {
                    title: "Himig ng Pagibig",
                    artist: "Asin",
                    image: 0,
                    src: "asset/song/Himig ng Pag-ibig - Asin (Lyrics).mp3"
                },
                {
                    title: "Panalangin",
                    artist: "APO Hiking Society",
                    image: 1,
                    src: "asset/song/APO Hiking Society - Panalangin.mp3"
                },
                {
                    title: "Id Rather",
                    artist: "Luther Vandross",
                    image: 2,
                    src: "asset/song/I'd Rather.mp3"
                }
            ];

            let currentSong = 0;
            let isPlaying = false;

            const playBtn = document.getElementById('playBtn');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const progressBar = document.getElementById('progressBar');
            const progress = document.getElementById('progress');
            const currentTimeEl = document.getElementById('currentTime');
            const durationEl = document.getElementById('duration');
            const songTitle = document.querySelector('.song-title');
            const songArtist = document.querySelector('.song-artist');
            const albumImages = document.querySelectorAll('.album-art img');
            const playlistDots = document.querySelectorAll('.playlist-dot');
            const audio = document.getElementById('audio');

            function loadSong(index) {
                const song = songs[index];
                songTitle.textContent = song.title;
                songArtist.textContent = song.artist;

                albumImages.forEach((img, i) => {
                    img.classList.toggle('active', i === song.image);
                });

                playlistDots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });

                if (song.src) {
                    audio.src = song.src;
                    audio.load();
                }
            }

            function formatTime(seconds) {
                const mins = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
            }

            audio.addEventListener('loadedmetadata', () => {
                durationEl.textContent = formatTime(Math.floor(audio.duration));
            });

            audio.addEventListener('timeupdate', () => {
                const current = Math.floor(audio.currentTime);
                currentTimeEl.textContent = formatTime(current);
                const percent = (audio.currentTime / audio.duration) * 100 || 0;
                progress.style.width = percent + '%';
            });

            audio.addEventListener('ended', () => {
                nextSong();
            });

            function play() {
                audio.play();
                isPlaying = true;
                playBtn.textContent = '⏸';
            }

            function pause() {
                audio.pause();
                isPlaying = false;
                playBtn.textContent = '▶';
            }

            function togglePlay() {
                if (isPlaying) pause(); else play();
            }

            function nextSong() {
                currentSong = (currentSong + 1) % songs.length;
                loadSong(currentSong);
                if (isPlaying) play();
            }

            function prevSong() {
                currentSong = (currentSong - 1 + songs.length) % songs.length;
                loadSong(currentSong);
                if (isPlaying) play();
            }

            function seek(e) {
                const rect = progressBar.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                if (!isNaN(audio.duration)) {
                    audio.currentTime = percent * audio.duration;
                }
            }

            playBtn.addEventListener('click', togglePlay);
            nextBtn.addEventListener('click', nextSong);
            prevBtn.addEventListener('click', prevSong);
            progressBar.addEventListener('click', seek);

            playlistDots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    currentSong = parseInt(e.target.dataset.song);
                    loadSong(currentSong);
                    if (isPlaying) play();
                });
            });

            // Touch support for mobile swipes
            let touchStartX = 0;
            document.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
            });

            document.addEventListener('touchend', (e) => {
                const touchEndX = e.changedTouches[0].clientX;
                if (touchStartX - touchEndX > 50) {
                    nextSong();
                } else if (touchEndX - touchStartX > 50) {
                    prevSong();
                }
            });

            // Initialize
            loadSong(currentSong);

            // Player Info Modal and Exit Button
            const playerInfoBtn = document.getElementById('playerInfoBtn');
            const playerExitBtn = document.getElementById('playerExitBtn');
            const playerInfoModal = document.getElementById('playerInfoModal');
            const playerInfoContent = document.getElementById('playerInfoContent');
            const closeModalBtn = document.querySelector('.close-modal-btn');

            function toggleInfoModal() {
                playerInfoModal.classList.toggle('active');
            }

            function exitToStartPage() {
                if (confirm('Go back to start page?')) {
                    window.location.href = 'index.html';
                }
            }

            playerInfoBtn.addEventListener('click', toggleInfoModal);
            playerExitBtn.addEventListener('click', exitToStartPage);
            closeModalBtn.addEventListener('click', toggleInfoModal);
            
            // Close modal when clicking outside content
            playerInfoModal.addEventListener('click', (e) => {
                if (e.target === playerInfoModal) {
                    toggleInfoModal();
                }
            });
            
            playerInfoContent.addEventListener('click', (e) => {
                if (e.target === playerInfoContent) {
                    toggleInfoModal();
                }
            });

        }

