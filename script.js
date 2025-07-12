 const sidemenu = document.getElementById("sidemenu");
const navbar= document.querySelector("nav");
const navlinks= document.querySelector("nav ul");

        function openmenu() {
            sidemenu.style.right = "0";
        }

        function closemenu() {
            sidemenu.style.right = "-16rem";
        }
        window.addEventListener('scroll',()=>{
            if(scrollY > 50){
                navbar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
                navlinks.classList.remove('bg-white','shadow-sm','big-opacity-50','dark:border','dark:border-white/50',"dark:bg-transparent")
            }
            else {
                navbar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-darkTheme','dark:shadow-white/20')
                navlinks.classList.add('bg-white','shadow-sm','big-opacity-50','dark:border','dark:border-white/50',"dark:bg-transparent");
            }


        })

        // Show More Functionality 
        
        function toggleDarkMode() {
            document.documentElement.classList.toggle('dark');
        }
        function toggleProjects() {
            const moreProjects = document.getElementById("more-projects");
            const toggleBtn = document.getElementById("toggle-btn");
          
            moreProjects.classList.toggle("hidden");
          
            if (moreProjects.classList.contains("hidden")) {
              toggleBtn.innerHTML = `Show More 
                <img src="right-arrow-bold.png" alt="" class="w-4 dark:hidden">
                <img src="right-arrow-bold-dark.png" alt="" class="w-4 hidden dark:block">`;
            } else {
              toggleBtn.innerHTML = `Show Less 
                <img src="right-arrow-bold-up.png" alt="" class="w-4 dark:hidden">
                <img src="right-arrow-bold-up-dark.png" alt="" class="w-4 hidden dark:block">`;
            }
          }
          
    