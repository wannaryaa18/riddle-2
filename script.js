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
                certAdventure: "Petualangan Teka-teki Warisan",
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
                    text: "Down below where stories sleep,\n beneath the frame of rising hope.\n Concrete veins that echo feet,\n count your steps before you cope.\nBetween the past and future's grace,\n lies the gallery, hidden face.\n One by one you must descend,\n 'till double digits mark the end.\nJust before the silence hums \nhow many steps to reach the drums?\n(2 digits)",
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
                    text: "Di bawah sana di mana cerita tidur,\n di bawah bingkai harapan yang naik.\n Pembuluh beton yang menggemakan kaki,\n hitung langkahmu sebelum kamu mengatasi.\nAntara masa lalu dan masa depan, terletak galeri, wajah tersembunyi.\n Satu per satu kamu harus turun,\n sampai dua digit menandai akhir.\nSebelum keheningan bersenandung \nberapa langkah untuk mencapai drum?\n(2 digit)",
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

        // Initialize the game
        function init() {
            riddlesData = currentLanguage === 'en' ? riddlesDataEn : riddlesDataId;
            updateLanguage();
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
            // Create a canvas to generate the certificate image with premium design
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 1200;
            canvas.height = 800;
            
            // Premium gradient background
            const bgGradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width/2);
            bgGradient.addColorStop(0, '#ffffff');
            bgGradient.addColorStop(0.7, '#f8f9fa');
            bgGradient.addColorStop(1, '#e9ecef');
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Outer decorative border with gradient
            const borderGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            borderGradient.addColorStop(0, '#f1c40f');
            borderGradient.addColorStop(0.5, '#f39c12');
            borderGradient.addColorStop(1, '#e67e22');
            ctx.strokeStyle = borderGradient;
            ctx.lineWidth = 15;
            ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);
            
            // Inner elegant border
            ctx.strokeStyle = '#d4af37';
            ctx.lineWidth = 3;
            ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);
            
            // Decorative corner elements
            const cornerSize = 40;
            const corners = [
                {x: 80, y: 80}, {x: canvas.width - 80, y: 80},
                {x: 80, y: canvas.height - 80}, {x: canvas.width - 80, y: canvas.height - 80}
            ];
            
            corners.forEach(corner => {
                // Corner circles with gradient
                const cornerGradient = ctx.createRadialGradient(corner.x, corner.y, 0, corner.x, corner.y, cornerSize/2);
                cornerGradient.addColorStop(0, '#f1c40f');
                cornerGradient.addColorStop(1, '#d4af37');
                ctx.fillStyle = cornerGradient;
                ctx.beginPath();
                ctx.arc(corner.x, corner.y, cornerSize/2, 0, 2 * Math.PI);
                ctx.fill();
                
                // Corner decorative pattern
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(corner.x, corner.y, cornerSize/3, 0, 2 * Math.PI);
                ctx.stroke();
            });
            
            // Top decorative header
            ctx.fillStyle = '#f39c12';
            ctx.fillRect(100, 100, canvas.width - 200, 8);
            
            // Certificate emblem/logo area
            ctx.font = '60px serif';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#d4af37';
            ctx.fillText('🏆', canvas.width / 2, 180);
            
            // Main title with elegant typography
            ctx.fillStyle = '#2c3e50';
            ctx.font = 'bold 52px serif';
            ctx.textAlign = 'center';
            ctx.fillText(translations[currentLanguage].certTitle.toUpperCase(), canvas.width / 2, 250);
            
            // Decorative line under title
            ctx.strokeStyle = '#f1c40f';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2 - 200, 270);
            ctx.lineTo(canvas.width / 2 + 200, 270);
            ctx.stroke();
            
            // Certificate presentation text
            ctx.fillStyle = '#34495e';
            ctx.font = '28px serif';
            ctx.fillText(translations[currentLanguage].certText, canvas.width / 2, 320);
            
            // Name section with premium styling
            ctx.fillStyle = '#8b4513';
            ctx.font = 'bold 50px serif';
            ctx.textAlign = 'center';
            
            // Name with elegant underline
            const nameText = playerName.toUpperCase();
            const nameMetrics = ctx.measureText(nameText);
            ctx.fillText(nameText, canvas.width / 2, 390);
            
            // Elegant underline for name
            const underlineY = 405;
            ctx.strokeStyle = '#d4af37';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo((canvas.width - nameMetrics.width) / 2 - 20, underlineY);
            ctx.lineTo((canvas.width + nameMetrics.width) / 2 + 20, underlineY);
            ctx.stroke();
            
            // Small decorative elements around name
            ctx.fillStyle = '#f1c40f';
            ctx.font = '20px serif';
            ctx.fillText('✦', (canvas.width - nameMetrics.width) / 2 - 40, 395);
            ctx.fillText('✦', (canvas.width + nameMetrics.width) / 2 + 40, 395);
            
            // Completion statement
            ctx.fillStyle = '#34495e';
            ctx.font = '26px serif';
            ctx.fillText(translations[currentLanguage].certCompleted, canvas.width / 2, 450);
            
            // Adventure/Program title
            ctx.fillStyle = '#c0392b';
            ctx.font = 'bold 38px serif';
            ctx.fillText(translations[currentLanguage].certAdventure.toUpperCase(), canvas.width / 2, 500);
            
            // Location specification
            const locationText = selectedLocation === 'jakarta' ? 
                (currentLanguage === 'en' ? 'Jakarta Kota Heritage Track' : 'Jalur Warisan Jakarta Kota') :
                (currentLanguage === 'en' ? 'Kampung Susun Cultural Track' : 'Jalur Budaya Kampung Susun');
            ctx.fillStyle = '#7f8c8d';
            ctx.font = 'italic 24px serif';
            ctx.fillText(locationText, canvas.width / 2, 540);
            
            // Date section with elegant presentation
            const dateText = new Date().toLocaleDateString(currentLanguage === 'en' ? 'en-US' : 'id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Date background box
            ctx.fillStyle = 'rgba(241, 196, 15, 0.1)';
            ctx.fillRect(canvas.width / 2 - 120, 580, 240, 40);
            ctx.strokeStyle = '#f1c40f';
            ctx.lineWidth = 2;
            ctx.strokeRect(canvas.width / 2 - 120, 580, 240, 40);
            
            ctx.fillStyle = '#2c3e50';
            ctx.font = '20px serif';
            ctx.fillText(dateText, canvas.width / 2, 605);
            
            // Achievement seal in bottom right
            const sealX = canvas.width - 150;
            const sealY = canvas.height - 120;
            
            // Seal background circle with gradient
            const sealGradient = ctx.createRadialGradient(sealX, sealY, 0, sealX, sealY, 50);
            sealGradient.addColorStop(0, '#f1c40f');
            sealGradient.addColorStop(0.7, '#f39c12');
            sealGradient.addColorStop(1, '#d4af37');
            ctx.fillStyle = sealGradient;
            ctx.beginPath();
            ctx.arc(sealX, sealY, 50, 0, 2 * Math.PI);
            ctx.fill();
            
            // Seal border
            ctx.strokeStyle = '#b8860b';
            ctx.lineWidth = 3;
            ctx.stroke();
            
            // Seal star
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 40px serif';
            ctx.textAlign = 'center';
            ctx.fillText('★', sealX, sealY + 12);
            
            // Additional decorative elements
            ctx.fillStyle = '#f1c40f';
            ctx.font = '16px serif';
            ctx.textAlign = 'left';
            ctx.fillText('✦', 100, canvas.height - 50);
            ctx.textAlign = 'right';
            ctx.fillText('✦', canvas.width - 100, canvas.height - 50);
            
            // Bottom decorative line
            ctx.strokeStyle = '#f39c12';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(100, canvas.height - 80);
            ctx.lineTo(canvas.width - 100, canvas.height - 80);
            ctx.stroke();
            
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