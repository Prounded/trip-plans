function nextPage() {
    window.scroll({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
    });
}

function changeChoices(action) {
    const display1 = document.getElementById('miniPlan1');      //?display1.lastElementChild.textContent
    const display2 = document.getElementById('miniPlan2');      //?display1.firstElementChild
    const display3 = document.getElementById('miniPlan3');
    const display4 = document.getElementById('miniPlan4');
    const display5 = document.getElementById('miniPlan5');
    
    if (action === 'right') {
        display1.firstElementChild.src = "NUMall_Image.jpg";
        display1.lastElementChild.textContent = 'NU Shopping Mall';
        display2.firstElementChild.src = "ChinSweeCaves_Image.jpeg";
        display2.lastElementChild.textContent = 'Chin Swee Temple';
        display3.firstElementChild.src = "menaraKL_Image.jpeg";
        display3.lastElementChild.textContent = 'Menara KL';
        display4.firstElementChild.src = "skyAvenue_Image.jpeg";
        display4.lastElementChild.textContent = 'Genting Sky Avenue';
        display5.firstElementChild.src = "centralMarket_Image.jpg";
        display5.lastElementChild.textContent = 'Central Market';
    }
    else if(action === 'left'){
        display1.firstElementChild.src = "petronas_Image.jpg";
        display1.lastElementChild.textContent = 'Petronas';
        display2.firstElementChild.src = "alor_Image.jpg";
        display2.lastElementChild.textContent = 'Alor Street';
        display3.firstElementChild.src = "petalingStreet_Image.jpg";
        display3.lastElementChild.textContent = 'Petaling Street';
        display4.firstElementChild.src = "batuCaves_Image.jpg";
        display4.lastElementChild.textContent = 'Batu Caves';
        display5.firstElementChild.src = "gentingPremiumOutlet_Image.jpg";
        display5.lastElementChild.textContent = 'Genting Outlet';
    }
}

function changeDisplay() {
    if (event.target.classList.contains('choicesMiniTitle')) {
        const changeImageTo = event.target.parentElement.firstElementChild.src;
        const changeTextTo = event.target.textContent;
        document.getElementById('targetBackgroundImg').src = changeImageTo;
        document.getElementById('targetTitle').textContent = changeTextTo;
        changeHREF(changeTextTo);
    }
    else {
        const changeImageTo = event.target.src;
        const changeTextTo = event.target.parentElement.lastElementChild.textContent;
        document.getElementById('targetBackgroundImg').src = changeImageTo;
        document.getElementById('targetTitle').textContent = changeTextTo;
        changeHREF(changeTextTo);
    }

    function changeHREF(textDisplay) {
        if(textDisplay === 'Petronas'){
            document.getElementById('mapsHREFDetails').href = 'https://www.google.com/maps/dir//Petronas+Twin+Tower,+Lower+Ground+Level,+Kuala+Lumpur+City+Centre,+50088+Kuala+Lumpur,+Malaysia/@3.157466,101.6291619,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cc37d12d669c1f:0x9e3afdd17c8a9056!2m2!1d101.7115639!2d3.1574693?entry=ttu';
        }
        else if (textDisplay === 'Alor Street') {
            document.getElementById('mapsHREFDetails').href = 'https://www.google.com/maps/dir//Alor+Night+Food+Street,+Jalan+Alor,+Bukit+Bintang,+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur,+Malaysia/@3.1462059,101.6680761,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cc37f596755e59:0xa71b468e8e8210b!2m2!1d101.7092762!2d3.146121?entry=ttu';
        }
        else if (textDisplay === 'Petaling Street') {
            document.getElementById('mapsHREFDetails').href = 'https://www.google.com/maps/dir//Petaling+Street+Market,+Jalan+Petaling,+Kuala+Lumpur+City+Centre,+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur,+Malaysia/@3.14448,101.6564495,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x31cc49d1adb75745:0xa9f6f7fb4291fafd!2m2!1d101.6976496!2d3.1443951?entry=ttu';
        }
        else if (textDisplay === 'Batu Caves') {
            document.getElementById('mapsHREFDetails').href = 'https://www.google.com/maps/dir//Batu+Caves,+Gombak,+Batu+Caves,+Selangor,+Malaysia/@3.2379693,101.6428384,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x31cc470c8949a805:0xf2bfebb2b36f9ef9!2m2!1d101.6840385!2d3.2378844?entry=ttu';
        }
        else if (textDisplay === 'Genting Outlet') {
            document.getElementById('mapsHREFDetails').href = 'https://www.google.com/maps/dir//Genting+Highlands+Premium+Outlets,+Genting+Highlands,+Pahang,+Malaysia/@3.4034613,101.7419158,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cc143c8cf90343:0x153b2b839a29b3a9!2m2!1d101.7831159!2d3.4033765?entry=ttu';

        }
        else if (textDisplay === 'NU Shopping Mall') {
            document.getElementById('mapsHREFDetails').href = 'https://www.google.com/maps/dir//NU+Sentral+Shopping+Mall,+Jalan+Tun+Sambanthan,+Brickfields,+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur,+Malaysia/@3.133698,101.6458364,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x31cc4925290aa981:0xdf47a86aa01e738d!2m2!1d101.6870365!2d3.1336131?entry=ttu';
        }
        else if (textDisplay === 'Chin Swee Temple') {
            document.getElementById('mapsHREFDetails').href = 'https://www.google.com/maps/dir//Chin+Swee+Caves+Temple,+Exit+68,+Genting+Sempah,+Bentong,+Pahang,+Malaysia/@3.4126727,101.746949,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cc143db73f30dd:0xf979ab6be60d1c44!2m2!1d101.7881491!2d3.4125879?entry=ttu';

        }
        else if (textDisplay === 'Menara KL') {
            document.getElementById('mapsHREFDetails').href = 'https://www.google.com/maps/dir//Menara+Kuala+Lumpur,+Jalan+P.+Ramlee,+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur,+Malaysia/@3.1529611,101.6626515,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cc482b1dcd5813:0x106058ce3bc33aba!2m2!1d101.7038516!2d3.1528762?entry=ttu';

        }
        else if (textDisplay === 'Genting Sky Avenue') {
            document.getElementById('mapsHREFDetails').href = 'https://www.google.com/maps/dir//Genting+SkyAvenue,+Resorts+World+Genting,+Genting+Highlands,+Pahang,+Malaysia/@3.4253951,101.7559695,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cc140112192f9d:0xfbae36d84f7c263c!2m2!1d101.7971696!2d3.4253103?entry=ttu';

        }
        else if (textDisplay === 'Central Market') {
            document.getElementById('mapsHREFDetails').href = 'https://www.google.com/maps/dir//Central+Market,+Kuala+Lumpur+City+Centre,+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur,+Malaysia/@3.1453484,101.6542157,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cc49d1d9ea1257:0xfcb30d4a9ca26002!2m2!1d101.6954158!2d3.1452635?entry=ttu';

        }
    }
}

document.addEventListener('scroll', () => {
    const flight = document.getElementById('flightPage');
    const rect = flight.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    const plane = document.getElementById('planeimg');

    const inView = (!(rect.bottom <= 0 || rect.top - viewHeight >= 0));
    if (inView) {
        plane.classList.add('planeAnim');
    }
    else {
        plane.classList.remove('planeAnim')
    }
});