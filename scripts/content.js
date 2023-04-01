setInterval(() => {
    document.querySelectorAll('[aria-label="Verified account"]').forEach(e => {
        e.setAttribute("visibility", "hidden");
        e.setAttribute("width", "0px")
    });
}, 500);
    
