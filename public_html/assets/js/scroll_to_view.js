
let item = document.querySelector(".bio-sect");
let observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(entry.isIntersecting){
			entry.target.style.opacity = 1;
			entry.target.style.transform = "translateY(0)";
		}
	})
})

observer.observe(item)


