


export const openPopup = (link) => {
    const url = link;
    const popupWindow = window.open(url, 'popup', 'width=600,height=400');
    if (popupWindow) {
        popupWindow.focus();
    } else {
        alert('Popup blocked. Please allow popups for this website.');
    }};


