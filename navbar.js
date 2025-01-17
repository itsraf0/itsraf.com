document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    const brand = document.createElement("li");
    brand.innerHTML = '<span style="font-weight: bold; color: white;">itsraf</span>'; // Added brand element
    navbar.appendChild(brand);
    
    const navItems = [
        { name: "Placeholder", link: "#placeholder1" },
        { name: "Placeholder", link: "#placeholder1" },
        { name: "Placeholder", link: "#placeholder1" },
        { name: "Placeholder", link: "#placeholder1" }
    ];

    navItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}">${item.name}</a>`;
        navbar.appendChild(li);
    });
}); 