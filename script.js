    // Game state
        let currentLanguage = 'en';
        let playerName = '';
        let selectedLocation = '';
        let currentRiddleIndex = 0;
        let riddlesData = {};

        // Language translations
        const translations = {
            en: {
                title: "Kampung Susun Kunir Riddle",
                welcomeTitle: "Welcome to the Kampung Susun Kunir Riddle!",
                welcomeText: "Embark on a journey through Jakarta's rich history and culture by solving riddles and discovering hidden treasures.",
                startBtn: "Start Adventure",
                nameTitle: "Enter Your Name",
                nameSubmitBtn: "Continue",
                locationTitle: "Choose Your Adventure",
                jakartaTitle: "Jakarta Kota",
                jakartaDesc: "Explore the historic heart of Jakarta with its colonial architecture and cultural landmarks.",
                kampungTitle: "Kampung Susun",
                kampungDesc: "Discover the traditional community life and local wisdom in modern urban settings.",
                submitAnswerBtn: "Submit Answer",
                nextBtn: "Next Riddle",
                congratsTitle: "Congratulations!",
                congratsText: "You have successfully completed the Kampung Susun Kunir Riddle!",
                certTitle: "Certificate of Achievement",
                certText: "This is to certify that",
                certCompleted: "has successfully completed the",
                certAdventure: "Kampung Susun Kunir Riddle",
                downloadBtn: "Download Certificate",
                restartBtn: "Play Again",
                correctAnswer: "Correct! Well done!",
                incorrectAnswer: "Incorrect. Please try again.",
                langText: "🇺🇸 EN"
            },
            id: {
                title: "Kampung Susun Kunir Riddle",
                welcomeTitle: "Selamat Datang di Kampung Susun Kunir Riddle!",
                welcomeText: "Mulailah perjalanan melalui sejarah dan budaya Jakarta yang kaya dengan memecahkan teka-teki dan menemukan harta tersembunyi.",
                startBtn: "Mulai Petualangan",
                nameTitle: "Masukkan Nama Anda",
                nameSubmitBtn: "Lanjutkan",
                locationTitle: "Pilih Petualangan Anda",
                jakartaTitle: "Jakarta Kota",
                jakartaDesc: "Jelajahi jantung bersejarah Jakarta dengan arsitektur kolonial dan landmark budayanya.",
                kampungTitle: "Kampung Susun",
                kampungDesc: "Temukan kehidupan komunitas tradisional dan kearifan lokal dalam lingkungan perkotaan modern.",
                submitAnswerBtn: "Kirim Jawaban",
                nextBtn: "Teka-teki Selanjutnya",
                congratsTitle: "Selamat!",
                congratsText: "Anda telah berhasil menyelesaikan Kampung Susun Kunir Riddle!",
                certTitle: "Sertifikat Pencapaian",
                certText: "Ini untuk menyatakan bahwa",
                certCompleted: "telah berhasil menyelesaikan",
                certAdventure: "Kampung Susun Kunir Riddle",
                downloadBtn: "Unduh Sertifikat",
                restartBtn: "Main Lagi",
                correctAnswer: "Benar! Bagus sekali!",
                incorrectAnswer: "Salah. Silakan coba lagi.",
                langText: "🇮🇩 ID"
            }
        };

        // Riddles data
        const riddlesDataEn = {
            jakarta: [
                {
                    title: "Jakarta Kota Station",
                    text: "The beauty lays in this building.\nLook above and find the iron half-moon,\ntimeless silvery-grey,\ncount the blessing.\nAdd up with the number of lanes,\nspread in front of you,\nlay on the ground.\nFill in the number code below to continue.\n(2 digits)",
                    answer: "18"
                },
                {
                    title: "Kota Tua Station",
                    text: "The day is almost over,\ngo get in touch with the sunlight.\nExit through the North gate,\nwalk ahead till you find the big square.\nWhen you're there, stand in the center.\nLook ahead to the north,\nand find another lane, buried down below.\nForgotten from the past\nStreetcar named Despair.\nFind my name.\n(4 letters)",
                    answer: "trem"
                },
                {
                    title: "Historical Mystery",
                    text: "Tram line brought me here.\nEx Me Ipsa Renata Sum.\nI was made out of myself.\nI destroyed a lot of fortress.\nI am the thumb in between index and middle finger.\nWhat a strong name, they called me with.\nYou should not forget, that I am.\n(5 letters)",
                    answer: "jagur"
                },
                {
                    title: "Railway Bridge",
                    text: "Beneath this bridge,\na river runs through history.\nIts waters have seen colonial tales\nand witnessed time flow endlessly.\nThis river connects the city to its roots.\nName the river.\n(One word)",
                    answer: "ciliwung"
                },
                {
                    title: "Kampung Susun Kunir",
                    text: "Beneath the leaves and morning rain,\nwhere orange wood holds roots again.\nNot just a bench, not just a seat,\nbut stories carved where plant life meets.\nLetters curved in playful form,\nhidden in places quiet, warm.\nNot one place, but many as one\na name they share under the sun.\nLook close where the plants align,\nread what the wood leaves behind.\n(9 letters)",
                    answer: "kollektief"
                },
                {
                    title: "Gallery Steps",
                    text: "Down below where stories sleep, beneath the frame of rising hope. Concrete veins that echo feet, count your steps before you cope.\nBetween the past and future's grace, lies the gallery, hidden face. One by one you must descend, 'till double digits mark the end.\nJust before the silence hums how many steps to reach the drums?\n(2 digits)",
                    answer: "10"
                },
                {
                    title: "Local Delicacy",
                    text: "A taste that dances, sweet and wild,\nfound where stories feed the child.\nNot just fruit, but spice and soul,\nmixed together in one bold bowl.\nIt stains your lips with tangy cheer,\na local treat, both far and near.\nIn Kunir's heart, it's served with pride\na flavor that won't ever hide.\nCrunchy, fresh, and full of zest,\nthis spicy mix is simply the best.\nFind my name.\n(5 letters)",
                    answer: "rujak"
                },
                {
                    title: "Ancient Foundation",
                    text: "I'm ancient, yet I still serve,\nA silent witness with steady nerve.\nCarved by hands from time gone past,\nI helped the walls and roofs to last.\nYou won't find me up above,\nBut I'm the base that buildings love.\nA relic of tradition, strong and stout\nWhat am I?",
                    answer: "umpak"
                }
            ],
            kampung: [
                {
                    title: "Kampung Susun Kunir",
                    text: "Beneath the leaves and morning rain,\nwhere orange wood holds roots again.\nNot just a bench, not just a seat,\nbut stories carved where plant life meets.\nLetters curved in playful form,\nhidden in places quiet, warm.\nNot one place, but many as one\na name they share under the sun.\nLook close where the plants align,\nread what the wood leaves behind.\n(9 letters)",
                    answer: "kollektief"
                },
                {
                    title: "Gallery Steps",
                    text: "Down below where stories sleep, beneath the frame of rising hope. Concrete veins that echo feet, count your steps before you cope.\nBetween the past and future's grace, lies the gallery, hidden face. One by one you must descend, 'till double digits mark the end.\nJust before the silence hums how many steps to reach the drums?\n(2 digits)",
                    answer: "10"
                },
                {
                    title: "Local Delicacy",
                    text: "A taste that dances, sweet and wild,\nfound where stories feed the child.\nNot just fruit, but spice and soul,\nmixed together in one bold bowl.\nIt stains your lips with tangy cheer,\na local treat, both far and near.\nIn Kunir's heart, it's served with pride\na flavor that won't ever hide.\nCrunchy, fresh, and full of zest,\nthis spicy mix is simply the best.\nFind my name.\n(5 letters)",
                    answer: "rujak"
                },
                {
                    title: "Ancient Foundation",
                    text: "I'm ancient, yet I still serve,\nA silent witness with steady nerve.\nCarved by hands from time gone past,\nI helped the walls and roofs to last.\nYou won't find me up above,\nBut I'm the base that buildings love.\nA relic of tradition, strong and stout\nWhat am I?",
                    answer: "umpak"
                }
            ]
        };

        const riddlesDataId = {
            jakarta: [
                {
                    title: "Stasiun Jakarta Kota",
                    text: "Keindahan terletak pada bangunan ini.\nLihat ke atas dan temukan setengah bulan besi,\nperak abu-abu abadi,\nhitung berkahnya.\nTambahkan dengan jumlah jalur,\ntersebar di depan Anda,\nberbaring di tanah.\nIsi kode angka di bawah untuk melanjutkan.\n(2 digit)",
                    answer: "18"
                },
                {
                    title: "Stasiun Kota Tua",
                    text: "Hari hampir berakhir,\nbersentuhanlah dengan sinar matahari.\nKeluar melalui gerbang Utara,\nberjalan ke depan sampai Anda menemukan alun-alun besar.\nKetika Anda di sana, berdirilah di tengah.\nLihat ke depan ke utara,\ndan temukan jalur lain, terkubur di bawah.\nTerlupakan dari masa lalu\nTrem bernama Keputusasaan.\nTemukan namaku.\n(4 huruf)",
                    answer: "trem"
                },
                {
                    title: "Misteri Sejarah",
                    text: "Jalur trem membawaku ke sini.\nEx Me Ipsa Renata Sum.\nAku terbuat dari diriku sendiri.\nAku menghancurkan banyak benteng.\nAku adalah ibu jari di antara jari telunjuk dan tengah.\nNama yang kuat, mereka memanggilku dengan.\nKamu tidak boleh lupa, bahwa aku adalah.\n(5 huruf)",
                    answer: "jagur"
                },
                {
                    title: "Jembatan Kereta",
                    text: "Di bawah jembatan ini,\nsungai mengalir melalui sejarah.\nAirnya telah melihat kisah kolonial\ndan menyaksikan waktu mengalir tanpa henti.\nSungai ini menghubungkan kota dengan akarnya.\nSebutkan sungainya.\n(Satu kata)",
                    answer: "ciliwung"
                },
                  {
                    title: "Kampung Susun Kunir",
                    text: "Di bawah daun dan hujan pagi,\ndi mana kayu oranye memegang akar lagi.\nBukan hanya bangku, bukan hanya tempat duduk,\ntapi cerita terukir di mana kehidupan tanaman bertemu.\nHuruf melengkung dalam bentuk yang menyenangkan,\ntersembunyi di tempat yang tenang, hangat.\nBukan satu tempat, tapi banyak sebagai satu\nnama yang mereka bagi di bawah matahari.\nLihat dekat di mana tanaman selaras,\nbaca apa yang kayu tinggalkan.\n(9 huruf)",
                    answer: "kollektief"
                },
                {
                    title: "Tangga Galeri",
                    text: "Di bawah sana di mana cerita tidur, di bawah bingkai harapan yang naik. Pembuluh beton yang menggemakan kaki, hitung langkahmu sebelum kamu mengatasi.\nAntara masa lalu dan masa depan, terletak galeri, wajah tersembunyi. Satu per satu kamu harus turun, sampai dua digit menandai akhir.\nSebelum keheningan bersenandung berapa langkah untuk mencapai drum?\n(2 digit)",
                    answer: "10"
                },
                {
                    title: "Kelezatan Lokal",
                    text: "Rasa yang menari, manis dan liar,\nditemukan di mana cerita memberi makan anak.\nBukan hanya buah, tapi rempah dan jiwa,\ndicampur bersama dalam satu mangkuk berani.\nItu menodai bibirmu dengan keceriaan asam,\nkambing lokal, jauh dan dekat.\nDi jantung Kunir, itu disajikan dengan bangga\nrasa yang tidak akan pernah bersembunyi.\nRenyah, segar, dan penuh semangat,\ncampuran pedas ini adalah yang terbaik.\nTemukan namaku.\n(5 huruf)",
                    answer: "rujak"
                },
                {
                    title: "Fondasi Kuno",
                    text: "Aku kuno, namun aku masih melayani,\nSaksi bisu dengan saraf yang mantap.\nDiukir dengan tangan dari masa lalu,\nAku membantu dinding dan atap bertahan.\nKamu tidak akan menemukanku di atas,\nTapi aku adalah dasar yang dicintai bangunan.\nPeringgalan tradisi, kuat dan tegap\nApa aku?",
                    answer: "umpak"
                }
            ],
            kampung: [
                {
                    title: "Kampung Susun Kunir",
                    text: "Di bawah daun dan hujan pagi,\ndi mana kayu oranye memegang akar lagi.\nBukan hanya bangku, bukan hanya tempat duduk,\ntapi cerita terukir di mana kehidupan tanaman bertemu.\nHuruf melengkung dalam bentuk yang menyenangkan,\ntersembunyi di tempat yang tenang, hangat.\nBukan satu tempat, tapi banyak sebagai satu\nnama yang mereka bagi di bawah matahari.\nLihat dekat di mana tanaman selaras,\nbaca apa yang kayu tinggalkan.\n(9 huruf)",
                    answer: "kollektief"
                },
                {
                    title: "Tangga Galeri",
                    text: "Di bawah sana di mana cerita tidur, di bawah bingkai harapan yang naik. Pembuluh beton yang menggemakan kaki, hitung langkahmu sebelum kamu mengatasi.\nAntara masa lalu dan masa depan, terletak galeri, wajah tersembunyi. Satu per satu kamu harus turun, sampai dua digit menandai akhir.\nSebelum keheningan bersenandung berapa langkah untuk mencapai drum?\n(2 digit)",
                    answer: "10"
                },
                {
                    title: "Kelezatan Lokal",
                    text: "Rasa yang menari, manis dan liar,\nditemukan di mana cerita memberi makan anak.\nBukan hanya buah, tapi rempah dan jiwa,\ndicampur bersama dalam satu mangkuk berani.\nItu menodai bibirmu dengan keceriaan asam,\nkambing lokal, jauh dan dekat.\nDi jantung Kunir, itu disajikan dengan bangga\nrasa yang tidak akan pernah bersembunyi.\nRenyah, segar, dan penuh semangat,\ncampuran pedas ini adalah yang terbaik.\nTemukan namaku.\n(5 huruf)",
                    answer: "rujak"
                },
                {
                    title: "Fondasi Kuno",
                    text: "Aku kuno, namun aku masih melayani,\nSaksi bisu dengan saraf yang mantap.\nDiukir dengan tangan dari masa lalu,\nAku membantu dinding dan atap bertahan.\nKamu tidak akan menemukanku di atas,\nTapi aku adalah dasar yang dicintai bangunan.\nPeringgalan tradisi, kuat dan tegap\nApa aku?",
                    answer: "umpak"
                }
            ]
        };
        // Mobile detection and optimization
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

        // Initialize the game
        function init() {
            riddlesData = currentLanguage === 'en' ? riddlesDataEn : riddlesDataId;
            updateLanguage();
        }
            // Mobile-specific optimizations
    if (isMobileDevice()) {
        optimizeForMobile();
    }
    
    // Add touch feedback for mobile
    addTouchFeedback();

function optimizeForMobile() {
    // Prevent zoom on input focus for iOS
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.fontSize = '16px'; // Prevents zoom in iOS
    });
    
    // Add better touch targets
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.style.minHeight = '44px';
        btn.style.minWidth = '44px';
    });
    
    // Improve scrolling
    document.body.style.webkitOverflowScrolling = 'touch';
}

function addTouchFeedback() {
    const buttons = document.querySelectorAll('.btn, .location-card');
    buttons.forEach(btn => {
        btn.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        btn.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

        function toggleLanguage() {
            currentLanguage = currentLanguage === 'en' ? 'id' : 'en';
            riddlesData = currentLanguage === 'en' ? riddlesDataEn : riddlesDataId;
            updateLanguage();
        }

        function updateLanguage() {
            const trans = translations[currentLanguage];
            
            document.getElementById('langText').textContent = trans.langText;
            document.getElementById('title').textContent = trans.title;
            document.getElementById('welcomeTitle').textContent = trans.welcomeTitle;
            document.getElementById('welcomeText').textContent = trans.welcomeText;
            document.getElementById('startBtn').textContent = trans.startBtn;
            document.getElementById('nameTitle').textContent = trans.nameTitle;
            document.getElementById('nameSubmitBtn').textContent = trans.nameSubmitBtn;
            document.getElementById('locationTitle').textContent = trans.locationTitle;
            document.getElementById('jakartaTitle').textContent = trans.jakartaTitle;
            document.getElementById('jakartaDesc').textContent = trans.jakartaDesc;
            document.getElementById('kampungTitle').textContent = trans.kampungTitle;
            document.getElementById('kampungDesc').textContent = trans.kampungDesc;
            document.getElementById('submitAnswerBtn').textContent = trans.submitAnswerBtn;
            document.getElementById('nextBtn').textContent = trans.nextBtn;
            document.getElementById('congratsTitle').textContent = trans.congratsTitle;
            document.getElementById('congratsText').textContent = trans.congratsText;
            document.getElementById('certTitle').textContent = trans.certTitle;
            document.getElementById('certText').textContent = trans.certText;
            document.getElementById('certCompleted').textContent = trans.certCompleted;
            document.getElementById('certAdventure').textContent = trans.certAdventure;
            document.getElementById('downloadBtn').textContent = trans.downloadBtn;
            document.getElementById('restartBtn').textContent = trans.restartBtn;
        }

        function showNameInput() {
            document.getElementById('welcome').classList.add('hidden');
            document.getElementById('nameInput').classList.remove('hidden');
            document.getElementById('playerName').focus();
        }
   // Focus with delay for better mobile experience
    setTimeout(() => {
        document.getElementById('playerName').focus();
    }, 300);

        function showLocationSelect() {
            const nameValue = document.getElementById('playerName').value.trim();
            if (!nameValue) {
                alert(currentLanguage === 'en' ? 'Please enter your name!' : 'Silakan masukkan nama Anda!');
                return;
            }
            
            playerName = nameValue;
            document.getElementById('nameInput').classList.add('hidden');
            document.getElementById('locationSelect').classList.remove('hidden');
        }

        function selectLocation(location) {
            selectedLocation = location;
            currentRiddleIndex = 0;
            
            // Set background based on location
            const content = document.getElementById('content');
            if (location === 'jakarta') {
                content.style.backgroundImage = 'url("https://assets-a1.kompasiana.com/items/album/2022/07/05/desain-tanpa-judul-2-62c41e2c297d681817028822.png")';
            } else {
                content.style.backgroundImage = 'url("https://asset.kompas.com/crops/DSA1wzeWNr4JmttzIa0neAOdZAg=/0x0:0x0/1200x800/data/photo/2022/09/14/63219032224d4.jpg")';
            }
            
            document.getElementById('locationSelect').classList.add('hidden');
            document.getElementById('riddleContainer').classList.remove('hidden');
            loadRiddle();
        }

        function loadRiddle() {
            const riddles = riddlesData[selectedLocation];
            if (currentRiddleIndex >= riddles.length) {
                showCertificate();
                return;
            }

            const riddle = riddles[currentRiddleIndex];
            document.getElementById('riddleText').innerHTML = `
                <h3>${riddle.title}</h3>
                <p style="white-space: pre-line; margin-top: 15px;">${riddle.text}</p>
            `;
            
            document.getElementById('answerInput').value = '';
            document.getElementById('feedback').classList.add('hidden');
            document.getElementById('nextBtn').style.display = 'none';
            
            // Update progress bar
            const progress = ((currentRiddleIndex + 1) / riddles.length) * 100;
            document.getElementById('progressFill').style.width = progress + '%';
            
            document.getElementById('answerInput').focus();
        }
          // Focus input with delay for mobile
    setTimeout(() => {
        answerInput.focus();
    }, 300);

        function checkAnswer() {
            const userAnswer = document.getElementById('answerInput').value.trim().toLowerCase();
            const correctAnswer = riddlesData[selectedLocation][currentRiddleIndex].answer.toLowerCase();
            const feedback = document.getElementById('feedback');
            const trans = translations[currentLanguage];
            
            if (userAnswer === correctAnswer) {
                feedback.textContent = trans.correctAnswer;
                feedback.className = 'feedback correct';
                feedback.classList.remove('hidden');
                document.getElementById('nextBtn').style.display = 'inline-block';
                document.getElementById('answerInput').disabled = true;
            } else {
                feedback.textContent = trans.incorrectAnswer;
                feedback.className = 'feedback incorrect';
                feedback.classList.remove('hidden');
            }
        }

        function nextRiddle() {
            currentRiddleIndex++;
            document.getElementById('answerInput').disabled = false;
            loadRiddle();
        }

        function showCertificate() {
            document.getElementById('riddleContainer').classList.add('hidden');
            document.getElementById('certificateScreen').classList.remove('hidden');
            
            // Update certificate content with enhanced design
            const certificateHtml = `
                <div class="certificate-content">
                    <h2>${translations[currentLanguage].certTitle}</h2>
                    <p class="certificate-text">${translations[currentLanguage].certText}</p>
                    <div class="certificate-name">${playerName}</div>
                    <p class="certificate-text">${translations[currentLanguage].certCompleted}</p>
                    <h3 class="certificate-achievement">${translations[currentLanguage].certAdventure}</h3>
                    <p class="certificate-location">${locationText}</p>
                    <div class="certificate-date">${new Date().toLocaleDateString(currentLanguage === 'en' ? 'en-US' : 'id-ID')}</div>
                    <div class="certificate-seal">⭐</div>
                </div>
            `;
            
            document.getElementById('certificate').innerHTML = certificateHtml;
        }

    function downloadCertificate() {
            // Create a canvas to generate the certificate image with clean design
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 1000;
            canvas.height = 700;
            
            // Background gradient
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(0.5, '#f8f9fa');
            gradient.addColorStop(1, '#ffffff');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Decorative border
            ctx.strokeStyle = '#f1c40f';
            ctx.lineWidth = 12;
            ctx.strokeRect(25, 25, canvas.width - 50, canvas.height - 50);
            
            // Inner decorative border
            ctx.strokeStyle = '#f39c12';
            ctx.lineWidth = 2;
            ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
            
            // Corner decorations
            const corners = [
                {x: 75, y: 75}, {x: canvas.width - 75, y: 75},
                {x: 75, y: canvas.height - 75}, {x: canvas.width - 75, y: canvas.height - 75}
            ];
            
            corners.forEach(corner => {
                ctx.fillStyle = '#f1c40f';
                ctx.beginPath();
                ctx.arc(corner.x, corner.y, 12, 0, 2 * Math.PI);
                ctx.fill();
            });
            
            // Trophy icon at top center
            ctx.font = '40px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('🏆', canvas.width / 2, 130);
            
            // Title with clean spacing
            ctx.fillStyle = '#d35400';
            ctx.font = 'bold 48px Arial';
            ctx.fillText(translations[currentLanguage].certTitle, canvas.width / 2, 190);
            
            // Certificate text
            ctx.fillStyle = '#34495e';
            ctx.font = '24px Arial';
            ctx.fillText(translations[currentLanguage].certText, canvas.width / 2, 250);
            
            // Name with gradient effect
            ctx.fillStyle = '#f39c12';
            ctx.font = 'bold 44px Arial';
            ctx.shadowColor = '#f1c40f';
            ctx.shadowBlur = 8;
            ctx.fillText(playerName, canvas.width / 2, 320);
            ctx.shadowBlur = 0;
            
            // Underline for name
            ctx.strokeStyle = '#f1c40f';
            ctx.lineWidth = 3;
            ctx.beginPath();
            const nameWidth = ctx.measureText(playerName).width;
            ctx.moveTo((canvas.width - nameWidth) / 2, 335);
            ctx.lineTo((canvas.width + nameWidth) / 2, 335);
            ctx.stroke();
            
            // Completion text
            ctx.fillStyle = '#34495e';
            ctx.font = '24px Arial';
            ctx.fillText(translations[currentLanguage].certCompleted, canvas.width / 2, 380);
            
            // Adventure title
            ctx.fillStyle = '#d35400';
            ctx.font = 'bold 36px Arial';
            ctx.fillText(translations[currentLanguage].certAdventure, canvas.width / 2, 440);
            
            // Location
            const locationText = selectedLocation === 'jakarta' ? 
                (currentLanguage === 'en' ? 'Jakarta Kota Edition (8 Riddles Completed)' : 'Edisi Jakarta Kota (8 Teka-teki Diselesaikan)') :
                (currentLanguage === 'en' ? 'Kampung Susun Edition (4 Riddles Completed)' : 'Edisi Kampung Susun (4 Teka-teki Diselesaikan)');
            ctx.fillStyle = '#7f8c8d';
            ctx.font = 'italic 22px Arial';
            ctx.fillText(locationText, canvas.width / 2, 480);
            
            // Date section with proper spacing
            ctx.fillStyle = '#95a5a6';
            ctx.font = '20px Arial';
            const dateText = new Date().toLocaleDateString(currentLanguage === 'en' ? 'en-US' : 'id-ID');
            ctx.fillText(dateText, canvas.width / 2, 550);
            
            // Date border line above date (not overlapping)
            ctx.strokeStyle = '#f1c40f';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2 - 80, 530);
            ctx.lineTo(canvas.width / 2 + 80, 530);
            ctx.stroke();
            
            // Star seal in bottom right corner
            ctx.fillStyle = '#f1c40f';
            ctx.font = '50px Arial';
            ctx.fillText('⭐', canvas.width - 120, canvas.height - 80);
            
            // Download the certificate
            const link = document.createElement('a');
            link.download = `Kampung_Susun_Kunir_Certificate_${playerName.replace(/\s+/g, '_')}.png`;
            link.href = canvas.toDataURL('image/png', 1.0);
            link.click();
        }

        function restartGame() {
            currentRiddleIndex = 0;
            playerName = '';
            selectedLocation = '';
            
            document.getElementById('certificateScreen').classList.add('hidden');
            document.getElementById('welcome').classList.remove('hidden');
            document.getElementById('playerName').value = '';
            document.getElementById('content').style.backgroundImage = '';
        }

        // Event listeners
        document.getElementById('answerInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkAnswer();
            }
        });

        document.getElementById('playerName').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                showLocationSelect();
            }
        });

        // Initialize the game when page loads
        window.onload = function() {
            init();
        };